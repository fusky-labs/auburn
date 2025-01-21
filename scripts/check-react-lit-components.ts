/**
 * This script cross-checks if both React and Lit components match; otherwise, it'll automatically
 * fix the correct type. However, manual intervention is still necessary in case stuff breaks lol 
 */
import path from "path"
import { glob } from "glob"

const _cwd = process.cwd()

const ignoredPaths = (...dirs: string[]) => {
  return dirs.map((dir) => path.join(_cwd, dir))
}
