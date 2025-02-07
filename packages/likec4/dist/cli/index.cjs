#!/usr/bin/env node
const { createJiti } = require("../../../../node_modules/jiti/lib/jiti.cjs")

const jiti = createJiti(__filename, {
  "interopDefault": true,
  "alias": {
    "likec4": "/Users/brenelz/Desktop/Code/crowdbotics/likec4/packages/likec4",
    "@/vite/": "/Users/brenelz/Desktop/Code/crowdbotics/likec4/packages/likec4/src/vite",
    "@likec4/core": "/Users/brenelz/Desktop/Code/crowdbotics/likec4/packages/core/src",
    "@likec4/layouts": "/Users/brenelz/Desktop/Code/crowdbotics/likec4/packages/layouts/src",
    "@likec4/language-server": "/Users/brenelz/Desktop/Code/crowdbotics/likec4/packages/language-server/src"
  },
  "moduleCache": false,
  "nativeModules": [
    "json5",
    "@hpcc-js/wasm-graphviz",
    "vite",
    "@vitejs/plugin-react-swc"
  ],
  "transformOptions": {
    "babel": {
      "plugins": []
    }
  }
})

/** @type {import("/Users/brenelz/Desktop/Code/crowdbotics/likec4/packages/likec4/src/cli/index.js")} */
module.exports = jiti("/Users/brenelz/Desktop/Code/crowdbotics/likec4/packages/likec4/src/cli/index.ts")