const conf = require('rc')('bemmodules', {
  elementDelimiter: '-',
  modifierDelimiter: '--'
});

function bem(obj, block, element = null, ...modifiers) {
  const ed = conf.elementDelimiter;
  const md = conf.modifierDelimiter;

  const b = block;
  const e = element;

  let cssClasses = '';

  if (element !== null) {
    cssClasses += obj[`${b}${ed}${e}`];
  } else {
    cssClasses += obj[b];
  }

  for (const m of modifiers) {
    cssClasses += ' ' + obj[`${b}${ed}${e}${md}${m}`];
  }

  return cssClasses;
}

module.exports = bem;
