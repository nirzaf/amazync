import { useEffect, useRef } from 'react';
import * as THREE from 'three';

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
    // --- Server Farm Grid Parameters ---
const racks = 5; // Number of rows (server racks)
const serversPerRack = 8; // Number of servers per rack
const rackSpacing = 1.5;
const serverSpacing = 1.1;
const serverRadius = 0.18;
const rackHeight = (serversPerRack - 1) * serverSpacing;


// Colors
const COLOR_GLAUCOUS = 0x7882B6;
const COLOR_LAVENDER = 0xDBD9EC;
const COLOR_PERSIAN = 0x1934B6;
const COLOR_KLEIN = 0x192C99;

const COLOR_GREEN = 0x4AFF91;
const COLOR_YELLOW = 0xFFE066;

// Materials
const serverMaterial = new THREE.MeshPhongMaterial({ color: COLOR_GLAUCOUS, shininess: 70, emissive: COLOR_PERSIAN, emissiveIntensity: 0.15 });
const rackMaterial = new THREE.MeshBasicMaterial({ color: COLOR_KLEIN, transparent: true, opacity: 0.38 });
const dataBallMaterialGreen = new THREE.MeshBasicMaterial({ color: COLOR_GREEN });
const dataBallMaterialYellow = new THREE.MeshBasicMaterial({ color: COLOR_YELLOW });

// --- Create Server Racks (vertical lines) ---
for (let r = 0; r < racks; r++) {
  const x = (r - (racks - 1) / 2) * rackSpacing;
  const geometry = new THREE.CylinderGeometry(0.04, 0.04, rackHeight + 0.6, 12);
  const rack = new THREE.Mesh(geometry, rackMaterial);
  rack.position.set(x, 0, 0);
  scene.add(rack);
}

// --- Create Servers (nodes) ---
const serverNodes: THREE.Mesh[] = [];
for (let r = 0; r < racks; r++) {
  const x = (r - (racks - 1) / 2) * rackSpacing;
  for (let s = 0; s < serversPerRack; s++) {
    const y = (s - (serversPerRack - 1) / 2) * serverSpacing;
    const server = new THREE.Mesh(new THREE.SphereGeometry(serverRadius, 18, 18), serverMaterial.clone());
    server.position.set(x, y, 0);
    // Add subtle glow
    server.material.emissive = new THREE.Color(COLOR_PERSIAN);
    server.material.emissiveIntensity = 0.22 + Math.random() * 0.1;
    serverNodes.push(server);
    scene.add(server);
  }
}

// --- Connect Servers with Lines (horizontal lines) ---
for (let s = 0; s < serversPerRack; s++) {
  for (let r = 0; r < racks - 1; r++) {
    const x1 = (r - (racks - 1) / 2) * rackSpacing;
    const x2 = ((r + 1) - (racks - 1) / 2) * rackSpacing;
    const y = (s - (serversPerRack - 1) / 2) * serverSpacing;
    const points = [new THREE.Vector3(x1, y, 0), new THREE.Vector3(x2, y, 0)];
    const geometry = new THREE.BufferGeometry().setFromPoints(points);
    const line = new THREE.Line(geometry, new THREE.LineBasicMaterial({ color: COLOR_LAVENDER, linewidth: 2, transparent: true, opacity: 0.6 }));
    scene.add(line);
  }
}

// --- Data Balls Animation (simulate data transfer) ---
const dataBalls: { mesh: THREE.Mesh, rack: number, y: number, speed: number, color: 'green' | 'yellow' }[] = [];
const animatedBallsCount = 4;
for (let i = 0; i < animatedBallsCount; i++) {
  const rack = Math.floor(Math.random() * (racks - 1));
  const y = (Math.floor(Math.random() * serversPerRack) - (serversPerRack - 1) / 2) * serverSpacing;
  const color = i % 2 === 0 ? 'green' : 'yellow';
  const mat = color === 'green' ? dataBallMaterialGreen : dataBallMaterialYellow;
  const ball = new THREE.Mesh(new THREE.SphereGeometry(serverRadius * 0.55, 14, 14), mat);
  ball.position.set((rack - (racks - 1) / 2) * rackSpacing, y, 0.12);
  dataBalls.push({ mesh: ball, rack, y, speed: (0.012 + Math.random() * 0.01) * (Math.random() > 0.5 ? 1 : -1), color });
  scene.add(ball);
}


    // --- Animation Loop ---
    function animate() {
      requestAnimationFrame(animate);

      // Animate data balls horizontally along their rack
      dataBalls.forEach(ballObj => {
        let x = ballObj.mesh.position.x + ballObj.speed;
        const minX = -((racks - 1) / 2) * rackSpacing;
        const maxX = ((racks - 1) / 2) * rackSpacing;
        if (x < minX) x = maxX;
        if (x > maxX) x = minX;
        ballObj.mesh.position.x = x;
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
    animate();

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      scene.clear();
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
