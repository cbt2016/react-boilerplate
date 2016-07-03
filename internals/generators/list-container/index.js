/**
 * Container Generator
 */

const componentExists = require('../utils/componentExists');

module.exports = {
  description: 'Add a list container component',
  prompts: [{
    type: 'input',
    name: 'name',
    message: 'What should it be called?',
    default: 'Form',
    validate: value => {
      if ((/.+/).test(value)) {
        return componentExists(value) ? 'A component or container with this name already exists' : true;
      }

      return 'The name is required';
    },
  }, {
    type: 'input',
    name: 'endpoint',
    message: 'Your endpoint?',
    default: 'http://localhost/name',
  }, {
    type: 'list',
    name: 'type',
    message: 'Your component type?',
    choices: ['query', 'editable'],
    default: 'query',
  }, {
    type: 'input',
    name: 'keyField',
    message: 'Your key field?',
    default: '_id',
  }],
  actions: () => {
    const actions = [{
      type: 'add',
      path: '../../app/containers/{{properCase name}}/index.js',
      templateFile: './list-container/index.js.hbs',
      abortOnFail: true,
    }, {
      type: 'add',
      path: '../../app/containers/{{properCase name}}/styles.css',
      templateFile: './list-container/styles.css.hbs',
      abortOnFail: true,
    }, {
      type: 'add',
      path: '../../app/containers/{{properCase name}}/constants.js',
      templateFile: './list-container/constants.js.hbs',
      abortOnFail: true,
    }, {
      type: 'add',
      path: '../../app/containers/{{properCase name}}/actions.js',
      templateFile: './list-container/actions.js.hbs',
      abortOnFail: true,
    }, {
      type: 'add',
      path: '../../app/containers/{{properCase name}}/selectors.js',
      templateFile: './list-container/selectors.js.hbs',
      abortOnFail: true,
    }, {
      type: 'add',
      path: '../../app/containers/{{properCase name}}/reducer.js',
      templateFile: './list-container/reducer.js.hbs',
      abortOnFail: true,
    }, {
      type: 'add',
      path: '../../app/containers/{{properCase name}}/sagas.js',
      templateFile: './list-container/sagas.js.hbs',
      abortOnFail: true,
    }];

    return actions;
  },
};
