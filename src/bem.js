import addVar from './addVar';
const conf = require('rc')('bemmodules', {
  styleObj: 'styles',
  elementDelimiter: '-',
  modifierDelimiter: '--'
});

function bem(block, element = null, ...modifiers) {
  const ed = conf.elementDelimiter;
  const md = conf.modifierDelimiter;
  const s = conf.styleObj;

  const b = block;
  const e = element;
  let cssClasses;

  if (element !== null) {
    cssClasses = addVar(s, `${b}${ed}${e}`);
  } else {
    cssClasses = addVar(s, b);
  }

  for (const m of modifiers) {
    cssClasses += ', ' + addVar(s, `${b}${ed}${e}${md}${m}`);
  }

  const reactClass = `className={[${cssClasses}]}`;

  return reactClass;
}

export default bem;
