#BEM class creator for CSS Modules
A quick way to handle multiple [BEM](https://en.bem.info/methodology/) class names with [CSS Modules](https://github.com/css-modules/css-modules).

**Disclaimer:** This was built and tested with [create-react-app](https://create-react-app.dev/) in mind, and has not been tested in any other environment.

##Usage

###Import and configure
Import bem, then configure the CSS Modules object containing BEM CSS.

```jsx
import React from 'react';
import styles from './Human.module.css';
import bem from 'bem-modules';
```

###Passing individual parameters
BEM classes can be returned by passing parameters as shown below. The first parameter is the "block" element, the second parameter is the "element" object, which can be null, and all following parameters will be returned as "modifiers". Elements and modifiers passed that do not exist in the CSS Modules object will not be returned, and a warning will be logged.

```jsx
import React from 'react';
import styles from './Human.module.css';
import bem from 'bem-modules';

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

###Passing an object
BEM classes can be returned by passing an object as shown below. The "block" property is required, and all other properties are optional. Elements and modifiers passed that do not exist in the CSS Modules object will not be returned, and a warning will be logged.

```jsx
import React from 'react';
import logo from './logo.svg';
import styles from './App.module.css';
import bem from 'bem-modules';

const b = bem(styles);

function App() {
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

export default App;
```

##Advanced configuration
An optional .bemrc file can be used to configure the delimiters for blocks and elements.

```json
{
  "elementDelimiter": "__",
  "modifierDelimiter": "--"
}
```

####Credits & Thanks
Special thanks to [@CoreyRo](https://github.com/coreyro) for the brainstorming session and ideas.
