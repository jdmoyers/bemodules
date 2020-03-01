# BEM class creator for CSS Modules

A quick way to handle multiple [BEM](https://en.bem.info/methodology/) class names with [CSS Modules](https://github.com/css-modules/css-modules).

## What it does

bemodules will take an object or list of parameters containing the "block", "element", and multiple "modifiers" as per the BEM methodology. This data combined with an object created by CSS Modules will be used to return the classes needed in the classNames attribute in React to apply CSS classes to your elements. Doing so removes the need for brackets (as brackets are needed for - characters) and reduces the amount of code needed use BEM with CSS Modules.

**Disclaimer:** This was built and tested with [create-react-app](https://create-react-app.dev/) in mind, and has not been tested in any other environment.

---

## Usage

### Import and configure

Import bem, then configure the CSS Modules object containing BEM CSS.

```jsx
import React from 'react';
import styles from './Human.module.css';
import bem from 'bemodules';

const b = bem(styles);
```

### Passing individual parameters

BEM classes can be returned by passing parameters as shown below. The first parameter is the "block" element, the second parameter is the "element" object, which can be null, and all following parameters will be returned as "modifiers". Elements and modifiers passed that do not exist in the CSS Modules object will not be returned, and a warning will be logged.

```jsx
import React from 'react';
import styles from './Human.module.css';
import bem from 'bemodules';

const b = bem(styles);

function Human() {
  return (
    <div className={b('human', null, 'tall', 'scrawny')}>
      <div className={b('human', 'head', 'round', 'wide')}>Content here...</div>
    </div>
  );
}

export default Human;
```

**Example b('human', null, 'tall', 'scrawny') output:**

```
Human_human__1TaCO Human_human--tall__QrbVX Human_human--scrawny__2r8iF
```

**Example b('human', 'head', 'round', 'wide') output:**

```
Human_human__head__3F4fG Human_human__head--round__2Y1YP Human_human__head--wide__2ZJFX
```

### Passing an object

BEM classes can be returned by passing an object as shown below. The "block" property is required, and all other properties are optional. Elements and modifiers passed that do not exist in the CSS Modules object will not be returned, and a warning will be logged.

```jsx
import React from 'react';
import styles from './Human.module.css';
import bem from 'bemodules';

const b = bem(styles);

function Human() {
  const humanClass = {
    block: 'human',
    modifiers: ['tall', 'scrawny'] // Optional array
  };

  const humanHeadClass = {
    block: 'human',
    element: 'head', // Optional string
    modifiers: ['round', 'wide'] // Optional array
  };

  return (
    <div className={b(humanClass)}>
      <div className={b(humanHeadClass)}>Content here...</div>
    </div>
  );
}

export default Human;
```

**Example b(humanClass) output:**

```
Human_human__1TaCO Human_human--tall__QrbVX Human_human--scrawny__2r8iF
```

**Example b(humanHeadClass) output:**

```
Human_human__head__3F4fG Human_human__head--round__2Y1YP Human_human__head--wide__2ZJFX
```

---

## Advanced configuration

To configure or change the delimiters for blocks and elements, add the following [React environment variables](https://create-react-app.dev/docs/adding-custom-environment-variables/) to your React application:

- REACT_APP_BEMODULES_ELEMENT_DELIMITER
- REACT_APP_BEMODULES_MODIFIER_DELIMITER

**.env file example:**

```
REACT_APP_BEMODULES_ELEMENT_DELIMITER=__
REACT_APP_BEMODULES_MODIFIER_DELIMITER=--
```

---

#### Credits & Thanks

Special thanks to [@CoreyRo](https://github.com/coreyro) for the brainstorming session and ideas.
