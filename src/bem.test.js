import bem from './bem';

test('creates a className for React with human for "block", "head" for element, and the modifiers "round" and "thin"', () => {
  expect(bem('human', 'head', 'round', 'thin')).toBe(
    "className={[styles['human-head'], styles['human-head--round'], styles['human-head--thin']]}"
  );
});
