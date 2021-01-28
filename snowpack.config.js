// Snowpack Configuration File
// See all supported options: https://www.snowpack.dev/reference/configuration

/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  exclude: ["**/node_modules/**/*"],
  alias: {
    "@": "./src",
  },
  devOptions: {
    secure: true,
    open: "chrome",
    output: "dashboard",
    hmr: true,
    hmrDelay: 0,
    out: "build",
  },
  buildOptions: {
    out: "build",
    sourcemap: true, // Experimental
    watch: true,
    htmlFragments: true,
  },
  testOptions: {
    files: ["__tests__/**/*", "**/*.@(spec|test).*"],
  },
};
