const quizData = [
  {
    Id: 1,
    Question: "What does JS stand for?",
    Answer: "JavaScript",
    Options: ["JavaScript", "JavaSource", "JustScript", "JumboScript"],
    Explanation: "JS stands for JavaScript, the language of the web."
  },
  {
    Id: 2,
    Question: "Who created JavaScript?",
    Answer: "Brendan Eich",
    Options: ["Brendan Eich", "Bill Gates", "James Gosling", "Dennis Ritchie"],
    Explanation: "Brendan Eich created JS in 10 days at Netscape in 1995."
  },
  {
    Id: 3,
    Question: "Which keywords declare variables?",
    Answer: "var, let, const",
    Options: ["var, let, const", "var only", "let only", "variable, const"],
    Explanation: "var is old function-scoped, let and const are modern block-scoped."
  },
  {
    Id: 4,
    Question: "Which keyword cannot be reassigned?",
    Answer: "const",
    Options: ["let", "var", "const", "All can"],
    Explanation: "const cannot be reassigned, but its object properties can be mutated."
  },
  {
    Id: 5,
    Question: "What is default value of declared but not initialized variable?",
    Answer: "undefined",
    Options: ["null", "undefined", "0", "''"],
    Explanation: "let x; => x is undefined."
  },
  {
    Id: 6,
    Question: "How many primitive data types in JS?",
    Answer: "7",
    Options: ["5", "6", "7", "8"],
    Explanation: "7 primitives: string, number, bigint, boolean, undefined, symbol, null."
  },
  {
    Id: 7,
    Question: "Which is NOT primitive?",
    Answer: "Object",
    Options: ["String", "Number", "Object", "Boolean"],
    Explanation: "Object including arrays and functions is non-primitive."
  },
  {
    Id: 8,
    Question: "What is typeof []?",
    Answer: "object",
    Options: ["array", "object", "list", "undefined"],
    Explanation: "Arrays are objects. Use Array.isArray([]) to check."
  },
  {
    Id: 9,
    Question: "What is typeof null?",
    Answer: "object",
    Options: ["null", "object", "undefined", "number"],
    Explanation: "Historic bug in JS, kept for compatibility."
  },
  {
    Id: 10,
    Question: "What is typeof function(){}?",
    Answer: "function",
    Options: ["object", "function", "method", "undefined"],
    Explanation: "Functions have typeof 'function'."
  },
  {
    Id: 11,
    Question: "Which are falsy values?",
    Answer: "false, 0, '', null, undefined, NaN, 0n",
    Options: ["false, 0, '', null, undefined, NaN, 0n", "Only false", "Only 0", "All numbers"],
    Explanation: "Exactly 7 falsy values. Everything else truthy including [] and {}."
  },
  {
    Id: 12,
    Question: "Is [] truthy?",
    Answer: "true",
    Options: ["true", "false", "null", "undefined"],
    Explanation: "Empty array is truthy. Boolean([]) === true."
  },
  {
    Id: 13,
    Question: "What is NaN?",
    Answer: "Not a Number",
    Options: ["Not a Number", "Not a Null", "No any Number", "Null and None"],
    Explanation: "NaN is result of invalid math like 0/0. NaN!== NaN."
  },
  {
    Id: 14,
    Question: "What is BigInt used for?",
    Answer: "Large integers beyond Number limit",
    Options: ["Large integers beyond Number limit", "Decimals", "Strings", "Booleans"],
    Explanation: "Create with 123n or BigInt(123)."
  },
  {
    Id: 15,
    Question: "Difference between == and ===?",
    Answer: "== checks value, === checks value and type",
    Options: ["Same", "== checks value, === checks value and type", "== checks type", "=== is assignment"],
    Explanation: "Always use === to avoid coercion bugs."
  },
  {
    Id: 16,
    Question: "What does 2 == '2' return?",
    Answer: "true",
    Options: ["true", "false", "error", "undefined"],
    Explanation: "== does type coercion."
  },
  {
    Id: 17,
    Question: "What does 2 === '2' return?",
    Answer: "false",
    Options: ["true", "false", "error", "undefined"],
    Explanation: "=== checks type, number!== string."
  },
  {
    Id: 18,
    Question: "What does?? operator do?",
    Answer: "Nullish coalescing - returns right if left is null/undefined",
    Options: ["Logical OR", "Nullish coalescing - returns right if left is null/undefined", "Optional chaining", "Spread"],
    Explanation: "a?? b returns b only if a is null/undefined, unlike ||."
  },
  {
    Id: 19,
    Question: "What does?. operator do?",
    Answer: "Optional chaining - safe nested access",
    Options: ["Optional chaining - safe nested access", "Nullish coalescing", "Spread", "Ternary"],
    Explanation: "user?.address?.city won't crash if address missing."
  },
  {
    Id: 20,
    Question: "What is spread operator?",
    Answer: "...",
    Options: ["...", "+++", "***", "??"],
    Explanation: "... expands array or object."
  },
  {
    Id: 21,
    Question: "What is rest parameter?",
    Answer: "...args collects remaining arguments",
    Options: ["...args collects remaining arguments", "Stops function", "Spreads array", "Deletes args"],
    Explanation: "function sum(...nums) collects args into array."
  },
  {
    Id: 22,
    Question: "How to get string length?",
    Answer: "str.length",
    Options: ["str.length", "str.size", "length(str)", "str.len()"],
    Explanation: "length is property, not method."
  },
  {
    Id: 23,
    Question: "Method to uppercase string?",
    Answer: "toUpperCase()",
    Options: ["toUpperCase()", "upper()", "toUpper()", "upCase()"],
    Explanation: "'hi'.toUpperCase() => 'HI'."
  },
  {
    Id: 24,
    Question: "What is template literal?",
    Answer: "String with backticks allowing ${}",
    Options: ["String with quotes", "String with backticks allowing ${}", "Number", "Boolean"],
    Explanation: "`Hello ${name}` allows interpolation and multiline."
  },
  {
    Id: 25,
    Question: "How to interpolate in template literal?",
    Answer: "${variable}",
    Options: ["${variable}", "$(variable)", "#{variable}", "%{variable}"],
    Explanation: "Use ${} inside backticks."
  },
  {
    Id: 26,
    Question: "Which splits string to array?",
    Answer: "split()",
    Options: ["split()", "slice()", "splice()", "divide()"],
    Explanation: "'a,b'.split(',') => ['a','b']."
  },
  {
    Id: 27,
    Question: "Which removes whitespace from ends?",
    Answer: "trim()",
    Options: ["trim()", "cut()", "strip()", "clean()"],
    Explanation: "trim(), trimStart(), trimEnd()."
  },
  {
    Id: 28,
    Question: "How to parse integer?",
    Answer: "parseInt()",
    Options: ["parseInt()", "parseFloat()", "toInt()", "Number.parse()"],
    Explanation: "parseInt('123px') => 123."
  },
  {
    Id: 29,
    Question: "How to parse float?",
    Answer: "parseFloat()",
    Options: ["parseFloat()", "parseInt()", "toFloat()", "float()"],
    Explanation: "parseFloat('12.34') => 12.34."
  },
  {
    Id: 30,
    Question: "What does Math.floor() do?",
    Answer: "Rounds down",
    Options: ["Rounds down", "Rounds up", "Rounds nearest", "Removes decimal"],
    Explanation: "Math.floor(4.9)=4, Math.ceil(4.1)=5."
  },
  {
    Id: 31,
    Question: "How to generate random number?",
    Answer: "Math.random()",
    Options: ["Math.random()", "random()", "Math.rand()", "Number.random()"],
    Explanation: "Returns 0 to 0.999. For 0-10: Math.floor(Math.random()*11)."
  },
  {
    Id: 32,
    Question: "What is ternary operator?",
    Answer: "condition? trueExpr : falseExpr",
    Options: ["if else", "condition? trueExpr : falseExpr", "switch", "for loop"],
    Explanation: "Short if: age>=18? 'adult' : 'minor'."
  },
  {
    Id: 33,
    Question: "Which loop best for arrays?",
    Answer: "for...of",
    Options: ["for...in", "for...of", "for...each", "while...in"],
    Explanation: "for...of gives values, for...in gives keys."
  },
  {
    Id: 34,
    Question: "What does for...in loop?",
    Answer: "Keys/indexes",
    Options: ["Values", "Keys/indexes", "Both", "Nothing"],
    Explanation: "for...in for objects, not ideal for arrays."
  },
  {
    Id: 35,
    Question: "What does break do?",
    Answer: "Exits loop",
    Options: ["Exits loop", "Skips iteration", "Restarts loop", "Stops function"],
    Explanation: "break exits, continue skips to next iteration."
  },
  {
    Id: 36,
    Question: "What does continue do?",
    Answer: "Skips current iteration",
    Options: ["Exits loop", "Skips current iteration", "Restarts", "Stops code"],
    Explanation: "continue jumps to next iteration."
  },
  {
    Id: 37,
    Question: "How to declare function?",
    Answer: "function myFunc() {}",
    Options: ["function myFunc() {}", "func myFunc() {}", "def myFunc() {}", "create myFunc() {}"],
    Explanation: "Function declaration."
  },
  {
    Id: 38,
    Question: "What is function expression?",
    Answer: "const f = function() {}",
    Options: ["function f() {}", "const f = function() {}", "Both same", "Arrow only"],
    Explanation: "Assigned to variable, not hoisted like declaration."
  },
  {
    Id: 39,
    Question: "What is arrow function?",
    Answer: "Shorter syntax with =>, no own this",
    Options: ["Normal function", "Shorter syntax with =>, no own this", "Async function", "Generator"],
    Explanation: "const add=(a,b)=>a+b."
  },
  {
    Id: 40,
    Question: "What is callback function?",
    Answer: "Function passed as argument",
    Options: ["Function that calls itself", "Function passed as argument", "Async function", "Return function"],
    Explanation: "Core to async JS."
  },
  {
    Id: 41,
    Question: "What is IIFE?",
    Answer: "Immediately Invoked Function Expression",
    Options: ["Immediately Invoked Function Expression", "If Inside Function", "Immediate Function", "Internal Function"],
    Explanation: "(function(){})() runs immediately."
  },
  {
    Id: 42,
    Question: "What is pure function?",
    Answer: "Same input same output, no side effects",
    Options: ["Function with loop", "Same input same output, no side effects", "With side effects", "Async"],
    Explanation: "Predictable and testable."
  },
  {
    Id: 43,
    Question: "What is higher-order function?",
    Answer: "Function that takes or returns another function",
    Options: ["Long function", "Function that takes or returns another function", "Async", "Loop"],
    Explanation: "map, filter, reduce are higher-order."
  },
  {
    Id: 44,
    Question: "What is default parameter?",
    Answer: "Value if argument not passed",
    Options: ["Required param", "Value if argument not passed", "Rest param", "Global param"],
    Explanation: "function greet(name='Guest'){}"
  },
  {
    Id: 45,
    Question: "What is global scope?",
    Answer: "Accessible everywhere",
    Options: ["Inside function only", "Accessible everywhere", "Inside block only", "Not accessible"],
    Explanation: "Declared outside any function/block."
  },
  {
    Id: 46,
    Question: "What is block scope?",
    Answer: "Accessible only inside {}",
    Options: ["Everywhere", "Accessible only inside {}", "Function only", "Module only"],
    Explanation: "let and const are block scoped."
  },
  {
    Id: 47,
    Question: "What is function scope?",
    Answer: "Accessible only inside function",
    Options: ["Everywhere", "Accessible only inside function", "Block only", "Module only"],
    Explanation: "var is function scoped."
  },
  {
    Id: 48,
    Question: "What is lexical scope?",
    Answer: "Scope determined by where code written",
    Options: ["Scope determined by where code written", "Runtime scope", "Global scope", "Dynamic scope"],
    Explanation: "Inner can access outer variables."
  },
  {
    Id: 49,
    Question: "What is hoisting?",
    Answer: "Declarations moved to top",
    Options: ["Moving files", "Declarations moved to top", "Hiding variable", "Deleting variable"],
    Explanation: "var and function declarations hoisted."
  },
  {
    Id: 50,
    Question: "What is Temporal Dead Zone?",
    Answer: "Time between entering scope and initialization",
    Options: ["Time between entering scope and initialization", "Dead code", "After function ends", "Global zone"],
    Explanation: "Accessing let/const before declaration = ReferenceError."
  },
  {
    Id: 51,
    Question: "What is closure?",
    Answer: "Function remembers outer variables after outer executed",
    Options: ["A loop", "Function remembers outer variables after outer executed", "Closed variable", "Object"],
    Explanation: "Enables private variables."
  },
  {
    Id: 52,
    Question: "Why use closure?",
    Answer: "Private variables and factory functions",
    Options: ["Private variables and factory functions", "Make slower", "Delete variables", "No use"],
    Explanation: "Data privacy, currying."
  },
  {
    Id: 53,
    Question: "What does 'this' refer to in regular function?",
    Answer: "Depends on how called",
    Options: ["Always window", "Depends on how called", "Always undefined", "Always object"],
    Explanation: "Method call => object, regular call => window/undefined."
  },
  {
    Id: 54,
    Question: "What does 'this' refer to in arrow function?",
    Answer: "Lexical this from outer scope",
    Options: ["Window", "Lexical this from outer scope", "Undefined", "Itself"],
    Explanation: "Arrow has no own this."
  },
  {
    Id: 55,
    Question: "What does call() do?",
    Answer: "Calls function with given this and comma args",
    Options: ["Calls function with given this and comma args", "Creates function", "Deletes this", "Binds only"],
    Explanation: "func.call(obj, a,b)"
  },
  {
    Id: 56,
    Question: "What does apply() do?",
    Answer: "Calls function with given this and array args",
    Options: ["Calls function with given this and array args", "Creates array", "Binds", "No args"],
    Explanation: "func.apply(obj, [a,b])"
  },
  {
    Id: 57,
    Question: "What does bind() do?",
    Answer: "Returns new function with bound this",
    Options: ["Returns new function with bound this", "Calls immediately", "Deletes", "Creates object"],
    Explanation: "const newFunc = func.bind(obj)"
  },
  {
    Id: 58,
    Question: "How to check if array?",
    Answer: "Array.isArray()",
    Options: ["Array.isArray()", "typeof arr==='array'", "arr.isArray()", "instanceof only"],
    Explanation: "Array.isArray([]) true."
  },
  {
    Id: 59,
    Question: "What does push() return?",
    Answer: "New length",
    Options: ["New array", "New length", "Removed element", "Undefined"],
    Explanation: "push adds to end and returns length."
  },
  {
    Id: 60,
    Question: "What does pop() return?",
    Answer: "Removed element",
    Options: ["New length", "Removed element", "New array", "Undefined"],
    Explanation: "pop removes last and returns it."
  },
  {
    Id: 61,
    Question: "What does shift() do?",
    Answer: "Removes first element",
    Options: ["Removes first element", "Removes last", "Adds first", "Adds last"],
    Explanation: "shift removes first."
  },
  {
    Id: 62,
    Question: "What does unshift() do?",
    Answer: "Adds to beginning",
    Options: ["Adds to beginning", "Adds to end", "Removes first", "Removes last"],
    Explanation: "unshift adds at start."
  },
  {
    Id: 63,
    Question: "What does slice() do?",
    Answer: "Returns shallow copy portion without mutating",
    Options: ["Returns shallow copy portion without mutating", "Mutates original", "Deletes array", "Sorts"],
    Explanation: "arr.slice(1,3) returns index 1 to 2."
  },
  {
    Id: 64,
    Question: "What does splice() do?",
    Answer: "Adds/removes and mutates original",
    Options: ["Copies array", "Adds/removes and mutates original", "Does nothing", "Sorts"],
    Explanation: "arr.splice(1,1) removes 1 at index 1."
  },
  {
    Id: 65,
    Question: "What does map() return?",
    Answer: "New array transformed",
    Options: ["Same array", "New array transformed", "Single value", "Boolean"],
    Explanation: "map never mutates original."
  },
  {
    Id: 66,
    Question: "What does filter() do?",
    Answer: "New array with elements passing condition",
    Options: ["Modifies original", "New array with elements passing condition", "Single value", "Sorts"],
    Explanation: "[1,2,3].filter(n=>n>1) => [2,3]"
  },
  {
    Id: 67,
    Question: "What does reduce() do?",
    Answer: "Reduces array to single value",
    Options: ["Creates new array", "Reduces array to single value", "Filters", "Finds element"],
    Explanation: "[1,2,3].reduce((a,b)=>a+b,0) =>6"
  },
  {
    Id: 68,
    Question: "What does find() do?",
    Answer: "Returns first element matching condition",
    Options: ["All matching", "Returns first element matching condition", "Index", "Boolean"],
    Explanation: "find returns value, findIndex returns index."
  },
  {
    Id: 69,
    Question: "What does includes() do?",
    Answer: "Checks if array contains value",
    Options: ["Checks if array contains value", "Adds value", "Removes value", "Sorts"],
    Explanation: "[1,2,3].includes(2) true."
  },
  {
    Id: 70,
    Question: "What does join() do?",
    Answer: "Joins array to string",
    Options: ["Joins array to string", "Splits string", "Merges arrays", "Sorts"],
    Explanation: "['a','b'].join('-') => 'a-b'."
  },
  {
    Id: 71,
    Question: "What does flat() do?",
    Answer: "Flattens nested arrays",
    Options: ["Flattens nested arrays", "Creates nested", "Sorts", "Filters"],
    Explanation: "[1,[2,[3]]].flat(2) => [1,2,3]."
  },
  {
    Id: 72,
    Question: "How to create object?",
    Answer: "const obj = {} or new Object()",
    Options: ["const obj = {} or new Object()", "Only new Object()", "Only {}", "Object.create only"],
    Explanation: "{} literal most common."
  },
  {
    Id: 73,
    Question: "How to access object property?",
    Answer: "obj.key or obj['key']",
    Options: ["obj.key or obj['key']", "obj->key", "obj:key", "obj(key)"],
    Explanation: "Dot and bracket notation."
  },
  {
    Id: 74,
    Question: "What does Object.keys() return?",
    Answer: "Array of keys",
    Options: ["Array of keys", "Array of values", "String", "Object"],
    Explanation: "Object.keys({a:1}) => ['a']."
  },
  {
    Id: 75,
    Question: "What does Object.values() return?",
    Answer: "Array of values",
    Options: ["Array of keys", "Array of values", "Array of entries", "String"],
    Explanation: "Object.values({a:1}) => [1]."
  },
  {
    Id: 76,
    Question: "What does Object.entries() return?",
    Answer: "Array of [key,value] pairs",
    Options: ["Keys", "Values", "Array of [key,value] pairs", "Object"],
    Explanation: "Object.entries({a:1}) => [['a',1]]."
  },
  {
    Id: 77,
    Question: "What does Object.freeze() do?",
    Answer: "Prevents adding/removing/modifying",
    Options: ["Prevents adding/removing/modifying", "Allows everything", "Only prevents adding", "Deletes object"],
    Explanation: "Shallow freeze only."
  },
  {
    Id: 78,
    Question: "What is destructuring?",
    Answer: "Unpacking values from array/object",
    Options: ["Deleting object", "Unpacking values from array/object", "Merging arrays", "Looping"],
    Explanation: "const {name}=user; const [a,b]=[1,2];"
  },
  {
    Id: 79,
    Question: "What is shallow copy?",
    Answer: "Copy first level, nested still referenced",
    Options: ["Copy first level, nested still referenced", "Copy all levels", "No copy", "Deep copy"],
    Explanation: "{...obj} is shallow."
  },
  {
    Id: 80,
    Question: "How to deep copy?",
    Answer: "structuredClone() or JSON.parse(JSON.stringify())",
    Options: ["spread", "structuredClone() or JSON.parse(JSON.stringify())", "Object.assign", "slice()"],
    Explanation: "structuredClone modern, JSON method loses functions/dates."
  },
  {
    Id: 81,
    Question: "What is prototype?",
    Answer: "Mechanism for inheritance",
    Options: ["A function", "Mechanism for inheritance", "A class", "Variable type"],
    Explanation: "Every object has [[Prototype]]."
  },
  {
    Id: 82,
    Question: "What is class?",
    Answer: "Syntactic sugar over prototype inheritance",
    Options: ["Real class like Java", "Syntactic sugar over prototype inheritance", "Object only", "Function only"],
    Explanation: "class Person{} easier syntax."
  },
  {
    Id: 83,
    Question: "What is constructor?",
    Answer: "Runs when object created with new",
    Options: ["Runs when object created with new", "Destroys object", "Normal method", "Static method"],
    Explanation: "constructor(){this.name=name}"
  },
  {
    Id: 84,
    Question: "What is extends?",
    Answer: "Create child class from parent",
    Options: ["Create child class from parent", "Add property", "Delete class", "Loop keyword"],
    Explanation: "class Child extends Parent{}"
  },
  {
    Id: 85,
    Question: "What is super()?",
    Answer: "Calls parent constructor",
    Options: ["Calls parent constructor", "Calls child", "Deletes parent", "Creates parent"],
    Explanation: "Must call super() before this in child."
  },
  {
    Id: 86,
    Question: "What is static method?",
    Answer: "Called on class itself, not instance",
    Options: ["Called on instance", "Called on class itself, not instance", "Private method", "Async method"],
    Explanation: "ClassName.method() not instance.method()."
  },
  {
    Id: 87,
    Question: "What is ES6?",
    Answer: "ECMAScript 2015 major update",
    Options: ["ECMAScript 2015 major update", "Framework", "Library", "Database"],
    Explanation: "Introduced let, const, arrow, class, Promise."
  },
  {
    Id: 88,
    Question: "What is Symbol?",
    Answer: "Unique immutable identifier",
    Options: ["Unique immutable identifier", "String", "Number", "Object"],
    Explanation: "Symbol('id') unique."
  },
  {
    Id: 89,
    Question: "What is Set?",
    Answer: "Collection of unique values",
    Options: ["Duplicates", "Collection of unique values", "Key-value", "Array with index"],
    Explanation: "new Set([1,1,2]) => {1,2}"
  },
  {
    Id: 90,
    Question: "What is Map?",
    Answer: "Key-value where keys can be any type",
    Options: ["Keys only strings", "Key-value where keys can be any type", "Unique values only", "Array"],
    Explanation: "Map allows object keys."
  },
  {
    Id: 91,
    Question: "What is synchronous code?",
    Answer: "Executed line by line, blocking",
    Options: ["Executed line by line, blocking", "Parallel", "Async", "Callback"],
    Explanation: "JS single-threaded."
  },
  {
    Id: 92,
    Question: "What is asynchronous code?",
    Answer: "Doesn't block, runs later",
    Options: ["Blocks", "Doesn't block, runs later", "Sync", "Loop"],
    Explanation: "setTimeout, fetch, Promises."
  },
  {
    Id: 93,
    Question: "What is callback hell?",
    Answer: "Nested callbacks unreadable",
    Options: ["Nested callbacks unreadable", "Good pattern", "Async pattern", "Promise pattern"],
    Explanation: "Pyramid of doom."
  },
  {
    Id: 94,
    Question: "What is Promise?",
    Answer: "Object representing eventual completion",
    Options: ["Callback", "Object representing eventual completion", "Array", "Loop"],
    Explanation: "3 states: pending, fulfilled, rejected."
  },
  {
    Id: 95,
    Question: "What are Promise states?",
    Answer: "pending, fulfilled, rejected",
    Options: ["pending, fulfilled, rejected", "start, end, stop", "open, close", "yes, no"],
    Explanation: "Initial pending, then settled."
  },
  {
    Id: 96,
    Question: "How to create Promise?",
    Answer: "new Promise((resolve, reject) => {})",
    Options: ["new Promise((resolve, reject) => {})", "Promise.create()", "createPromise()", "new Promise.create()"],
    Explanation: "resolve on success, reject on failure."
  },
  {
    Id: 97,
    Question: "What does.then() do?",
    Answer: "Handles fulfilled Promise",
    Options: ["Handles fulfilled Promise", "Handles rejected", "Creates Promise", "Deletes Promise"],
    Explanation: "promise.then(value=>{})."
  },
  {
    Id: 98,
    Question: "What does.catch() do?",
    Answer: "Handles rejected Promise",
    Options: ["Handles fulfilled", "Handles rejected Promise", "Creates Promise", "Deletes"],
    Explanation: ".catch handles errors."
  },
  {
    Id: 99,
    Question: "What does Promise.all() do?",
    Answer: "Waits for all to resolve, rejects if one rejects",
    Options: ["Waits for all to resolve, rejects if one rejects", "Waits for first", "Waits for any", "Never resolves"],
    Explanation: "Returns array of results."
  },
  {
    Id: 100,
    Question: "What does Promise.race() do?",
    Answer: "Returns first settled Promise",
    Options: ["Returns all", "Returns first settled Promise", "Returns last", "Never settles"],
    Explanation: "First to resolve/reject wins."
  },
  {
    Id: 101,
    Question: "What does async do?",
    Answer: "Makes function return Promise",
    Options: ["Makes sync", "Makes function return Promise", "Stops function", "Creates callback"],
    Explanation: "async function always returns Promise."
  },
  {
    Id: 102,
    Question: "What does await do?",
    Answer: "Pauses async function until Promise settles",
    Options: ["Pauses async function until Promise settles", "Waits 1 sec", "Stops all JS", "Creates Promise"],
    Explanation: "let data = await fetch(url)"
  },
  {
    Id: 103,
    Question: "Can await be used outside async?",
    Answer: "Only top-level in modules",
    Options: ["Yes anywhere", "Only top-level in modules", "Never", "Always"],
    Explanation: "Top-level await allowed in ES modules."
  },
  {
    Id: 104,
    Question: "What is Event Loop?",
    Answer: "Mechanism handling async via queues",
    Options: ["Loop statement", "Mechanism handling async via queues", "For loop", "While loop"],
    Explanation: "Call stack + Web APIs + queues."
  },
  {
    Id: 105,
    Question: "What is microtask?",
    Answer: "Promise callbacks",
    Options: ["setTimeout", "Promise callbacks", "setInterval", "UI events"],
    Explanation: "Microtasks higher priority."
  },
  {
    Id: 106,
    Question: "What is macrotask?",
    Answer: "setTimeout, setInterval, I/O",
    Options: ["Promise.then", "setTimeout, setInterval, I/O", "queueMicrotask", "await"],
    Explanation: "Runs after microtasks."
  },
  {
    Id: 107,
    Question: "What does DOM stand for?",
    Answer: "Document Object Model",
    Options: ["Document Object Model", "Data Object Model", "Digital Object Model", "Document Order Model"],
    Explanation: "Tree representation of HTML."
  },
  {
    Id: 108,
    Question: "How to select by id?",
    Answer: "document.getElementById('id')",
    Options: ["document.getElementById('id')", "document.getElement('id')", "queryId()", "getId()"],
    Explanation: "Most performant for id."
  },
  {
    Id: 109,
    Question: "How to select with CSS selector?",
    Answer: "document.querySelector()",
    Options: ["getElement", "document.querySelector()", "query()", "select()"],
    Explanation: "querySelector first match, querySelectorAll all matches."
  },
  {
    Id: 110,
    Question: "Difference innerText vs innerHTML?",
    Answer: "innerText text only, innerHTML parses HTML",
    Options: ["Same", "innerText text only, innerHTML parses HTML", "innerHTML text only", "innerText parses HTML"],
    Explanation: "Use textContent for performance."
  },
  {
    Id: 111,
    Question: "How to create element?",
    Answer: "document.createElement('div')",
    Options: ["document.createElement('div')", "newElement()", "createElement()", "new Element()"],
    Explanation: "Then appendChild or append."
  },
  {
    Id: 112,
    Question: "What is event bubbling?",
    Answer: "Event propagates child to parent",
    Options: ["Event propagates child to parent", "Parent to child", "No propagation", "Stops"],
    Explanation: "Click button bubbles to div, body, document."
  },
  {
    Id: 113,
    Question: "What is event capturing?",
    Answer: "Event propagates parent to child",
    Options: ["Child to parent", "Event propagates parent to child", "No propagation", "Stops"],
    Explanation: "Capturing parent first."
  },
  {
    Id: 114,
    Question: "How to stop bubbling?",
    Answer: "event.stopPropagation()",
    Options: ["event.stopPropagation()", "event.stop()", "event.prevent()", "event.halt()"],
    Explanation: "Stops bubbling up."
  },
  {
    Id: 115,
    Question: "What does preventDefault() do?",
    Answer: "Prevents default browser behavior",
    Options: ["Stops bubbling", "Prevents default browser behavior", "Creates event", "Starts event"],
    Explanation: "e.preventDefault() on form submit prevents reload."
  },
  {
    Id: 116,
    Question: "What is event delegation?",
    Answer: "Listener on parent to handle child events",
    Options: ["Listener each child", "Listener on parent to handle child events", "Removing listeners", "Creating events"],
    Explanation: "Efficient for dynamic lists."
  },
  {
    Id: 117,
    Question: "What is localStorage?",
    Answer: "Browser storage persists after close",
    Options: ["Temporary", "Browser storage persists after close", "Server storage", "Session only"],
    Explanation: "setItem, getItem, ~5MB."
  },
  {
    Id: 118,
    Question: "What is sessionStorage?",
    Answer: "Cleared when tab closed",
    Options: ["Persists forever", "Cleared when tab closed", "Server storage", "Same as localStorage"],
    Explanation: "Per tab storage."
  },
  {
    Id: 119,
    Question: "Difference localStorage vs cookies?",
    Answer: "localStorage 5MB not sent to server, cookies 4KB sent",
    Options: ["Same", "localStorage 5MB not sent to server, cookies 4KB sent", "Cookies bigger", "localStorage sent"],
    Explanation: "Cookies sent with every HTTP request."
  },
  {
    Id: 120,
    Question: "What does fetch() do?",
    Answer: "Makes HTTP request returns Promise",
    Options: ["Makes HTTP request returns Promise", "Creates DOM", "Stores data", "Loops"],
    Explanation: "fetch(url).then(res=>res.json())"
  },
  {
    Id: 121,
    Question: "What does setTimeout do?",
    Answer: "Executes function after delay",
    Options: ["Executes function after delay", "Executes immediately", "Repeats forever", "Stops execution"],
    Explanation: "setTimeout(fn, 1000) runs after 1s."
  },
  {
    Id: 122,
    Question: "What does setInterval do?",
    Answer: "Executes repeatedly at interval",
    Options: ["Once", "Executes repeatedly at interval", "Stops", "Clears timeout"],
    Explanation: "clearInterval(id) to stop."
  },
  {
    Id: 123,
    Question: "What is try...catch for?",
    Answer: "Error handling",
    Options: ["Looping", "Error handling", "Creating function", "Styling"],
    Explanation: "try{ risky }catch(e){ handle }finally{}"
  },
  {
    Id: 124,
    Question: "What does finally do?",
    Answer: "Always executes",
    Options: ["Only on error", "Always executes", "Only on success", "Never"],
    Explanation: "Cleanup code."
  },
  {
    Id: 125,
    Question: "How to throw error?",
    Answer: "throw new Error('message')",
    Options: ["throw new Error('message')", "error('message')", "throw error", "new Error()"],
    Explanation: "Throw creates exception."
  },
  {
    Id: 126,
    Question: "What is debounce?",
    Answer: "Delays until pause in events",
    Options: ["Immediate", "Delays until pause in events", "Repeats", "Stops"],
    Explanation: "Search input: wait until user stops typing."
  },
  {
    Id: 127,
    Question: "What is throttle?",
    Answer: "At most once per interval",
    Options: ["Once", "At most once per interval", "Delays forever", "Stops"],
    Explanation: "Scroll events every 100ms."
  },
  {
    Id: 128,
    Question: "What is memoization?",
    Answer: "Caching results for same inputs",
    Options: ["Caching results for same inputs", "Deleting cache", "Memory leak", "Loop optimization"],
    Explanation: "Avoid recalculation."
  },
  {
    Id: 129,
    Question: "What is generator function?",
    Answer: "Function that can pause with yield",
    Options: ["Normal function", "Function that can pause with yield", "Arrow function", "Async function"],
    Explanation: "function* gen(){ yield 1; }"
  },
  {
    Id: 130,
    Question: "What does yield do?",
    Answer: "Pauses generator and returns value",
    Options: ["Pauses generator and returns value", "Stops permanently", "Restarts", "Deletes"],
    Explanation: "next() resumes after yield."
  },
  {
    Id: 131,
    Question: "What is strict mode?",
    Answer: "'use strict' enforces stricter parsing",
    Options: ["'use strict' enforces stricter parsing", "Loose mode", "No effect", "Stops JS"],
    Explanation: "Prevents silent errors."
  },
  {
    Id: 132,
    Question: "What is JSON?",
    Answer: "JavaScript Object Notation, lightweight format",
    Options: ["JavaScript Object Notation, lightweight format", "Java Syntax", "JS Only", "Database"],
    Explanation: "stringify to string, parse to object."
  },
  {
    Id: 133,
    Question: "What does JSON.parse() do?",
    Answer: "Converts JSON string to object",
    Options: ["Object to string", "Converts JSON string to object", "Creates JSON", "Deletes JSON"],
    Explanation: "JSON.parse('{\"a\":1}') => {a:1}"
  },
  {
    Id: 134,
    Question: "What does JSON.stringify() do?",
    Answer: "Converts object to JSON string",
    Options: ["String to object", "Converts object to JSON string", "Parses JSON", "Creates object"],
    Explanation: "JSON.stringify({a:1}) => '{\"a\":1}'"
  },
  {
    Id: 135,
    Question: "Output of typeof typeof 1?",
    Answer: "string",
    Options: ["number", "string", "object", "undefined"],
    Explanation: "typeof 1 is 'number', typeof 'number' is 'string'."
  },
  {
    Id: 136,
    Question: "Output of 1 + '1'?",
    Answer: "'11'",
    Options: ["2", "'11'", "11", "Error"],
    Explanation: "+ with string triggers concatenation."
  },
  {
    Id: 137,
    Question: "Output of '5' - 2?",
    Answer: "3",
    Options: ["3", "'52'", "Error", "'3'"],
    Explanation: "- converts to number."
  },
  {
    Id: 138,
    Question: "Output of 0 == false?",
    Answer: "true",
    Options: ["true", "false", "error", "null"],
    Explanation: "Coercion: 0 == false true."
  },
  {
    Id: 139,
    Question: "Output of 0 === false?",
    Answer: "false",
    Options: ["true", "false", "error", "null"],
    Explanation: "Strict: number vs boolean false."
  },
  {
    Id: 140,
    Question: "Which array method mutates?",
    Answer: "splice(), sort(), reverse(), push(), pop()",
    Options: ["map(), filter()", "splice(), sort(), reverse(), push(), pop()", "slice(), concat()", "All mutate"],
    Explanation: "Mutating methods change original array."
  },
  {
    Id: 141,
    Question: "Which array method does NOT mutate?",
    Answer: "map(), filter(), slice(), concat()",
    Options: ["splice()", "map(), filter(), slice(), concat()", "push()", "sort()"],
    Explanation: "Non-mutating returns new array."
  },
  {
    Id: 142,
    Question: "Difference null vs undefined?",
    Answer: "undefined not assigned, null intentional empty",
    Options: ["Same", "undefined not assigned, null intentional empty", "null not assigned", "undefined intentional"],
    Explanation: "let x; undefined, let y=null; empty."
  },
  {
    Id: 143,
    Question: "What does Promise.allSettled() do?",
    Answer: "Waits for all to settle regardless reject",
    Options: ["Rejects if one rejects", "Waits for all to settle regardless reject", "First only", "Never settles"],
    Explanation: "Unlike Promise.all, never rejects."
  },
  {
    Id: 144,
    Question: "What does Promise.any() do?",
    Answer: "First fulfilled, ignores rejections unless all reject",
    Options: ["First settled", "First fulfilled, ignores rejections unless all reject", "Returns all", "Last"],
    Explanation: "If all reject, throws AggregateError."
  },
  {
    Id: 145,
    Question: "What is prototype chain?",
    Answer: "Chain of prototypes for inheritance lookup",
    Options: ["Array of prototypes", "Chain of prototypes for inheritance lookup", "Loop", "Function chain"],
    Explanation: "If property not found, looks up chain."
  },
  {
    Id: 146,
    Question: "What does Object.create() do?",
    Answer: "Creates new object with specified prototype",
    Options: ["Creates array", "Creates new object with specified prototype", "Deletes object", "Copies object"],
    Explanation: "Object.create(proto) inherits from proto."
  },
  {
    Id: 147,
    Question: "What is factory function?",
    Answer: "Function that returns new object",
    Options: ["Function that returns new object", "Creates class", "Constructor", "Loop function"],
    Explanation: "function createUser(name){return {name}}"
  },
  {
    Id: 148,
    Question: "What is constructor function?",
    Answer: "Function used with new to create objects",
    Options: ["Normal function", "Function used with new to create objects", "Factory", "Arrow"],
    Explanation: "function Person(name){this.name=name} new Person('John')"
  },
  {
    Id: 149,
    Question: "What does instanceof do?",
    Answer: "Checks if object is instance of constructor",
    Options: ["Checks type", "Checks if object is instance of constructor", "Creates instance", "Deletes instance"],
    Explanation: "[] instanceof Array true."
  },
  {
    Id: 150,
    Question: "What is recursion?",
    Answer: "Function that calls itself",
    Options: ["Loop", "Function that calls itself", "Callback", "Promise"],
    Explanation: "function factorial(n){if(n<=1)return 1;return n*factorial(n-1)}"
  },
  {
    Id: 151,
    Question: "What is currying?",
    Answer: "Transform f(a,b) to f(a)(b)",
    Options: ["Transform f(a,b) to f(a)(b)", "Loop function", "Async function", "Callback"],
    Explanation: "const add=a=>b=>a+b; add(2)(3)=5"
  },
  {
    Id: 152,
    Question: "What does Array.from() do?",
    Answer: "Creates array from iterable",
    Options: ["Creates object", "Creates array from iterable", "Creates string", "Deletes array"],
    Explanation: "Array.from('abc')=>['a','b','c']"
  },
  {
    Id: 153,
    Question: "What is WeakMap?",
    Answer: "Map where keys weakly referenced and must be objects",
    Options: ["Same as Map", "Map where keys weakly referenced and must be objects", "Array", "Set"],
    Explanation: "Allows garbage collection, no iteration."
  },
  {
    Id: 154,
    Question: "What is WeakSet?",
    Answer: "Set of objects weakly referenced",
    Options: ["Any values", "Set of objects weakly referenced", "Same as Set", "Array"],
    Explanation: "Only stores objects weakly."
  },
  {
    Id: 155,
    Question: "What is immutability?",
    Answer: "Data cannot be changed after creation",
    Options: ["Can be changed", "Data cannot be changed after creation", "Deletes", "Loop never ends"],
    Explanation: "Strings immutable, objects mutable by default."
  },
  {
    Id: 156,
    Question: "What is use of void 0?",
    Answer: "Returns undefined",
    Options: ["undefined", "null", "0", "void"],
    Explanation: "void operator returns undefined."
  },
  {
    Id: 157,
    Question: "What is logical && used for?",
    Answer: "First falsy or last truthy, conditional rendering",
    Options: ["Only boolean", "First falsy or last truthy, conditional rendering", "Only if", "No use"],
    Explanation: "true && 'hi' => 'hi', used in React {condition && <Comp/>}"
  },
  {
    Id: 158,
    Question: "What is logical || used for?",
    Answer: "First truthy or last falsy, defaults",
    Options: ["First truthy or last falsy, defaults", "Only boolean", "No use", "Error"],
    Explanation: "0 || 'default' => 'default', but?? better for null/undefined only."
  },
  {
    Id: 159,
    Question: "What is anonymous function?",
    Answer: "Function without name",
    Options: ["Named function", "Function without name", "Arrow only", "Async only"],
    Explanation: "const f=function(){} anonymous."
  },
  {
    Id: 160,
    Question: "What is event loop order?",
    Answer: "Call stack -> Microtasks -> Macrotask -> Render",
    Options: ["Macrotask -> Microtask", "Call stack -> Microtasks -> Macrotask -> Render", "Render first", "No order"],
    Explanation: "Promises before setTimeout before render."
  },
    {
    Id: 161,
    Question: "What is the difference between var, let, const in hoisting?",
    Answer: "var is hoisted with undefined, let/const hoisted but in TDZ",
    Options: ["All same", "var is hoisted with undefined, let/const hoisted but in TDZ", "let is hoisted, var not", "const not hoisted"],
    Explanation: "var declarations are hoisted and initialized as undefined. let/const are hoisted but accessing them before declaration throws ReferenceError."
  },
  {
    Id: 162,
    Question: "What is output of console.log(a); var a=5?",
    Answer: "undefined",
    Options: ["5", "undefined", "ReferenceError", "null"],
    Explanation: "var a is hoisted as undefined, so first log is undefined."
  },
  {
    Id: 163,
    Question: "What is output of console.log(b); let b=5?",
    Answer: "ReferenceError",
    Options: ["undefined", "5", "ReferenceError", "null"],
    Explanation: "let is in Temporal Dead Zone before initialization, causes ReferenceError."
  },
  {
    Id: 164,
    Question: "What does use strict change about this?",
    Answer: "this is undefined in regular function call instead of window",
    Options: ["this is always window", "this is undefined in regular function call instead of window", "this is null", "No change"],
    Explanation: "In strict mode, regular function call has this=undefined, not window, preventing accidental globals."
  },
  {
    Id: 165,
    Question: "What is first-class function?",
    Answer: "Functions can be assigned, passed, returned like values",
    Options: ["Functions are objects", "Functions can be assigned, passed, returned like values", "Functions are classes", "Functions are loops"],
    Explanation: "In JS, functions are first-class citizens, you can store them in variables and pass them around."
  },
  {
    Id: 166,
    Question: "What is callback queue?",
    Answer: "Queue holding async callbacks waiting for call stack empty",
    Options: ["Call stack itself", "Queue holding async callbacks waiting for call stack empty", "Array of functions", "DOM queue"],
    Explanation: "setTimeout callbacks go to macrotask queue, executed when call stack empty."
  },
  {
    Id: 167,
    Question: "What does queueMicrotask() do?",
    Answer: "Queues function as microtask to run before next render",
    Options: ["Queues macrotask", "Queues function as microtask to run before next render", "Creates promise", "Deletes queue"],
    Explanation: "queueMicrotask(()=>{}) runs after current task, before macrotasks."
  },
  {
    Id: 168,
    Question: "What is difference between forEach and map?",
    Answer: "forEach returns undefined, map returns new array",
    Options: ["Same", "forEach returns undefined, map returns new array", "forEach returns array", "map returns undefined"],
    Explanation: "Use forEach for side effects, map for transforming data."
  },
  {
    Id: 169,
    Question: "What does sort() do without compare function?",
    Answer: "Converts to string and sorts by UTF-16 code",
    Options: ["Sorts numerically", "Converts to string and sorts by UTF-16 code", "Does nothing", "Reverses"],
    Explanation: "[10,2,1].sort() => [1,10,2]. Always use compare: .sort((a,b)=>a-b) for numbers."
  },
  {
    Id: 170,
    Question: "How to sort numbers correctly?",
    Answer: "arr.sort((a,b)=>a-b)",
    Options: ["arr.sort()", "arr.sort((a,b)=>a-b)", "arr.order()", "arr.sortNumbers()"],
    Explanation: "Compare function: negative a before b, positive b before a."
  },
  {
    Id: 171,
    Question: "What does reverse() do?",
    Answer: "Reverses array and mutates original",
    Options: ["Returns new reversed array", "Reverses array and mutates original", "Sorts array", "Filters array"],
    Explanation: "reverse() mutates. For non-mutating in ES2023 use toReversed()."
  },
  {
    Id: 172,
    Question: "What is Object.seal()?",
    Answer: "Prevents adding/deleting but allows modifying existing properties",
    Options: ["Prevents everything like freeze", "Prevents adding/deleting but allows modifying existing properties", "Allows everything", "Deletes object"],
    Explanation: "seal() vs freeze(): seal allows changing existing property values, freeze doesn't."
  },
  {
    Id: 173,
    Question: "What is Object.preventExtensions()?",
    Answer: "Prevents adding new properties but allows modifying/deleting existing",
    Options: ["Prevents adding only", "Prevents adding new properties but allows modifying/deleting existing", "Prevents everything", "Allows everything"],
    Explanation: "Least strict: preventExtensions < seal < freeze."
  },
  {
    Id: 174,
    Question: "What is getter and setter?",
    Answer: "Methods to get and set property value with custom logic",
    Options: ["Normal functions", "Methods to get and set property value with custom logic", "Private variables", "Async methods"],
    Explanation: "get prop(){return this._prop} set prop(val){this._prop=val}"
  },
  {
    Id: 175,
    Question: "What does instanceof check?",
    Answer: "If prototype chain contains constructor's prototype",
    Options: ["Type of value", "If prototype chain contains constructor's prototype", "If object created", "If object deleted"],
    Explanation: "obj instanceof Class checks if Class.prototype is in obj's prototype chain."
  },
  {
    Id: 176,
    Question: "What is difference between == [] and == ![]?",
    Answer: "[]==[] false (different ref), []==![] true due to coercion",
    Options: ["Both true", "[]==[] false (different ref), []==![] true due to coercion", "Both false", "Error"],
    Explanation: "[]==[] compares references (false). []==![] => []==false => true due to coercion."
  },
  {
    Id: 177,
    Question: "What does 0.1 + 0.2 equal in JS?",
    Answer: "0.30000000000000004",
    Options: ["0.3", "0.30000000000000004", "0.4", "Error"],
    Explanation: "Floating point precision issue due to binary representation. Use (0.1+0.2).toFixed(1)."
  },
  {
    Id: 178,
    Question: "How to fix floating point precision?",
    Answer: "Use toFixed(), Math.round(), or libraries like decimal.js",
    Options: ["Use parseInt", "Use toFixed(), Math.round(), or libraries like decimal.js", "No fix", "Use Number()"],
    Explanation: "JS uses IEEE 754 double precision."
  },
  {
    Id: 179,
    Question: "What is Symbol.toPrimitive?",
    Answer: "Symbol to customize object to primitive conversion",
    Options: ["Converts to symbol", "Symbol to customize object to primitive conversion", "Creates primitive", "Deletes primitive"],
    Explanation: "obj[Symbol.toPrimitive] = (hint)=> hint=='string'? 'str' : 123"
  },
  {
    Id: 180,
    Question: "What does Proxy do?",
    Answer: "Wraps object to intercept operations like get, set",
    Options: ["Creates object", "Wraps object to intercept operations like get, set", "Deletes object", "Copies object"],
    Explanation: "new Proxy(target, {get(){...}, set(){...}}) for validation, logging."
  },
  {
    Id: 181,
    Question: "What does Reflect do?",
    Answer: "Built-in object providing methods for interceptable operations",
    Options: ["Reflects object", "Built-in object providing methods for interceptable operations", "Creates reflection", "Deletes"],
    Explanation: "Reflect.get(obj, 'prop') same as obj.prop but as function. Used with Proxy."
  },
  {
    Id: 182,
    Question: "What is module scope?",
    Answer: "Variables in module are scoped to that file",
    Options: ["Global scope", "Variables in module are scoped to that file", "Block scope", "Function scope"],
    Explanation: "ES modules have own scope, not polluting global."
  },
  {
    Id: 183,
    Question: "What is dynamic import()?",
    Answer: "import() returns Promise and loads module dynamically",
    Options: ["Static import", "import() returns Promise and loads module dynamically", "Creates module", "Deletes module"],
    Explanation: "const mod = await import('./module.js') loads on demand for code splitting."
  },
  {
    Id: 184,
    Question: "What is tree shaking?",
    Answer: "Removing unused code during bundling",
    Options: ["Shaking tree", "Removing unused code during bundling", "Adding code", "Looping code"],
    Explanation: "Bundlers like Webpack/Vite remove unused exports if using ES modules."
  },
  {
    Id: 185,
    Question: "What is difference between nullish coalescing and OR operator?",
    Answer: "?? checks null/undefined only, || checks any falsy",
    Options: ["Same", "?? checks null/undefined only, || checks any falsy", "|| checks null only", "?? checks falsy"],
    Explanation: "0 ?? 'default' => 0, 0 || 'default' => 'default'. Use ?? for defaults when 0 or '' valid."
  },
  {
    Id: 186,
    Question: "What does Array.prototype.at() do?",
    Answer: "Returns element at index, negative index from end",
    Options: ["Adds element", "Returns element at index, negative index from end", "Removes element", "Sorts"],
    Explanation: "arr.at(-1) returns last element, better than arr[arr.length-1]."
  },
  {
    Id: 187,
    Question: "What are new array methods toReversed, toSorted, toSpliced?",
    Answer: "Non-mutating versions of reverse, sort, splice from ES2023",
    Options: ["Mutating versions", "Non-mutating versions of reverse, sort, splice from ES2023", "Deprecated methods", "Loop methods"],
    Explanation: "arr.toSorted() returns new sorted array, original unchanged, great for React state."
  },
  {
    Id: 188,
    Question: "What does structuredClone() support that JSON method doesn't?",
    Answer: "Clones Dates, Maps, Sets, circular refs, etc.",
    Options: ["Nothing extra", "Clones Dates, Maps, Sets, circular refs, etc.", "Only strings", "Only numbers"],
    Explanation: "JSON.parse(JSON.stringify()) loses Date (becomes string), functions, undefined, Maps, Sets."
  },
  {
    Id: 189,
    Question: "What is AbortController used for?",
    Answer: "To abort fetch requests and other async operations",
    Options: ["To create controller", "To abort fetch requests and other async operations", "To start fetch", "To loop fetch"],
    Explanation: "const controller = new AbortController(); fetch(url, {signal: controller.signal}); controller.abort()"
  },
  {
    Id: 190,
    Question: "What is difference between fetch failing and HTTP error?",
    Answer: "fetch only rejects on network error, not on 404/500, need to check response.ok",
    Options: ["fetch rejects on 404", "fetch only rejects on network error, not on 404/500, need to check response.ok", "Same", "fetch never rejects"],
    Explanation: "if(!response.ok) throw new Error() needed for HTTP errors."
  },
  {
    Id: 191,
    Question: "What does finally do in Promise chain?",
    Answer: "Runs regardless of resolve/reject",
    Options: ["Only on resolve", "Only on reject", "Runs regardless of resolve/reject", "Never runs"],
    Explanation: ".finally(()=>{cleanup}) runs after then/catch."
  },
  {
    Id: 192,
    Question: "What is difference between function declaration and expression hoisting?",
    Answer: "Declarations fully hoisted, expressions not",
    Options: ["Same hoisting", "Declarations fully hoisted, expressions not", "Expressions hoisted", "None hoisted"],
    Explanation: "function foo(){} hoisted fully, const foo=function(){} not, calling before throws ReferenceError."
  },
  {
    Id: 193,
    Question: "What is Temporal API?",
    Answer: "Modern date/time API replacing Date, fixes Date issues",
    Options: ["Old Date API", "Modern date/time API replacing Date, fixes Date issues", "Time loop", "Timer API"],
    Explanation: "Temporal.PlainDate, Temporal.ZonedDateTime modern replacement for problematic Date object."
  },
  {
    Id: 194,
    Question: "What is difference between deep equality and shallow equality?",
    Answer: "Shallow compares first level, deep compares nested levels",
    Options: ["Same", "Shallow compares first level, deep compares nested levels", "Shallow is deep", "Deep is shallow"],
    Explanation: "Shallow: a===b or Object.is. Deep: recursive comparison of all nested properties."
  },
  {
    Id: 195,
    Question: "What does Object.is() do vs ===?",
    Answer: "Similar to === but treats NaN equal to NaN and -0 not equal to +0",
    Options: ["Same as ===", "Similar to === but treats NaN equal to NaN and -0 not equal to +0", "Same as ==", "Creates object"],
    Explanation: "Object.is(NaN, NaN) true, NaN===NaN false. Object.is(-0,+0) false, -0===+0 true."
  },
  {
    Id: 196,
    Question: "What is the output of typeof NaN?",
    Answer: "number",
    Options: ["NaN", "number", "undefined", "object"],
    Explanation: "NaN is type number, though it's Not-a-Number."
  },
  {
    Id: 197,
    Question: "What is the output of NaN === NaN?",
    Answer: "false",
    Options: ["true", "false", "error", "undefined"],
    Explanation: "NaN is not equal to itself. Use Number.isNaN() or Object.is(NaN, NaN)."
  },
  {
    Id: 198,
    Question: "What is the difference between Map and Object?",
    Answer: "Map keys any type, maintains insertion order, better performance for frequent add/remove",
    Options: ["Same", "Map keys any type, maintains insertion order, better performance for frequent add/remove", "Object keys any type", "Map slower"],
    Explanation: "Use Map when keys unknown or not strings, frequent changes."
  },
  {
    Id: 199,
    Question: "What does BigInt(9007199254740991) + 1n equal?",
    Answer: "9007199254740992n",
    Options: ["9007199254740992n", "9007199254740991", "Error", "undefined"],
    Explanation: "BigInt can handle beyond Number.MAX_SAFE_INTEGER (9007199254740991)."
  },
  {
    Id: 200,
    Question: "What is the purpose of requestAnimationFrame?",
    Answer: "To run animation before next repaint for smooth 60fps",
    Options: ["To set timeout", "To run animation before next repaint for smooth 60fps", "To fetch data", "To stop animation"],
    Explanation: "requestAnimationFrame(callback) better than setTimeout for animations, syncs with browser repaint."
  },
  {
    Id: 201,
    Question: "What is IntersectionObserver?",
    Answer: "API to observe when element enters/exits viewport",
    Options: ["Observes intersection of arrays", "API to observe when element enters/exits viewport", "Observes DOM changes", "Observes fetch"],
    Explanation: "Used for lazy loading, infinite scroll, ads visibility."
  },
  {
    Id: 202,
    Question: "What is MutationObserver?",
    Answer: "Observes DOM changes like added/removed nodes",
    Options: ["Observes mutations of array", "Observes DOM changes like added/removed nodes", "Observes intersection", "Observes fetch"],
    Explanation: "new MutationObserver(callback).observe(node, {childList:true})"
  },
  {
    Id: 203,
    Question: "What is Web Worker?",
    Answer: "Runs JS in background thread, doesn't block main thread",
    Options: ["Runs JS in main thread", "Runs JS in background thread, doesn't block main thread", "Worker for DOM", "Server worker"],
    Explanation: "new Worker('worker.js') for heavy calculations."
  },
  {
    Id: 204,
    Question: "What is Service Worker?",
    Answer: "Proxy between browser and network for offline, caching, push",
    Options: ["Background thread only", "Proxy between browser and network for offline, caching, push", "Web worker same", "Server only"],
    Explanation: "Enables PWA offline capability."
  },
  {
    Id: 205,
    Question: "What is the difference between let in for loop vs var?",
    Answer: "let creates new binding per iteration, var shares same binding",
    Options: ["Same", "let creates new binding per iteration, var shares same binding", "var creates new", "let shares"],
    Explanation: "Classic closure bug: for(var i=0;i<3;i++){setTimeout(()=>console.log(i),0)} logs 3,3,3 but let logs 0,1,2."
  },
  {
    Id: 206,
    Question: "What does Array.prototype.with() do?",
    Answer: "Non-mutating version that returns new array with element at index replaced",
    Options: ["Mutates array", "Non-mutating version that returns new array with element at index replaced", "Adds element", "Removes element"],
    Explanation: "ES2023: arr.with(0, 99) returns new array with index 0 = 99."
  },
  {
    Id: 207,
    Question: "What is Iterator protocol?",
    Answer: "Object with next() method returning {value, done}",
    Options: ["Loop protocol", "Object with next() method returning {value, done}", "Array protocol", "Function protocol"],
    Explanation: "Makes object iterable with for...of, spread."
  },
  {
    Id: 208,
    Question: "What is Iterable protocol?",
    Answer: "Object with Symbol.iterator method returning iterator",
    Options: ["Object with iterator", "Object with Symbol.iterator method returning iterator", "Array only", "Object only"],
    Explanation: "Arrays, strings, Maps, Sets are iterable."
  },
  {
    Id: 209,
    Question: "What does generator return?",
    Answer: "Iterator object that follows iterator protocol",
    Options: ["Array", "Iterator object that follows iterator protocol", "Promise", "Object"],
    Explanation: "Generator function returns iterator, each next() yields value."
  },
  {
    Id: 210,
    Question: "What is tail call optimization?",
    Answer: "Optimization where recursive call is last operation, reuses stack frame",
    Options: ["Optimizes tail", "Optimization where recursive call is last operation, reuses stack frame", "Removes tail", "Adds stack frame"],
    Explanation: "ES6 spec includes TCO but only implemented in Safari. function fact(n, acc=1){ return n<=1?acc:fact(n-1,n*acc) } tail recursive."
  }
  
];





