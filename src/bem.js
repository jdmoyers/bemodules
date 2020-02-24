const conf = require('rc')('bemmodules', {
  elementDelimiter: '-',
  modifierDelimiter: '--'
});

function bemOutput(cssModule, block, element = null, ...modifiers) {
  console.log('Module', cssModule);
  console.log('block', block);
  console.log('element', element);
  console.log('modifiers', modifiers);

  const ed = conf.elementDelimiter;
  const md = conf.modifierDelimiter;

  const b = block;
  const e = element;

  let cssClasses = '';

  if (element !== null) {
    if (cssModule[`${b}${ed}${e}`]) {
      cssClasses += cssModule[`${b}${ed}${e}`];
    } else {
      console.warn(
        `Element "${element}" does not exist in the given CSS modules.`
      );
    }
  } else {
    if (cssModule[b]) {
      cssClasses += cssModule[b];
    } else {
      console.warn(`Block "${b}" does not exist in the given CSS modules.`);
    }
  }

  for (const m of modifiers) {
    if (cssModule[`${b}${ed}${e}${md}${m}`]) {
      cssClasses += ' ' + cssModule[`${b}${ed}${e}${md}${m}`];
    } else {
      console.warn(`Modifier "${m}" does not exist in the given CSS modules.`);
    }
  }

  return cssClasses;
}

const bem = (cssModule, ...params) =>
  bemOutput.bind(null, cssModule, ...params);

export default bem;
