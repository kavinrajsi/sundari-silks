# Boomer

  Boomer is shopify theme build for Online Store 2.0 features.

## Staying up to date with Boomer

- Navigate to your local theme folder.
- Verify the list of remotes and validate that you have both an `origin` and `upstream`:

  ```sh
  git remote -v
  ```

- If you don't see an `upstream`, you can add one that points to boomer repository:

  ```sh
  git remote add upstream https://github.com/kavinrajsi/boomer
  ```

- Pull in the latest Dawn changes into your repository:

  ```sh
  git fetch upstream
  git pull upstream main
  ```

## Developer tools

### Shopify CLI

[Shopify CLI](https://github.com/Shopify/shopify-cli) helps you build Shopify themes faster and is used to automate and enhance your local development workflow. It comes bundled with a suite of commands for developing Shopify themes—everything from working with themes on a Shopify store (e.g. creating, publishing, deleting themes) or launching a development server for local theme development.

You can follow this [quick start guide for theme developers](https://github.com/Shopify/shopify-cli#quick-start-guide-for-theme-developers) to get started.

### SASS

- Install: `npm install`
- Run `gulp watch` to compile scss

## Documentation, FAQs, and More

If you’re interested in writing any documentation or creating tutorials please [let me know](mailto:sikavinraj@gmail.com)
