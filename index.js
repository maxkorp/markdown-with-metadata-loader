const yaml = require('yaml');

module.exports = (source) => {
  let data;
  if (!source.includes('---')) {
    data = {
      metadata: {},
      contents: source
    };
  } else {
    const split = source.split('---');
    data = {
      metadata: yaml.eval(split[1]),
      contents: split[2]
    };
  }

  return `module.exports = ${JSON.stringify(data)};`;
};
