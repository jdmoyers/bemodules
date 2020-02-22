import addVar from './addVar';

test('creates a bracket notation class with "style" as the variable and "block" as the class', () => {
  expect(addVar('style', 'block')).toBe("style['block']");
});
