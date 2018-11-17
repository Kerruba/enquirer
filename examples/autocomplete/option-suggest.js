'use strict';

const { prompt } = require('enquirer');

(async() => {

  const answers = await prompt({
    type: 'autocomplete',
    name: 'flavor',
    message: 'Pick your favorite flavor',
    suggest(typed, choices) {
      return choices.filter(choice => choice.message.includes(typed));
    },
    choices: [
      'almond',
      'apple',
      'banana',
      'cherry',
      'chocolate',
      'cinnamon',
      'coconut',
      'cotton candy',
      'grape',
      'nougat',
      'orange',
      'pear',
      'pineapple',
      'strawberry',
      'vanilla',
      'watermelon',
      'wintergreen'
    ]
  });

  console.log(answers);

})().catch(console.log);
