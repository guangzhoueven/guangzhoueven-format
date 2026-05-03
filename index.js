/// <reference types="vite/client" />

/**
 * @imkdown/lg-solution-formatter
 * ---
 * @author Imken Luo <me@imken.moe> (https://imken.moe)
 * @license MIT
 * @homepage https://github.com/immccn123/lg-solution-formatter
 */

import { remark } from "remark";
import remarkMath from "remark-math";
import remarkStringify from "remark-stringify";
import remarkLfmFmt from "./lib/fmt.js";
import remarkGfm from "remark-gfm";
import remarkDirective from "remark-directive";

/**
 * @typedef {import("@imkdown/remark-lfm-fmt").Config} RlfConfig
 */

/**
 * @typedef {{
 *   fwPunctuation?: boolean;
 *   rlfConfig?: RlfConfig;
 *  }} Config
 */

/**
 * @param {string} sourceStr
 * @param {Config | undefined} config
 */
const formatSolution = async (sourceStr, config = {}) => {
  const { fwPunctuation = true, rlfConfig } = config;
  const rem = remark()
    .use(remarkMath, { singleDollarTextMath: true })
    .use(remarkGfm)
    .use(remarkLfmFmt, { ...rlfConfig, fwPunctuation })
    .use(remarkStringify, { bullet: "-", rule: "-" })
    .use(remarkDirective);

  const file = await rem.process(sourceStr);
  return String(file);
};

/**
 * clang-format is not supported.
 *
 * @param {string} sourceStr
 * @param {Config | undefined} config
 */
const formatSolutionSync = (sourceStr, config = {}) => {
  const { fwPunctuation = true } = config;

  const file = remark()
    .use(remarkMath, { singleDollarTextMath: true })
    .use(remarkGfm)
    .use(remarkLfmFmt, { fwPunctuation })
    .use(remarkStringify, { bullet: "-", rule: "-" })
    .use(remarkDirective)
    .processSync(sourceStr);

  return String(file);
};

export default formatSolution;
export { formatSolutionSync, formatSolution };
