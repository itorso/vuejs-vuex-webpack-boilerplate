// Vue import
import Vue from 'vue';

// example es6 import
import Boilerplate from '@components/boilerplate/boilerplate.index';


// app declaration
let app = new Vue({
    el: '#app',
    template: `
        <div class="app-component">
            <boilerplate-component v-bind:to="'world'"></boilerplate-component>
        </div>
    `
});
