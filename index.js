const { checkAndThrow } = require('check-md')
const { compose, deeplyParseHeaders, slugify } = require('@vuepress/shared-utils')

module.exports = (opts = {}) => {
  return {
    extendCli(cli) {
      cli
        .command('check-md [targetDir]', 'Checks dead links of markdown.')
        .option('--fix', 'fix dead links like a expert.')
        .option('--pattern [pattern]', 'glob pattern of resolved markdowns.')
        .option('--ignore [pattern]', 'glob pattern to specify paths from being checked.')
        .option('--exit-level [level]', 'Process exit level, default to `error`.')
        .action((dir = '.', cliOptions = {}) => {
          const cwd = dir
          const root = ['./', './.vuepress/public']

          const finalOptions = { ...opts, ...cliOptions };
          checkAndThrow({
            pattern: finalOptions.pattern || '**/*.md',
            ignore: finalOptions.ignore || ['**/node_modules'],
            exitLevel: 'error',
            root,
            defaultIndex: ['README.md', 'index.md'],
            slugify: compose(deeplyParseHeaders, slugify),
            cwd,
            fix: finalOptions.fix || false
          })
        })
    }
  }
}
