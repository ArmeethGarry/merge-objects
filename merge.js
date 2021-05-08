'use strict'

export function merge ( mergeObject, ...objects) {
    for ( let obj in objects ) {
        for ( let key in Object.keys(obj) ) {
            if ( !(key in mergeObject) ) {
                mergeObject[key] = obj[key];

            }
        }
    }
    return mergeObject;
    
}