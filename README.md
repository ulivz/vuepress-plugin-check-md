# vuepress-plugin-check-md

[![NPM version](https://badgen.net/npm/v/vuepress-plugin-check-md)](https://npmjs.com/package/vuepress-plugin-check-md) [![NPM downloads](https://badgen.net/npm/dm/vuepress-plugin-check-md)](https://npmjs.com/package/vuepress-plugin-check-md)


> `vuepress check-md` - Check dead links of markdown.

**This plugin is powered by [check-md](https://github.com/whxaxes/check-md) made with ❤️ by [@whxaxes](https://github.com/whxaxes).**

## Features

![](./assets/demo.png)

This plugin help check following types of dead links

- Empty link.
- Non-existed target markdown file.
- Non-slugified hash.
- Non-existed hash.
- Prefer `.md` to `.html` (`warn`)

## Install

```bash
yarn add -D vuepress-plugin-check-md
# OR npm install -D vuepress-plugin-check-md
```

## Usage

```javascript
module.exports = {
  plugins: ['check-md']
}
```

```bash
vuepress check-md [docsDir]
```

### Passing Options

```javascript
module.exports = {
  plugins: ['check-md', {
    pattern: '**/*.md'
  }]
}
```

## Options

Following options can also be passed via CLI options, e.g. `vuepress check-md --fix`

### fix

- Type: `boolean`
- Default: `false`

Check and try to fix

### pattern

- Type: `GlobPattern`
- Default: `**/*.md`

[Glob](https://github.com/isaacs/node-glob) pattern of resolved markdowns.

### ignore

- Type: `GlobPattern`
- Default: `**/node_modules`

[Glob](https://github.com/isaacs/node-glob) pattern to specify paths from being checked.

### exitLevel

- Type: `'none' | 'info' | 'warn' | 'error'`
- Default: `'error'`

Process exit level, default to `error`, other choice is warn and none, it will not exit if setting to none.

## Author

**vuepress-plugin-check-md** © [ULIVZ](https://github.com/ulivz), Released under the [MIT](./LICENSE) License.<br>

> [github.com/ulivz](https://github.com/ulivz) · GitHub [@ULIVZ](https://github.com/ulivz) · Twitter [@_ulivz](https://twitter.com/_ulivz)


