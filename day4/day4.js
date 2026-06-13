//1 oops true 
// done

//2 TypeError

//3 inner
//caught 42
//outer

//4 2

//5 bad 
// fin

//6 ReferenceError

//7 fail 404 true

//8 true

//9 s s
//  c p

//10 TypeError

//11 
class ValidationError extends Error {
    constructor(message, field) {
        super(message);
        this.field = field;
    }
}


//12 
class DivisionByZeroError extends Error {
    constructor(message) {
        super(message);
    }
}
function safeDiv(a, b) {
    if (b === 0) {
        throw new DivisionByZeroError("Cannot divide by zero");
    }
    return a / b;
}
try {
    console.log(safeDiv(10, 0));
} catch (err) {
    console.error(err.message);
}


//13 
class MaxRetriesError extends Error {
    constructor(message, attempts) {
        super(message);
        this.attempts = attempts;
    }
}   
async function retry(fn, times) {
    let attempts = 0;
    while (attempts < times) {
        try {
            return await fn();
        } catch (err) {
            attempts++;
            console.error(`Attempt ${attempts} failed: ${err.message}`);
        }           
    }
    throw new MaxRetriesError("Max retries reached", attempts);
}


//14 question is in file:- 
//mathUtils.js
//main.js 



//15 question is in file:-
//logger.js
// app.js
 


//16
class PluginNotFoundError extends Error {
  constructor(name) {
    super(`Plugin "${name}" not found`);
    this.name = "PluginNotFoundError";
  }
}
async function loadPlugin(name) {
  try {
    const plugin = await import(`./plugins/${name}.js`);
    return plugin;
  } catch {
    throw new PluginNotFoundError(name);
  }
}


//17 question is in file:-
//config.js
//index.js


//18
function errorBoundary(fn) {
  return async function (...args) {
    try {
      const result = await fn(...args);
      return { ok: true, data: result };
    } catch (e) {
      return { ok: false, error: e.message };
    }
  };
}


//19 question is in file:-
//stringUtils.js
//arrayUtils.js
//objectUtils.js
//index.js (Barrel Export)
//main.js



//20 
class TimeoutError extends Error {
  constructor() {
    super("Request timed out");
    this.name = "TimeoutError";
  }
}
async function fetchWithTimeout(url, ms) {
  const controller = new AbortController();

  const timeout = setTimeout(() => {
    controller.abort();
  }, ms);
  try {
    const response = await Promise.race([
      fetch(url, { signal: controller.signal }),
      new Promise((_, reject) =>
        setTimeout(() => reject(new TimeoutError()), ms)
      )
    ]);
    return response;
  } finally {
    clearTimeout(timeout); // cleanup
  }
}


//21
class EventEmitter {
  constructor() {
    this.events = {};
  }
  on(event, cb) {
    if (!this.events[event]) {
      this.events[event] = [];
    }
    this.events[event].push(cb);
  }
  off(event, cb) {
    if (!this.events[event]) return;
    this.events[event] = this.events[event].filter(
      listener => listener !== cb
    );
  }
  emit(event, ...args) {
    if (!this.events[event]) return;
    this.events[event].forEach(listener => {
      try {
        listener(...args);
      } catch (error) {
        console.error(error.message);
      }
    });
  }
}


//22
function parseJSON(str) {
  try {
    return JSON.parse(str);
  } catch (error) {
    console.error("Invalid JSON:", error.message);
    return null;
  } finally {
    console.log("Parsing completed");
  }
}


//23 no

//24 { value: 1, done: false } { value: 3, done: false } { value: 'done', done: true }

//25 true true Error

//51 

//52 SyntaxError

//53 ERROR!

//54 ESM- live binding hogi 
// CJS- live binding nahi hogi

//55 true true false


//61 
class PipelineError extends Error {
  constructor(step, message) {
    super(`Error at step ${step}: ${message}`);
    this.name = "PipelineError";
  }
}
function pipeline(...functions) {
  return async function (value) {
    let result = value;

    for (let i = 0; i < functions.length; i++) {
      try {
        result = await functions[i](result);
      } catch (error) {
        throw new PipelineError(i, error.message);
      }
    }
    return result;
  };
}


//62
function withFallback(fn, fallback) {
  return async function (...args) {
    try {
      return await fn(...args);
    } catch (error) {
      return typeof fallback === "function"
        ? fallback(error)
        : fallback;
    }
  };
}


