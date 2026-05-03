export default formatSolution;
export { formatSolutionSync, formatSolution };

/**
 * @param {string} sourceStr
 * @param {Config | undefined} config
 */
function formatSolution(sourceStr, config?): Promise<string>;

/**
 * @param {string} sourceStr
 * @param {Config | undefined} config
 */
function formatSolutionSync(sourceStr, config?): string;

/**
 * @typedef {{
 *   fwPunctuation?: boolean;
 *   rlfConfig?: import("./lib/fmt.js").Config;
 *  }} Config
 */