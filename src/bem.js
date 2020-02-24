const conf = require('rc')('bem', {
  elementDelimiter: '__',
  modifierDelimiter: '--'
});

/**
 * Function for returning BEM class names for CSS Modules in React
 * @param {object} cssModule Style object imported from CSS Modules
 * @param {object | ...string} args Object or parameters.
 * @param {string} args.block Block selector
 * @param {string | null} args.element Element selector
 * @param {string[]} args.modifiers Array of modifier selectors
 * @param {string} args[0] Block selector
 * @param {string} args[1] Element selector
 * @param {...string} args[...] Modifier selectors
 * @returns {string} Class names found in passed cssModule object
 */
function bemOutput(cssModule, ...args) {
  const ed = conf.elementDelimiter;
  const md = conf.modifierDelimiter;

  console.log('ed', ed);
  console.log('md', md);

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

  if (e !== null && e !== undefined) {
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
    const addModifier = `${b}${
      e !== null && e !== undefined ? ed + e : ''
    }${md}${m}`;

    if (cssModule[addModifier]) {
      cssClasses += ' ' + cssModule[addModifier];
    } else {
      console.warn(`Modifier "${m}" does not exist in the given CSS modules.`);
    }
  }

  return cssClasses;
}

const bem = (cssModule, ...params) =>
  bemOutput.bind(null, cssModule, ...params);

export default bem;
