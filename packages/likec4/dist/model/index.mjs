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

/** @type {import("/Users/brenelz/Desktop/Code/crowdbotics/likec4/packages/likec4/src/model/index.js")} */
const _module = await jiti.import("/Users/brenelz/Desktop/Code/crowdbotics/likec4/packages/likec4/src/model/index.ts");

export const createLikeC4Model = _module.createLikeC4Model;
export const Connection = _module.Connection;
export const ConnectionModel = _module.ConnectionModel;
export const DeployedInstanceModel = _module.DeployedInstanceModel;
export const deploymentConnection = _module.deploymentConnection;
export const DeploymentConnectionModel = _module.DeploymentConnectionModel;
export const DeploymentNodeModel = _module.DeploymentNodeModel;
export const DeploymentRelationModel = _module.DeploymentRelationModel;
export const differenceConnections = _module.differenceConnections;
export const EdgeModel = _module.EdgeModel;
export const ElementModel = _module.ElementModel;
export const findAscendingConnections = _module.findAscendingConnections;
export const findDeepestNestedConnection = _module.findDeepestNestedConnection;
export const findDescendantConnections = _module.findDescendantConnections;
export const hasSameSource = _module.hasSameSource;
export const hasSameSourceTarget = _module.hasSameSourceTarget;
export const hasSameTarget = _module.hasSameTarget;
export const isAnyInOut = _module.isAnyInOut;
export const isIncoming = _module.isIncoming;
export const isNestedConnection = _module.isNestedConnection;
export const isOutgoing = _module.isOutgoing;
export const LikeC4DeploymentModel = _module.LikeC4DeploymentModel;
export const LikeC4Model = _module.LikeC4Model;
export const LikeC4ViewModel = _module.LikeC4ViewModel;
export const mergeConnections = _module.mergeConnections;
export const modelConnection = _module.modelConnection;
export const NodeModel = _module.NodeModel;
export const RelationshipModel = _module.RelationshipModel;
export const sortConnectionsByBoundaryHierarchy = _module.sortConnectionsByBoundaryHierarchy;
export const sortDeepestFirst = _module.sortDeepestFirst;
export const ComputedNode = _module.ComputedNode;
export const ComputedView = _module.ComputedView;
export const DiagramNode = _module.DiagramNode;