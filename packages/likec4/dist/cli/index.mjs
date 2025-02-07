#!/usr/bin/env node
import { createJiti } from "../../../../node_modules/jiti/lib/jiti.mjs";

const jiti = createJiti(import.meta.url, {
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
const _module = await jiti.import("/Users/brenelz/Desktop/Code/crowdbotics/likec4/packages/likec4/src/cli/index.ts");

export default _module?.default ?? _module;