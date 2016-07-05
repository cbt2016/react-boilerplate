/**
 * Container Generator
 */

const componentExists = require('../utils/componentExists');

module.exports = {
  description: 'Add a edit container component',
  prompts: [{
    type: 'input',
    name: 'name',
    message: 'What should it be called?',
    default: 'Form',
    validate: value => {
      if ((/.+/).test(value)) {
        return componentExists(`${value}Edit`) ? 'A component or container with this name already exists' : true;
      }

      return 'The name is required';
    },
  }, {
    type: 'input',
    name: 'fields',
    message: 'Fields?',
    default: '',
    filter: (fields) => fields.split(/,/gi).map(item => item.trim()),
  }],
  actions: () => {
    const actions = [{
      type: 'add',
      path: '../../app/containers/{{properCase name}}Edit/index.js',
      templateFile: './edit-container/index.js.hbs',
      abortOnFail: true,
    }, {
      type: 'add',
      path: '../../app/containers/{{properCase name}}Edit/styles.css',
      templateFile: './edit-container/styles.css.hbs',
      abortOnFail: true,
    }];

    return actions;
  },
};
