import Vue from "vue";
import { extend } from "vee-validate";
import * as rules from 'vee-validate/dist/rules';

import { ValidationProvider,ValidationObserver } from "vee-validate";
Vue.component('ValidationProvider', ValidationProvider);
Vue.component('ValidationObserver', ValidationObserver);



Object.keys(rules).forEach(rule => {
    extend(rule, rules[rule]);
});



// import * as rules from 'vee-validate/dist/rules';
// import { messages } from 'vee-validate/dist/locale/en.json';

// Object.keys(rules).forEach(rule => {
//   extend(rule, {
//     ...rules[rule], // copies rule configuration
//     message: messages[rule] // assign message
//   });
// });
