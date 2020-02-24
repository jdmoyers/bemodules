const conf = require('rc')('bemmodules', {
  elementDelimiter: '-',
  modifierDelimiter: '--'
});

function bemOutput(cssModule, ...args) {
  const ed = conf.elementDelimiter;
  const md = conf.modifierDelimiter;

  let b, e, modifiers;
  let cssClasses = '';

  if (typeof args[0] === 'string') {
    b = args[0];
    e = args[1];
    modifiers = args.slice(2, args.length);
  } else if (typeof args[0] === 'object') {
    b = args[0].block;
    e = args[0].element;
    modifiers = args[0].modifiers;
  } else {
    console.error('Invalid parameter type');
    return false;
  }

  if (e !== null) {
    if (cssModule[`${b}${ed}${e}`]) {
      cssClasses += cssModule[`${b}${ed}${e}`];
    } else {
      console.warn(`Element "${e}" does not exist in the given CSS modules.`);
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
