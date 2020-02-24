import bem from './bem';

const styleObj = {
  human: 'App_human__2JfE1',
  'human--tall': 'App_human--tall__1J3cR',
  'human--scrawny': 'App_human--scrawny__I8jU2',
  human__head: 'App_human__head__N_6XA',
  'human__head--round': 'App_human__head--round__1kL17',
  'human__head--square': 'App_human__head--square__1HiFw'
};

const b = bem(styleObj);

test('test bem using parameters', () => {
  expect(b('human', 'head', 'round', 'square')).toBe(
    'App_human__head__N_6XA App_human__head--round__1kL17 App_human__head--square__1HiFw'
  );
});

test('test bem with just block and modifiers', () => {
  expect(b('human', null, 'tall', 'scrawny')).toBe(
    'App_human__2JfE1 App_human--tall__1J3cR App_human--scrawny__I8jU2'
  );
});

test('test bem with modifier not in style object', () => {
  expect(b('human', 'head', 'round', 'thin')).toBe(
    'App_human__head__N_6XA App_human__head--round__1kL17'
  );
});

const blockElementModifierObj = {
  block: 'human',
  element: 'head',
  modifiers: ['round', 'square']
};

test('test bem using object', () => {
  expect(b(blockElementModifierObj)).toBe(
    'App_human__head__N_6XA App_human__head--round__1kL17 App_human__head--square__1HiFw'
  );
});

const blockModifierObj = {
  block: 'human',
  modifiers: ['tall', 'scrawny']
};

test('test bem using object without element', () => {
  expect(b(blockModifierObj)).toBe(
    'App_human__2JfE1 App_human--tall__1J3cR App_human--scrawny__I8jU2'
  );
});
