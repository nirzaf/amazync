# Updating NPM Packages

There are multiple ways to update your npm packages. Here are the most common methods:

## Method 1: Using `npm update`

This command updates all packages to the latest version that satisfies the version range in your package.json:

```bash
npm update
```

This is a safe update that respects the semantic versioning constraints in your package.json.

## Method 2: Using `npm-check-updates`

This tool allows you to update all packages to their latest versions, even beyond the version ranges in your package.json:

```bash
# Install npm-check-updates globally (if not already installed)
npm install -g npm-check-updates

# Check for available updates without making changes
npx ncu

# Update all packages in package.json to latest versions
npx ncu -u

# Then install the new versions
npm install
```

## Method 3: Update a specific package

To update a specific package to the latest version:

```bash
npm install package-name@latest
```

## Method 4: Interactive updates with npm-check

For an interactive update experience:

```bash
# Install npm-check globally
npm install -g npm-check

# Run interactive update
npm-check -u
```

This will show you a list of outdated packages and let you choose which ones to update.

## Notes

- Always test your application after updating packages
- Consider using a package lock file (package-lock.json) to ensure consistent installations
- For major version updates, check the release notes for breaking changes