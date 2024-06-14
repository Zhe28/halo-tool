import {mergeConfig} from "vitest/config"
import viteConfig from "./vite.config";

export default mergeConfig(viteConfig, {
  provider: "v8"
})