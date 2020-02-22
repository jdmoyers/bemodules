const styles = require('../styles.css');
const bem = require('./bem');

test('creates a className for React with human for "block", "head" for element, and the modifiers "round" and "thin"', () => {
  expect(bem(styles, 'human', 'head', 'round', 'thin')).toBe(
    "styles['human-head'], styles['human-head--round'], styles['human-head--thin']"
  );
});
