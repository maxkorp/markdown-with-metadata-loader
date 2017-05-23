## markdown-with-metadata-loader

#### load markdown including yaml metadata with Webpack

returns data in an object with metadata and contents
```js
const theMarkdown = require('somefile.md');
console.log(theMarkdown.metadata); // js object of parsed yaml metadata from the markdown file
console.log(theMarkdown.contents); // The actual, unprocessed markdown contents of the file
```

In the case of no yaml metadata, the metadata property will contain an empty object. Metadata should be delimited
in the standard jekyll/markdown fashion, with a preceding and trailing lines with 3 hyphens, like so

```md
---
author: steve stevers
description: stuff
---
# I'm markdown
yes I are
```

To use, install
```sh
npm install --save-dev markdown-with-metadata-loader
```
then add to the module.loaders section your webpack.config.js
```js
    {
      test: /\.md$/,
      loader: 'markdown-with-metadata-loader'
    },
```