/* ============================================================
   Quizbee — Quiz + Welcome Modal
   ============================================================ */

/* ---------- Element refs ---------- */
const scoreEl  = document.querySelector('.score');
const question = document.querySelector('.question');
const options  = document.querySelectorAll('.option-btn');
const desc     = document.querySelector('.description');
const id       = document.querySelector('.id');
const nextBtn  = document.querySelector('.next');
const prevBtn  = document.querySelector('.prev');
const resetBtn = document.querySelector('.reset'); // add to HTML if you want it

/* ---------- State ---------- */
let currentIndex = 0;
let scoreCount   = 0;
let answered     = {};

const STORAGE_KEY = 'quizProgress';

/* ---------- Helpers ---------- */
function shuffleArray(arr) {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

/* ---------- Local storage ---------- */
function saveProgress() {
    const data = { currentIndex, scoreCount, answered };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

function loadProgress() {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
        try {
            const data = JSON.parse(saved);
            currentIndex = data.currentIndex || 0;
            scoreCount   = data.scoreCount   || 0;
            answered     = data.answered     || {};
            scoreEl.textContent = scoreCount;
            return true;
        } catch (e) {
            console.log("Failed to load progress");
        }
    }
    return false;
}

function clearProgress() {
    localStorage.removeItem(STORAGE_KEY);
    currentIndex = 0;
    scoreCount   = 0;
    answered     = {};
    scoreEl.textContent = 0;
    options.forEach(btn => btn.style.display = 'block');
    nextBtn.disabled = false;
    if (resetBtn) resetBtn.disabled = true;
    loadQuestion(currentIndex);
}

/* ---------- Render ---------- */
function loadQuestion(i) {
    const quiz = quizData[i];
    const shuffledOptions = shuffleArray(quiz.Options);

    id.textContent = quiz.Id;
    question.textContent = quiz.Question;
    desc.textContent = answered[i] ? quiz.Explanation : 'Answer questions to earn points...';

    options.forEach((btn, index) => {
        btn.textContent = shuffledOptions[index] || '';
        btn.style.display = 'block';
        btn.disabled = !!answered[i];
        btn.classList.remove('correct', 'wrong');

        if (answered[i]) {
            if (btn.textContent.trim() === quiz.Answer) btn.classList.add('correct');
            if (btn.textContent.trim() === answered[i].selected &&
                answered[i].selected !== quiz.Answer) {
                btn.classList.add('wrong');
            }
        }
    });

    prevBtn.disabled = i === 0;
    if (resetBtn) resetBtn.disabled = i === 0;
    nextBtn.disabled = false;
    nextBtn.innerHTML = i === quizData.length - 1
        ? '<i class="fa-solid fa-check-circle"></i>'
        : '<i class="fa-solid fa-arrow-right"></i>';

    saveProgress();
}

/* ---------- Answer handling ---------- */
function handleOptionClick(e) {
    const btn = e.target.closest('.option-btn');
    if (!btn || btn.disabled) return;

    const quiz = quizData[currentIndex];
    const answer = quiz.Answer;
    const selected = btn.textContent.trim();

    if (answered[currentIndex]) return;

    answered[currentIndex] = { selected, isCorrect: selected === answer };

    if (selected === answer) {
        btn.classList.add('correct');
        scoreCount++;
    } else {
        btn.classList.add('wrong');
        options.forEach(b => {
            if (b.textContent.trim() === answer) b.classList.add('correct');
        });
    }

    desc.textContent = quiz.Explanation;
    scoreEl.textContent = scoreCount;
    options.forEach(b => b.disabled = true);

    saveProgress();
}

document.querySelector('.options-container')?.addEventListener('click', handleOptionClick);
options.forEach(btn => btn.addEventListener('click', handleOptionClick));

/* ---------- Navigation ---------- */
nextBtn.addEventListener('click', () => {
    if (currentIndex < quizData.length - 1) {
        currentIndex++;
        loadQuestion(currentIndex);
    } else {
        question.textContent = "Quiz Finished!";
        desc.textContent = `Final score: ${scoreCount} / ${quizData.length}`;
        options.forEach(btn => btn.style.display = 'none');
        nextBtn.disabled = true;
        id.textContent = 'Done';
    }
});

prevBtn.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        loadQuestion(currentIndex);
    }
});

