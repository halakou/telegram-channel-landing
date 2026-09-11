# Contributing

Contributions are welcome! Please follow these guidelines:

## Getting Started

1. Fork the repository
2. Clone and install dependencies: `npm install`
3. Create a feature branch: `git checkout -b feat/my-feature`
4. Make changes and run tests: `npm test`
5. Build to verify: `npm run build`
6. Commit with conventional commits: `feat: add new channel theme`
7. Push and open a Pull Request

## Code Style

- Use TypeScript for all code
- Follow the existing naming conventions (PascalCase for components, camelCase for functions)
- Add comments for non-obvious logic
- Keep components small and focused

## Adding a New Channel

1. Create `src/data/channels/<name>.ts` following the demo channel structure
2. Export from `src/data/channels/index.ts`
3. The page will be auto-generated via `getStaticPaths`

## Reporting Issues

Please include:
- Steps to reproduce
- Expected vs actual behavior
- Screenshots if applicable
- Browser/environment details
