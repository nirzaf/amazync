import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { gsap } from 'gsap';
import { motion } from 'framer-motion';

interface WebHostingAnimationProps {
  className?: string;
  showTextOverlay?: boolean;
}

const WebHostingAnimation = ({ className = '', showTextOverlay = false }: WebHostingAnimationProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!canvasRef.current || !containerRef.current) return;

    // --- Three.js Setup ---
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, containerRef.current.clientWidth / containerRef.current.clientHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ 
      canvas: canvasRef.current, 
      antialias: true,
      alpha: true 
    });
    
    renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);

    // Initial camera position
    camera.position.set(0, 0, 10);

    // --- Lighting ---
    const ambientLight = new THREE.AmbientLight(0x404040); // Soft white light
    scene.add(ambientLight);
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
    directionalLight.position.set(1, 1, 1).normalize();
    scene.add(directionalLight);

    // --- Animation Parameters ---
    const numNodes = 70; // Increased nodes for more visual complexity
    const nodeGeometry = new THREE.SphereGeometry(0.08, 12, 12); // Slightly smaller nodes
    // Using Glaucous for chaotic nodes and lines (bluish tone)
    const nodeMaterialChaotic = new THREE.MeshBasicMaterial({ color: 0x7882B6 }); // Glaucous
    const lineMaterialChaotic = new THREE.LineBasicMaterial({ color: 0x7882B6, linewidth: 1, transparent: true, opacity: 0.6 }); // Glaucous, Slightly less opaque

    // Using Glaucous for organized nodes and Persian Blue for organized lines
    const nodeMaterialOrganized = new THREE.MeshBasicMaterial({ color: 0x7882B6 }); // Glaucous
    const lineMaterialOrganized = new THREE.LineBasicMaterial({ color: 0x1934B6, linewidth: 2, transparent: true, opacity: 0.8 }); // Persian Blue

    const nodes: THREE.Mesh[] = [];
    const lines: THREE.Line[] = [];
    const chaoticPositions: THREE.Vector3[] = [];
    const organizedPositions: THREE.Vector3[] = [];
    const lineConnections: number[][] = []; // Store pairs of node indices that are connected
    
    // --- Particle Effects for "Powerful" ---
    const particleGeometry = new THREE.SphereGeometry(0.05, 8, 8);
    const particleMaterial = new THREE.MeshBasicMaterial({ color: 0xDBD9EC }); // Lavender Web for particles
    const particles: THREE.Mesh[] = [];
    const numParticles = 100;

    // --- Animated Data Packets on Lines ---
    const dataPacketGeometry = new THREE.SphereGeometry(0.04, 6, 6);
    const dataPacketMaterial = new THREE.MeshBasicMaterial({ color: 0xDBD9EC }); // Lavender Web
    const dataPackets: THREE.Mesh[] = [];
    const packetsPerLine = 2; // Number of packets per line in organized state
    const dataPacketSpeed = 0.015; // Slightly increased speed for fluidity

    // --- Create Chaotic State ---
    for (let i = 0; i < numNodes; i++) {
      // Random positions for chaotic state (slightly larger area)
      const x = (Math.random() - 0.5) * 15;
      const y = (Math.random() - 0.5) * 15;
      const z = (Math.random() - 0.5) * 15;
      chaoticPositions.push(new THREE.Vector3(x, y, z));

      const node = new THREE.Mesh(nodeGeometry, nodeMaterialChaotic.clone()); // Clone material for individual color control
      node.position.set(x, y, z);
      nodes.push(node);
      scene.add(node);
    }

    // Create some random connections for the chaotic state lines
    for (let i = 0; i < numNodes * 2.5; i++) { // More lines than nodes for a more tangled look
      const nodeIndex1 = Math.floor(Math.random() * numNodes);
      let nodeIndex2 = Math.floor(Math.random() * numNodes);
      // Ensure we don't connect a node to itself and avoid duplicate connections
      let isDuplicate = false;
      for(const conn of lineConnections) {
        if ((conn[0] === nodeIndex1 && conn[1] === nodeIndex2) || (conn[0] === nodeIndex2 && conn[1] === nodeIndex1)) {
          isDuplicate = true;
          break;
        }
      }
      while (nodeIndex2 === nodeIndex1 || isDuplicate) {
        nodeIndex2 = Math.floor(Math.random() * numNodes);
        isDuplicate = false;
        for(const conn of lineConnections) {
          if ((conn[0] === nodeIndex1 && conn[1] === nodeIndex2) || (conn[0] === nodeIndex2 && conn[1] === nodeIndex1)) {
            isDuplicate = true;
            break;
          }
        }
      }
      lineConnections.push([nodeIndex1, nodeIndex2]);

      const points = [chaoticPositions[nodeIndex1], chaoticPositions[nodeIndex2]];
      const geometry = new THREE.BufferGeometry().setFromPoints(points);
      const line = new THREE.Line(geometry, lineMaterialChaotic.clone()); // Clone material
      lines.push(line);
      scene.add(line);
    }

    // --- Define Organized State (Realistic Spider Web) ---
    // Parameters for the spider web
    const numRings = 5;
    const nodesPerRing = [1, 8, 16, 24, 32]; // Center, then outer rings
    const ringRadiusStep = 0.9;
    const baseRadius = 1.2;
    let nodeIdx = 0;
    organizedPositions.length = 0;
    lineConnections.length = 0;

    // Place nodes in concentric rings
    for (let ring = 0; ring < numRings; ring++) {
      const radius = baseRadius + ring * ringRadiusStep;
      const count = nodesPerRing[ring];
      for (let n = 0; n < count; n++) {
        if (ring === 0) {
          // Center node
          organizedPositions.push(new THREE.Vector3(0, 0, 0));
          nodeIdx++;
          continue;
        }
        const angle = (n / count) * Math.PI * 2;
        const x = Math.cos(angle) * radius;
        const y = Math.sin(angle) * radius;
        organizedPositions.push(new THREE.Vector3(x, y, 0));
        nodeIdx++;
      }
    }
    // Build circular connections (web rings)
    let runningIdx = 1; // skip center
    for (let ring = 1; ring < numRings; ring++) {
      const count = nodesPerRing[ring];
      for (let n = 0; n < count; n++) {
        const a = runningIdx + n;
        const b = runningIdx + ((n + 1) % count);
        lineConnections.push([a, b]);
      }
      runningIdx += count;
    }
    // Build radial spokes
    for (let n = 0; n < nodesPerRing[1]; n++) {
      let prevIdx = 0; // center
      let angle = (n / nodesPerRing[1]) * Math.PI * 2;
      for (let ring = 1; ring < numRings; ring++) {
        const count = nodesPerRing[ring];
        const idx = 1 + Math.round((n / nodesPerRing[1]) * count) % count + nodesPerRing.slice(1, ring).reduce((a, b) => a + b, 0);
        lineConnections.push([prevIdx, idx]);
        prevIdx = idx;
      }
    }
    // Optionally: connect each node in ring 1 to the center
    // for (let n = 0; n < nodesPerRing[1]; n++) {
    //   lineConnections.push([0, 1 + n]);
    // }

    // --- Create Particles ---
    for (let i = 0; i < numParticles; i++) {
      const particle = new THREE.Mesh(particleGeometry, particleMaterial.clone());
      // Start particles near the center for the organized state
      particle.position.set(
        (Math.random() - 0.5) * 2,
        (Math.random() - 0.5) * 2,
        (Math.random() - 0.5) * 2
      );
      particle.userData = {
        velocity: new THREE.Vector3(
          (Math.random() - 0.5) * 0.02,
          (Math.random() - 0.5) * 0.02,
          (Math.random() - 0.5) * 0.02
        )
      };
      particle.scale.set(0, 0, 0); // Start hidden
      particles.push(particle);
      scene.add(particle);
    }

    // --- Create Data Packets (initially hidden) ---
    lineConnections.forEach((connection, lineIndex) => {
      const start = organizedPositions[connection[0]];
      const end = organizedPositions[connection[1]];
      const direction = new THREE.Vector3().subVectors(end, start).normalize();
      const lineLength = start.distanceTo(end);

      for(let i = 0; i < packetsPerLine; i++) {
        const packet = new THREE.Mesh(dataPacketGeometry, dataPacketMaterial.clone());
        packet.userData = {
          lineIndex: lineIndex,
          positionAlongLine: Math.random(), // Random starting position along the line
          direction: direction,
          lineLength: lineLength
        };
        packet.scale.set(0, 0, 0); // Start hidden
        dataPackets.push(packet);
        scene.add(packet);
      }
    });

    // --- GSAP Animation Timeline ---
    const tl = gsap.timeline({ repeat: 0, repeatDelay: 3 }); // Play once, then repeat after delay

    // Animate camera back slightly at the start with a smoother ease
    tl.to(camera.position, { duration: 2, z: 7, ease: "power3.out" }, 0); // Increased duration and ease

    // Animate nodes and lines from chaotic to organized state with increased duration and stronger ease
    tl.to(nodes.map(node => node.position), {
      duration: 4, // Increased transition duration
      x: (i) => organizedPositions[i].x,
      y: (i) => organizedPositions[i].y,
      z: (i) => organizedPositions[i].z,
      ease: "power4.inOut", // Using power4 ease for a more dramatic and smooth transition
      stagger: 0.008 // Slightly reduced stagger for tighter feel
    }, 0.5); // Start slightly after camera movement

    // Animate line points (requires manual update) with increased duration and stronger ease
    tl.to({ progress: 0 }, {
      progress: 1,
      duration: 4, // Match node duration
      ease: "power4.inOut", // Match node ease
      onUpdate: function() {
        const p = this.targets()[0].progress;
        const currentLinePoints: THREE.Vector3[] = [];
        lineConnections.forEach(connection => {
          const startChaotic = chaoticPositions[connection[0]] || new THREE.Vector3();
          const endChaotic = chaoticPositions[connection[1]] || new THREE.Vector3();
          const startOrganized = organizedPositions[connection[0]];
          const endOrganized = organizedPositions[connection[1]];

          const currentStart = new THREE.Vector3().lerpVectors(startChaotic, startOrganized, p);
          const currentEnd = new THREE.Vector3().lerpVectors(endChaotic, endOrganized, p);

          currentLinePoints.push(currentStart, currentEnd);
        });

        // Update existing line geometries
        lines.forEach((line, index) => {
          if (index < lineConnections.length) {
            const connection = lineConnections[index];
            const startChaotic = chaoticPositions[connection[0]] || new THREE.Vector3();
            const endChaotic = chaoticPositions[connection[1]] || new THREE.Vector3();
            const startOrganized = organizedPositions[connection[0]];
            const endOrganized = organizedPositions[connection[1]];

            const currentStart = new THREE.Vector3().lerpVectors(startChaotic, startOrganized, p);
            const currentEnd = new THREE.Vector3().lerpVectors(endChaotic, endOrganized, p);

            line.geometry.setFromPoints([currentStart, currentEnd]);
          }
        });
      }
    }, 0.5); // Start slightly after camera movement

    // Animate node colors
    tl.to(nodes.map(node => node.material), {
      duration: 3, // Slightly increased duration
      onUpdate: function() {
        const p = this.progress();
        nodes.forEach(node => {
          const material = node.material as THREE.MeshBasicMaterial;
          material.color.set(new THREE.Color(
            nodeMaterialChaotic.color.r * (1 - p) + nodeMaterialOrganized.color.r * p,
            nodeMaterialChaotic.color.g * (1 - p) + nodeMaterialOrganized.color.g * p,
            nodeMaterialChaotic.color.b * (1 - p) + nodeMaterialOrganized.color.b * p
          ));
        });
      },
      ease: "power3.inOut", // Using power3 ease
    }, 0.8); // Start slightly after position animation begins

    // Animate line colors
    tl.to(lines.map(line => line.material), {
      duration: 3, // Slightly increased duration
      onUpdate: function() {
        const p = this.progress();
        lines.forEach(line => {
          const material = line.material as THREE.LineBasicMaterial;
          material.color.set(new THREE.Color(
            lineMaterialChaotic.color.r * (1 - p) + lineMaterialOrganized.color.r * p,
            lineMaterialChaotic.color.g * (1 - p) + lineMaterialOrganized.color.g * p,
            lineMaterialChaotic.color.b * (1 - p) + lineMaterialOrganized.color.b * p
          ));
        });
      },
      ease: "power3.inOut", // Using power3 ease
    }, 0.8); // Start slightly after position animation begins
    
    // Animate particles scaling in and moving
    tl.to(particles.map(p => p.scale), {
      duration: 2, // Increased duration
      x: 1, y: 1, z: 1,
      ease: "power3.out",
      stagger: 0.006
    }, 3.5); // Start when organized state is forming

    // Animate data packets scaling in
    tl.to(dataPackets.map(p => p.scale), {
      duration: 1, // Increased duration
      x: 1, y: 1, z: 1,
      ease: "power3.out",
      stagger: 0.003
    }, 3.8); // Start slightly after particles

    // --- Power and Abundance Effects (Subtle) ---
    // Simple pulsing scale effect on nodes in the organized state
    tl.to(nodes.map(node => node.scale), {
      duration: 1.5, // Slightly increased duration
      x: 1.1, y: 1.1, z: 1.1,
      ease: "sine.inOut",
      yoyo: true,
      repeat: -1, // Infinite repeat
      stagger: 0.03
    }, 4); // Start after text appears

    // Subtle color pulse on lines (using a slightly lighter blue for the pulse)
    tl.to(lines.map(line => line.material), {
      duration: 2, // Slightly increased duration
      onUpdate: function() {
        const p = Math.sin(this.time() * Math.PI) * 0.5 + 0.5; // 0 to 1 sine wave
        lines.forEach(line => {
          const material = line.material as THREE.LineBasicMaterial;
          material.color.set(new THREE.Color(
            lineMaterialOrganized.color.r * (1 - p) + 0xDBD9EC / 0xFFFFFF * p, // Pulse towards Lavender Web
            lineMaterialOrganized.color.g * (1 - p) + 0xDBD9EC / 0xFFFFFF * p,
            lineMaterialOrganized.color.b * (1 - p) + 0xDBD9EC / 0xFFFFFF * p
          ));
        });
      },
      repeat: -1, // Infinite repeat
    }, 4); // Start after text appears

    // --- Animation Loop ---
    function animate() {
      requestAnimationFrame(animate);

      // Update particle positions
      particles.forEach(particle => {
        if (particle.userData.velocity) {
          particle.position.add(particle.userData.velocity);
          // Simple boundary check
          if (Math.abs(particle.position.x) > 8 || Math.abs(particle.position.y) > 8 || Math.abs(particle.position.z) > 8) {
            // Reset particle position and velocity
            particle.position.set(
              (Math.random() - 0.5) * 2,
              (Math.random() - 0.5) * 2,
              (Math.random() - 0.5) * 2
            );
            particle.userData.velocity.set(
              (Math.random() - 0.5) * 0.02,
              (Math.random() - 0.5) * 0.02,
              (Math.random() - 0.5) * 0.02
            );
          }
        }
      });

      // Update data packet positions
      dataPackets.forEach(packet => {
        if (packet.scale.x > 0 && packet.userData) { // Only move if visible
          packet.userData.positionAlongLine += dataPacketSpeed;
          if (packet.userData.positionAlongLine > 1) {
            packet.userData.positionAlongLine = 0; // Loop back to the start
          }

          const connection = lineConnections[packet.userData.lineIndex];
          if (connection) {
            const start = organizedPositions[connection[0]];
            const end = organizedPositions[connection[1]];

            // Interpolate position along the line
            packet.position.copy(start).lerp(end, packet.userData.positionAlongLine);
          }
        }
      });

      renderer.render(scene, camera);
    }

    // --- Handle Window Resize ---
    const handleResize = () => {
      if (!containerRef.current) return;
      
      camera.aspect = containerRef.current.clientWidth / containerRef.current.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
    };

    window.addEventListener('resize', handleResize);

    // Start the animation loop
    animate();

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      
      // Dispose geometries and materials
      nodeGeometry.dispose();
      nodeMaterialChaotic.dispose();
      nodeMaterialOrganized.dispose();
      lineMaterialChaotic.dispose();
      lineMaterialOrganized.dispose();
      
      nodes.forEach(node => {
        node.geometry.dispose();
        (node.material as THREE.Material).dispose();
      });
      
      lines.forEach(line => {
        line.geometry.dispose();
        (line.material as THREE.Material).dispose();
      });
      
      // Remove all objects from scene
      scene.clear();
      
      // Dispose renderer
      renderer.dispose();
    };
  }, []);

  return (
    <div ref={containerRef} className={`w-full h-full absolute inset-0 ${className}`}>
      <canvas ref={canvasRef} className="w-full h-full" />
      {showTextOverlay && (
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center pointer-events-none font-['Inter',sans-serif]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.5 }}
            className="text-3xl md:text-5xl font-bold mb-4"
          >
            Web Hosting Made Easy!
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 2 }}
            className="text-xl md:text-2xl"
          >
            Powerful Website Hosting with Unlimited Features.
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default WebHostingAnimation;