if (resetBtn) {
    resetBtn.addEventListener('click', () => {
        if (confirm("Reset quiz? All progress will be lost.")) {
            clearProgress();
        }
    });
}

/* ============================================================
   Welcome modal
   ============================================================ */
const welcomeModal = document.getElementById('welcomeModal');
const welcomeStart = document.getElementById('welcomeStart');
const welcomeSkip  = document.getElementById('welcomeSkip');
const welcomeCard  = welcomeModal?.querySelector('.welcome-card');

const WELCOME_KEY = 'quizbee:welcome-dismissed';
let lastFocused = null;

function isWelcomeDismissed() {
    try { return localStorage.getItem(WELCOME_KEY) === '1'; }
    catch { return false; }
}

function rememberWelcome() {
    try { localStorage.setItem(WELCOME_KEY, '1'); }
    catch { /* storage blocked — ignore */ }
}

function openWelcome() {
    if (!welcomeModal) return;

    lastFocused = document.activeElement;

    welcomeModal.hidden = false;
    document.body.style.overflow = 'hidden';

    requestAnimationFrame(() => welcomeStart && welcomeStart.focus());
}

function closeWelcome() {
    if (!welcomeModal) return;

    welcomeModal.hidden = true;
    document.body.style.overflow = '';

    if (lastFocused && typeof lastFocused.focus === 'function') {
        lastFocused.focus();
    }

    // Hand focus to the first option so keyboard users can start immediately
    const firstOption = document.querySelector('.option-btn');
    if (firstOption && !firstOption.disabled) firstOption.focus();
}

