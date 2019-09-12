import axios from "axios";
import 'babel-polyfill';
import pizza from './data/pizza.js';
import { key, proxy } from '../config';

export default class Search {
    constructor(query) {
        this.query = query;
    }

    async getResults() {
        try {
            const res = await axios(`${proxy}http://food2fork.com/api/search?key=${key}&q=${this.query}`);
            this.result = res.data.recipes;

            // this.result = pizza.recipes;

            
        } catch (error) {
            alert(error);
        }
    }
}