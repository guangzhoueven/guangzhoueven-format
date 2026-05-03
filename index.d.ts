declare module "@imkdown/lg-solution-formatter" {
  /**
   * @param {string} sourceStr
   * @param {Config | undefined} config
   */
  function formatSolution(sourceStr: string, config?: Config): Promise<string>;

  /**
   * @param {string} sourceStr
   * @param {Config | undefined} config
   */
  function formatSolutionSync(sourceStr: string, config?: Config): string;

  export default formatSolution;
  export { formatSolutionSync, formatSolution };

  /**
   * @typedef {{
   *   fwPunctuation?: boolean;
   *   rlfConfig?: any;
   *  }} Config
   */
}

export {};