function trapWelcomeFocus(e) {
    if (!welcomeCard) return;

    const items = welcomeCard.querySelectorAll(
        'button, input, a[href], [tabindex]:not([tabindex="-1"])'
    );
    if (!items.length) return;

    const first = items[0];
    const last  = items[items.length - 1];

    if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
    }
}

if (welcomeModal) {
    // "Start Quiz"
    welcomeStart && welcomeStart.addEventListener('click', () => {
        if (welcomeSkip && welcomeSkip.checked) rememberWelcome();
        closeWelcome();
    });

    // Backdrop + ✕
    welcomeModal.querySelectorAll('[data-close]').forEach(el => {
        el.addEventListener('click', () => {
            if (welcomeSkip && welcomeSkip.checked) rememberWelcome();
            closeWelcome();
        });
    });

    // Escape + Tab trap
    document.addEventListener('keydown', (e) => {
        if (welcomeModal.hidden) return;

        if (e.key === 'Escape') {
            if (welcomeSkip && welcomeSkip.checked) rememberWelcome();
            closeWelcome();
        }

        if (e.key === 'Tab') trapWelcomeFocus(e);
    });
}

/* ---------- Init ---------- */
loadProgress();
loadQuestion(currentIndex);

if (!isWelcomeDismissed()) {
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', openWelcome);
    } else {
        openWelcome();
    }
}

/* ---------- Dev helper (console only) ---------- */
window.QuizbeeWelcome = {
    open: openWelcome,
    close: closeWelcome,
    reset() {
        try { localStorage.removeItem(WELCOME_KEY); } catch {}
    }
};