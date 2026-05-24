# Publishing Lollypop UI to NPM

This guide will walk you through publishing the `@lollypop-ui` packages to npm.

## Prerequisites

1. **Node.js** (installed via nvm)
2. **npm account** at https://www.npmjs.com
3. **@lollypop-ui organization** created on npm

## Step 1: Create npm Organization

Before publishing scoped packages, you need to create the `@lollypop-ui` organization:

1. Go to https://www.npmjs.com/org/create
2. Enter organization name: `lollypop-ui`
3. Click "Create"

**OR** use the CLI:
```bash
npm org create lollypop-ui
```

## Step 2: Install pnpm

```bash
# Install pnpm globally
npm install -g pnpm

# Verify installation
pnpm --version
```

## Step 3: Install Dependencies

```bash
# Install all dependencies
pnpm install
```

## Step 4: Build All Packages

```bash
# Build all packages
pnpm build
```

This will create the `dist/` folders with:
- `index.mjs` (ESM)
- `index.cjs` (CJS)
- `index.d.ts` (TypeScript types)

## Step 5: Login to npm

```bash
npm login
```

Enter your:
- Username
- Password
- Email
- 2FA code (if enabled)

Verify you're logged in:
```bash
npm whoami
```

## Step 6: Create Changesets

Changesets help manage versions and changelogs.

```bash
# Create a changeset
pnpm changeset
```

Follow the prompts:
1. Select which packages to publish (use Space to select, Enter to confirm)
2. Choose version bump type (major/minor/patch)
3. Write a summary of changes

This creates a file in `.changeset/` directory.

## Step 7: Version the Packages

```bash
# Update package versions based on changesets
pnpm version-packages
```

This will:
- Update `package.json` versions
- Update changelog files
- Consume the changeset files

## Step 8: Commit the Changes

```bash
git add .
git commit -m "chore: version packages for release"
git push
```

## Step 9: Publish to npm

```bash
# Build and publish all packages
pnpm release
```

This command will:
1. Build all packages (`turbo run build --filter=@lollypop-ui/*`)
2. Publish to npm (`changeset publish`)

## Alternative: Manual Publishing

If you prefer to publish manually:

```bash
# Build first
pnpm build

# Publish each package individually
cd packages/tokens && npm publish
cd ../hooks && npm publish
cd ../icons && npm publish
cd ../ui && npm publish
```

## Verify Publication

After publishing, verify your packages are live:

1. Visit npm:
   - https://www.npmjs.com/package/@lollypop-ui/core
   - https://www.npmjs.com/package/@lollypop-ui/hooks
   - https://www.npmjs.com/package/@lollypop-ui/tokens
   - https://www.npmjs.com/package/@lollypop-ui/icons

2. Test installation:
```bash
npm install @lollypop-ui/core
```

## Published Packages

After successful publishing, users can install:

```bash
# Core components
npm install @lollypop-ui/core

# Hooks (peer dependency)
npm install @lollypop-ui/hooks

# Design tokens (peer dependency)
npm install @lollypop-ui/tokens

# Icons (optional)
npm install @lollypop-ui/icons
```

## Troubleshooting

### Organization Access Error
If you get `403 Forbidden` or organization access errors:
```bash
# Make sure you're a member of the organization
npm org ls lollypop-ui

# Add yourself if needed (requires org owner/admin)
npm org add <your-username> lollypop-ui
```

### Build Errors
```bash
# Clean and rebuild
pnpm clean
pnpm install
pnpm build
```

### Already Published Version
If the version already exists:
```bash
# Create a new changeset with a higher version
pnpm changeset
# Then version and publish again
pnpm version-packages
pnpm release
```

## CI/CD Publishing (Optional)

The project includes GitHub Actions workflows for automated publishing:

1. Push to `main` branch
2. GitHub Actions will run tests and build
3. Create a release PR automatically
4. Merge the PR to publish to npm

Make sure to add `NPM_TOKEN` to GitHub repository secrets.

## Next Steps

After publishing:
1. ✅ Update project README with installation instructions
2. ✅ Share on social media / community
3. ✅ Monitor npm downloads and issues
4. ✅ Keep packages updated with bug fixes and features

---

Happy Publishing! 🚀
