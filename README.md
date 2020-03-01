# BEM class creator for CSS Modules

A quick way to handle multiple [BEM](https://en.bem.info/methodology/) class names with [CSS Modules](https://github.com/css-modules/css-modules).

## What it does

bemodules will take an object or list of parameters containing the "block", "element", and multiple "modifiers" as per the BEM methodology. This data combined with an object created by CSS Modules will be used to return the classes needed in the classNames attribute in React to apply CSS classes to your elements. Doing so removes the need for brackets (as brackets are needed for - characters) and reduces the amount of code needed use BEM with CSS Modules.

**Disclaimer:** This was built and tested with [create-react-app](https://create-react-app.dev/) in mind, and has not been tested in any other environment.

---

## Install

bemodules can easily be installed via NPM or Yarn.

#### NPM:

```node
npm -i bemodules -D
```

#### Yarn:

```node
yarn add bemodules --dev
```

---

## Import and configure

Import bem, then configure the CSS Modules object containing BEM CSS.

### Default settings:

```jsx
import React from 'react';
import styles from './Human.module.css';
import bem from 'bemodules'; // Importing bemodules

const b = bem(styles); // Importing the 'styles' object created by CSS Modules
```

### Configure delimiters:

In addition to the style object, bemodules also accepts optional parameters to change the delimiters for blocks and modules. By default, bemodules is configured to use the standard [BEM methodology naming](http://getbem.com/naming/), which is two underscores (\_\_) between block and element, and two dashes (--) between element and modifier.

The example below will set the element delimiter to a single dash (-), and the modifier delimiter to two dashes (--).

```jsx
import React from 'react';
import styles from './Human.module.css';
import bem from 'bemodules';

const b = bem(styles, '-', '--'); // Configuring delimiters
```

---

## Usage

### Passing individual parameters

BEM classes can be returned by passing parameters as shown below. The first parameter is the "block" element, the second parameter is the "element" object, which can be null, and all following parameters will be returned as "modifiers". Elements and modifiers passed that do not exist in the CSS Modules object will not be returned, and a warning will be logged.

```jsx
import React from 'react';
import styles from './Human.module.css';
import bem from 'bemodules';

const b = bem(styles);

function Human() {
  return (
    // Applying bemodules to className
    <div className={b('human', null, 'tall', 'scrawny')}>
      <div className={b('human', 'head', 'round', 'wide')}>Content here...</div>
    </div>
  );
}

export default Human;
```

#### Example breakdown: `b('human', null, 'tall', 'scrawny')`

- BEM Equivalent:  
  `human human--tall human--scrawny`

- Output:  
  `Human_human__1TaCO Human_human--tall__QrbVX`

#### Example breakdown: `b('human', 'head', 'round', 'wide')`

- BEM Equivalent:  
  `human__head human__head--round human__head--wide`

- Output:  
  `Human_human__head__3F4fG Human_human__head--round__2Y1YP Human_human__head--wide__2ZJFX`

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

---

## Credits & Thanks

Special thanks to [@CoreyRo](https://github.com/coreyro) for the brainstorming session and ideas.
