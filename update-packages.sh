#!/bin/bash

echo "NPM Package Update Script"
echo "========================="

# Method 1: Using npm update (respects semver constraints in package.json)
echo "Method 1: Using npm update (respects version constraints in package.json)"
echo "This will update packages within the version ranges specified in package.json"
echo "Running: npm update"
npm update

echo ""
echo "========================="
echo ""

# Method 2: Using npm-check-updates (updates to latest versions)
echo "Method 2: Using npm-check-updates (updates to latest versions)"
echo "This will update all packages to their latest versions, even beyond the constraints in package.json"
echo "First, installing npm-check-updates if not already installed"
npm install -g npm-check-updates

echo ""
echo "Checking for available updates:"
npx ncu

echo ""
echo "To update all packages to their latest versions, run:"
echo "npx ncu -u && npm install"
echo ""
echo "This will update your package.json and then install the new versions"

echo ""
echo "========================="
echo "Update process completed!"