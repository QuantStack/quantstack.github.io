# Website

This website is built using [Docusaurus](https://docusaurus.io/), a modern static website generator.

### Installation

```
$ yarn
```

### Local Development

```
$ yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

Using SSH:

```
$ USE_SSH=true yarn deploy
```

Not using SSH:

```
$ GIT_USER=<Your GitHub username> yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.

### Pre-commit Hook Setup

To ensure code quality and consistency, we use `pre-commit` hooks. Here's how to set up and run the pre-commit hook locally:

1. **Install pre-commit:**

   If `pre-commit` isn't already installed, you can install it using `pip`:

   ```bash
   $ pip install pre-commit
   ```
2. **Install the pre-commit hooks:**

   Once `pre-commit` is installed, set up the hooks for the repository by running:

   ```bash
   $ pre-commit install
   ```
3. **Run pre-commit hooks manually:**

   To run the `pre-commit` hooks on all files manually, use:

   ```bash
   $ pre-commit run --all-files
   ```
