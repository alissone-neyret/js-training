'use strict'

/*
 * Jaden Smith Case
 *
 * Make a `jadenCase` function that takes a string as parameter
 * and return the string with each words capitilized.
 *
 * Example : "How are you ?" -> "How Are You ?"
 *
 */

function jadenCase(str){
    let array1 = str.split(' ');

    for (let i=0; i<array1.length; i++){
        array1[i] = array1[i].charAt(0).toUpperCase()+array1[i].substring(1);
    }
    return array1.join(' ');
}



//* Begin of tests
const assert = require('assert')
assert.strictEqual(typeof jadenCase, 'function')
assert.strictEqual(jadenCase("mais jadore les sushis"), "Mais Jadore Les Sushis")
// End of tests */
