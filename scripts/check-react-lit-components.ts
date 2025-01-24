/**
 * This script cross-checks if both React and Lit components match; otherwise, it'll automatically
 * fix the correct type. However, manual intervention is still necessary in case stuff breaks lol
 */
import path from "path"
import { glob } from "glob"

const _cwd = process.cwd()

const mapPaths = (...dirs: string[]) => {
  return dirs.map((dir) => path.join(_cwd, dir))
}

const AB_CORE_DIR = "packages/@auburn-core/src"
const AB_REACT_DIR = "packages/@auburn-react/src"

const AB_CORE_COMPONENTS = mapPaths(...(await glob.glob(`${AB_CORE_DIR}/**/*.ts`, { ignore: `${AB_CORE_DIR}/vite-env.d.ts` })))
const AB_REACT_COMPONENTS = mapPaths(...(await glob.glob(`${AB_REACT_DIR}/**/*.{ts,tsx}`, { ignore: `${AB_REACT_DIR}/vite-env.d.ts` })))

console.log(AB_CORE_COMPONENTS, AB_REACT_COMPONENTS)
