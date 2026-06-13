//14
import { add, sub, mul, div } from './mathUtils.js';
console.log(add(5, 3)); 
console.log(sub(5, 3)); 
console.log(mul(5, 3)); 
try {
    console.log(div(5, 0));
} catch (err) {
    console.error(err.message); 
}


//19
import { capitalize, getFirst, getKeys } from "./index.js";
console.log(capitalize("hello"));
console.log(getFirst([10, 20, 30]));
console.log(getKeys({ name: "Ram", age: 20 }));


//63
import config1 from "./file1.js";
import config2 from "./file2.js";
console.log(config1 === config2); 


//64 
import message, { add } from "./utils.js";