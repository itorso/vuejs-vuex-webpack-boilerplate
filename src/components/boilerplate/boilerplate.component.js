import Vue from 'vue';

// template declaration
import template from './boilerplate.component.html';

// component declaration
export default Vue.component('boilerplate-component', {

    // html string injecton
    template: template,

    props: {
        to: String
    },

    data() {
        return {
            message: 'Hello'
        }
    }

});
