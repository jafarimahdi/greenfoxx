'use strict';

import { isMainThread } from "worker_threads";

function powerIt(baseNumber, power) {
    if (power <= 1) {
        return baseNumber;
    } else {
        return baseNumber * powerIt(baseNumber, power - 1)
    }
}
console.log(powerIt(2, 9));