//63 question is in file:- 
// config.js 
// file1.js 
// file2.js 
// main.js


//64 question is in file:- 
// utils.js
// main.js


//65
class KeyNotFoundError extends Error {
  constructor(key) {
    super(`Key "${key}" not found`);
    this.name = "KeyNotFoundError";
  }
}
class SafeMap {
  constructor() {
    this.map = new Map();
  }

  set(key, value) {
    this.map.set(key, value);
  }

  get(key, defaultVal) {
    return this.map.has(key)
      ? this.map.get(key)
      : defaultVal;
  }

  getOrThrow(key) {
    if (!this.map.has(key)) {
      throw new KeyNotFoundError(key);
    }
    return this.map.get(key);
  }

  has(key) {
    return this.map.has(key);
  }

  delete(key) {
    return this.map.delete(key);
  }
}


//71
class Result {
  constructor(value, error) {
    this.value = value;
    this.error = error;
  }

  static ok(value) {
    return new Result(value, null);
  }

  static err(error) {
    return new Result(null, error);
  }

  isOk() {
    return this.error === null;
  }

  map(fn) {
    return this.isOk()
      ? Result.ok(fn(this.value))
      : this;
  }

  flatMap(fn) {
    return this.isOk()
      ? fn(this.value)
      : this;
  }

  getOrElse(defaultValue) {
    return this.isOk()
      ? this.value
      : defaultValue;
  }
}


//72 question is in file:- 
// a.js
// b.js
// common.js


//73 caught: sync


//76 
function moduleExplorer(code) {
  const tryCatchCount =
    (code.match(/try\s*{[\s\S]*?}\s*catch\s*\(/g) || []).length;

  const importCount =
    (code.match(/\bimport\b/g) || []).length;

  const exportCount =
    (code.match(/\bexport\b/g) || []).length;

  return {
    tryCatchBlocks: tryCatchCount,
    imports: importCount,
    exports: exportCount
  };
}


//83
function withErrorLogging(fn) {
  return function (...args) {
    try {
      return fn(...args);
    } catch (error) {
      console.log({
        fnName: fn.name,
        args,
        error: error.message,
        timestamp: new Date().toISOString()
      });

      throw error; 
    }
  };
}


//85 range caught

//88 
class TaskQueue {
  constructor() {
    this.queue = [];
    this.running = false;
    this.errors = [];
  }

  add(asyncFn) {
    this.queue.push(asyncFn);
    this.run();
  }

  async run() {
    if (this.running) return;

    this.running = true;

    while (this.queue.length > 0) {
      const task = this.queue.shift();

      try {
        await task();
      } catch (error) {
        this.errors.push(error.message);
      }
    }

    this.running = false;
  }
}


//89 Custom: msg


//91 question is in file:- 
// a.js
// b.js
// c.js



//96
class TypeMismatchError extends Error {
  constructor(field, expected, actual) {
    super(
      `Type mismatch in "${field}". Expected ${expected}, got ${actual}`
    );
    this.name = "TypeMismatchError";
  }
}

function typecheck(schema, data) {
  for (const key in schema) {
    const expected = schema[key];
    const value = data[key];

    let actual;

    if (Array.isArray(value)) {
      actual = typeof value[0] + "[]";
    } else {
      actual = typeof value;
    }

    if (expected !== actual) {
      throw new TypeMismatchError(key, expected, actual);
    }
  }

  return true;
}

//99
class ValidationError extends Error {
  constructor(rule) {
    super(`Validation failed: ${rule}`);
    this.name = "ValidationError";
  }
}

class Validator {
  constructor() {
    this.rules = [];
  }

  static string() {
    return new Validator();
  }

  minLength(len) {
    this.rules.push({
      name: "minLength",
      check: (value) => value.length >= len
    });
    return this;
  }

  maxLength(len) {
    this.rules.push({
      name: "maxLength",
      check: (value) => value.length <= len
    });
    return this;
  }

  matches(regex) {
    this.rules.push({
      name: "matches",
      check: (value) => regex.test(value)
    });
    return this;
  }

  validate(value) {
    for (const rule of this.rules) {
      if (!rule.check(value)) {
        throw new ValidationError(rule.name);
      }
    }
    return true;
  }
}