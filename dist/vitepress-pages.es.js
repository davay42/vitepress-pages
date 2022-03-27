var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var path$3 = {};
var __viteBrowserExternal = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": path$3
}, Symbol.toStringTag, { value: "Module" }));
function getAugmentedNamespace(n) {
  if (n.__esModule)
    return n;
  var a = Object.defineProperty({}, "__esModule", { value: true });
  Object.keys(n).forEach(function(k) {
    var d = Object.getOwnPropertyDescriptor(n, k);
    Object.defineProperty(a, k, d.get ? d : {
      enumerable: true,
      get: function() {
        return n[k];
      }
    });
  });
  return a;
}
function commonjsRequire(path2) {
  throw new Error('Could not dynamically require "' + path2 + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
}
var require$$2 = /* @__PURE__ */ getAugmentedNamespace(__viteBrowserExternal);
var toString = Object.prototype.toString;
var kindOf = function kindOf2(val) {
  if (val === void 0)
    return "undefined";
  if (val === null)
    return "null";
  var type2 = typeof val;
  if (type2 === "boolean")
    return "boolean";
  if (type2 === "string")
    return "string";
  if (type2 === "number")
    return "number";
  if (type2 === "symbol")
    return "symbol";
  if (type2 === "function") {
    return isGeneratorFn(val) ? "generatorfunction" : "function";
  }
  if (isArray(val))
    return "array";
  if (isBuffer$1(val))
    return "buffer";
  if (isArguments(val))
    return "arguments";
  if (isDate(val))
    return "date";
  if (isError(val))
    return "error";
  if (isRegexp(val))
    return "regexp";
  switch (ctorName(val)) {
    case "Symbol":
      return "symbol";
    case "Promise":
      return "promise";
    case "WeakMap":
      return "weakmap";
    case "WeakSet":
      return "weakset";
    case "Map":
      return "map";
    case "Set":
      return "set";
    case "Int8Array":
      return "int8array";
    case "Uint8Array":
      return "uint8array";
    case "Uint8ClampedArray":
      return "uint8clampedarray";
    case "Int16Array":
      return "int16array";
    case "Uint16Array":
      return "uint16array";
    case "Int32Array":
      return "int32array";
    case "Uint32Array":
      return "uint32array";
    case "Float32Array":
      return "float32array";
    case "Float64Array":
      return "float64array";
  }
  if (isGeneratorObj(val)) {
    return "generator";
  }
  type2 = toString.call(val);
  switch (type2) {
    case "[object Object]":
      return "object";
    case "[object Map Iterator]":
      return "mapiterator";
    case "[object Set Iterator]":
      return "setiterator";
    case "[object String Iterator]":
      return "stringiterator";
    case "[object Array Iterator]":
      return "arrayiterator";
  }
  return type2.slice(8, -1).toLowerCase().replace(/\s/g, "");
};
function ctorName(val) {
  return typeof val.constructor === "function" ? val.constructor.name : null;
}
function isArray(val) {
  if (Array.isArray)
    return Array.isArray(val);
  return val instanceof Array;
}
function isError(val) {
  return val instanceof Error || typeof val.message === "string" && val.constructor && typeof val.constructor.stackTraceLimit === "number";
}
function isDate(val) {
  if (val instanceof Date)
    return true;
  return typeof val.toDateString === "function" && typeof val.getDate === "function" && typeof val.setDate === "function";
}
function isRegexp(val) {
  if (val instanceof RegExp)
    return true;
  return typeof val.flags === "string" && typeof val.ignoreCase === "boolean" && typeof val.multiline === "boolean" && typeof val.global === "boolean";
}
function isGeneratorFn(name2, val) {
  return ctorName(name2) === "GeneratorFunction";
}
function isGeneratorObj(val) {
  return typeof val.throw === "function" && typeof val.return === "function" && typeof val.next === "function";
}
function isArguments(val) {
  try {
    if (typeof val.length === "number" && typeof val.callee === "function") {
      return true;
    }
  } catch (err) {
    if (err.message.indexOf("callee") !== -1) {
      return true;
    }
  }
  return false;
}
function isBuffer$1(val) {
  if (val.constructor && typeof val.constructor.isBuffer === "function") {
    return val.constructor.isBuffer(val);
  }
  return false;
}
/*!
 * is-extendable <https://github.com/jonschlinkert/is-extendable>
 *
 * Copyright (c) 2015, Jon Schlinkert.
 * Licensed under the MIT License.
 */
var isExtendable = function isExtendable2(val) {
  return typeof val !== "undefined" && val !== null && (typeof val === "object" || typeof val === "function");
};
var isObject$1 = isExtendable;
var extendShallow = function extend2(o) {
  if (!isObject$1(o)) {
    o = {};
  }
  var len = arguments.length;
  for (var i2 = 1; i2 < len; i2++) {
    var obj = arguments[i2];
    if (isObject$1(obj)) {
      assign(o, obj);
    }
  }
  return o;
};
function assign(a, b) {
  for (var key in b) {
    if (hasOwn(b, key)) {
      a[key] = b[key];
    }
  }
}
function hasOwn(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}
var typeOf$2 = kindOf;
var extend$2 = extendShallow;
var sectionMatter = function(input2, options2) {
  if (typeof options2 === "function") {
    options2 = { parse: options2 };
  }
  var file = toObject(input2);
  var defaults2 = { section_delimiter: "---", parse: identity };
  var opts2 = extend$2({}, defaults2, options2);
  var delim = opts2.section_delimiter;
  var lines = file.content.split(/\r?\n/);
  var sections2 = null;
  var section = createSection();
  var content = [];
  var stack = [];
  function initSections(val) {
    file.content = val;
    sections2 = [];
    content = [];
  }
  function closeSection(val) {
    if (stack.length) {
      section.key = getKey(stack[0], delim);
      section.content = val;
      opts2.parse(section, sections2);
      sections2.push(section);
      section = createSection();
      content = [];
      stack = [];
    }
  }
  for (var i2 = 0; i2 < lines.length; i2++) {
    var line = lines[i2];
    var len = stack.length;
    var ln = line.trim();
    if (isDelimiter(ln, delim)) {
      if (ln.length === 3 && i2 !== 0) {
        if (len === 0 || len === 2) {
          content.push(line);
          continue;
        }
        stack.push(ln);
        section.data = content.join("\n");
        content = [];
        continue;
      }
      if (sections2 === null) {
        initSections(content.join("\n"));
      }
      if (len === 2) {
        closeSection(content.join("\n"));
      }
      stack.push(ln);
      continue;
    }
    content.push(line);
  }
  if (sections2 === null) {
    initSections(content.join("\n"));
  } else {
    closeSection(content.join("\n"));
  }
  file.sections = sections2;
  return file;
};
function isDelimiter(line, delim) {
  if (line.slice(0, delim.length) !== delim) {
    return false;
  }
  if (line.charAt(delim.length + 1) === delim.slice(-1)) {
    return false;
  }
  return true;
}
function toObject(input2) {
  if (typeOf$2(input2) !== "object") {
    input2 = { content: input2 };
  }
  if (typeof input2.content !== "string" && !isBuffer(input2.content)) {
    throw new TypeError("expected a buffer or string");
  }
  input2.content = input2.content.toString();
  input2.sections = [];
  return input2;
}
function getKey(val, delim) {
  return val ? val.slice(delim.length).trim() : "";
}
function createSection() {
  return { key: "", data: "", content: "" };
}
function identity(val) {
  return val;
}
function isBuffer(val) {
  if (val && val.constructor && typeof val.constructor.isBuffer === "function") {
    return val.constructor.isBuffer(val);
  }
  return false;
}
var engines$3 = { exports: {} };
var jsYaml$1 = {};
var loader$1 = {};
var common$6 = {};
function isNothing(subject) {
  return typeof subject === "undefined" || subject === null;
}
function isObject(subject) {
  return typeof subject === "object" && subject !== null;
}
function toArray(sequence) {
  if (Array.isArray(sequence))
    return sequence;
  else if (isNothing(sequence))
    return [];
  return [sequence];
}
function extend$1(target, source) {
  var index, length, key, sourceKeys;
  if (source) {
    sourceKeys = Object.keys(source);
    for (index = 0, length = sourceKeys.length; index < length; index += 1) {
      key = sourceKeys[index];
      target[key] = source[key];
    }
  }
  return target;
}
function repeat(string2, count) {
  var result = "", cycle;
  for (cycle = 0; cycle < count; cycle += 1) {
    result += string2;
  }
  return result;
}
function isNegativeZero(number2) {
  return number2 === 0 && Number.NEGATIVE_INFINITY === 1 / number2;
}
common$6.isNothing = isNothing;
common$6.isObject = isObject;
common$6.toArray = toArray;
common$6.repeat = repeat;
common$6.isNegativeZero = isNegativeZero;
common$6.extend = extend$1;
function YAMLException$4(reason, mark2) {
  Error.call(this);
  this.name = "YAMLException";
  this.reason = reason;
  this.mark = mark2;
  this.message = (this.reason || "(unknown reason)") + (this.mark ? " " + this.mark.toString() : "");
  if (Error.captureStackTrace) {
    Error.captureStackTrace(this, this.constructor);
  } else {
    this.stack = new Error().stack || "";
  }
}
YAMLException$4.prototype = Object.create(Error.prototype);
YAMLException$4.prototype.constructor = YAMLException$4;
YAMLException$4.prototype.toString = function toString2(compact) {
  var result = this.name + ": ";
  result += this.reason || "(unknown reason)";
  if (!compact && this.mark) {
    result += " " + this.mark.toString();
  }
  return result;
};
var exception = YAMLException$4;
var common$5 = common$6;
function Mark$1(name2, buffer2, position2, line, column) {
  this.name = name2;
  this.buffer = buffer2;
  this.position = position2;
  this.line = line;
  this.column = column;
}
Mark$1.prototype.getSnippet = function getSnippet(indent, maxLength) {
  var head, start, tail, end, snippet;
  if (!this.buffer)
    return null;
  indent = indent || 4;
  maxLength = maxLength || 75;
  head = "";
  start = this.position;
  while (start > 0 && "\0\r\n\x85\u2028\u2029".indexOf(this.buffer.charAt(start - 1)) === -1) {
    start -= 1;
    if (this.position - start > maxLength / 2 - 1) {
      head = " ... ";
      start += 5;
      break;
    }
  }
  tail = "";
  end = this.position;
  while (end < this.buffer.length && "\0\r\n\x85\u2028\u2029".indexOf(this.buffer.charAt(end)) === -1) {
    end += 1;
    if (end - this.position > maxLength / 2 - 1) {
      tail = " ... ";
      end -= 5;
      break;
    }
  }
  snippet = this.buffer.slice(start, end);
  return common$5.repeat(" ", indent) + head + snippet + tail + "\n" + common$5.repeat(" ", indent + this.position - start + head.length) + "^";
};
Mark$1.prototype.toString = function toString3(compact) {
  var snippet, where = "";
  if (this.name) {
    where += 'in "' + this.name + '" ';
  }
  where += "at line " + (this.line + 1) + ", column " + (this.column + 1);
  if (!compact) {
    snippet = this.getSnippet();
    if (snippet) {
      where += ":\n" + snippet;
    }
  }
  return where;
};
var mark = Mark$1;
var YAMLException$3 = exception;
var TYPE_CONSTRUCTOR_OPTIONS = [
  "kind",
  "resolve",
  "construct",
  "instanceOf",
  "predicate",
  "represent",
  "defaultStyle",
  "styleAliases"
];
var YAML_NODE_KINDS = [
  "scalar",
  "sequence",
  "mapping"
];
function compileStyleAliases(map2) {
  var result = {};
  if (map2 !== null) {
    Object.keys(map2).forEach(function(style) {
      map2[style].forEach(function(alias) {
        result[String(alias)] = style;
      });
    });
  }
  return result;
}
function Type$h(tag, options2) {
  options2 = options2 || {};
  Object.keys(options2).forEach(function(name2) {
    if (TYPE_CONSTRUCTOR_OPTIONS.indexOf(name2) === -1) {
      throw new YAMLException$3('Unknown option "' + name2 + '" is met in definition of "' + tag + '" YAML type.');
    }
  });
  this.tag = tag;
  this.kind = options2["kind"] || null;
  this.resolve = options2["resolve"] || function() {
    return true;
  };
  this.construct = options2["construct"] || function(data) {
    return data;
  };
  this.instanceOf = options2["instanceOf"] || null;
  this.predicate = options2["predicate"] || null;
  this.represent = options2["represent"] || null;
  this.defaultStyle = options2["defaultStyle"] || null;
  this.styleAliases = compileStyleAliases(options2["styleAliases"] || null);
  if (YAML_NODE_KINDS.indexOf(this.kind) === -1) {
    throw new YAMLException$3('Unknown kind "' + this.kind + '" is specified for "' + tag + '" YAML type.');
  }
}
var type = Type$h;
var common$4 = common$6;
var YAMLException$2 = exception;
var Type$g = type;
function compileList(schema2, name2, result) {
  var exclude = [];
  schema2.include.forEach(function(includedSchema) {
    result = compileList(includedSchema, name2, result);
  });
  schema2[name2].forEach(function(currentType) {
    result.forEach(function(previousType, previousIndex) {
      if (previousType.tag === currentType.tag && previousType.kind === currentType.kind) {
        exclude.push(previousIndex);
      }
    });
    result.push(currentType);
  });
  return result.filter(function(type2, index) {
    return exclude.indexOf(index) === -1;
  });
}
function compileMap() {
  var result = {
    scalar: {},
    sequence: {},
    mapping: {},
    fallback: {}
  }, index, length;
  function collectType(type2) {
    result[type2.kind][type2.tag] = result["fallback"][type2.tag] = type2;
  }
  for (index = 0, length = arguments.length; index < length; index += 1) {
    arguments[index].forEach(collectType);
  }
  return result;
}
function Schema$5(definition) {
  this.include = definition.include || [];
  this.implicit = definition.implicit || [];
  this.explicit = definition.explicit || [];
  this.implicit.forEach(function(type2) {
    if (type2.loadKind && type2.loadKind !== "scalar") {
      throw new YAMLException$2("There is a non-scalar type in the implicit list of a schema. Implicit resolving of such types is not supported.");
    }
  });
  this.compiledImplicit = compileList(this, "implicit", []);
  this.compiledExplicit = compileList(this, "explicit", []);
  this.compiledTypeMap = compileMap(this.compiledImplicit, this.compiledExplicit);
}
Schema$5.DEFAULT = null;
Schema$5.create = function createSchema() {
  var schemas, types;
  switch (arguments.length) {
    case 1:
      schemas = Schema$5.DEFAULT;
      types = arguments[0];
      break;
    case 2:
      schemas = arguments[0];
      types = arguments[1];
      break;
    default:
      throw new YAMLException$2("Wrong number of arguments for Schema.create function");
  }
  schemas = common$4.toArray(schemas);
  types = common$4.toArray(types);
  if (!schemas.every(function(schema2) {
    return schema2 instanceof Schema$5;
  })) {
    throw new YAMLException$2("Specified list of super schemas (or a single Schema object) contains a non-Schema object.");
  }
  if (!types.every(function(type2) {
    return type2 instanceof Type$g;
  })) {
    throw new YAMLException$2("Specified list of YAML types (or a single Type object) contains a non-Type object.");
  }
  return new Schema$5({
    include: schemas,
    explicit: types
  });
};
var schema = Schema$5;
var Type$f = type;
var str = new Type$f("tag:yaml.org,2002:str", {
  kind: "scalar",
  construct: function(data) {
    return data !== null ? data : "";
  }
});
var Type$e = type;
var seq = new Type$e("tag:yaml.org,2002:seq", {
  kind: "sequence",
  construct: function(data) {
    return data !== null ? data : [];
  }
});
var Type$d = type;
var map = new Type$d("tag:yaml.org,2002:map", {
  kind: "mapping",
  construct: function(data) {
    return data !== null ? data : {};
  }
});
var Schema$4 = schema;
var failsafe = new Schema$4({
  explicit: [
    str,
    seq,
    map
  ]
});
var Type$c = type;
function resolveYamlNull(data) {
  if (data === null)
    return true;
  var max = data.length;
  return max === 1 && data === "~" || max === 4 && (data === "null" || data === "Null" || data === "NULL");
}
function constructYamlNull() {
  return null;
}
function isNull(object2) {
  return object2 === null;
}
var _null = new Type$c("tag:yaml.org,2002:null", {
  kind: "scalar",
  resolve: resolveYamlNull,
  construct: constructYamlNull,
  predicate: isNull,
  represent: {
    canonical: function() {
      return "~";
    },
    lowercase: function() {
      return "null";
    },
    uppercase: function() {
      return "NULL";
    },
    camelcase: function() {
      return "Null";
    }
  },
  defaultStyle: "lowercase"
});
var Type$b = type;
function resolveYamlBoolean(data) {
  if (data === null)
    return false;
  var max = data.length;
  return max === 4 && (data === "true" || data === "True" || data === "TRUE") || max === 5 && (data === "false" || data === "False" || data === "FALSE");
}
function constructYamlBoolean(data) {
  return data === "true" || data === "True" || data === "TRUE";
}
function isBoolean(object2) {
  return Object.prototype.toString.call(object2) === "[object Boolean]";
}
var bool$2 = new Type$b("tag:yaml.org,2002:bool", {
  kind: "scalar",
  resolve: resolveYamlBoolean,
  construct: constructYamlBoolean,
  predicate: isBoolean,
  represent: {
    lowercase: function(object2) {
      return object2 ? "true" : "false";
    },
    uppercase: function(object2) {
      return object2 ? "TRUE" : "FALSE";
    },
    camelcase: function(object2) {
      return object2 ? "True" : "False";
    }
  },
  defaultStyle: "lowercase"
});
var common$3 = common$6;
var Type$a = type;
function isHexCode(c) {
  return 48 <= c && c <= 57 || 65 <= c && c <= 70 || 97 <= c && c <= 102;
}
function isOctCode(c) {
  return 48 <= c && c <= 55;
}
function isDecCode(c) {
  return 48 <= c && c <= 57;
}
function resolveYamlInteger(data) {
  if (data === null)
    return false;
  var max = data.length, index = 0, hasDigits = false, ch;
  if (!max)
    return false;
  ch = data[index];
  if (ch === "-" || ch === "+") {
    ch = data[++index];
  }
  if (ch === "0") {
    if (index + 1 === max)
      return true;
    ch = data[++index];
    if (ch === "b") {
      index++;
      for (; index < max; index++) {
        ch = data[index];
        if (ch === "_")
          continue;
        if (ch !== "0" && ch !== "1")
          return false;
        hasDigits = true;
      }
      return hasDigits && ch !== "_";
    }
    if (ch === "x") {
      index++;
      for (; index < max; index++) {
        ch = data[index];
        if (ch === "_")
          continue;
        if (!isHexCode(data.charCodeAt(index)))
          return false;
        hasDigits = true;
      }
      return hasDigits && ch !== "_";
    }
    for (; index < max; index++) {
      ch = data[index];
      if (ch === "_")
        continue;
      if (!isOctCode(data.charCodeAt(index)))
        return false;
      hasDigits = true;
    }
    return hasDigits && ch !== "_";
  }
  if (ch === "_")
    return false;
  for (; index < max; index++) {
    ch = data[index];
    if (ch === "_")
      continue;
    if (ch === ":")
      break;
    if (!isDecCode(data.charCodeAt(index))) {
      return false;
    }
    hasDigits = true;
  }
  if (!hasDigits || ch === "_")
    return false;
  if (ch !== ":")
    return true;
  return /^(:[0-5]?[0-9])+$/.test(data.slice(index));
}
function constructYamlInteger(data) {
  var value = data, sign = 1, ch, base, digits = [];
  if (value.indexOf("_") !== -1) {
    value = value.replace(/_/g, "");
  }
  ch = value[0];
  if (ch === "-" || ch === "+") {
    if (ch === "-")
      sign = -1;
    value = value.slice(1);
    ch = value[0];
  }
  if (value === "0")
    return 0;
  if (ch === "0") {
    if (value[1] === "b")
      return sign * parseInt(value.slice(2), 2);
    if (value[1] === "x")
      return sign * parseInt(value, 16);
    return sign * parseInt(value, 8);
  }
  if (value.indexOf(":") !== -1) {
    value.split(":").forEach(function(v) {
      digits.unshift(parseInt(v, 10));
    });
    value = 0;
    base = 1;
    digits.forEach(function(d) {
      value += d * base;
      base *= 60;
    });
    return sign * value;
  }
  return sign * parseInt(value, 10);
}
function isInteger(object2) {
  return Object.prototype.toString.call(object2) === "[object Number]" && (object2 % 1 === 0 && !common$3.isNegativeZero(object2));
}
var int = new Type$a("tag:yaml.org,2002:int", {
  kind: "scalar",
  resolve: resolveYamlInteger,
  construct: constructYamlInteger,
  predicate: isInteger,
  represent: {
    binary: function(obj) {
      return obj >= 0 ? "0b" + obj.toString(2) : "-0b" + obj.toString(2).slice(1);
    },
    octal: function(obj) {
      return obj >= 0 ? "0" + obj.toString(8) : "-0" + obj.toString(8).slice(1);
    },
    decimal: function(obj) {
      return obj.toString(10);
    },
    hexadecimal: function(obj) {
      return obj >= 0 ? "0x" + obj.toString(16).toUpperCase() : "-0x" + obj.toString(16).toUpperCase().slice(1);
    }
  },
  defaultStyle: "decimal",
  styleAliases: {
    binary: [2, "bin"],
    octal: [8, "oct"],
    decimal: [10, "dec"],
    hexadecimal: [16, "hex"]
  }
});
var common$2 = common$6;
var Type$9 = type;
var YAML_FLOAT_PATTERN = new RegExp("^(?:[-+]?(?:0|[1-9][0-9_]*)(?:\\.[0-9_]*)?(?:[eE][-+]?[0-9]+)?|\\.[0-9_]+(?:[eE][-+]?[0-9]+)?|[-+]?[0-9][0-9_]*(?::[0-5]?[0-9])+\\.[0-9_]*|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$");
function resolveYamlFloat(data) {
  if (data === null)
    return false;
  if (!YAML_FLOAT_PATTERN.test(data) || data[data.length - 1] === "_") {
    return false;
  }
  return true;
}
function constructYamlFloat(data) {
  var value, sign, base, digits;
  value = data.replace(/_/g, "").toLowerCase();
  sign = value[0] === "-" ? -1 : 1;
  digits = [];
  if ("+-".indexOf(value[0]) >= 0) {
    value = value.slice(1);
  }
  if (value === ".inf") {
    return sign === 1 ? Number.POSITIVE_INFINITY : Number.NEGATIVE_INFINITY;
  } else if (value === ".nan") {
    return NaN;
  } else if (value.indexOf(":") >= 0) {
    value.split(":").forEach(function(v) {
      digits.unshift(parseFloat(v, 10));
    });
    value = 0;
    base = 1;
    digits.forEach(function(d) {
      value += d * base;
      base *= 60;
    });
    return sign * value;
  }
  return sign * parseFloat(value, 10);
}
var SCIENTIFIC_WITHOUT_DOT = /^[-+]?[0-9]+e/;
function representYamlFloat(object2, style) {
  var res;
  if (isNaN(object2)) {
    switch (style) {
      case "lowercase":
        return ".nan";
      case "uppercase":
        return ".NAN";
      case "camelcase":
        return ".NaN";
    }
  } else if (Number.POSITIVE_INFINITY === object2) {
    switch (style) {
      case "lowercase":
        return ".inf";
      case "uppercase":
        return ".INF";
      case "camelcase":
        return ".Inf";
    }
  } else if (Number.NEGATIVE_INFINITY === object2) {
    switch (style) {
      case "lowercase":
        return "-.inf";
      case "uppercase":
        return "-.INF";
      case "camelcase":
        return "-.Inf";
    }
  } else if (common$2.isNegativeZero(object2)) {
    return "-0.0";
  }
  res = object2.toString(10);
  return SCIENTIFIC_WITHOUT_DOT.test(res) ? res.replace("e", ".e") : res;
}
function isFloat(object2) {
  return Object.prototype.toString.call(object2) === "[object Number]" && (object2 % 1 !== 0 || common$2.isNegativeZero(object2));
}
var float = new Type$9("tag:yaml.org,2002:float", {
  kind: "scalar",
  resolve: resolveYamlFloat,
  construct: constructYamlFloat,
  predicate: isFloat,
  represent: representYamlFloat,
  defaultStyle: "lowercase"
});
var Schema$3 = schema;
var json = new Schema$3({
  include: [
    failsafe
  ],
  implicit: [
    _null,
    bool$2,
    int,
    float
  ]
});
var Schema$2 = schema;
var core = new Schema$2({
  include: [
    json
  ]
});
var Type$8 = type;
var YAML_DATE_REGEXP = new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9])-([0-9][0-9])$");
var YAML_TIMESTAMP_REGEXP = new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9]?)-([0-9][0-9]?)(?:[Tt]|[ \\t]+)([0-9][0-9]?):([0-9][0-9]):([0-9][0-9])(?:\\.([0-9]*))?(?:[ \\t]*(Z|([-+])([0-9][0-9]?)(?::([0-9][0-9]))?))?$");
function resolveYamlTimestamp(data) {
  if (data === null)
    return false;
  if (YAML_DATE_REGEXP.exec(data) !== null)
    return true;
  if (YAML_TIMESTAMP_REGEXP.exec(data) !== null)
    return true;
  return false;
}
function constructYamlTimestamp(data) {
  var match, year, month, day, hour, minute, second, fraction = 0, delta = null, tz_hour, tz_minute, date;
  match = YAML_DATE_REGEXP.exec(data);
  if (match === null)
    match = YAML_TIMESTAMP_REGEXP.exec(data);
  if (match === null)
    throw new Error("Date resolve error");
  year = +match[1];
  month = +match[2] - 1;
  day = +match[3];
  if (!match[4]) {
    return new Date(Date.UTC(year, month, day));
  }
  hour = +match[4];
  minute = +match[5];
  second = +match[6];
  if (match[7]) {
    fraction = match[7].slice(0, 3);
    while (fraction.length < 3) {
      fraction += "0";
    }
    fraction = +fraction;
  }
  if (match[9]) {
    tz_hour = +match[10];
    tz_minute = +(match[11] || 0);
    delta = (tz_hour * 60 + tz_minute) * 6e4;
    if (match[9] === "-")
      delta = -delta;
  }
  date = new Date(Date.UTC(year, month, day, hour, minute, second, fraction));
  if (delta)
    date.setTime(date.getTime() - delta);
  return date;
}
function representYamlTimestamp(object2) {
  return object2.toISOString();
}
var timestamp = new Type$8("tag:yaml.org,2002:timestamp", {
  kind: "scalar",
  resolve: resolveYamlTimestamp,
  construct: constructYamlTimestamp,
  instanceOf: Date,
  represent: representYamlTimestamp
});
var Type$7 = type;
function resolveYamlMerge(data) {
  return data === "<<" || data === null;
}
var merge = new Type$7("tag:yaml.org,2002:merge", {
  kind: "scalar",
  resolve: resolveYamlMerge
});
var NodeBuffer;
try {
  var _require$1 = commonjsRequire;
  NodeBuffer = _require$1("buffer").Buffer;
} catch (__) {
}
var Type$6 = type;
var BASE64_MAP = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=\n\r";
function resolveYamlBinary(data) {
  if (data === null)
    return false;
  var code, idx, bitlen = 0, max = data.length, map2 = BASE64_MAP;
  for (idx = 0; idx < max; idx++) {
    code = map2.indexOf(data.charAt(idx));
    if (code > 64)
      continue;
    if (code < 0)
      return false;
    bitlen += 6;
  }
  return bitlen % 8 === 0;
}
function constructYamlBinary(data) {
  var idx, tailbits, input2 = data.replace(/[\r\n=]/g, ""), max = input2.length, map2 = BASE64_MAP, bits = 0, result = [];
  for (idx = 0; idx < max; idx++) {
    if (idx % 4 === 0 && idx) {
      result.push(bits >> 16 & 255);
      result.push(bits >> 8 & 255);
      result.push(bits & 255);
    }
    bits = bits << 6 | map2.indexOf(input2.charAt(idx));
  }
  tailbits = max % 4 * 6;
  if (tailbits === 0) {
    result.push(bits >> 16 & 255);
    result.push(bits >> 8 & 255);
    result.push(bits & 255);
  } else if (tailbits === 18) {
    result.push(bits >> 10 & 255);
    result.push(bits >> 2 & 255);
  } else if (tailbits === 12) {
    result.push(bits >> 4 & 255);
  }
  if (NodeBuffer) {
    return NodeBuffer.from ? NodeBuffer.from(result) : new NodeBuffer(result);
  }
  return result;
}
function representYamlBinary(object2) {
  var result = "", bits = 0, idx, tail, max = object2.length, map2 = BASE64_MAP;
  for (idx = 0; idx < max; idx++) {
    if (idx % 3 === 0 && idx) {
      result += map2[bits >> 18 & 63];
      result += map2[bits >> 12 & 63];
      result += map2[bits >> 6 & 63];
      result += map2[bits & 63];
    }
    bits = (bits << 8) + object2[idx];
  }
  tail = max % 3;
  if (tail === 0) {
    result += map2[bits >> 18 & 63];
    result += map2[bits >> 12 & 63];
    result += map2[bits >> 6 & 63];
    result += map2[bits & 63];
  } else if (tail === 2) {
    result += map2[bits >> 10 & 63];
    result += map2[bits >> 4 & 63];
    result += map2[bits << 2 & 63];
    result += map2[64];
  } else if (tail === 1) {
    result += map2[bits >> 2 & 63];
    result += map2[bits << 4 & 63];
    result += map2[64];
    result += map2[64];
  }
  return result;
}
function isBinary(object2) {
  return NodeBuffer && NodeBuffer.isBuffer(object2);
}
var binary$1 = new Type$6("tag:yaml.org,2002:binary", {
  kind: "scalar",
  resolve: resolveYamlBinary,
  construct: constructYamlBinary,
  predicate: isBinary,
  represent: representYamlBinary
});
var Type$5 = type;
var _hasOwnProperty$3 = Object.prototype.hasOwnProperty;
var _toString$2 = Object.prototype.toString;
function resolveYamlOmap(data) {
  if (data === null)
    return true;
  var objectKeys = [], index, length, pair, pairKey, pairHasKey, object2 = data;
  for (index = 0, length = object2.length; index < length; index += 1) {
    pair = object2[index];
    pairHasKey = false;
    if (_toString$2.call(pair) !== "[object Object]")
      return false;
    for (pairKey in pair) {
      if (_hasOwnProperty$3.call(pair, pairKey)) {
        if (!pairHasKey)
          pairHasKey = true;
        else
          return false;
      }
    }
    if (!pairHasKey)
      return false;
    if (objectKeys.indexOf(pairKey) === -1)
      objectKeys.push(pairKey);
    else
      return false;
  }
  return true;
}
function constructYamlOmap(data) {
  return data !== null ? data : [];
}
var omap = new Type$5("tag:yaml.org,2002:omap", {
  kind: "sequence",
  resolve: resolveYamlOmap,
  construct: constructYamlOmap
});
var Type$4 = type;
var _toString$1 = Object.prototype.toString;
function resolveYamlPairs(data) {
  if (data === null)
    return true;
  var index, length, pair, keys, result, object2 = data;
  result = new Array(object2.length);
  for (index = 0, length = object2.length; index < length; index += 1) {
    pair = object2[index];
    if (_toString$1.call(pair) !== "[object Object]")
      return false;
    keys = Object.keys(pair);
    if (keys.length !== 1)
      return false;
    result[index] = [keys[0], pair[keys[0]]];
  }
  return true;
}
function constructYamlPairs(data) {
  if (data === null)
    return [];
  var index, length, pair, keys, result, object2 = data;
  result = new Array(object2.length);
  for (index = 0, length = object2.length; index < length; index += 1) {
    pair = object2[index];
    keys = Object.keys(pair);
    result[index] = [keys[0], pair[keys[0]]];
  }
  return result;
}
var pairs = new Type$4("tag:yaml.org,2002:pairs", {
  kind: "sequence",
  resolve: resolveYamlPairs,
  construct: constructYamlPairs
});
var Type$3 = type;
var _hasOwnProperty$2 = Object.prototype.hasOwnProperty;
function resolveYamlSet(data) {
  if (data === null)
    return true;
  var key, object2 = data;
  for (key in object2) {
    if (_hasOwnProperty$2.call(object2, key)) {
      if (object2[key] !== null)
        return false;
    }
  }
  return true;
}
function constructYamlSet(data) {
  return data !== null ? data : {};
}
var set = new Type$3("tag:yaml.org,2002:set", {
  kind: "mapping",
  resolve: resolveYamlSet,
  construct: constructYamlSet
});
var Schema$1 = schema;
var default_safe = new Schema$1({
  include: [
    core
  ],
  implicit: [
    timestamp,
    merge
  ],
  explicit: [
    binary$1,
    omap,
    pairs,
    set
  ]
});
var Type$2 = type;
function resolveJavascriptUndefined() {
  return true;
}
function constructJavascriptUndefined() {
  return void 0;
}
function representJavascriptUndefined() {
  return "";
}
function isUndefined(object2) {
  return typeof object2 === "undefined";
}
var _undefined = new Type$2("tag:yaml.org,2002:js/undefined", {
  kind: "scalar",
  resolve: resolveJavascriptUndefined,
  construct: constructJavascriptUndefined,
  predicate: isUndefined,
  represent: representJavascriptUndefined
});
var Type$1 = type;
function resolveJavascriptRegExp(data) {
  if (data === null)
    return false;
  if (data.length === 0)
    return false;
  var regexp2 = data, tail = /\/([gim]*)$/.exec(data), modifiers = "";
  if (regexp2[0] === "/") {
    if (tail)
      modifiers = tail[1];
    if (modifiers.length > 3)
      return false;
    if (regexp2[regexp2.length - modifiers.length - 1] !== "/")
      return false;
  }
  return true;
}
function constructJavascriptRegExp(data) {
  var regexp2 = data, tail = /\/([gim]*)$/.exec(data), modifiers = "";
  if (regexp2[0] === "/") {
    if (tail)
      modifiers = tail[1];
    regexp2 = regexp2.slice(1, regexp2.length - modifiers.length - 1);
  }
  return new RegExp(regexp2, modifiers);
}
function representJavascriptRegExp(object2) {
  var result = "/" + object2.source + "/";
  if (object2.global)
    result += "g";
  if (object2.multiline)
    result += "m";
  if (object2.ignoreCase)
    result += "i";
  return result;
}
function isRegExp(object2) {
  return Object.prototype.toString.call(object2) === "[object RegExp]";
}
var regexp = new Type$1("tag:yaml.org,2002:js/regexp", {
  kind: "scalar",
  resolve: resolveJavascriptRegExp,
  construct: constructJavascriptRegExp,
  predicate: isRegExp,
  represent: representJavascriptRegExp
});
var esprima;
try {
  var _require = commonjsRequire;
  esprima = _require("esprima");
} catch (_) {
  if (typeof window !== "undefined")
    esprima = window.esprima;
}
var Type = type;
function resolveJavascriptFunction(data) {
  if (data === null)
    return false;
  try {
    var source = "(" + data + ")", ast = esprima.parse(source, { range: true });
    if (ast.type !== "Program" || ast.body.length !== 1 || ast.body[0].type !== "ExpressionStatement" || ast.body[0].expression.type !== "ArrowFunctionExpression" && ast.body[0].expression.type !== "FunctionExpression") {
      return false;
    }
    return true;
  } catch (err) {
    return false;
  }
}
function constructJavascriptFunction(data) {
  var source = "(" + data + ")", ast = esprima.parse(source, { range: true }), params = [], body;
  if (ast.type !== "Program" || ast.body.length !== 1 || ast.body[0].type !== "ExpressionStatement" || ast.body[0].expression.type !== "ArrowFunctionExpression" && ast.body[0].expression.type !== "FunctionExpression") {
    throw new Error("Failed to resolve function");
  }
  ast.body[0].expression.params.forEach(function(param) {
    params.push(param.name);
  });
  body = ast.body[0].expression.body.range;
  if (ast.body[0].expression.body.type === "BlockStatement") {
    return new Function(params, source.slice(body[0] + 1, body[1] - 1));
  }
  return new Function(params, "return " + source.slice(body[0], body[1]));
}
function representJavascriptFunction(object2) {
  return object2.toString();
}
function isFunction(object2) {
  return Object.prototype.toString.call(object2) === "[object Function]";
}
var _function = new Type("tag:yaml.org,2002:js/function", {
  kind: "scalar",
  resolve: resolveJavascriptFunction,
  construct: constructJavascriptFunction,
  predicate: isFunction,
  represent: representJavascriptFunction
});
var Schema = schema;
var default_full = Schema.DEFAULT = new Schema({
  include: [
    default_safe
  ],
  explicit: [
    _undefined,
    regexp,
    _function
  ]
});
var common$1 = common$6;
var YAMLException$1 = exception;
var Mark = mark;
var DEFAULT_SAFE_SCHEMA$1 = default_safe;
var DEFAULT_FULL_SCHEMA$1 = default_full;
var _hasOwnProperty$1 = Object.prototype.hasOwnProperty;
var CONTEXT_FLOW_IN = 1;
var CONTEXT_FLOW_OUT = 2;
var CONTEXT_BLOCK_IN = 3;
var CONTEXT_BLOCK_OUT = 4;
var CHOMPING_CLIP = 1;
var CHOMPING_STRIP = 2;
var CHOMPING_KEEP = 3;
var PATTERN_NON_PRINTABLE = /[\x00-\x08\x0B\x0C\x0E-\x1F\x7F-\x84\x86-\x9F\uFFFE\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/;
var PATTERN_NON_ASCII_LINE_BREAKS = /[\x85\u2028\u2029]/;
var PATTERN_FLOW_INDICATORS = /[,\[\]\{\}]/;
var PATTERN_TAG_HANDLE = /^(?:!|!!|![a-z\-]+!)$/i;
var PATTERN_TAG_URI = /^(?:!|[^,\[\]\{\}])(?:%[0-9a-f]{2}|[0-9a-z\-#;\/\?:@&=\+\$,_\.!~\*'\(\)\[\]])*$/i;
function _class(obj) {
  return Object.prototype.toString.call(obj);
}
function is_EOL(c) {
  return c === 10 || c === 13;
}
function is_WHITE_SPACE(c) {
  return c === 9 || c === 32;
}
function is_WS_OR_EOL(c) {
  return c === 9 || c === 32 || c === 10 || c === 13;
}
function is_FLOW_INDICATOR(c) {
  return c === 44 || c === 91 || c === 93 || c === 123 || c === 125;
}
function fromHexCode(c) {
  var lc;
  if (48 <= c && c <= 57) {
    return c - 48;
  }
  lc = c | 32;
  if (97 <= lc && lc <= 102) {
    return lc - 97 + 10;
  }
  return -1;
}
function escapedHexLen(c) {
  if (c === 120) {
    return 2;
  }
  if (c === 117) {
    return 4;
  }
  if (c === 85) {
    return 8;
  }
  return 0;
}
function fromDecimalCode(c) {
  if (48 <= c && c <= 57) {
    return c - 48;
  }
  return -1;
}
function simpleEscapeSequence(c) {
  return c === 48 ? "\0" : c === 97 ? "\x07" : c === 98 ? "\b" : c === 116 ? "	" : c === 9 ? "	" : c === 110 ? "\n" : c === 118 ? "\v" : c === 102 ? "\f" : c === 114 ? "\r" : c === 101 ? "\x1B" : c === 32 ? " " : c === 34 ? '"' : c === 47 ? "/" : c === 92 ? "\\" : c === 78 ? "\x85" : c === 95 ? "\xA0" : c === 76 ? "\u2028" : c === 80 ? "\u2029" : "";
}
function charFromCodepoint(c) {
  if (c <= 65535) {
    return String.fromCharCode(c);
  }
  return String.fromCharCode((c - 65536 >> 10) + 55296, (c - 65536 & 1023) + 56320);
}
var simpleEscapeCheck = new Array(256);
var simpleEscapeMap = new Array(256);
for (var i = 0; i < 256; i++) {
  simpleEscapeCheck[i] = simpleEscapeSequence(i) ? 1 : 0;
  simpleEscapeMap[i] = simpleEscapeSequence(i);
}
function State$1(input2, options2) {
  this.input = input2;
  this.filename = options2["filename"] || null;
  this.schema = options2["schema"] || DEFAULT_FULL_SCHEMA$1;
  this.onWarning = options2["onWarning"] || null;
  this.legacy = options2["legacy"] || false;
  this.json = options2["json"] || false;
  this.listener = options2["listener"] || null;
  this.implicitTypes = this.schema.compiledImplicit;
  this.typeMap = this.schema.compiledTypeMap;
  this.length = input2.length;
  this.position = 0;
  this.line = 0;
  this.lineStart = 0;
  this.lineIndent = 0;
  this.documents = [];
}
function generateError(state, message) {
  return new YAMLException$1(message, new Mark(state.filename, state.input, state.position, state.line, state.position - state.lineStart));
}
function throwError(state, message) {
  throw generateError(state, message);
}
function throwWarning(state, message) {
  if (state.onWarning) {
    state.onWarning.call(null, generateError(state, message));
  }
}
var directiveHandlers = {
  YAML: function handleYamlDirective(state, name2, args) {
    var match, major, minor;
    if (state.version !== null) {
      throwError(state, "duplication of %YAML directive");
    }
    if (args.length !== 1) {
      throwError(state, "YAML directive accepts exactly one argument");
    }
    match = /^([0-9]+)\.([0-9]+)$/.exec(args[0]);
    if (match === null) {
      throwError(state, "ill-formed argument of the YAML directive");
    }
    major = parseInt(match[1], 10);
    minor = parseInt(match[2], 10);
    if (major !== 1) {
      throwError(state, "unacceptable YAML version of the document");
    }
    state.version = args[0];
    state.checkLineBreaks = minor < 2;
    if (minor !== 1 && minor !== 2) {
      throwWarning(state, "unsupported YAML version of the document");
    }
  },
  TAG: function handleTagDirective(state, name2, args) {
    var handle, prefix;
    if (args.length !== 2) {
      throwError(state, "TAG directive accepts exactly two arguments");
    }
    handle = args[0];
    prefix = args[1];
    if (!PATTERN_TAG_HANDLE.test(handle)) {
      throwError(state, "ill-formed tag handle (first argument) of the TAG directive");
    }
    if (_hasOwnProperty$1.call(state.tagMap, handle)) {
      throwError(state, 'there is a previously declared suffix for "' + handle + '" tag handle');
    }
    if (!PATTERN_TAG_URI.test(prefix)) {
      throwError(state, "ill-formed tag prefix (second argument) of the TAG directive");
    }
    state.tagMap[handle] = prefix;
  }
};
function captureSegment(state, start, end, checkJson) {
  var _position, _length, _character, _result;
  if (start < end) {
    _result = state.input.slice(start, end);
    if (checkJson) {
      for (_position = 0, _length = _result.length; _position < _length; _position += 1) {
        _character = _result.charCodeAt(_position);
        if (!(_character === 9 || 32 <= _character && _character <= 1114111)) {
          throwError(state, "expected valid JSON character");
        }
      }
    } else if (PATTERN_NON_PRINTABLE.test(_result)) {
      throwError(state, "the stream contains non-printable characters");
    }
    state.result += _result;
  }
}
function mergeMappings(state, destination, source, overridableKeys) {
  var sourceKeys, key, index, quantity;
  if (!common$1.isObject(source)) {
    throwError(state, "cannot merge mappings; the provided source object is unacceptable");
  }
  sourceKeys = Object.keys(source);
  for (index = 0, quantity = sourceKeys.length; index < quantity; index += 1) {
    key = sourceKeys[index];
    if (!_hasOwnProperty$1.call(destination, key)) {
      destination[key] = source[key];
      overridableKeys[key] = true;
    }
  }
}
function storeMappingPair(state, _result, overridableKeys, keyTag, keyNode, valueNode, startLine, startPos) {
  var index, quantity;
  if (Array.isArray(keyNode)) {
    keyNode = Array.prototype.slice.call(keyNode);
    for (index = 0, quantity = keyNode.length; index < quantity; index += 1) {
      if (Array.isArray(keyNode[index])) {
        throwError(state, "nested arrays are not supported inside keys");
      }
      if (typeof keyNode === "object" && _class(keyNode[index]) === "[object Object]") {
        keyNode[index] = "[object Object]";
      }
    }
  }
  if (typeof keyNode === "object" && _class(keyNode) === "[object Object]") {
    keyNode = "[object Object]";
  }
  keyNode = String(keyNode);
  if (_result === null) {
    _result = {};
  }
  if (keyTag === "tag:yaml.org,2002:merge") {
    if (Array.isArray(valueNode)) {
      for (index = 0, quantity = valueNode.length; index < quantity; index += 1) {
        mergeMappings(state, _result, valueNode[index], overridableKeys);
      }
    } else {
      mergeMappings(state, _result, valueNode, overridableKeys);
    }
  } else {
    if (!state.json && !_hasOwnProperty$1.call(overridableKeys, keyNode) && _hasOwnProperty$1.call(_result, keyNode)) {
      state.line = startLine || state.line;
      state.position = startPos || state.position;
      throwError(state, "duplicated mapping key");
    }
    _result[keyNode] = valueNode;
    delete overridableKeys[keyNode];
  }
  return _result;
}
function readLineBreak(state) {
  var ch;
  ch = state.input.charCodeAt(state.position);
  if (ch === 10) {
    state.position++;
  } else if (ch === 13) {
    state.position++;
    if (state.input.charCodeAt(state.position) === 10) {
      state.position++;
    }
  } else {
    throwError(state, "a line break is expected");
  }
  state.line += 1;
  state.lineStart = state.position;
}
function skipSeparationSpace(state, allowComments, checkIndent) {
  var lineBreaks = 0, ch = state.input.charCodeAt(state.position);
  while (ch !== 0) {
    while (is_WHITE_SPACE(ch)) {
      ch = state.input.charCodeAt(++state.position);
    }
    if (allowComments && ch === 35) {
      do {
        ch = state.input.charCodeAt(++state.position);
      } while (ch !== 10 && ch !== 13 && ch !== 0);
    }
    if (is_EOL(ch)) {
      readLineBreak(state);
      ch = state.input.charCodeAt(state.position);
      lineBreaks++;
      state.lineIndent = 0;
      while (ch === 32) {
        state.lineIndent++;
        ch = state.input.charCodeAt(++state.position);
      }
    } else {
      break;
    }
  }
  if (checkIndent !== -1 && lineBreaks !== 0 && state.lineIndent < checkIndent) {
    throwWarning(state, "deficient indentation");
  }
  return lineBreaks;
}
function testDocumentSeparator(state) {
  var _position = state.position, ch;
  ch = state.input.charCodeAt(_position);
  if ((ch === 45 || ch === 46) && ch === state.input.charCodeAt(_position + 1) && ch === state.input.charCodeAt(_position + 2)) {
    _position += 3;
    ch = state.input.charCodeAt(_position);
    if (ch === 0 || is_WS_OR_EOL(ch)) {
      return true;
    }
  }
  return false;
}
function writeFoldedLines(state, count) {
  if (count === 1) {
    state.result += " ";
  } else if (count > 1) {
    state.result += common$1.repeat("\n", count - 1);
  }
}
function readPlainScalar(state, nodeIndent, withinFlowCollection) {
  var preceding, following, captureStart, captureEnd, hasPendingContent, _line, _lineStart, _lineIndent, _kind = state.kind, _result = state.result, ch;
  ch = state.input.charCodeAt(state.position);
  if (is_WS_OR_EOL(ch) || is_FLOW_INDICATOR(ch) || ch === 35 || ch === 38 || ch === 42 || ch === 33 || ch === 124 || ch === 62 || ch === 39 || ch === 34 || ch === 37 || ch === 64 || ch === 96) {
    return false;
  }
  if (ch === 63 || ch === 45) {
    following = state.input.charCodeAt(state.position + 1);
    if (is_WS_OR_EOL(following) || withinFlowCollection && is_FLOW_INDICATOR(following)) {
      return false;
    }
  }
  state.kind = "scalar";
  state.result = "";
  captureStart = captureEnd = state.position;
  hasPendingContent = false;
  while (ch !== 0) {
    if (ch === 58) {
      following = state.input.charCodeAt(state.position + 1);
      if (is_WS_OR_EOL(following) || withinFlowCollection && is_FLOW_INDICATOR(following)) {
        break;
      }
    } else if (ch === 35) {
      preceding = state.input.charCodeAt(state.position - 1);
      if (is_WS_OR_EOL(preceding)) {
        break;
      }
    } else if (state.position === state.lineStart && testDocumentSeparator(state) || withinFlowCollection && is_FLOW_INDICATOR(ch)) {
      break;
    } else if (is_EOL(ch)) {
      _line = state.line;
      _lineStart = state.lineStart;
      _lineIndent = state.lineIndent;
      skipSeparationSpace(state, false, -1);
      if (state.lineIndent >= nodeIndent) {
        hasPendingContent = true;
        ch = state.input.charCodeAt(state.position);
        continue;
      } else {
        state.position = captureEnd;
        state.line = _line;
        state.lineStart = _lineStart;
        state.lineIndent = _lineIndent;
        break;
      }
    }
    if (hasPendingContent) {
      captureSegment(state, captureStart, captureEnd, false);
      writeFoldedLines(state, state.line - _line);
      captureStart = captureEnd = state.position;
      hasPendingContent = false;
    }
    if (!is_WHITE_SPACE(ch)) {
      captureEnd = state.position + 1;
    }
    ch = state.input.charCodeAt(++state.position);
  }
  captureSegment(state, captureStart, captureEnd, false);
  if (state.result) {
    return true;
  }
  state.kind = _kind;
  state.result = _result;
  return false;
}
function readSingleQuotedScalar(state, nodeIndent) {
  var ch, captureStart, captureEnd;
  ch = state.input.charCodeAt(state.position);
  if (ch !== 39) {
    return false;
  }
  state.kind = "scalar";
  state.result = "";
  state.position++;
  captureStart = captureEnd = state.position;
  while ((ch = state.input.charCodeAt(state.position)) !== 0) {
    if (ch === 39) {
      captureSegment(state, captureStart, state.position, true);
      ch = state.input.charCodeAt(++state.position);
      if (ch === 39) {
        captureStart = state.position;
        state.position++;
        captureEnd = state.position;
      } else {
        return true;
      }
    } else if (is_EOL(ch)) {
      captureSegment(state, captureStart, captureEnd, true);
      writeFoldedLines(state, skipSeparationSpace(state, false, nodeIndent));
      captureStart = captureEnd = state.position;
    } else if (state.position === state.lineStart && testDocumentSeparator(state)) {
      throwError(state, "unexpected end of the document within a single quoted scalar");
    } else {
      state.position++;
      captureEnd = state.position;
    }
  }
  throwError(state, "unexpected end of the stream within a single quoted scalar");
}
function readDoubleQuotedScalar(state, nodeIndent) {
  var captureStart, captureEnd, hexLength, hexResult, tmp, ch;
  ch = state.input.charCodeAt(state.position);
  if (ch !== 34) {
    return false;
  }
  state.kind = "scalar";
  state.result = "";
  state.position++;
  captureStart = captureEnd = state.position;
  while ((ch = state.input.charCodeAt(state.position)) !== 0) {
    if (ch === 34) {
      captureSegment(state, captureStart, state.position, true);
      state.position++;
      return true;
    } else if (ch === 92) {
      captureSegment(state, captureStart, state.position, true);
      ch = state.input.charCodeAt(++state.position);
      if (is_EOL(ch)) {
        skipSeparationSpace(state, false, nodeIndent);
      } else if (ch < 256 && simpleEscapeCheck[ch]) {
        state.result += simpleEscapeMap[ch];
        state.position++;
      } else if ((tmp = escapedHexLen(ch)) > 0) {
        hexLength = tmp;
        hexResult = 0;
        for (; hexLength > 0; hexLength--) {
          ch = state.input.charCodeAt(++state.position);
          if ((tmp = fromHexCode(ch)) >= 0) {
            hexResult = (hexResult << 4) + tmp;
          } else {
            throwError(state, "expected hexadecimal character");
          }
        }
        state.result += charFromCodepoint(hexResult);
        state.position++;
      } else {
        throwError(state, "unknown escape sequence");
      }
      captureStart = captureEnd = state.position;
    } else if (is_EOL(ch)) {
      captureSegment(state, captureStart, captureEnd, true);
      writeFoldedLines(state, skipSeparationSpace(state, false, nodeIndent));
      captureStart = captureEnd = state.position;
    } else if (state.position === state.lineStart && testDocumentSeparator(state)) {
      throwError(state, "unexpected end of the document within a double quoted scalar");
    } else {
      state.position++;
      captureEnd = state.position;
    }
  }
  throwError(state, "unexpected end of the stream within a double quoted scalar");
}
function readFlowCollection(state, nodeIndent) {
  var readNext = true, _line, _tag = state.tag, _result, _anchor = state.anchor, following, terminator, isPair, isExplicitPair, isMapping, overridableKeys = {}, keyNode, keyTag, valueNode, ch;
  ch = state.input.charCodeAt(state.position);
  if (ch === 91) {
    terminator = 93;
    isMapping = false;
    _result = [];
  } else if (ch === 123) {
    terminator = 125;
    isMapping = true;
    _result = {};
  } else {
    return false;
  }
  if (state.anchor !== null) {
    state.anchorMap[state.anchor] = _result;
  }
  ch = state.input.charCodeAt(++state.position);
  while (ch !== 0) {
    skipSeparationSpace(state, true, nodeIndent);
    ch = state.input.charCodeAt(state.position);
    if (ch === terminator) {
      state.position++;
      state.tag = _tag;
      state.anchor = _anchor;
      state.kind = isMapping ? "mapping" : "sequence";
      state.result = _result;
      return true;
    } else if (!readNext) {
      throwError(state, "missed comma between flow collection entries");
    }
    keyTag = keyNode = valueNode = null;
    isPair = isExplicitPair = false;
    if (ch === 63) {
      following = state.input.charCodeAt(state.position + 1);
      if (is_WS_OR_EOL(following)) {
        isPair = isExplicitPair = true;
        state.position++;
        skipSeparationSpace(state, true, nodeIndent);
      }
    }
    _line = state.line;
    composeNode(state, nodeIndent, CONTEXT_FLOW_IN, false, true);
    keyTag = state.tag;
    keyNode = state.result;
    skipSeparationSpace(state, true, nodeIndent);
    ch = state.input.charCodeAt(state.position);
    if ((isExplicitPair || state.line === _line) && ch === 58) {
      isPair = true;
      ch = state.input.charCodeAt(++state.position);
      skipSeparationSpace(state, true, nodeIndent);
      composeNode(state, nodeIndent, CONTEXT_FLOW_IN, false, true);
      valueNode = state.result;
    }
    if (isMapping) {
      storeMappingPair(state, _result, overridableKeys, keyTag, keyNode, valueNode);
    } else if (isPair) {
      _result.push(storeMappingPair(state, null, overridableKeys, keyTag, keyNode, valueNode));
    } else {
      _result.push(keyNode);
    }
    skipSeparationSpace(state, true, nodeIndent);
    ch = state.input.charCodeAt(state.position);
    if (ch === 44) {
      readNext = true;
      ch = state.input.charCodeAt(++state.position);
    } else {
      readNext = false;
    }
  }
  throwError(state, "unexpected end of the stream within a flow collection");
}
function readBlockScalar(state, nodeIndent) {
  var captureStart, folding, chomping = CHOMPING_CLIP, didReadContent = false, detectedIndent = false, textIndent = nodeIndent, emptyLines = 0, atMoreIndented = false, tmp, ch;
  ch = state.input.charCodeAt(state.position);
  if (ch === 124) {
    folding = false;
  } else if (ch === 62) {
    folding = true;
  } else {
    return false;
  }
  state.kind = "scalar";
  state.result = "";
  while (ch !== 0) {
    ch = state.input.charCodeAt(++state.position);
    if (ch === 43 || ch === 45) {
      if (CHOMPING_CLIP === chomping) {
        chomping = ch === 43 ? CHOMPING_KEEP : CHOMPING_STRIP;
      } else {
        throwError(state, "repeat of a chomping mode identifier");
      }
    } else if ((tmp = fromDecimalCode(ch)) >= 0) {
      if (tmp === 0) {
        throwError(state, "bad explicit indentation width of a block scalar; it cannot be less than one");
      } else if (!detectedIndent) {
        textIndent = nodeIndent + tmp - 1;
        detectedIndent = true;
      } else {
        throwError(state, "repeat of an indentation width identifier");
      }
    } else {
      break;
    }
  }
  if (is_WHITE_SPACE(ch)) {
    do {
      ch = state.input.charCodeAt(++state.position);
    } while (is_WHITE_SPACE(ch));
    if (ch === 35) {
      do {
        ch = state.input.charCodeAt(++state.position);
      } while (!is_EOL(ch) && ch !== 0);
    }
  }
  while (ch !== 0) {
    readLineBreak(state);
    state.lineIndent = 0;
    ch = state.input.charCodeAt(state.position);
    while ((!detectedIndent || state.lineIndent < textIndent) && ch === 32) {
      state.lineIndent++;
      ch = state.input.charCodeAt(++state.position);
    }
    if (!detectedIndent && state.lineIndent > textIndent) {
      textIndent = state.lineIndent;
    }
    if (is_EOL(ch)) {
      emptyLines++;
      continue;
    }
    if (state.lineIndent < textIndent) {
      if (chomping === CHOMPING_KEEP) {
        state.result += common$1.repeat("\n", didReadContent ? 1 + emptyLines : emptyLines);
      } else if (chomping === CHOMPING_CLIP) {
        if (didReadContent) {
          state.result += "\n";
        }
      }
      break;
    }
    if (folding) {
      if (is_WHITE_SPACE(ch)) {
        atMoreIndented = true;
        state.result += common$1.repeat("\n", didReadContent ? 1 + emptyLines : emptyLines);
      } else if (atMoreIndented) {
        atMoreIndented = false;
        state.result += common$1.repeat("\n", emptyLines + 1);
      } else if (emptyLines === 0) {
        if (didReadContent) {
          state.result += " ";
        }
      } else {
        state.result += common$1.repeat("\n", emptyLines);
      }
    } else {
      state.result += common$1.repeat("\n", didReadContent ? 1 + emptyLines : emptyLines);
    }
    didReadContent = true;
    detectedIndent = true;
    emptyLines = 0;
    captureStart = state.position;
    while (!is_EOL(ch) && ch !== 0) {
      ch = state.input.charCodeAt(++state.position);
    }
    captureSegment(state, captureStart, state.position, false);
  }
  return true;
}
function readBlockSequence(state, nodeIndent) {
  var _line, _tag = state.tag, _anchor = state.anchor, _result = [], following, detected = false, ch;
  if (state.anchor !== null) {
    state.anchorMap[state.anchor] = _result;
  }
  ch = state.input.charCodeAt(state.position);
  while (ch !== 0) {
    if (ch !== 45) {
      break;
    }
    following = state.input.charCodeAt(state.position + 1);
    if (!is_WS_OR_EOL(following)) {
      break;
    }
    detected = true;
    state.position++;
    if (skipSeparationSpace(state, true, -1)) {
      if (state.lineIndent <= nodeIndent) {
        _result.push(null);
        ch = state.input.charCodeAt(state.position);
        continue;
      }
    }
    _line = state.line;
    composeNode(state, nodeIndent, CONTEXT_BLOCK_IN, false, true);
    _result.push(state.result);
    skipSeparationSpace(state, true, -1);
    ch = state.input.charCodeAt(state.position);
    if ((state.line === _line || state.lineIndent > nodeIndent) && ch !== 0) {
      throwError(state, "bad indentation of a sequence entry");
    } else if (state.lineIndent < nodeIndent) {
      break;
    }
  }
  if (detected) {
    state.tag = _tag;
    state.anchor = _anchor;
    state.kind = "sequence";
    state.result = _result;
    return true;
  }
  return false;
}
function readBlockMapping(state, nodeIndent, flowIndent) {
  var following, allowCompact, _line, _pos, _tag = state.tag, _anchor = state.anchor, _result = {}, overridableKeys = {}, keyTag = null, keyNode = null, valueNode = null, atExplicitKey = false, detected = false, ch;
  if (state.anchor !== null) {
    state.anchorMap[state.anchor] = _result;
  }
  ch = state.input.charCodeAt(state.position);
  while (ch !== 0) {
    following = state.input.charCodeAt(state.position + 1);
    _line = state.line;
    _pos = state.position;
    if ((ch === 63 || ch === 58) && is_WS_OR_EOL(following)) {
      if (ch === 63) {
        if (atExplicitKey) {
          storeMappingPair(state, _result, overridableKeys, keyTag, keyNode, null);
          keyTag = keyNode = valueNode = null;
        }
        detected = true;
        atExplicitKey = true;
        allowCompact = true;
      } else if (atExplicitKey) {
        atExplicitKey = false;
        allowCompact = true;
      } else {
        throwError(state, "incomplete explicit mapping pair; a key node is missed; or followed by a non-tabulated empty line");
      }
      state.position += 1;
      ch = following;
    } else if (composeNode(state, flowIndent, CONTEXT_FLOW_OUT, false, true)) {
      if (state.line === _line) {
        ch = state.input.charCodeAt(state.position);
        while (is_WHITE_SPACE(ch)) {
          ch = state.input.charCodeAt(++state.position);
        }
        if (ch === 58) {
          ch = state.input.charCodeAt(++state.position);
          if (!is_WS_OR_EOL(ch)) {
            throwError(state, "a whitespace character is expected after the key-value separator within a block mapping");
          }
          if (atExplicitKey) {
            storeMappingPair(state, _result, overridableKeys, keyTag, keyNode, null);
            keyTag = keyNode = valueNode = null;
          }
          detected = true;
          atExplicitKey = false;
          allowCompact = false;
          keyTag = state.tag;
          keyNode = state.result;
        } else if (detected) {
          throwError(state, "can not read an implicit mapping pair; a colon is missed");
        } else {
          state.tag = _tag;
          state.anchor = _anchor;
          return true;
        }
      } else if (detected) {
        throwError(state, "can not read a block mapping entry; a multiline key may not be an implicit key");
      } else {
        state.tag = _tag;
        state.anchor = _anchor;
        return true;
      }
    } else {
      break;
    }
    if (state.line === _line || state.lineIndent > nodeIndent) {
      if (composeNode(state, nodeIndent, CONTEXT_BLOCK_OUT, true, allowCompact)) {
        if (atExplicitKey) {
          keyNode = state.result;
        } else {
          valueNode = state.result;
        }
      }
      if (!atExplicitKey) {
        storeMappingPair(state, _result, overridableKeys, keyTag, keyNode, valueNode, _line, _pos);
        keyTag = keyNode = valueNode = null;
      }
      skipSeparationSpace(state, true, -1);
      ch = state.input.charCodeAt(state.position);
    }
    if (state.lineIndent > nodeIndent && ch !== 0) {
      throwError(state, "bad indentation of a mapping entry");
    } else if (state.lineIndent < nodeIndent) {
      break;
    }
  }
  if (atExplicitKey) {
    storeMappingPair(state, _result, overridableKeys, keyTag, keyNode, null);
  }
  if (detected) {
    state.tag = _tag;
    state.anchor = _anchor;
    state.kind = "mapping";
    state.result = _result;
  }
  return detected;
}
function readTagProperty(state) {
  var _position, isVerbatim = false, isNamed = false, tagHandle, tagName, ch;
  ch = state.input.charCodeAt(state.position);
  if (ch !== 33)
    return false;
  if (state.tag !== null) {
    throwError(state, "duplication of a tag property");
  }
  ch = state.input.charCodeAt(++state.position);
  if (ch === 60) {
    isVerbatim = true;
    ch = state.input.charCodeAt(++state.position);
  } else if (ch === 33) {
    isNamed = true;
    tagHandle = "!!";
    ch = state.input.charCodeAt(++state.position);
  } else {
    tagHandle = "!";
  }
  _position = state.position;
  if (isVerbatim) {
    do {
      ch = state.input.charCodeAt(++state.position);
    } while (ch !== 0 && ch !== 62);
    if (state.position < state.length) {
      tagName = state.input.slice(_position, state.position);
      ch = state.input.charCodeAt(++state.position);
    } else {
      throwError(state, "unexpected end of the stream within a verbatim tag");
    }
  } else {
    while (ch !== 0 && !is_WS_OR_EOL(ch)) {
      if (ch === 33) {
        if (!isNamed) {
          tagHandle = state.input.slice(_position - 1, state.position + 1);
          if (!PATTERN_TAG_HANDLE.test(tagHandle)) {
            throwError(state, "named tag handle cannot contain such characters");
          }
          isNamed = true;
          _position = state.position + 1;
        } else {
          throwError(state, "tag suffix cannot contain exclamation marks");
        }
      }
      ch = state.input.charCodeAt(++state.position);
    }
    tagName = state.input.slice(_position, state.position);
    if (PATTERN_FLOW_INDICATORS.test(tagName)) {
      throwError(state, "tag suffix cannot contain flow indicator characters");
    }
  }
  if (tagName && !PATTERN_TAG_URI.test(tagName)) {
    throwError(state, "tag name cannot contain such characters: " + tagName);
  }
  if (isVerbatim) {
    state.tag = tagName;
  } else if (_hasOwnProperty$1.call(state.tagMap, tagHandle)) {
    state.tag = state.tagMap[tagHandle] + tagName;
  } else if (tagHandle === "!") {
    state.tag = "!" + tagName;
  } else if (tagHandle === "!!") {
    state.tag = "tag:yaml.org,2002:" + tagName;
  } else {
    throwError(state, 'undeclared tag handle "' + tagHandle + '"');
  }
  return true;
}
function readAnchorProperty(state) {
  var _position, ch;
  ch = state.input.charCodeAt(state.position);
  if (ch !== 38)
    return false;
  if (state.anchor !== null) {
    throwError(state, "duplication of an anchor property");
  }
  ch = state.input.charCodeAt(++state.position);
  _position = state.position;
  while (ch !== 0 && !is_WS_OR_EOL(ch) && !is_FLOW_INDICATOR(ch)) {
    ch = state.input.charCodeAt(++state.position);
  }
  if (state.position === _position) {
    throwError(state, "name of an anchor node must contain at least one character");
  }
  state.anchor = state.input.slice(_position, state.position);
  return true;
}
function readAlias(state) {
  var _position, alias, ch;
  ch = state.input.charCodeAt(state.position);
  if (ch !== 42)
    return false;
  ch = state.input.charCodeAt(++state.position);
  _position = state.position;
  while (ch !== 0 && !is_WS_OR_EOL(ch) && !is_FLOW_INDICATOR(ch)) {
    ch = state.input.charCodeAt(++state.position);
  }
  if (state.position === _position) {
    throwError(state, "name of an alias node must contain at least one character");
  }
  alias = state.input.slice(_position, state.position);
  if (!_hasOwnProperty$1.call(state.anchorMap, alias)) {
    throwError(state, 'unidentified alias "' + alias + '"');
  }
  state.result = state.anchorMap[alias];
  skipSeparationSpace(state, true, -1);
  return true;
}
function composeNode(state, parentIndent, nodeContext, allowToSeek, allowCompact) {
  var allowBlockStyles, allowBlockScalars, allowBlockCollections, indentStatus = 1, atNewLine = false, hasContent = false, typeIndex, typeQuantity, type2, flowIndent, blockIndent;
  if (state.listener !== null) {
    state.listener("open", state);
  }
  state.tag = null;
  state.anchor = null;
  state.kind = null;
  state.result = null;
  allowBlockStyles = allowBlockScalars = allowBlockCollections = CONTEXT_BLOCK_OUT === nodeContext || CONTEXT_BLOCK_IN === nodeContext;
  if (allowToSeek) {
    if (skipSeparationSpace(state, true, -1)) {
      atNewLine = true;
      if (state.lineIndent > parentIndent) {
        indentStatus = 1;
      } else if (state.lineIndent === parentIndent) {
        indentStatus = 0;
      } else if (state.lineIndent < parentIndent) {
        indentStatus = -1;
      }
    }
  }
  if (indentStatus === 1) {
    while (readTagProperty(state) || readAnchorProperty(state)) {
      if (skipSeparationSpace(state, true, -1)) {
        atNewLine = true;
        allowBlockCollections = allowBlockStyles;
        if (state.lineIndent > parentIndent) {
          indentStatus = 1;
        } else if (state.lineIndent === parentIndent) {
          indentStatus = 0;
        } else if (state.lineIndent < parentIndent) {
          indentStatus = -1;
        }
      } else {
        allowBlockCollections = false;
      }
    }
  }
  if (allowBlockCollections) {
    allowBlockCollections = atNewLine || allowCompact;
  }
  if (indentStatus === 1 || CONTEXT_BLOCK_OUT === nodeContext) {
    if (CONTEXT_FLOW_IN === nodeContext || CONTEXT_FLOW_OUT === nodeContext) {
      flowIndent = parentIndent;
    } else {
      flowIndent = parentIndent + 1;
    }
    blockIndent = state.position - state.lineStart;
    if (indentStatus === 1) {
      if (allowBlockCollections && (readBlockSequence(state, blockIndent) || readBlockMapping(state, blockIndent, flowIndent)) || readFlowCollection(state, flowIndent)) {
        hasContent = true;
      } else {
        if (allowBlockScalars && readBlockScalar(state, flowIndent) || readSingleQuotedScalar(state, flowIndent) || readDoubleQuotedScalar(state, flowIndent)) {
          hasContent = true;
        } else if (readAlias(state)) {
          hasContent = true;
          if (state.tag !== null || state.anchor !== null) {
            throwError(state, "alias node should not have any properties");
          }
        } else if (readPlainScalar(state, flowIndent, CONTEXT_FLOW_IN === nodeContext)) {
          hasContent = true;
          if (state.tag === null) {
            state.tag = "?";
          }
        }
        if (state.anchor !== null) {
          state.anchorMap[state.anchor] = state.result;
        }
      }
    } else if (indentStatus === 0) {
      hasContent = allowBlockCollections && readBlockSequence(state, blockIndent);
    }
  }
  if (state.tag !== null && state.tag !== "!") {
    if (state.tag === "?") {
      if (state.result !== null && state.kind !== "scalar") {
        throwError(state, 'unacceptable node kind for !<?> tag; it should be "scalar", not "' + state.kind + '"');
      }
      for (typeIndex = 0, typeQuantity = state.implicitTypes.length; typeIndex < typeQuantity; typeIndex += 1) {
        type2 = state.implicitTypes[typeIndex];
        if (type2.resolve(state.result)) {
          state.result = type2.construct(state.result);
          state.tag = type2.tag;
          if (state.anchor !== null) {
            state.anchorMap[state.anchor] = state.result;
          }
          break;
        }
      }
    } else if (_hasOwnProperty$1.call(state.typeMap[state.kind || "fallback"], state.tag)) {
      type2 = state.typeMap[state.kind || "fallback"][state.tag];
      if (state.result !== null && type2.kind !== state.kind) {
        throwError(state, "unacceptable node kind for !<" + state.tag + '> tag; it should be "' + type2.kind + '", not "' + state.kind + '"');
      }
      if (!type2.resolve(state.result)) {
        throwError(state, "cannot resolve a node with !<" + state.tag + "> explicit tag");
      } else {
        state.result = type2.construct(state.result);
        if (state.anchor !== null) {
          state.anchorMap[state.anchor] = state.result;
        }
      }
    } else {
      throwError(state, "unknown tag !<" + state.tag + ">");
    }
  }
  if (state.listener !== null) {
    state.listener("close", state);
  }
  return state.tag !== null || state.anchor !== null || hasContent;
}
function readDocument(state) {
  var documentStart = state.position, _position, directiveName, directiveArgs, hasDirectives = false, ch;
  state.version = null;
  state.checkLineBreaks = state.legacy;
  state.tagMap = {};
  state.anchorMap = {};
  while ((ch = state.input.charCodeAt(state.position)) !== 0) {
    skipSeparationSpace(state, true, -1);
    ch = state.input.charCodeAt(state.position);
    if (state.lineIndent > 0 || ch !== 37) {
      break;
    }
    hasDirectives = true;
    ch = state.input.charCodeAt(++state.position);
    _position = state.position;
    while (ch !== 0 && !is_WS_OR_EOL(ch)) {
      ch = state.input.charCodeAt(++state.position);
    }
    directiveName = state.input.slice(_position, state.position);
    directiveArgs = [];
    if (directiveName.length < 1) {
      throwError(state, "directive name must not be less than one character in length");
    }
    while (ch !== 0) {
      while (is_WHITE_SPACE(ch)) {
        ch = state.input.charCodeAt(++state.position);
      }
      if (ch === 35) {
        do {
          ch = state.input.charCodeAt(++state.position);
        } while (ch !== 0 && !is_EOL(ch));
        break;
      }
      if (is_EOL(ch))
        break;
      _position = state.position;
      while (ch !== 0 && !is_WS_OR_EOL(ch)) {
        ch = state.input.charCodeAt(++state.position);
      }
      directiveArgs.push(state.input.slice(_position, state.position));
    }
    if (ch !== 0)
      readLineBreak(state);
    if (_hasOwnProperty$1.call(directiveHandlers, directiveName)) {
      directiveHandlers[directiveName](state, directiveName, directiveArgs);
    } else {
      throwWarning(state, 'unknown document directive "' + directiveName + '"');
    }
  }
  skipSeparationSpace(state, true, -1);
  if (state.lineIndent === 0 && state.input.charCodeAt(state.position) === 45 && state.input.charCodeAt(state.position + 1) === 45 && state.input.charCodeAt(state.position + 2) === 45) {
    state.position += 3;
    skipSeparationSpace(state, true, -1);
  } else if (hasDirectives) {
    throwError(state, "directives end mark is expected");
  }
  composeNode(state, state.lineIndent - 1, CONTEXT_BLOCK_OUT, false, true);
  skipSeparationSpace(state, true, -1);
  if (state.checkLineBreaks && PATTERN_NON_ASCII_LINE_BREAKS.test(state.input.slice(documentStart, state.position))) {
    throwWarning(state, "non-ASCII line breaks are interpreted as content");
  }
  state.documents.push(state.result);
  if (state.position === state.lineStart && testDocumentSeparator(state)) {
    if (state.input.charCodeAt(state.position) === 46) {
      state.position += 3;
      skipSeparationSpace(state, true, -1);
    }
    return;
  }
  if (state.position < state.length - 1) {
    throwError(state, "end of the stream or a document separator is expected");
  } else {
    return;
  }
}
function loadDocuments(input2, options2) {
  input2 = String(input2);
  options2 = options2 || {};
  if (input2.length !== 0) {
    if (input2.charCodeAt(input2.length - 1) !== 10 && input2.charCodeAt(input2.length - 1) !== 13) {
      input2 += "\n";
    }
    if (input2.charCodeAt(0) === 65279) {
      input2 = input2.slice(1);
    }
  }
  var state = new State$1(input2, options2);
  var nullpos = input2.indexOf("\0");
  if (nullpos !== -1) {
    state.position = nullpos;
    throwError(state, "null byte is not allowed in input");
  }
  state.input += "\0";
  while (state.input.charCodeAt(state.position) === 32) {
    state.lineIndent += 1;
    state.position += 1;
  }
  while (state.position < state.length - 1) {
    readDocument(state);
  }
  return state.documents;
}
function loadAll(input2, iterator, options2) {
  if (iterator !== null && typeof iterator === "object" && typeof options2 === "undefined") {
    options2 = iterator;
    iterator = null;
  }
  var documents = loadDocuments(input2, options2);
  if (typeof iterator !== "function") {
    return documents;
  }
  for (var index = 0, length = documents.length; index < length; index += 1) {
    iterator(documents[index]);
  }
}
function load(input2, options2) {
  var documents = loadDocuments(input2, options2);
  if (documents.length === 0) {
    return void 0;
  } else if (documents.length === 1) {
    return documents[0];
  }
  throw new YAMLException$1("expected a single document in the stream, but found more");
}
function safeLoadAll(input2, iterator, options2) {
  if (typeof iterator === "object" && iterator !== null && typeof options2 === "undefined") {
    options2 = iterator;
    iterator = null;
  }
  return loadAll(input2, iterator, common$1.extend({ schema: DEFAULT_SAFE_SCHEMA$1 }, options2));
}
function safeLoad(input2, options2) {
  return load(input2, common$1.extend({ schema: DEFAULT_SAFE_SCHEMA$1 }, options2));
}
loader$1.loadAll = loadAll;
loader$1.load = load;
loader$1.safeLoadAll = safeLoadAll;
loader$1.safeLoad = safeLoad;
var dumper$1 = {};
var common = common$6;
var YAMLException = exception;
var DEFAULT_FULL_SCHEMA = default_full;
var DEFAULT_SAFE_SCHEMA = default_safe;
var _toString = Object.prototype.toString;
var _hasOwnProperty = Object.prototype.hasOwnProperty;
var CHAR_TAB = 9;
var CHAR_LINE_FEED = 10;
var CHAR_CARRIAGE_RETURN = 13;
var CHAR_SPACE = 32;
var CHAR_EXCLAMATION = 33;
var CHAR_DOUBLE_QUOTE = 34;
var CHAR_SHARP = 35;
var CHAR_PERCENT = 37;
var CHAR_AMPERSAND = 38;
var CHAR_SINGLE_QUOTE = 39;
var CHAR_ASTERISK = 42;
var CHAR_COMMA = 44;
var CHAR_MINUS = 45;
var CHAR_COLON = 58;
var CHAR_EQUALS = 61;
var CHAR_GREATER_THAN = 62;
var CHAR_QUESTION = 63;
var CHAR_COMMERCIAL_AT = 64;
var CHAR_LEFT_SQUARE_BRACKET = 91;
var CHAR_RIGHT_SQUARE_BRACKET = 93;
var CHAR_GRAVE_ACCENT = 96;
var CHAR_LEFT_CURLY_BRACKET = 123;
var CHAR_VERTICAL_LINE = 124;
var CHAR_RIGHT_CURLY_BRACKET = 125;
var ESCAPE_SEQUENCES = {};
ESCAPE_SEQUENCES[0] = "\\0";
ESCAPE_SEQUENCES[7] = "\\a";
ESCAPE_SEQUENCES[8] = "\\b";
ESCAPE_SEQUENCES[9] = "\\t";
ESCAPE_SEQUENCES[10] = "\\n";
ESCAPE_SEQUENCES[11] = "\\v";
ESCAPE_SEQUENCES[12] = "\\f";
ESCAPE_SEQUENCES[13] = "\\r";
ESCAPE_SEQUENCES[27] = "\\e";
ESCAPE_SEQUENCES[34] = '\\"';
ESCAPE_SEQUENCES[92] = "\\\\";
ESCAPE_SEQUENCES[133] = "\\N";
ESCAPE_SEQUENCES[160] = "\\_";
ESCAPE_SEQUENCES[8232] = "\\L";
ESCAPE_SEQUENCES[8233] = "\\P";
var DEPRECATED_BOOLEANS_SYNTAX = [
  "y",
  "Y",
  "yes",
  "Yes",
  "YES",
  "on",
  "On",
  "ON",
  "n",
  "N",
  "no",
  "No",
  "NO",
  "off",
  "Off",
  "OFF"
];
function compileStyleMap(schema2, map2) {
  var result, keys, index, length, tag, style, type2;
  if (map2 === null)
    return {};
  result = {};
  keys = Object.keys(map2);
  for (index = 0, length = keys.length; index < length; index += 1) {
    tag = keys[index];
    style = String(map2[tag]);
    if (tag.slice(0, 2) === "!!") {
      tag = "tag:yaml.org,2002:" + tag.slice(2);
    }
    type2 = schema2.compiledTypeMap["fallback"][tag];
    if (type2 && _hasOwnProperty.call(type2.styleAliases, style)) {
      style = type2.styleAliases[style];
    }
    result[tag] = style;
  }
  return result;
}
function encodeHex(character) {
  var string2, handle, length;
  string2 = character.toString(16).toUpperCase();
  if (character <= 255) {
    handle = "x";
    length = 2;
  } else if (character <= 65535) {
    handle = "u";
    length = 4;
  } else if (character <= 4294967295) {
    handle = "U";
    length = 8;
  } else {
    throw new YAMLException("code point within a string may not be greater than 0xFFFFFFFF");
  }
  return "\\" + handle + common.repeat("0", length - string2.length) + string2;
}
function State(options2) {
  this.schema = options2["schema"] || DEFAULT_FULL_SCHEMA;
  this.indent = Math.max(1, options2["indent"] || 2);
  this.noArrayIndent = options2["noArrayIndent"] || false;
  this.skipInvalid = options2["skipInvalid"] || false;
  this.flowLevel = common.isNothing(options2["flowLevel"]) ? -1 : options2["flowLevel"];
  this.styleMap = compileStyleMap(this.schema, options2["styles"] || null);
  this.sortKeys = options2["sortKeys"] || false;
  this.lineWidth = options2["lineWidth"] || 80;
  this.noRefs = options2["noRefs"] || false;
  this.noCompatMode = options2["noCompatMode"] || false;
  this.condenseFlow = options2["condenseFlow"] || false;
  this.implicitTypes = this.schema.compiledImplicit;
  this.explicitTypes = this.schema.compiledExplicit;
  this.tag = null;
  this.result = "";
  this.duplicates = [];
  this.usedDuplicates = null;
}
function indentString(string2, spaces) {
  var ind = common.repeat(" ", spaces), position2 = 0, next = -1, result = "", line, length = string2.length;
  while (position2 < length) {
    next = string2.indexOf("\n", position2);
    if (next === -1) {
      line = string2.slice(position2);
      position2 = length;
    } else {
      line = string2.slice(position2, next + 1);
      position2 = next + 1;
    }
    if (line.length && line !== "\n")
      result += ind;
    result += line;
  }
  return result;
}
function generateNextLine(state, level) {
  return "\n" + common.repeat(" ", state.indent * level);
}
function testImplicitResolving(state, str2) {
  var index, length, type2;
  for (index = 0, length = state.implicitTypes.length; index < length; index += 1) {
    type2 = state.implicitTypes[index];
    if (type2.resolve(str2)) {
      return true;
    }
  }
  return false;
}
function isWhitespace(c) {
  return c === CHAR_SPACE || c === CHAR_TAB;
}
function isPrintable(c) {
  return 32 <= c && c <= 126 || 161 <= c && c <= 55295 && c !== 8232 && c !== 8233 || 57344 <= c && c <= 65533 && c !== 65279 || 65536 <= c && c <= 1114111;
}
function isNsChar(c) {
  return isPrintable(c) && !isWhitespace(c) && c !== 65279 && c !== CHAR_CARRIAGE_RETURN && c !== CHAR_LINE_FEED;
}
function isPlainSafe(c, prev) {
  return isPrintable(c) && c !== 65279 && c !== CHAR_COMMA && c !== CHAR_LEFT_SQUARE_BRACKET && c !== CHAR_RIGHT_SQUARE_BRACKET && c !== CHAR_LEFT_CURLY_BRACKET && c !== CHAR_RIGHT_CURLY_BRACKET && c !== CHAR_COLON && (c !== CHAR_SHARP || prev && isNsChar(prev));
}
function isPlainSafeFirst(c) {
  return isPrintable(c) && c !== 65279 && !isWhitespace(c) && c !== CHAR_MINUS && c !== CHAR_QUESTION && c !== CHAR_COLON && c !== CHAR_COMMA && c !== CHAR_LEFT_SQUARE_BRACKET && c !== CHAR_RIGHT_SQUARE_BRACKET && c !== CHAR_LEFT_CURLY_BRACKET && c !== CHAR_RIGHT_CURLY_BRACKET && c !== CHAR_SHARP && c !== CHAR_AMPERSAND && c !== CHAR_ASTERISK && c !== CHAR_EXCLAMATION && c !== CHAR_VERTICAL_LINE && c !== CHAR_EQUALS && c !== CHAR_GREATER_THAN && c !== CHAR_SINGLE_QUOTE && c !== CHAR_DOUBLE_QUOTE && c !== CHAR_PERCENT && c !== CHAR_COMMERCIAL_AT && c !== CHAR_GRAVE_ACCENT;
}
function needIndentIndicator(string2) {
  var leadingSpaceRe = /^\n* /;
  return leadingSpaceRe.test(string2);
}
var STYLE_PLAIN = 1, STYLE_SINGLE = 2, STYLE_LITERAL = 3, STYLE_FOLDED = 4, STYLE_DOUBLE = 5;
function chooseScalarStyle(string2, singleLineOnly, indentPerLevel, lineWidth, testAmbiguousType) {
  var i2;
  var char, prev_char;
  var hasLineBreak = false;
  var hasFoldableLine = false;
  var shouldTrackWidth = lineWidth !== -1;
  var previousLineBreak = -1;
  var plain = isPlainSafeFirst(string2.charCodeAt(0)) && !isWhitespace(string2.charCodeAt(string2.length - 1));
  if (singleLineOnly) {
    for (i2 = 0; i2 < string2.length; i2++) {
      char = string2.charCodeAt(i2);
      if (!isPrintable(char)) {
        return STYLE_DOUBLE;
      }
      prev_char = i2 > 0 ? string2.charCodeAt(i2 - 1) : null;
      plain = plain && isPlainSafe(char, prev_char);
    }
  } else {
    for (i2 = 0; i2 < string2.length; i2++) {
      char = string2.charCodeAt(i2);
      if (char === CHAR_LINE_FEED) {
        hasLineBreak = true;
        if (shouldTrackWidth) {
          hasFoldableLine = hasFoldableLine || i2 - previousLineBreak - 1 > lineWidth && string2[previousLineBreak + 1] !== " ";
          previousLineBreak = i2;
        }
      } else if (!isPrintable(char)) {
        return STYLE_DOUBLE;
      }
      prev_char = i2 > 0 ? string2.charCodeAt(i2 - 1) : null;
      plain = plain && isPlainSafe(char, prev_char);
    }
    hasFoldableLine = hasFoldableLine || shouldTrackWidth && (i2 - previousLineBreak - 1 > lineWidth && string2[previousLineBreak + 1] !== " ");
  }
  if (!hasLineBreak && !hasFoldableLine) {
    return plain && !testAmbiguousType(string2) ? STYLE_PLAIN : STYLE_SINGLE;
  }
  if (indentPerLevel > 9 && needIndentIndicator(string2)) {
    return STYLE_DOUBLE;
  }
  return hasFoldableLine ? STYLE_FOLDED : STYLE_LITERAL;
}
function writeScalar(state, string2, level, iskey) {
  state.dump = function() {
    if (string2.length === 0) {
      return "''";
    }
    if (!state.noCompatMode && DEPRECATED_BOOLEANS_SYNTAX.indexOf(string2) !== -1) {
      return "'" + string2 + "'";
    }
    var indent = state.indent * Math.max(1, level);
    var lineWidth = state.lineWidth === -1 ? -1 : Math.max(Math.min(state.lineWidth, 40), state.lineWidth - indent);
    var singleLineOnly = iskey || state.flowLevel > -1 && level >= state.flowLevel;
    function testAmbiguity(string3) {
      return testImplicitResolving(state, string3);
    }
    switch (chooseScalarStyle(string2, singleLineOnly, state.indent, lineWidth, testAmbiguity)) {
      case STYLE_PLAIN:
        return string2;
      case STYLE_SINGLE:
        return "'" + string2.replace(/'/g, "''") + "'";
      case STYLE_LITERAL:
        return "|" + blockHeader(string2, state.indent) + dropEndingNewline(indentString(string2, indent));
      case STYLE_FOLDED:
        return ">" + blockHeader(string2, state.indent) + dropEndingNewline(indentString(foldString(string2, lineWidth), indent));
      case STYLE_DOUBLE:
        return '"' + escapeString(string2) + '"';
      default:
        throw new YAMLException("impossible error: invalid scalar style");
    }
  }();
}
function blockHeader(string2, indentPerLevel) {
  var indentIndicator = needIndentIndicator(string2) ? String(indentPerLevel) : "";
  var clip = string2[string2.length - 1] === "\n";
  var keep = clip && (string2[string2.length - 2] === "\n" || string2 === "\n");
  var chomp = keep ? "+" : clip ? "" : "-";
  return indentIndicator + chomp + "\n";
}
function dropEndingNewline(string2) {
  return string2[string2.length - 1] === "\n" ? string2.slice(0, -1) : string2;
}
function foldString(string2, width) {
  var lineRe = /(\n+)([^\n]*)/g;
  var result = function() {
    var nextLF = string2.indexOf("\n");
    nextLF = nextLF !== -1 ? nextLF : string2.length;
    lineRe.lastIndex = nextLF;
    return foldLine(string2.slice(0, nextLF), width);
  }();
  var prevMoreIndented = string2[0] === "\n" || string2[0] === " ";
  var moreIndented;
  var match;
  while (match = lineRe.exec(string2)) {
    var prefix = match[1], line = match[2];
    moreIndented = line[0] === " ";
    result += prefix + (!prevMoreIndented && !moreIndented && line !== "" ? "\n" : "") + foldLine(line, width);
    prevMoreIndented = moreIndented;
  }
  return result;
}
function foldLine(line, width) {
  if (line === "" || line[0] === " ")
    return line;
  var breakRe = / [^ ]/g;
  var match;
  var start = 0, end, curr = 0, next = 0;
  var result = "";
  while (match = breakRe.exec(line)) {
    next = match.index;
    if (next - start > width) {
      end = curr > start ? curr : next;
      result += "\n" + line.slice(start, end);
      start = end + 1;
    }
    curr = next;
  }
  result += "\n";
  if (line.length - start > width && curr > start) {
    result += line.slice(start, curr) + "\n" + line.slice(curr + 1);
  } else {
    result += line.slice(start);
  }
  return result.slice(1);
}
function escapeString(string2) {
  var result = "";
  var char, nextChar;
  var escapeSeq;
  for (var i2 = 0; i2 < string2.length; i2++) {
    char = string2.charCodeAt(i2);
    if (char >= 55296 && char <= 56319) {
      nextChar = string2.charCodeAt(i2 + 1);
      if (nextChar >= 56320 && nextChar <= 57343) {
        result += encodeHex((char - 55296) * 1024 + nextChar - 56320 + 65536);
        i2++;
        continue;
      }
    }
    escapeSeq = ESCAPE_SEQUENCES[char];
    result += !escapeSeq && isPrintable(char) ? string2[i2] : escapeSeq || encodeHex(char);
  }
  return result;
}
function writeFlowSequence(state, level, object2) {
  var _result = "", _tag = state.tag, index, length;
  for (index = 0, length = object2.length; index < length; index += 1) {
    if (writeNode(state, level, object2[index], false, false)) {
      if (index !== 0)
        _result += "," + (!state.condenseFlow ? " " : "");
      _result += state.dump;
    }
  }
  state.tag = _tag;
  state.dump = "[" + _result + "]";
}
function writeBlockSequence(state, level, object2, compact) {
  var _result = "", _tag = state.tag, index, length;
  for (index = 0, length = object2.length; index < length; index += 1) {
    if (writeNode(state, level + 1, object2[index], true, true)) {
      if (!compact || index !== 0) {
        _result += generateNextLine(state, level);
      }
      if (state.dump && CHAR_LINE_FEED === state.dump.charCodeAt(0)) {
        _result += "-";
      } else {
        _result += "- ";
      }
      _result += state.dump;
    }
  }
  state.tag = _tag;
  state.dump = _result || "[]";
}
function writeFlowMapping(state, level, object2) {
  var _result = "", _tag = state.tag, objectKeyList = Object.keys(object2), index, length, objectKey, objectValue, pairBuffer;
  for (index = 0, length = objectKeyList.length; index < length; index += 1) {
    pairBuffer = "";
    if (index !== 0)
      pairBuffer += ", ";
    if (state.condenseFlow)
      pairBuffer += '"';
    objectKey = objectKeyList[index];
    objectValue = object2[objectKey];
    if (!writeNode(state, level, objectKey, false, false)) {
      continue;
    }
    if (state.dump.length > 1024)
      pairBuffer += "? ";
    pairBuffer += state.dump + (state.condenseFlow ? '"' : "") + ":" + (state.condenseFlow ? "" : " ");
    if (!writeNode(state, level, objectValue, false, false)) {
      continue;
    }
    pairBuffer += state.dump;
    _result += pairBuffer;
  }
  state.tag = _tag;
  state.dump = "{" + _result + "}";
}
function writeBlockMapping(state, level, object2, compact) {
  var _result = "", _tag = state.tag, objectKeyList = Object.keys(object2), index, length, objectKey, objectValue, explicitPair, pairBuffer;
  if (state.sortKeys === true) {
    objectKeyList.sort();
  } else if (typeof state.sortKeys === "function") {
    objectKeyList.sort(state.sortKeys);
  } else if (state.sortKeys) {
    throw new YAMLException("sortKeys must be a boolean or a function");
  }
  for (index = 0, length = objectKeyList.length; index < length; index += 1) {
    pairBuffer = "";
    if (!compact || index !== 0) {
      pairBuffer += generateNextLine(state, level);
    }
    objectKey = objectKeyList[index];
    objectValue = object2[objectKey];
    if (!writeNode(state, level + 1, objectKey, true, true, true)) {
      continue;
    }
    explicitPair = state.tag !== null && state.tag !== "?" || state.dump && state.dump.length > 1024;
    if (explicitPair) {
      if (state.dump && CHAR_LINE_FEED === state.dump.charCodeAt(0)) {
        pairBuffer += "?";
      } else {
        pairBuffer += "? ";
      }
    }
    pairBuffer += state.dump;
    if (explicitPair) {
      pairBuffer += generateNextLine(state, level);
    }
    if (!writeNode(state, level + 1, objectValue, true, explicitPair)) {
      continue;
    }
    if (state.dump && CHAR_LINE_FEED === state.dump.charCodeAt(0)) {
      pairBuffer += ":";
    } else {
      pairBuffer += ": ";
    }
    pairBuffer += state.dump;
    _result += pairBuffer;
  }
  state.tag = _tag;
  state.dump = _result || "{}";
}
function detectType(state, object2, explicit) {
  var _result, typeList, index, length, type2, style;
  typeList = explicit ? state.explicitTypes : state.implicitTypes;
  for (index = 0, length = typeList.length; index < length; index += 1) {
    type2 = typeList[index];
    if ((type2.instanceOf || type2.predicate) && (!type2.instanceOf || typeof object2 === "object" && object2 instanceof type2.instanceOf) && (!type2.predicate || type2.predicate(object2))) {
      state.tag = explicit ? type2.tag : "?";
      if (type2.represent) {
        style = state.styleMap[type2.tag] || type2.defaultStyle;
        if (_toString.call(type2.represent) === "[object Function]") {
          _result = type2.represent(object2, style);
        } else if (_hasOwnProperty.call(type2.represent, style)) {
          _result = type2.represent[style](object2, style);
        } else {
          throw new YAMLException("!<" + type2.tag + '> tag resolver accepts not "' + style + '" style');
        }
        state.dump = _result;
      }
      return true;
    }
  }
  return false;
}
function writeNode(state, level, object2, block, compact, iskey) {
  state.tag = null;
  state.dump = object2;
  if (!detectType(state, object2, false)) {
    detectType(state, object2, true);
  }
  var type2 = _toString.call(state.dump);
  if (block) {
    block = state.flowLevel < 0 || state.flowLevel > level;
  }
  var objectOrArray = type2 === "[object Object]" || type2 === "[object Array]", duplicateIndex, duplicate;
  if (objectOrArray) {
    duplicateIndex = state.duplicates.indexOf(object2);
    duplicate = duplicateIndex !== -1;
  }
  if (state.tag !== null && state.tag !== "?" || duplicate || state.indent !== 2 && level > 0) {
    compact = false;
  }
  if (duplicate && state.usedDuplicates[duplicateIndex]) {
    state.dump = "*ref_" + duplicateIndex;
  } else {
    if (objectOrArray && duplicate && !state.usedDuplicates[duplicateIndex]) {
      state.usedDuplicates[duplicateIndex] = true;
    }
    if (type2 === "[object Object]") {
      if (block && Object.keys(state.dump).length !== 0) {
        writeBlockMapping(state, level, state.dump, compact);
        if (duplicate) {
          state.dump = "&ref_" + duplicateIndex + state.dump;
        }
      } else {
        writeFlowMapping(state, level, state.dump);
        if (duplicate) {
          state.dump = "&ref_" + duplicateIndex + " " + state.dump;
        }
      }
    } else if (type2 === "[object Array]") {
      var arrayLevel = state.noArrayIndent && level > 0 ? level - 1 : level;
      if (block && state.dump.length !== 0) {
        writeBlockSequence(state, arrayLevel, state.dump, compact);
        if (duplicate) {
          state.dump = "&ref_" + duplicateIndex + state.dump;
        }
      } else {
        writeFlowSequence(state, arrayLevel, state.dump);
        if (duplicate) {
          state.dump = "&ref_" + duplicateIndex + " " + state.dump;
        }
      }
    } else if (type2 === "[object String]") {
      if (state.tag !== "?") {
        writeScalar(state, state.dump, level, iskey);
      }
    } else {
      if (state.skipInvalid)
        return false;
      throw new YAMLException("unacceptable kind of an object to dump " + type2);
    }
    if (state.tag !== null && state.tag !== "?") {
      state.dump = "!<" + state.tag + "> " + state.dump;
    }
  }
  return true;
}
function getDuplicateReferences(object2, state) {
  var objects = [], duplicatesIndexes = [], index, length;
  inspectNode(object2, objects, duplicatesIndexes);
  for (index = 0, length = duplicatesIndexes.length; index < length; index += 1) {
    state.duplicates.push(objects[duplicatesIndexes[index]]);
  }
  state.usedDuplicates = new Array(length);
}
function inspectNode(object2, objects, duplicatesIndexes) {
  var objectKeyList, index, length;
  if (object2 !== null && typeof object2 === "object") {
    index = objects.indexOf(object2);
    if (index !== -1) {
      if (duplicatesIndexes.indexOf(index) === -1) {
        duplicatesIndexes.push(index);
      }
    } else {
      objects.push(object2);
      if (Array.isArray(object2)) {
        for (index = 0, length = object2.length; index < length; index += 1) {
          inspectNode(object2[index], objects, duplicatesIndexes);
        }
      } else {
        objectKeyList = Object.keys(object2);
        for (index = 0, length = objectKeyList.length; index < length; index += 1) {
          inspectNode(object2[objectKeyList[index]], objects, duplicatesIndexes);
        }
      }
    }
  }
}
function dump(input2, options2) {
  options2 = options2 || {};
  var state = new State(options2);
  if (!state.noRefs)
    getDuplicateReferences(input2, state);
  if (writeNode(state, 0, input2, true, true))
    return state.dump + "\n";
  return "";
}
function safeDump(input2, options2) {
  return dump(input2, common.extend({ schema: DEFAULT_SAFE_SCHEMA }, options2));
}
dumper$1.dump = dump;
dumper$1.safeDump = safeDump;
var loader = loader$1;
var dumper = dumper$1;
function deprecated(name2) {
  return function() {
    throw new Error("Function " + name2 + " is deprecated and cannot be used.");
  };
}
jsYaml$1.Type = type;
jsYaml$1.Schema = schema;
jsYaml$1.FAILSAFE_SCHEMA = failsafe;
jsYaml$1.JSON_SCHEMA = json;
jsYaml$1.CORE_SCHEMA = core;
jsYaml$1.DEFAULT_SAFE_SCHEMA = default_safe;
jsYaml$1.DEFAULT_FULL_SCHEMA = default_full;
jsYaml$1.load = loader.load;
jsYaml$1.loadAll = loader.loadAll;
jsYaml$1.safeLoad = loader.safeLoad;
jsYaml$1.safeLoadAll = loader.safeLoadAll;
jsYaml$1.dump = dumper.dump;
jsYaml$1.safeDump = dumper.safeDump;
jsYaml$1.YAMLException = exception;
jsYaml$1.MINIMAL_SCHEMA = failsafe;
jsYaml$1.SAFE_SCHEMA = default_safe;
jsYaml$1.DEFAULT_SCHEMA = default_full;
jsYaml$1.scan = deprecated("scan");
jsYaml$1.parse = deprecated("parse");
jsYaml$1.compose = deprecated("compose");
jsYaml$1.addConstructor = deprecated("addConstructor");
var yaml = jsYaml$1;
var jsYaml = yaml;
(function(module, exports) {
  const yaml = jsYaml;
  const engines = module.exports;
  engines.yaml = {
    parse: yaml.safeLoad.bind(yaml),
    stringify: yaml.safeDump.bind(yaml)
  };
  engines.json = {
    parse: JSON.parse.bind(JSON),
    stringify: function(obj, options2) {
      const opts2 = Object.assign({ replacer: null, space: 2 }, options2);
      return JSON.stringify(obj, opts2.replacer, opts2.space);
    }
  };
  engines.javascript = {
    parse: function parse(str, options, wrap) {
      try {
        if (wrap !== false) {
          str = "(function() {\nreturn " + str.trim() + ";\n}());";
        }
        return eval(str) || {};
      } catch (err) {
        if (wrap !== false && /(unexpected|identifier)/i.test(err.message)) {
          return parse(str, options, false);
        }
        throw new SyntaxError(err);
      }
    },
    stringify: function() {
      throw new Error("stringifying JavaScript is not supported");
    }
  };
})(engines$3);
var utils$3 = {};
/*!
 * strip-bom-string <https://github.com/jonschlinkert/strip-bom-string>
 *
 * Copyright (c) 2015, 2017, Jon Schlinkert.
 * Released under the MIT License.
 */
var stripBomString = function(str2) {
  if (typeof str2 === "string" && str2.charAt(0) === "\uFEFF") {
    return str2.slice(1);
  }
  return str2;
};
(function(exports2) {
  const stripBom = stripBomString;
  const typeOf2 = kindOf;
  exports2.define = function(obj, key, val) {
    Reflect.defineProperty(obj, key, {
      enumerable: false,
      configurable: true,
      writable: true,
      value: val
    });
  };
  exports2.isBuffer = function(val) {
    return typeOf2(val) === "buffer";
  };
  exports2.isObject = function(val) {
    return typeOf2(val) === "object";
  };
  exports2.toBuffer = function(input2) {
    return typeof input2 === "string" ? Buffer.from(input2) : input2;
  };
  exports2.toString = function(input2) {
    if (exports2.isBuffer(input2))
      return stripBom(String(input2));
    if (typeof input2 !== "string") {
      throw new TypeError("expected input to be a string or buffer");
    }
    return stripBom(input2);
  };
  exports2.arrayify = function(val) {
    return val ? Array.isArray(val) ? val : [val] : [];
  };
  exports2.startsWith = function(str2, substr, len) {
    if (typeof len !== "number")
      len = substr.length;
    return str2.slice(0, len) === substr;
  };
})(utils$3);
const engines$2 = engines$3.exports;
const utils$2 = utils$3;
var defaults$4 = function(options2) {
  const opts2 = Object.assign({}, options2);
  opts2.delimiters = utils$2.arrayify(opts2.delims || opts2.delimiters || "---");
  if (opts2.delimiters.length === 1) {
    opts2.delimiters.push(opts2.delimiters[0]);
  }
  opts2.language = (opts2.language || opts2.lang || "yaml").toLowerCase();
  opts2.engines = Object.assign({}, engines$2, opts2.parsers, opts2.engines);
  return opts2;
};
var engine = function(name2, options2) {
  let engine2 = options2.engines[name2] || options2.engines[aliase(name2)];
  if (typeof engine2 === "undefined") {
    throw new Error('gray-matter engine "' + name2 + '" is not registered');
  }
  if (typeof engine2 === "function") {
    engine2 = { parse: engine2 };
  }
  return engine2;
};
function aliase(name2) {
  switch (name2.toLowerCase()) {
    case "js":
    case "javascript":
      return "javascript";
    case "coffee":
    case "coffeescript":
    case "cson":
      return "coffee";
    case "yaml":
    case "yml":
      return "yaml";
    default: {
      return name2;
    }
  }
}
const typeOf$1 = kindOf;
const getEngine$1 = engine;
const defaults$3 = defaults$4;
var stringify$2 = function(file, data, options2) {
  if (data == null && options2 == null) {
    switch (typeOf$1(file)) {
      case "object":
        data = file.data;
        options2 = {};
        break;
      case "string":
        return file;
      default: {
        throw new TypeError("expected file to be a string or object");
      }
    }
  }
  const str2 = file.content;
  const opts2 = defaults$3(options2);
  if (data == null) {
    if (!opts2.data)
      return file;
    data = opts2.data;
  }
  const language = file.language || opts2.language;
  const engine2 = getEngine$1(language, opts2);
  if (typeof engine2.stringify !== "function") {
    throw new TypeError('expected "' + language + '.stringify" to be a function');
  }
  data = Object.assign({}, file.data, data);
  const open = opts2.delimiters[0];
  const close = opts2.delimiters[1];
  const matter2 = engine2.stringify(data, options2).trim();
  let buf = "";
  if (matter2 !== "{}") {
    buf = newline(open) + newline(matter2) + newline(close);
  }
  if (typeof file.excerpt === "string" && file.excerpt !== "") {
    if (str2.indexOf(file.excerpt.trim()) === -1) {
      buf += newline(file.excerpt) + newline(close);
    }
  }
  return buf + newline(str2);
};
function newline(str2) {
  return str2.slice(-1) !== "\n" ? str2 + "\n" : str2;
}
const defaults$2 = defaults$4;
var excerpt$1 = function(file, options2) {
  const opts2 = defaults$2(options2);
  if (file.data == null) {
    file.data = {};
  }
  if (typeof opts2.excerpt === "function") {
    return opts2.excerpt(file, opts2);
  }
  const sep = file.data.excerpt_separator || opts2.excerpt_separator;
  if (sep == null && (opts2.excerpt === false || opts2.excerpt == null)) {
    return file;
  }
  const delimiter = typeof opts2.excerpt === "string" ? opts2.excerpt : sep || opts2.delimiters[0];
  const idx = file.content.indexOf(delimiter);
  if (idx !== -1) {
    file.excerpt = file.content.slice(0, idx);
  }
  return file;
};
const typeOf = kindOf;
const stringify$1 = stringify$2;
const utils$1 = utils$3;
var toFile$2 = function(file) {
  if (typeOf(file) !== "object") {
    file = { content: file };
  }
  if (typeOf(file.data) !== "object") {
    file.data = {};
  }
  if (file.contents && file.content == null) {
    file.content = file.contents;
  }
  utils$1.define(file, "orig", utils$1.toBuffer(file.content));
  utils$1.define(file, "language", file.language || "");
  utils$1.define(file, "matter", file.matter || "");
  utils$1.define(file, "stringify", function(data, options2) {
    if (options2 && options2.language) {
      file.language = options2.language;
    }
    return stringify$1(file, data, options2);
  });
  file.content = utils$1.toString(file.content);
  file.isEmpty = false;
  file.excerpt = "";
  return file;
};
const getEngine = engine;
const defaults$1 = defaults$4;
var parse$3 = function(language, str2, options2) {
  const opts2 = defaults$1(options2);
  const engine2 = getEngine(language, opts2);
  if (typeof engine2.parse !== "function") {
    throw new TypeError('expected "' + language + '.parse" to be a function');
  }
  return engine2.parse(str2, opts2);
};
const fs$2 = require$$2;
const sections = sectionMatter;
const defaults = defaults$4;
const stringify = stringify$2;
const excerpt = excerpt$1;
const engines$1 = engines$3.exports;
const toFile$1 = toFile$2;
const parse$2 = parse$3;
const utils = utils$3;
function matter(input2, options2) {
  if (input2 === "") {
    return { data: {}, content: input2, excerpt: "", orig: input2 };
  }
  let file = toFile$1(input2);
  const cached = matter.cache[file.content];
  if (!options2) {
    if (cached) {
      file = Object.assign({}, cached);
      file.orig = cached.orig;
      return file;
    }
    matter.cache[file.content] = file;
  }
  return parseMatter(file, options2);
}
function parseMatter(file, options2) {
  const opts2 = defaults(options2);
  const open = opts2.delimiters[0];
  const close = "\n" + opts2.delimiters[1];
  let str2 = file.content;
  if (opts2.language) {
    file.language = opts2.language;
  }
  const openLen = open.length;
  if (!utils.startsWith(str2, open, openLen)) {
    excerpt(file, opts2);
    return file;
  }
  if (str2.charAt(openLen) === open.slice(-1)) {
    return file;
  }
  str2 = str2.slice(openLen);
  const len = str2.length;
  const language = matter.language(str2, opts2);
  if (language.name) {
    file.language = language.name;
    str2 = str2.slice(language.raw.length);
  }
  let closeIndex = str2.indexOf(close);
  if (closeIndex === -1) {
    closeIndex = len;
  }
  file.matter = str2.slice(0, closeIndex);
  const block = file.matter.replace(/^\s*#[^\n]+/gm, "").trim();
  if (block === "") {
    file.isEmpty = true;
    file.empty = file.content;
    file.data = {};
  } else {
    file.data = parse$2(file.language, file.matter, opts2);
  }
  if (closeIndex === len) {
    file.content = "";
  } else {
    file.content = str2.slice(closeIndex + close.length);
    if (file.content[0] === "\r") {
      file.content = file.content.slice(1);
    }
    if (file.content[0] === "\n") {
      file.content = file.content.slice(1);
    }
  }
  excerpt(file, opts2);
  if (opts2.sections === true || typeof opts2.section === "function") {
    sections(file, opts2.section);
  }
  return file;
}
matter.engines = engines$1;
matter.stringify = function(file, data, options2) {
  if (typeof file === "string")
    file = matter(file, options2);
  return stringify(file, data, options2);
};
matter.read = function(filepath, options2) {
  const str2 = fs$2.readFileSync(filepath, "utf8");
  const file = matter(str2, options2);
  file.path = filepath;
  return file;
};
matter.test = function(str2, options2) {
  return utils.startsWith(str2, defaults(options2).delimiters[0]);
};
matter.language = function(str2, options2) {
  const opts2 = defaults(options2);
  const open = opts2.delimiters[0];
  if (matter.test(str2)) {
    str2 = str2.slice(open.length);
  }
  const language = str2.slice(0, str2.search(/\r?\n/));
  return {
    raw: language,
    name: language ? language.trim() : ""
  };
};
matter.cache = {};
matter.clearCache = function() {
  matter.cache = {};
};
var grayMatter = matter;
const defined = function(val) {
  return typeof val !== "undefined" && val !== null;
};
const object = function(val) {
  return typeof val === "object";
};
const plainObject = function(val) {
  return Object.prototype.toString.call(val) === "[object Object]";
};
const fn = function(val) {
  return typeof val === "function";
};
const bool$1 = function(val) {
  return typeof val === "boolean";
};
const buffer = function(val) {
  return val instanceof Buffer;
};
const typedArray = function(val) {
  if (defined(val)) {
    switch (val.constructor) {
      case Uint8Array:
      case Uint8ClampedArray:
      case Int8Array:
      case Uint16Array:
      case Int16Array:
      case Uint32Array:
      case Int32Array:
      case Float32Array:
      case Float64Array:
        return true;
    }
  }
  return false;
};
const string = function(val) {
  return typeof val === "string" && val.length > 0;
};
const number = function(val) {
  return typeof val === "number" && !Number.isNaN(val);
};
const integer = function(val) {
  return Number.isInteger(val);
};
const inRange = function(val, min, max) {
  return val >= min && val <= max;
};
const inArray = function(val, list) {
  return list.includes(val);
};
const invalidParameterError = function(name2, expected, actual) {
  return new Error(`Expected ${expected} for ${name2} but received ${actual} of type ${typeof actual}`);
};
var is$9 = {
  defined,
  object,
  plainObject,
  fn,
  bool: bool$1,
  buffer,
  typedArray,
  string,
  number,
  integer,
  inRange,
  inArray,
  invalidParameterError
};
const debug$1 = typeof process === "object" && process.env && {}.NODE_DEBUG && /\bsemver\b/i.test({}.NODE_DEBUG) ? (...args) => console.error("SEMVER", ...args) : () => {
};
var debug_1 = debug$1;
const SEMVER_SPEC_VERSION = "2.0.0";
const MAX_LENGTH$2 = 256;
const MAX_SAFE_INTEGER$1 = Number.MAX_SAFE_INTEGER || 9007199254740991;
const MAX_SAFE_COMPONENT_LENGTH = 16;
var constants = {
  SEMVER_SPEC_VERSION,
  MAX_LENGTH: MAX_LENGTH$2,
  MAX_SAFE_INTEGER: MAX_SAFE_INTEGER$1,
  MAX_SAFE_COMPONENT_LENGTH
};
var re$3 = { exports: {} };
(function(module2, exports2) {
  const { MAX_SAFE_COMPONENT_LENGTH: MAX_SAFE_COMPONENT_LENGTH2 } = constants;
  const debug2 = debug_1;
  exports2 = module2.exports = {};
  const re2 = exports2.re = [];
  const src = exports2.src = [];
  const t2 = exports2.t = {};
  let R = 0;
  const createToken = (name2, value, isGlobal) => {
    const index = R++;
    debug2(index, value);
    t2[name2] = index;
    src[index] = value;
    re2[index] = new RegExp(value, isGlobal ? "g" : void 0);
  };
  createToken("NUMERICIDENTIFIER", "0|[1-9]\\d*");
  createToken("NUMERICIDENTIFIERLOOSE", "[0-9]+");
  createToken("NONNUMERICIDENTIFIER", "\\d*[a-zA-Z-][a-zA-Z0-9-]*");
  createToken("MAINVERSION", `(${src[t2.NUMERICIDENTIFIER]})\\.(${src[t2.NUMERICIDENTIFIER]})\\.(${src[t2.NUMERICIDENTIFIER]})`);
  createToken("MAINVERSIONLOOSE", `(${src[t2.NUMERICIDENTIFIERLOOSE]})\\.(${src[t2.NUMERICIDENTIFIERLOOSE]})\\.(${src[t2.NUMERICIDENTIFIERLOOSE]})`);
  createToken("PRERELEASEIDENTIFIER", `(?:${src[t2.NUMERICIDENTIFIER]}|${src[t2.NONNUMERICIDENTIFIER]})`);
  createToken("PRERELEASEIDENTIFIERLOOSE", `(?:${src[t2.NUMERICIDENTIFIERLOOSE]}|${src[t2.NONNUMERICIDENTIFIER]})`);
  createToken("PRERELEASE", `(?:-(${src[t2.PRERELEASEIDENTIFIER]}(?:\\.${src[t2.PRERELEASEIDENTIFIER]})*))`);
  createToken("PRERELEASELOOSE", `(?:-?(${src[t2.PRERELEASEIDENTIFIERLOOSE]}(?:\\.${src[t2.PRERELEASEIDENTIFIERLOOSE]})*))`);
  createToken("BUILDIDENTIFIER", "[0-9A-Za-z-]+");
  createToken("BUILD", `(?:\\+(${src[t2.BUILDIDENTIFIER]}(?:\\.${src[t2.BUILDIDENTIFIER]})*))`);
  createToken("FULLPLAIN", `v?${src[t2.MAINVERSION]}${src[t2.PRERELEASE]}?${src[t2.BUILD]}?`);
  createToken("FULL", `^${src[t2.FULLPLAIN]}$`);
  createToken("LOOSEPLAIN", `[v=\\s]*${src[t2.MAINVERSIONLOOSE]}${src[t2.PRERELEASELOOSE]}?${src[t2.BUILD]}?`);
  createToken("LOOSE", `^${src[t2.LOOSEPLAIN]}$`);
  createToken("GTLT", "((?:<|>)?=?)");
  createToken("XRANGEIDENTIFIERLOOSE", `${src[t2.NUMERICIDENTIFIERLOOSE]}|x|X|\\*`);
  createToken("XRANGEIDENTIFIER", `${src[t2.NUMERICIDENTIFIER]}|x|X|\\*`);
  createToken("XRANGEPLAIN", `[v=\\s]*(${src[t2.XRANGEIDENTIFIER]})(?:\\.(${src[t2.XRANGEIDENTIFIER]})(?:\\.(${src[t2.XRANGEIDENTIFIER]})(?:${src[t2.PRERELEASE]})?${src[t2.BUILD]}?)?)?`);
  createToken("XRANGEPLAINLOOSE", `[v=\\s]*(${src[t2.XRANGEIDENTIFIERLOOSE]})(?:\\.(${src[t2.XRANGEIDENTIFIERLOOSE]})(?:\\.(${src[t2.XRANGEIDENTIFIERLOOSE]})(?:${src[t2.PRERELEASELOOSE]})?${src[t2.BUILD]}?)?)?`);
  createToken("XRANGE", `^${src[t2.GTLT]}\\s*${src[t2.XRANGEPLAIN]}$`);
  createToken("XRANGELOOSE", `^${src[t2.GTLT]}\\s*${src[t2.XRANGEPLAINLOOSE]}$`);
  createToken("COERCE", `${"(^|[^\\d])(\\d{1,"}${MAX_SAFE_COMPONENT_LENGTH2}})(?:\\.(\\d{1,${MAX_SAFE_COMPONENT_LENGTH2}}))?(?:\\.(\\d{1,${MAX_SAFE_COMPONENT_LENGTH2}}))?(?:$|[^\\d])`);
  createToken("COERCERTL", src[t2.COERCE], true);
  createToken("LONETILDE", "(?:~>?)");
  createToken("TILDETRIM", `(\\s*)${src[t2.LONETILDE]}\\s+`, true);
  exports2.tildeTrimReplace = "$1~";
  createToken("TILDE", `^${src[t2.LONETILDE]}${src[t2.XRANGEPLAIN]}$`);
  createToken("TILDELOOSE", `^${src[t2.LONETILDE]}${src[t2.XRANGEPLAINLOOSE]}$`);
  createToken("LONECARET", "(?:\\^)");
  createToken("CARETTRIM", `(\\s*)${src[t2.LONECARET]}\\s+`, true);
  exports2.caretTrimReplace = "$1^";
  createToken("CARET", `^${src[t2.LONECARET]}${src[t2.XRANGEPLAIN]}$`);
  createToken("CARETLOOSE", `^${src[t2.LONECARET]}${src[t2.XRANGEPLAINLOOSE]}$`);
  createToken("COMPARATORLOOSE", `^${src[t2.GTLT]}\\s*(${src[t2.LOOSEPLAIN]})$|^$`);
  createToken("COMPARATOR", `^${src[t2.GTLT]}\\s*(${src[t2.FULLPLAIN]})$|^$`);
  createToken("COMPARATORTRIM", `(\\s*)${src[t2.GTLT]}\\s*(${src[t2.LOOSEPLAIN]}|${src[t2.XRANGEPLAIN]})`, true);
  exports2.comparatorTrimReplace = "$1$2$3";
  createToken("HYPHENRANGE", `^\\s*(${src[t2.XRANGEPLAIN]})\\s+-\\s+(${src[t2.XRANGEPLAIN]})\\s*$`);
  createToken("HYPHENRANGELOOSE", `^\\s*(${src[t2.XRANGEPLAINLOOSE]})\\s+-\\s+(${src[t2.XRANGEPLAINLOOSE]})\\s*$`);
  createToken("STAR", "(<|>)?=?\\s*\\*");
  createToken("GTE0", "^\\s*>=\\s*0.0.0\\s*$");
  createToken("GTE0PRE", "^\\s*>=\\s*0.0.0-0\\s*$");
})(re$3, re$3.exports);
const opts = ["includePrerelease", "loose", "rtl"];
const parseOptions$2 = (options2) => !options2 ? {} : typeof options2 !== "object" ? { loose: true } : opts.filter((k) => options2[k]).reduce((options3, k) => {
  options3[k] = true;
  return options3;
}, {});
var parseOptions_1 = parseOptions$2;
const numeric = /^[0-9]+$/;
const compareIdentifiers$1 = (a, b) => {
  const anum = numeric.test(a);
  const bnum = numeric.test(b);
  if (anum && bnum) {
    a = +a;
    b = +b;
  }
  return a === b ? 0 : anum && !bnum ? -1 : bnum && !anum ? 1 : a < b ? -1 : 1;
};
const rcompareIdentifiers = (a, b) => compareIdentifiers$1(b, a);
var identifiers = {
  compareIdentifiers: compareIdentifiers$1,
  rcompareIdentifiers
};
const debug = debug_1;
const { MAX_LENGTH: MAX_LENGTH$1, MAX_SAFE_INTEGER } = constants;
const { re: re$2, t: t$2 } = re$3.exports;
const parseOptions$1 = parseOptions_1;
const { compareIdentifiers } = identifiers;
class SemVer$3 {
  constructor(version2, options2) {
    options2 = parseOptions$1(options2);
    if (version2 instanceof SemVer$3) {
      if (version2.loose === !!options2.loose && version2.includePrerelease === !!options2.includePrerelease) {
        return version2;
      } else {
        version2 = version2.version;
      }
    } else if (typeof version2 !== "string") {
      throw new TypeError(`Invalid Version: ${version2}`);
    }
    if (version2.length > MAX_LENGTH$1) {
      throw new TypeError(`version is longer than ${MAX_LENGTH$1} characters`);
    }
    debug("SemVer", version2, options2);
    this.options = options2;
    this.loose = !!options2.loose;
    this.includePrerelease = !!options2.includePrerelease;
    const m = version2.trim().match(options2.loose ? re$2[t$2.LOOSE] : re$2[t$2.FULL]);
    if (!m) {
      throw new TypeError(`Invalid Version: ${version2}`);
    }
    this.raw = version2;
    this.major = +m[1];
    this.minor = +m[2];
    this.patch = +m[3];
    if (this.major > MAX_SAFE_INTEGER || this.major < 0) {
      throw new TypeError("Invalid major version");
    }
    if (this.minor > MAX_SAFE_INTEGER || this.minor < 0) {
      throw new TypeError("Invalid minor version");
    }
    if (this.patch > MAX_SAFE_INTEGER || this.patch < 0) {
      throw new TypeError("Invalid patch version");
    }
    if (!m[4]) {
      this.prerelease = [];
    } else {
      this.prerelease = m[4].split(".").map((id) => {
        if (/^[0-9]+$/.test(id)) {
          const num = +id;
          if (num >= 0 && num < MAX_SAFE_INTEGER) {
            return num;
          }
        }
        return id;
      });
    }
    this.build = m[5] ? m[5].split(".") : [];
    this.format();
  }
  format() {
    this.version = `${this.major}.${this.minor}.${this.patch}`;
    if (this.prerelease.length) {
      this.version += `-${this.prerelease.join(".")}`;
    }
    return this.version;
  }
  toString() {
    return this.version;
  }
  compare(other) {
    debug("SemVer.compare", this.version, this.options, other);
    if (!(other instanceof SemVer$3)) {
      if (typeof other === "string" && other === this.version) {
        return 0;
      }
      other = new SemVer$3(other, this.options);
    }
    if (other.version === this.version) {
      return 0;
    }
    return this.compareMain(other) || this.comparePre(other);
  }
  compareMain(other) {
    if (!(other instanceof SemVer$3)) {
      other = new SemVer$3(other, this.options);
    }
    return compareIdentifiers(this.major, other.major) || compareIdentifiers(this.minor, other.minor) || compareIdentifiers(this.patch, other.patch);
  }
  comparePre(other) {
    if (!(other instanceof SemVer$3)) {
      other = new SemVer$3(other, this.options);
    }
    if (this.prerelease.length && !other.prerelease.length) {
      return -1;
    } else if (!this.prerelease.length && other.prerelease.length) {
      return 1;
    } else if (!this.prerelease.length && !other.prerelease.length) {
      return 0;
    }
    let i2 = 0;
    do {
      const a = this.prerelease[i2];
      const b = other.prerelease[i2];
      debug("prerelease compare", i2, a, b);
      if (a === void 0 && b === void 0) {
        return 0;
      } else if (b === void 0) {
        return 1;
      } else if (a === void 0) {
        return -1;
      } else if (a === b) {
        continue;
      } else {
        return compareIdentifiers(a, b);
      }
    } while (++i2);
  }
  compareBuild(other) {
    if (!(other instanceof SemVer$3)) {
      other = new SemVer$3(other, this.options);
    }
    let i2 = 0;
    do {
      const a = this.build[i2];
      const b = other.build[i2];
      debug("prerelease compare", i2, a, b);
      if (a === void 0 && b === void 0) {
        return 0;
      } else if (b === void 0) {
        return 1;
      } else if (a === void 0) {
        return -1;
      } else if (a === b) {
        continue;
      } else {
        return compareIdentifiers(a, b);
      }
    } while (++i2);
  }
  inc(release, identifier) {
    switch (release) {
      case "premajor":
        this.prerelease.length = 0;
        this.patch = 0;
        this.minor = 0;
        this.major++;
        this.inc("pre", identifier);
        break;
      case "preminor":
        this.prerelease.length = 0;
        this.patch = 0;
        this.minor++;
        this.inc("pre", identifier);
        break;
      case "prepatch":
        this.prerelease.length = 0;
        this.inc("patch", identifier);
        this.inc("pre", identifier);
        break;
      case "prerelease":
        if (this.prerelease.length === 0) {
          this.inc("patch", identifier);
        }
        this.inc("pre", identifier);
        break;
      case "major":
        if (this.minor !== 0 || this.patch !== 0 || this.prerelease.length === 0) {
          this.major++;
        }
        this.minor = 0;
        this.patch = 0;
        this.prerelease = [];
        break;
      case "minor":
        if (this.patch !== 0 || this.prerelease.length === 0) {
          this.minor++;
        }
        this.patch = 0;
        this.prerelease = [];
        break;
      case "patch":
        if (this.prerelease.length === 0) {
          this.patch++;
        }
        this.prerelease = [];
        break;
      case "pre":
        if (this.prerelease.length === 0) {
          this.prerelease = [0];
        } else {
          let i2 = this.prerelease.length;
          while (--i2 >= 0) {
            if (typeof this.prerelease[i2] === "number") {
              this.prerelease[i2]++;
              i2 = -2;
            }
          }
          if (i2 === -1) {
            this.prerelease.push(0);
          }
        }
        if (identifier) {
          if (this.prerelease[0] === identifier) {
            if (isNaN(this.prerelease[1])) {
              this.prerelease = [identifier, 0];
            }
          } else {
            this.prerelease = [identifier, 0];
          }
        }
        break;
      default:
        throw new Error(`invalid increment argument: ${release}`);
    }
    this.format();
    this.raw = this.version;
    return this;
  }
}
var semver = SemVer$3;
const { MAX_LENGTH } = constants;
const { re: re$1, t: t$1 } = re$3.exports;
const SemVer$2 = semver;
const parseOptions = parseOptions_1;
const parse$1 = (version2, options2) => {
  options2 = parseOptions(options2);
  if (version2 instanceof SemVer$2) {
    return version2;
  }
  if (typeof version2 !== "string") {
    return null;
  }
  if (version2.length > MAX_LENGTH) {
    return null;
  }
  const r = options2.loose ? re$1[t$1.LOOSE] : re$1[t$1.FULL];
  if (!r.test(version2)) {
    return null;
  }
  try {
    return new SemVer$2(version2, options2);
  } catch (er) {
    return null;
  }
};
var parse_1 = parse$1;
const SemVer$1 = semver;
const parse = parse_1;
const { re, t } = re$3.exports;
const coerce = (version2, options2) => {
  if (version2 instanceof SemVer$1) {
    return version2;
  }
  if (typeof version2 === "number") {
    version2 = String(version2);
  }
  if (typeof version2 !== "string") {
    return null;
  }
  options2 = options2 || {};
  let match = null;
  if (!options2.rtl) {
    match = version2.match(re[t.COERCE]);
  } else {
    let next;
    while ((next = re[t.COERCERTL].exec(version2)) && (!match || match.index + match[0].length !== version2.length)) {
      if (!match || next.index + next[0].length !== match.index + match[0].length) {
        match = next;
      }
      re[t.COERCERTL].lastIndex = next.index + next[1].length + next[2].length;
    }
    re[t.COERCERTL].lastIndex = -1;
  }
  if (match === null)
    return null;
  return parse(`${match[2]}.${match[3] || "0"}.${match[4] || "0"}`, options2);
};
var coerce_1 = coerce;
const SemVer = semver;
const compare$1 = (a, b, loose) => new SemVer(a, loose).compare(new SemVer(b, loose));
var compare_1 = compare$1;
const compare = compare_1;
const gte = (a, b, loose) => compare(a, b, loose) >= 0;
var gte_1 = gte;
const isLinux$1 = () => process.platform === "linux";
let report = null;
const getReport$1 = () => {
  if (!report) {
    report = isLinux$1() && process.report ? process.report.getReport() : {};
  }
  return report;
};
var process_1 = { isLinux: isLinux$1, getReport: getReport$1 };
const childProcess = require$$2;
const { isLinux, getReport } = process_1;
const command = "getconf GNU_LIBC_VERSION 2>&1 || true; ldd --version 2>&1 || true";
let commandOut = "";
const safeCommand = () => {
  if (!commandOut) {
    return new Promise((resolve) => {
      childProcess.exec(command, (err, out) => {
        commandOut = err ? " " : out;
        resolve(commandOut);
      });
    });
  }
  return commandOut;
};
const safeCommandSync = () => {
  if (!commandOut) {
    try {
      commandOut = childProcess.execSync(command, { encoding: "utf8" });
    } catch (_err) {
      commandOut = " ";
    }
  }
  return commandOut;
};
const GLIBC = "glibc";
const MUSL = "musl";
const isFileMusl = (f) => f.includes("libc.musl-") || f.includes("ld-musl-");
const familyFromReport = () => {
  const report2 = getReport();
  if (report2.header && report2.header.glibcVersionRuntime) {
    return GLIBC;
  }
  if (Array.isArray(report2.sharedObjects)) {
    if (report2.sharedObjects.some(isFileMusl)) {
      return MUSL;
    }
  }
  return null;
};
const familyFromCommand = (out) => {
  const [getconf, ldd1] = out.split(/[\r\n]+/);
  if (getconf && getconf.includes(GLIBC)) {
    return GLIBC;
  }
  if (ldd1 && ldd1.includes(MUSL)) {
    return MUSL;
  }
  return null;
};
const family = async () => {
  let family2 = null;
  if (isLinux()) {
    family2 = familyFromReport();
    if (!family2) {
      const out = await safeCommand();
      family2 = familyFromCommand(out);
    }
  }
  return family2;
};
const familySync = () => {
  let family2 = null;
  if (isLinux()) {
    family2 = familyFromReport();
    if (!family2) {
      const out = safeCommandSync();
      family2 = familyFromCommand(out);
    }
  }
  return family2;
};
const isNonGlibcLinux = async () => isLinux() && await family() !== GLIBC;
const isNonGlibcLinuxSync = () => isLinux() && familySync() !== GLIBC;
const versionFromReport = () => {
  const report2 = getReport();
  if (report2.header && report2.header.glibcVersionRuntime) {
    return report2.header.glibcVersionRuntime;
  }
  return null;
};
const versionSuffix = (s) => s.trim().split(/\s+/)[1];
const versionFromCommand = (out) => {
  const [getconf, ldd1, ldd2] = out.split(/[\r\n]+/);
  if (getconf && getconf.includes(GLIBC)) {
    return versionSuffix(getconf);
  }
  if (ldd1 && ldd2 && ldd1.includes(MUSL)) {
    return versionSuffix(ldd2);
  }
  return null;
};
const version$1 = async () => {
  let version2 = null;
  if (isLinux()) {
    version2 = versionFromReport();
    if (!version2) {
      const out = await safeCommand();
      version2 = versionFromCommand(out);
    }
  }
  return version2;
};
const versionSync = () => {
  let version2 = null;
  if (isLinux()) {
    version2 = versionFromReport();
    if (!version2) {
      const out = safeCommandSync();
      version2 = versionFromCommand(out);
    }
  }
  return version2;
};
var detectLibc$2 = {
  GLIBC,
  MUSL,
  family,
  familySync,
  isNonGlibcLinux,
  isNonGlibcLinuxSync,
  version: version$1,
  versionSync
};
const detectLibc$1 = detectLibc$2;
const env$1 = process.env;
var platform$1 = function() {
  const arch = env$1.npm_config_arch || process.arch;
  const platform2 = env$1.npm_config_platform || process.platform;
  const libc = platform2 === "linux" && detectLibc$1.isNonGlibcLinuxSync() ? detectLibc$1.familySync() : "";
  const platformId = [`${platform2}${libc}`];
  if (arch === "arm") {
    const fallback = process.versions.electron ? "7" : "6";
    platformId.push(`armv${env$1.npm_config_arm_version || process.config.variables.arm_version || fallback}`);
  } else if (arch === "arm64") {
    platformId.push(`arm64v${env$1.npm_config_arm_version || "8"}`);
  } else {
    platformId.push(arch);
  }
  return platformId.join("-");
};
const name$1 = "sharp";
const description = "High performance Node.js image processing, the fastest module to resize JPEG, PNG, WebP, GIF, AVIF and TIFF images";
const version = "0.30.3";
const author = "Lovell Fuller <npm@lovell.info>";
const homepage = "https://github.com/lovell/sharp";
const contributors = [
  "Pierre Inglebert <pierre.inglebert@gmail.com>",
  "Jonathan Ong <jonathanrichardong@gmail.com>",
  "Chanon Sajjamanochai <chanon.s@gmail.com>",
  "Juliano Julio <julianojulio@gmail.com>",
  "Daniel Gasienica <daniel@gasienica.ch>",
  "Julian Walker <julian@fiftythree.com>",
  "Amit Pitaru <pitaru.amit@gmail.com>",
  "Brandon Aaron <hello.brandon@aaron.sh>",
  "Andreas Lind <andreas@one.com>",
  "Maurus Cuelenaere <mcuelenaere@gmail.com>",
  "Linus Unneb\xE4ck <linus@folkdatorn.se>",
  "Victor Mateevitsi <mvictoras@gmail.com>",
  "Alaric Holloway <alaric.holloway@gmail.com>",
  "Bernhard K. Weisshuhn <bkw@codingforce.com>",
  "Chris Riley <criley@primedia.com>",
  "David Carley <dacarley@gmail.com>",
  "John Tobin <john@limelightmobileinc.com>",
  "Kenton Gray <kentongray@gmail.com>",
  "Felix B\xFCnemann <Felix.Buenemann@gmail.com>",
  "Samy Al Zahrani <samyalzahrany@gmail.com>",
  "Chintan Thakkar <lemnisk8@gmail.com>",
  "F. Orlando Galashan <frulo@gmx.de>",
  "Kleis Auke Wolthuizen <info@kleisauke.nl>",
  "Matt Hirsch <mhirsch@media.mit.edu>",
  "Matthias Thoemmes <thoemmes@gmail.com>",
  "Patrick Paskaris <patrick@paskaris.gr>",
  "J\xE9r\xE9my Lal <kapouer@melix.org>",
  "Rahul Nanwani <r.nanwani@gmail.com>",
  "Alice Monday <alice0meta@gmail.com>",
  "Kristo Jorgenson <kristo.jorgenson@gmail.com>",
  "YvesBos <yves_bos@outlook.com>",
  "Guy Maliar <guy@tailorbrands.com>",
  "Nicolas Coden <nicolas@ncoden.fr>",
  "Matt Parrish <matt.r.parrish@gmail.com>",
  "Marcel Bretschneider <marcel.bretschneider@gmail.com>",
  "Matthew McEachen <matthew+github@mceachen.org>",
  "Jarda Kot\u011B\u0161ovec <jarda.kotesovec@gmail.com>",
  "Kenric D'Souza <kenric.dsouza@gmail.com>",
  "Oleh Aleinyk <oleg.aleynik@gmail.com>",
  "Marcel Bretschneider <marcel.bretschneider@gmail.com>",
  "Andrea Bianco <andrea.bianco@unibas.ch>",
  "Rik Heywood <rik@rik.org>",
  "Thomas Parisot <hi@oncletom.io>",
  "Nathan Graves <nathanrgraves+github@gmail.com>",
  "Tom Lokhorst <tom@lokhorst.eu>",
  "Espen Hovlandsdal <espen@hovlandsdal.com>",
  "Sylvain Dumont <sylvain.dumont35@gmail.com>",
  "Alun Davies <alun.owain.davies@googlemail.com>",
  "Aidan Hoolachan <ajhoolachan21@gmail.com>",
  "Axel Eirola <axel.eirola@iki.fi>",
  "Freezy <freezy@xbmc.org>",
  "Daiz <taneli.vatanen@gmail.com>",
  "Julian Aubourg <j@ubourg.net>",
  "Keith Belovay <keith@picthrive.com>",
  "Michael B. Klein <mbklein@gmail.com>",
  "Jordan Prudhomme <jordan@raboland.fr>",
  "Ilya Ovdin <iovdin@gmail.com>",
  "Andargor <andargor@yahoo.com>",
  "Paul Neave <paul.neave@gmail.com>",
  "Brendan Kennedy <brenwken@gmail.com>",
  "Brychan Bennett-Odlum <git@brychan.io>",
  "Edward Silverton <e.silverton@gmail.com>",
  "Roman Malieiev <aromaleev@gmail.com>",
  "Tomas Szabo <tomas.szabo@deftomat.com>",
  "Robert O'Rourke <robert@o-rourke.org>",
  "Guillermo Alfonso Varela Chouci\xF1o <guillevch@gmail.com>",
  "Christian Flintrup <chr@gigahost.dk>",
  "Manan Jadhav <manan@motionden.com>",
  "Leon Radley <leon@radley.se>",
  "alza54 <alza54@thiocod.in>",
  "Jacob Smith <jacob@frende.me>",
  "Michael Nutt <michael@nutt.im>",
  "Brad Parham <baparham@gmail.com>",
  "Taneli Vatanen <taneli.vatanen@gmail.com>",
  "Joris Dugu\xE9 <zaruike10@gmail.com>",
  "Chris Banks <christopher.bradley.banks@gmail.com>",
  "Ompal Singh <ompal.hitm09@gmail.com>"
];
const scripts = {
  install: "(node install/libvips && node install/dll-copy && prebuild-install) || (node install/can-compile && node-gyp rebuild && node install/dll-copy)",
  clean: "rm -rf node_modules/ build/ vendor/ .nyc_output/ coverage/ test/fixtures/output.*",
  test: "npm run test-lint && npm run test-unit && npm run test-licensing",
  "test-lint": "semistandard && cpplint",
  "test-unit": "nyc --reporter=lcov --branches=99 mocha --slow=1000 --timeout=60000 ./test/unit/*.js",
  "test-licensing": 'license-checker --production --summary --onlyAllow="Apache-2.0;BSD;ISC;MIT"',
  "test-coverage": "./test/coverage/report.sh",
  "test-leak": "./test/leak/leak.sh",
  "docs-build": "documentation lint lib && node docs/build && node docs/search-index/build",
  "docs-serve": "cd docs && npx serve",
  "docs-publish": "cd docs && npx firebase-tools deploy --project pixelplumbing --only hosting:pixelplumbing-sharp"
};
const main = "lib/index.js";
const files = [
  "binding.gyp",
  "install/**",
  "lib/**",
  "src/**"
];
const repository = {
  type: "git",
  url: "git://github.com/lovell/sharp"
};
const keywords = [
  "jpeg",
  "png",
  "webp",
  "avif",
  "tiff",
  "gif",
  "svg",
  "jp2",
  "dzi",
  "image",
  "resize",
  "thumbnail",
  "crop",
  "embed",
  "libvips",
  "vips"
];
const dependencies = {
  color: "^4.2.1",
  "detect-libc": "^2.0.1",
  "node-addon-api": "^4.3.0",
  "prebuild-install": "^7.0.1",
  semver: "^7.3.5",
  "simple-get": "^4.0.1",
  "tar-fs": "^2.1.1",
  "tunnel-agent": "^0.6.0"
};
const devDependencies = {
  async: "^3.2.3",
  cc: "^3.0.1",
  "decompress-zip": "^0.3.3",
  documentation: "^13.2.5",
  "exif-reader": "^1.0.3",
  icc: "^2.0.0",
  "license-checker": "^25.0.1",
  mocha: "^9.2.2",
  "mock-fs": "^5.1.2",
  nyc: "^15.1.0",
  prebuild: "^11.0.3",
  rimraf: "^3.0.2",
  semistandard: "^16.0.1"
};
const license = "Apache-2.0";
const config$1 = {
  libvips: "8.12.2",
  integrity: {
    "darwin-arm64v8": "sha512-p46s/bbJAjkOXzPISZt9HUpG9GWjwQkYnLLRLKzsBJHLtB3X6C6Y/zXI5Hd0DOojcFkks9a0kTN+uDQ/XJY19g==",
    "darwin-x64": "sha512-6vOHVZnvXwe6EXRsy29jdkUzBE6ElNpXUwd+m8vV7qy32AnXu7B9YemHsZ44vWviIwPZeXF6Nhd9EFLM0wWohw==",
    "linux-arm64v8": "sha512-XwZdS63yhqLtbFtx/0eoLF/Agf5qtTrI11FMnMRpuBJWd4jHB60RAH+uzYUgoChCmKIS+AeXYMLm4d8Ns2QX8w==",
    "linux-armv6": "sha512-Rh0Q0kqwPG2MjXWOkPCuPEyiUKFgKJYWLgS835D4MrXgdKr8Tft/eVrc2iGIxt2re30VpDiZ1h0Rby1aCZt2zw==",
    "linux-armv7": "sha512-heTS/MsmRvu4JljINxP+vDiS9ZZfuGhr3IStb5F7Gc0/QLRhllYAg4rcO8L1eTK9sIIzG5ARvI19+YUZe7WbzA==",
    "linux-x64": "sha512-SSWAwBFi0hx8V/h/v82tTFGKWTFv9FiCK3Timz5OExuI+sX1Ngrd0PVQaWXOThGNdel/fcD3Bz9YjSt4feBR1g==",
    "linuxmusl-arm64v8": "sha512-Rhks+5C7p7aO6AucLT1uvzo8ohlqcqCUPgZmN+LZjsPWob/Iix3MfiDYtv/+gTvdeEfXxbCU6/YuPBwHQ7/crA==",
    "linuxmusl-x64": "sha512-IOyjSQqpWVntqOUpCHVWuQwACwmmjdi15H8Pc+Ma1JkhPogTfVsFQWyL7DuOTD3Yr23EuYGzovUX00duOtfy/g==",
    "win32-arm64v8": "sha512-A+Qe8Ipewtvw9ldvF6nWed2J8kphzrUE04nFeKCtNx6pfGQ/MAlCKMjt/U8VgUKNjB01zJDUW9XE0+FhGZ/UpQ==",
    "win32-ia32": "sha512-cMrAvwFdDeAVnLJt0IPMPRKaIFhyXYGTprsM0DND9VUHE8F7dJMR44tS5YkXsGh1QNDtjKT6YuxAVUglmiXtpA==",
    "win32-x64": "sha512-vLFIfw6aW2zABa8jpgzWDhljnE6glktrddErVyazAIoHl6BFFe/Da+LK1DbXvIYHz7fyOoKhSfCJHCiJG1Vg6w=="
  },
  runtime: "napi",
  target: 5
};
const engines = {
  node: ">=12.13.0"
};
const funding = {
  url: "https://opencollective.com/libvips"
};
const binary = {
  napi_versions: [
    5
  ]
};
const semistandard = {
  env: [
    "mocha"
  ]
};
const cc = {
  linelength: "120",
  filter: [
    "build/include"
  ]
};
var require$$7 = {
  name: name$1,
  description,
  version,
  author,
  homepage,
  contributors,
  scripts,
  main,
  files,
  repository,
  keywords,
  dependencies,
  devDependencies,
  license,
  config: config$1,
  engines,
  funding,
  binary,
  semistandard,
  cc
};
const fs$1 = require$$2;
const os = require$$2;
const path$2 = require$$2;
const spawnSync = require$$2.spawnSync;
const semverCoerce = coerce_1;
const semverGreaterThanOrEqualTo = gte_1;
const platform = platform$1;
const { config } = require$$7;
const env = process.env;
const minimumLibvipsVersionLabelled = env.npm_package_config_libvips || config.libvips;
const minimumLibvipsVersion = semverCoerce(minimumLibvipsVersionLabelled).version;
const spawnSyncOptions = {
  encoding: "utf8",
  shell: true
};
const vendorPath = path$2.join(__dirname, "..", "vendor", minimumLibvipsVersion, platform());
const mkdirSync = function(dirPath) {
  try {
    fs$1.mkdirSync(dirPath, { recursive: true });
  } catch (err) {
    if (err.code !== "EEXIST") {
      throw err;
    }
  }
};
const cachePath = function() {
  const npmCachePath = env.npm_config_cache || (env.APPDATA ? path$2.join(env.APPDATA, "npm-cache") : path$2.join(os.homedir(), ".npm"));
  mkdirSync(npmCachePath);
  const libvipsCachePath = path$2.join(npmCachePath, "_libvips");
  mkdirSync(libvipsCachePath);
  return libvipsCachePath;
};
const integrity = function(platformAndArch2) {
  return env[`npm_package_config_integrity_${platformAndArch2.replace("-", "_")}`] || config.integrity[platformAndArch2];
};
const log = function(item) {
  if (item instanceof Error) {
    console.error(`sharp: Installation error: ${item.message}`);
  } else {
    console.log(`sharp: ${item}`);
  }
};
const isRosetta = function() {
  if (process.platform === "darwin" && process.arch === "x64") {
    const translated = spawnSync("sysctl sysctl.proc_translated", spawnSyncOptions).stdout;
    return (translated || "").trim() === "sysctl.proc_translated: 1";
  }
  return false;
};
const globalLibvipsVersion = function() {
  if (process.platform !== "win32") {
    const globalLibvipsVersion2 = spawnSync(`PKG_CONFIG_PATH="${pkgConfigPath()}" pkg-config --modversion vips-cpp`, spawnSyncOptions).stdout;
    return (globalLibvipsVersion2 || "").trim();
  } else {
    return "";
  }
};
const hasVendoredLibvips = function() {
  return fs$1.existsSync(vendorPath);
};
const removeVendoredLibvips = function() {
  const rm = fs$1.rmSync ? fs$1.rmSync : fs$1.rmdirSync;
  rm(vendorPath, { recursive: true, maxRetries: 3, force: true });
};
const pkgConfigPath = function() {
  if (process.platform !== "win32") {
    const brewPkgConfigPath = spawnSync("which brew >/dev/null 2>&1 && eval $(brew --env) && echo $PKG_CONFIG_LIBDIR", spawnSyncOptions).stdout || "";
    return [
      brewPkgConfigPath.trim(),
      env.PKG_CONFIG_PATH,
      "/usr/local/lib/pkgconfig",
      "/usr/lib/pkgconfig",
      "/usr/local/libdata/pkgconfig",
      "/usr/libdata/pkgconfig"
    ].filter(Boolean).join(":");
  } else {
    return "";
  }
};
const useGlobalLibvips = function() {
  if (Boolean(env.SHARP_IGNORE_GLOBAL_LIBVIPS) === true) {
    return false;
  }
  if (isRosetta()) {
    return false;
  }
  const globalVipsVersion = globalLibvipsVersion();
  return !!globalVipsVersion && semverGreaterThanOrEqualTo(globalVipsVersion, minimumLibvipsVersion);
};
var libvips = {
  minimumLibvipsVersion,
  minimumLibvipsVersionLabelled,
  cachePath,
  integrity,
  log,
  globalLibvipsVersion,
  hasVendoredLibvips,
  removeVendoredLibvips,
  pkgConfigPath,
  useGlobalLibvips,
  mkdirSync
};
var sharp$3 = { exports: {} };
const platformAndArch$1 = platform$1();
try {
  sharp$3.exports = commonjsRequire(`../build/Release/sharp-${platformAndArch$1}.node`);
} catch (err) {
  const help = ["", 'Something went wrong installing the "sharp" module', "", err.message, "", "Possible solutions:"];
  if (/dylib/.test(err.message) && /Incompatible library version/.test(err.message)) {
    help.push('- Update Homebrew: "brew update && brew upgrade vips"');
  } else {
    const [platform2, arch] = platformAndArch$1.split("-");
    help.push('- Install with the --verbose flag and look for errors: "npm install --ignore-scripts=false --verbose sharp"', `- Install for the current ${platformAndArch$1} runtime: "npm install --platform=${platform2} --arch=${arch} sharp"`);
  }
  help.push("- Consult the installation documentation: https://sharp.pixelplumbing.com/install");
  if (process.platform === "win32" || /symbol/.test(err.message)) {
    const loadedModule = Object.keys(require.cache).find((i2) => /[\\/]build[\\/]Release[\\/]sharp(.*)\.node$/.test(i2));
    if (loadedModule) {
      const [, loadedPackage] = loadedModule.match(/node_modules[\\/]([^\\/]+)[\\/]/);
      help.push(`- Ensure the version of sharp aligns with the ${loadedPackage} package: "npm ls sharp"`);
    }
  }
  throw new Error(help.join("\n"));
}
const util = require$$2;
const stream = require$$2;
const is$8 = is$9;
libvips.hasVendoredLibvips();
const debuglog = util.debuglog("sharp");
const Sharp$1 = function(input2, options2) {
  if (arguments.length === 1 && !is$8.defined(input2)) {
    throw new Error("Invalid input");
  }
  if (!(this instanceof Sharp$1)) {
    return new Sharp$1(input2, options2);
  }
  stream.Duplex.call(this);
  this.options = {
    topOffsetPre: -1,
    leftOffsetPre: -1,
    widthPre: -1,
    heightPre: -1,
    topOffsetPost: -1,
    leftOffsetPost: -1,
    widthPost: -1,
    heightPost: -1,
    width: -1,
    height: -1,
    canvas: "crop",
    position: 0,
    resizeBackground: [0, 0, 0, 255],
    useExifOrientation: false,
    angle: 0,
    rotationAngle: 0,
    rotationBackground: [0, 0, 0, 255],
    rotateBeforePreExtract: false,
    flip: false,
    flop: false,
    extendTop: 0,
    extendBottom: 0,
    extendLeft: 0,
    extendRight: 0,
    extendBackground: [0, 0, 0, 255],
    withoutEnlargement: false,
    withoutReduction: false,
    affineMatrix: [],
    affineBackground: [0, 0, 0, 255],
    affineIdx: 0,
    affineIdy: 0,
    affineOdx: 0,
    affineOdy: 0,
    affineInterpolator: this.constructor.interpolators.bilinear,
    kernel: "lanczos3",
    fastShrinkOnLoad: true,
    tintA: 128,
    tintB: 128,
    flatten: false,
    flattenBackground: [0, 0, 0],
    negate: false,
    negateAlpha: true,
    medianSize: 0,
    blurSigma: 0,
    sharpenSigma: 0,
    sharpenM1: 1,
    sharpenM2: 2,
    sharpenX1: 2,
    sharpenY2: 10,
    sharpenY3: 20,
    threshold: 0,
    thresholdGrayscale: true,
    trimThreshold: 0,
    gamma: 0,
    gammaOut: 0,
    greyscale: false,
    normalise: false,
    claheWidth: 0,
    claheHeight: 0,
    claheMaxSlope: 3,
    brightness: 1,
    saturation: 1,
    hue: 0,
    lightness: 0,
    booleanBufferIn: null,
    booleanFileIn: "",
    joinChannelIn: [],
    extractChannel: -1,
    removeAlpha: false,
    ensureAlpha: -1,
    colourspace: "srgb",
    colourspaceInput: "last",
    composite: [],
    fileOut: "",
    formatOut: "input",
    streamOut: false,
    withMetadata: false,
    withMetadataOrientation: -1,
    withMetadataDensity: 0,
    withMetadataIcc: "",
    withMetadataStrs: {},
    resolveWithObject: false,
    jpegQuality: 80,
    jpegProgressive: false,
    jpegChromaSubsampling: "4:2:0",
    jpegTrellisQuantisation: false,
    jpegOvershootDeringing: false,
    jpegOptimiseScans: false,
    jpegOptimiseCoding: true,
    jpegQuantisationTable: 0,
    pngProgressive: false,
    pngCompressionLevel: 6,
    pngAdaptiveFiltering: false,
    pngPalette: false,
    pngQuality: 100,
    pngEffort: 7,
    pngBitdepth: 8,
    pngDither: 1,
    jp2Quality: 80,
    jp2TileHeight: 512,
    jp2TileWidth: 512,
    jp2Lossless: false,
    jp2ChromaSubsampling: "4:4:4",
    webpQuality: 80,
    webpAlphaQuality: 100,
    webpLossless: false,
    webpNearLossless: false,
    webpSmartSubsample: false,
    webpEffort: 4,
    gifBitdepth: 8,
    gifEffort: 7,
    gifDither: 1,
    tiffQuality: 80,
    tiffCompression: "jpeg",
    tiffPredictor: "horizontal",
    tiffPyramid: false,
    tiffBitdepth: 8,
    tiffTile: false,
    tiffTileHeight: 256,
    tiffTileWidth: 256,
    tiffXres: 1,
    tiffYres: 1,
    tiffResolutionUnit: "inch",
    heifQuality: 50,
    heifLossless: false,
    heifCompression: "av1",
    heifEffort: 4,
    heifChromaSubsampling: "4:4:4",
    rawDepth: "uchar",
    tileSize: 256,
    tileOverlap: 0,
    tileContainer: "fs",
    tileLayout: "dz",
    tileFormat: "last",
    tileDepth: "last",
    tileAngle: 0,
    tileSkipBlanks: -1,
    tileBackground: [255, 255, 255, 255],
    tileCentre: false,
    tileId: "https://example.com/iiif",
    timeoutSeconds: 0,
    linearA: 1,
    linearB: 0,
    debuglog: (warning) => {
      this.emit("warning", warning);
      debuglog(warning);
    },
    queueListener: function(queueLength) {
      Sharp$1.queue.emit("change", queueLength);
    }
  };
  this.options.input = this._createInputDescriptor(input2, options2, { allowStream: true });
  return this;
};
Object.setPrototypeOf(Sharp$1.prototype, stream.Duplex.prototype);
Object.setPrototypeOf(Sharp$1, stream.Duplex);
function clone() {
  const clone2 = this.constructor.call();
  clone2.options = Object.assign({}, this.options);
  if (this._isStreamInput()) {
    this.on("finish", () => {
      this._flattenBufferIn();
      clone2.options.bufferIn = this.options.bufferIn;
      clone2.emit("finish");
    });
  }
  return clone2;
}
Object.assign(Sharp$1.prototype, { clone });
var constructor = Sharp$1;
var colorString$1 = { exports: {} };
var colorName = {
  "aliceblue": [240, 248, 255],
  "antiquewhite": [250, 235, 215],
  "aqua": [0, 255, 255],
  "aquamarine": [127, 255, 212],
  "azure": [240, 255, 255],
  "beige": [245, 245, 220],
  "bisque": [255, 228, 196],
  "black": [0, 0, 0],
  "blanchedalmond": [255, 235, 205],
  "blue": [0, 0, 255],
  "blueviolet": [138, 43, 226],
  "brown": [165, 42, 42],
  "burlywood": [222, 184, 135],
  "cadetblue": [95, 158, 160],
  "chartreuse": [127, 255, 0],
  "chocolate": [210, 105, 30],
  "coral": [255, 127, 80],
  "cornflowerblue": [100, 149, 237],
  "cornsilk": [255, 248, 220],
  "crimson": [220, 20, 60],
  "cyan": [0, 255, 255],
  "darkblue": [0, 0, 139],
  "darkcyan": [0, 139, 139],
  "darkgoldenrod": [184, 134, 11],
  "darkgray": [169, 169, 169],
  "darkgreen": [0, 100, 0],
  "darkgrey": [169, 169, 169],
  "darkkhaki": [189, 183, 107],
  "darkmagenta": [139, 0, 139],
  "darkolivegreen": [85, 107, 47],
  "darkorange": [255, 140, 0],
  "darkorchid": [153, 50, 204],
  "darkred": [139, 0, 0],
  "darksalmon": [233, 150, 122],
  "darkseagreen": [143, 188, 143],
  "darkslateblue": [72, 61, 139],
  "darkslategray": [47, 79, 79],
  "darkslategrey": [47, 79, 79],
  "darkturquoise": [0, 206, 209],
  "darkviolet": [148, 0, 211],
  "deeppink": [255, 20, 147],
  "deepskyblue": [0, 191, 255],
  "dimgray": [105, 105, 105],
  "dimgrey": [105, 105, 105],
  "dodgerblue": [30, 144, 255],
  "firebrick": [178, 34, 34],
  "floralwhite": [255, 250, 240],
  "forestgreen": [34, 139, 34],
  "fuchsia": [255, 0, 255],
  "gainsboro": [220, 220, 220],
  "ghostwhite": [248, 248, 255],
  "gold": [255, 215, 0],
  "goldenrod": [218, 165, 32],
  "gray": [128, 128, 128],
  "green": [0, 128, 0],
  "greenyellow": [173, 255, 47],
  "grey": [128, 128, 128],
  "honeydew": [240, 255, 240],
  "hotpink": [255, 105, 180],
  "indianred": [205, 92, 92],
  "indigo": [75, 0, 130],
  "ivory": [255, 255, 240],
  "khaki": [240, 230, 140],
  "lavender": [230, 230, 250],
  "lavenderblush": [255, 240, 245],
  "lawngreen": [124, 252, 0],
  "lemonchiffon": [255, 250, 205],
  "lightblue": [173, 216, 230],
  "lightcoral": [240, 128, 128],
  "lightcyan": [224, 255, 255],
  "lightgoldenrodyellow": [250, 250, 210],
  "lightgray": [211, 211, 211],
  "lightgreen": [144, 238, 144],
  "lightgrey": [211, 211, 211],
  "lightpink": [255, 182, 193],
  "lightsalmon": [255, 160, 122],
  "lightseagreen": [32, 178, 170],
  "lightskyblue": [135, 206, 250],
  "lightslategray": [119, 136, 153],
  "lightslategrey": [119, 136, 153],
  "lightsteelblue": [176, 196, 222],
  "lightyellow": [255, 255, 224],
  "lime": [0, 255, 0],
  "limegreen": [50, 205, 50],
  "linen": [250, 240, 230],
  "magenta": [255, 0, 255],
  "maroon": [128, 0, 0],
  "mediumaquamarine": [102, 205, 170],
  "mediumblue": [0, 0, 205],
  "mediumorchid": [186, 85, 211],
  "mediumpurple": [147, 112, 219],
  "mediumseagreen": [60, 179, 113],
  "mediumslateblue": [123, 104, 238],
  "mediumspringgreen": [0, 250, 154],
  "mediumturquoise": [72, 209, 204],
  "mediumvioletred": [199, 21, 133],
  "midnightblue": [25, 25, 112],
  "mintcream": [245, 255, 250],
  "mistyrose": [255, 228, 225],
  "moccasin": [255, 228, 181],
  "navajowhite": [255, 222, 173],
  "navy": [0, 0, 128],
  "oldlace": [253, 245, 230],
  "olive": [128, 128, 0],
  "olivedrab": [107, 142, 35],
  "orange": [255, 165, 0],
  "orangered": [255, 69, 0],
  "orchid": [218, 112, 214],
  "palegoldenrod": [238, 232, 170],
  "palegreen": [152, 251, 152],
  "paleturquoise": [175, 238, 238],
  "palevioletred": [219, 112, 147],
  "papayawhip": [255, 239, 213],
  "peachpuff": [255, 218, 185],
  "peru": [205, 133, 63],
  "pink": [255, 192, 203],
  "plum": [221, 160, 221],
  "powderblue": [176, 224, 230],
  "purple": [128, 0, 128],
  "rebeccapurple": [102, 51, 153],
  "red": [255, 0, 0],
  "rosybrown": [188, 143, 143],
  "royalblue": [65, 105, 225],
  "saddlebrown": [139, 69, 19],
  "salmon": [250, 128, 114],
  "sandybrown": [244, 164, 96],
  "seagreen": [46, 139, 87],
  "seashell": [255, 245, 238],
  "sienna": [160, 82, 45],
  "silver": [192, 192, 192],
  "skyblue": [135, 206, 235],
  "slateblue": [106, 90, 205],
  "slategray": [112, 128, 144],
  "slategrey": [112, 128, 144],
  "snow": [255, 250, 250],
  "springgreen": [0, 255, 127],
  "steelblue": [70, 130, 180],
  "tan": [210, 180, 140],
  "teal": [0, 128, 128],
  "thistle": [216, 191, 216],
  "tomato": [255, 99, 71],
  "turquoise": [64, 224, 208],
  "violet": [238, 130, 238],
  "wheat": [245, 222, 179],
  "white": [255, 255, 255],
  "whitesmoke": [245, 245, 245],
  "yellow": [255, 255, 0],
  "yellowgreen": [154, 205, 50]
};
var simpleSwizzle = { exports: {} };
var isArrayish$1 = function isArrayish2(obj) {
  if (!obj || typeof obj === "string") {
    return false;
  }
  return obj instanceof Array || Array.isArray(obj) || obj.length >= 0 && (obj.splice instanceof Function || Object.getOwnPropertyDescriptor(obj, obj.length - 1) && obj.constructor.name !== "String");
};
var isArrayish = isArrayish$1;
var concat = Array.prototype.concat;
var slice = Array.prototype.slice;
var swizzle$1 = simpleSwizzle.exports = function swizzle2(args) {
  var results = [];
  for (var i2 = 0, len = args.length; i2 < len; i2++) {
    var arg = args[i2];
    if (isArrayish(arg)) {
      results = concat.call(results, slice.call(arg));
    } else {
      results.push(arg);
    }
  }
  return results;
};
swizzle$1.wrap = function(fn2) {
  return function() {
    return fn2(swizzle$1(arguments));
  };
};
var colorNames = colorName;
var swizzle = simpleSwizzle.exports;
var hasOwnProperty = Object.hasOwnProperty;
var reverseNames = {};
for (var name in colorNames) {
  if (hasOwnProperty.call(colorNames, name)) {
    reverseNames[colorNames[name]] = name;
  }
}
var cs = colorString$1.exports = {
  to: {},
  get: {}
};
cs.get = function(string2) {
  var prefix = string2.substring(0, 3).toLowerCase();
  var val;
  var model;
  switch (prefix) {
    case "hsl":
      val = cs.get.hsl(string2);
      model = "hsl";
      break;
    case "hwb":
      val = cs.get.hwb(string2);
      model = "hwb";
      break;
    default:
      val = cs.get.rgb(string2);
      model = "rgb";
      break;
  }
  if (!val) {
    return null;
  }
  return { model, value: val };
};
cs.get.rgb = function(string2) {
  if (!string2) {
    return null;
  }
  var abbr = /^#([a-f0-9]{3,4})$/i;
  var hex = /^#([a-f0-9]{6})([a-f0-9]{2})?$/i;
  var rgba = /^rgba?\(\s*([+-]?\d+)(?=[\s,])\s*(?:,\s*)?([+-]?\d+)(?=[\s,])\s*(?:,\s*)?([+-]?\d+)\s*(?:[,|\/]\s*([+-]?[\d\.]+)(%?)\s*)?\)$/;
  var per = /^rgba?\(\s*([+-]?[\d\.]+)\%\s*,?\s*([+-]?[\d\.]+)\%\s*,?\s*([+-]?[\d\.]+)\%\s*(?:[,|\/]\s*([+-]?[\d\.]+)(%?)\s*)?\)$/;
  var keyword = /^(\w+)$/;
  var rgb = [0, 0, 0, 1];
  var match;
  var i2;
  var hexAlpha;
  if (match = string2.match(hex)) {
    hexAlpha = match[2];
    match = match[1];
    for (i2 = 0; i2 < 3; i2++) {
      var i22 = i2 * 2;
      rgb[i2] = parseInt(match.slice(i22, i22 + 2), 16);
    }
    if (hexAlpha) {
      rgb[3] = parseInt(hexAlpha, 16) / 255;
    }
  } else if (match = string2.match(abbr)) {
    match = match[1];
    hexAlpha = match[3];
    for (i2 = 0; i2 < 3; i2++) {
      rgb[i2] = parseInt(match[i2] + match[i2], 16);
    }
    if (hexAlpha) {
      rgb[3] = parseInt(hexAlpha + hexAlpha, 16) / 255;
    }
  } else if (match = string2.match(rgba)) {
    for (i2 = 0; i2 < 3; i2++) {
      rgb[i2] = parseInt(match[i2 + 1], 0);
    }
    if (match[4]) {
      if (match[5]) {
        rgb[3] = parseFloat(match[4]) * 0.01;
      } else {
        rgb[3] = parseFloat(match[4]);
      }
    }
  } else if (match = string2.match(per)) {
    for (i2 = 0; i2 < 3; i2++) {
      rgb[i2] = Math.round(parseFloat(match[i2 + 1]) * 2.55);
    }
    if (match[4]) {
      if (match[5]) {
        rgb[3] = parseFloat(match[4]) * 0.01;
      } else {
        rgb[3] = parseFloat(match[4]);
      }
    }
  } else if (match = string2.match(keyword)) {
    if (match[1] === "transparent") {
      return [0, 0, 0, 0];
    }
    if (!hasOwnProperty.call(colorNames, match[1])) {
      return null;
    }
    rgb = colorNames[match[1]];
    rgb[3] = 1;
    return rgb;
  } else {
    return null;
  }
  for (i2 = 0; i2 < 3; i2++) {
    rgb[i2] = clamp(rgb[i2], 0, 255);
  }
  rgb[3] = clamp(rgb[3], 0, 1);
  return rgb;
};
cs.get.hsl = function(string2) {
  if (!string2) {
    return null;
  }
  var hsl = /^hsla?\(\s*([+-]?(?:\d{0,3}\.)?\d+)(?:deg)?\s*,?\s*([+-]?[\d\.]+)%\s*,?\s*([+-]?[\d\.]+)%\s*(?:[,|\/]\s*([+-]?(?=\.\d|\d)(?:0|[1-9]\d*)?(?:\.\d*)?(?:[eE][+-]?\d+)?)\s*)?\)$/;
  var match = string2.match(hsl);
  if (match) {
    var alpha = parseFloat(match[4]);
    var h = (parseFloat(match[1]) % 360 + 360) % 360;
    var s = clamp(parseFloat(match[2]), 0, 100);
    var l = clamp(parseFloat(match[3]), 0, 100);
    var a = clamp(isNaN(alpha) ? 1 : alpha, 0, 1);
    return [h, s, l, a];
  }
  return null;
};
cs.get.hwb = function(string2) {
  if (!string2) {
    return null;
  }
  var hwb = /^hwb\(\s*([+-]?\d{0,3}(?:\.\d+)?)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?(?=\.\d|\d)(?:0|[1-9]\d*)?(?:\.\d*)?(?:[eE][+-]?\d+)?)\s*)?\)$/;
  var match = string2.match(hwb);
  if (match) {
    var alpha = parseFloat(match[4]);
    var h = (parseFloat(match[1]) % 360 + 360) % 360;
    var w = clamp(parseFloat(match[2]), 0, 100);
    var b = clamp(parseFloat(match[3]), 0, 100);
    var a = clamp(isNaN(alpha) ? 1 : alpha, 0, 1);
    return [h, w, b, a];
  }
  return null;
};
cs.to.hex = function() {
  var rgba = swizzle(arguments);
  return "#" + hexDouble(rgba[0]) + hexDouble(rgba[1]) + hexDouble(rgba[2]) + (rgba[3] < 1 ? hexDouble(Math.round(rgba[3] * 255)) : "");
};
cs.to.rgb = function() {
  var rgba = swizzle(arguments);
  return rgba.length < 4 || rgba[3] === 1 ? "rgb(" + Math.round(rgba[0]) + ", " + Math.round(rgba[1]) + ", " + Math.round(rgba[2]) + ")" : "rgba(" + Math.round(rgba[0]) + ", " + Math.round(rgba[1]) + ", " + Math.round(rgba[2]) + ", " + rgba[3] + ")";
};
cs.to.rgb.percent = function() {
  var rgba = swizzle(arguments);
  var r = Math.round(rgba[0] / 255 * 100);
  var g = Math.round(rgba[1] / 255 * 100);
  var b = Math.round(rgba[2] / 255 * 100);
  return rgba.length < 4 || rgba[3] === 1 ? "rgb(" + r + "%, " + g + "%, " + b + "%)" : "rgba(" + r + "%, " + g + "%, " + b + "%, " + rgba[3] + ")";
};
cs.to.hsl = function() {
  var hsla = swizzle(arguments);
  return hsla.length < 4 || hsla[3] === 1 ? "hsl(" + hsla[0] + ", " + hsla[1] + "%, " + hsla[2] + "%)" : "hsla(" + hsla[0] + ", " + hsla[1] + "%, " + hsla[2] + "%, " + hsla[3] + ")";
};
cs.to.hwb = function() {
  var hwba = swizzle(arguments);
  var a = "";
  if (hwba.length >= 4 && hwba[3] !== 1) {
    a = ", " + hwba[3];
  }
  return "hwb(" + hwba[0] + ", " + hwba[1] + "%, " + hwba[2] + "%" + a + ")";
};
cs.to.keyword = function(rgb) {
  return reverseNames[rgb.slice(0, 3)];
};
function clamp(num, min, max) {
  return Math.min(Math.max(min, num), max);
}
function hexDouble(num) {
  var str2 = Math.round(num).toString(16).toUpperCase();
  return str2.length < 2 ? "0" + str2 : str2;
}
const cssKeywords = colorName;
const reverseKeywords = {};
for (const key of Object.keys(cssKeywords)) {
  reverseKeywords[cssKeywords[key]] = key;
}
const convert$2 = {
  rgb: { channels: 3, labels: "rgb" },
  hsl: { channels: 3, labels: "hsl" },
  hsv: { channels: 3, labels: "hsv" },
  hwb: { channels: 3, labels: "hwb" },
  cmyk: { channels: 4, labels: "cmyk" },
  xyz: { channels: 3, labels: "xyz" },
  lab: { channels: 3, labels: "lab" },
  lch: { channels: 3, labels: "lch" },
  hex: { channels: 1, labels: ["hex"] },
  keyword: { channels: 1, labels: ["keyword"] },
  ansi16: { channels: 1, labels: ["ansi16"] },
  ansi256: { channels: 1, labels: ["ansi256"] },
  hcg: { channels: 3, labels: ["h", "c", "g"] },
  apple: { channels: 3, labels: ["r16", "g16", "b16"] },
  gray: { channels: 1, labels: ["gray"] }
};
var conversions$2 = convert$2;
for (const model of Object.keys(convert$2)) {
  if (!("channels" in convert$2[model])) {
    throw new Error("missing channels property: " + model);
  }
  if (!("labels" in convert$2[model])) {
    throw new Error("missing channel labels property: " + model);
  }
  if (convert$2[model].labels.length !== convert$2[model].channels) {
    throw new Error("channel and label counts mismatch: " + model);
  }
  const { channels, labels } = convert$2[model];
  delete convert$2[model].channels;
  delete convert$2[model].labels;
  Object.defineProperty(convert$2[model], "channels", { value: channels });
  Object.defineProperty(convert$2[model], "labels", { value: labels });
}
convert$2.rgb.hsl = function(rgb) {
  const r = rgb[0] / 255;
  const g = rgb[1] / 255;
  const b = rgb[2] / 255;
  const min = Math.min(r, g, b);
  const max = Math.max(r, g, b);
  const delta = max - min;
  let h;
  let s;
  if (max === min) {
    h = 0;
  } else if (r === max) {
    h = (g - b) / delta;
  } else if (g === max) {
    h = 2 + (b - r) / delta;
  } else if (b === max) {
    h = 4 + (r - g) / delta;
  }
  h = Math.min(h * 60, 360);
  if (h < 0) {
    h += 360;
  }
  const l = (min + max) / 2;
  if (max === min) {
    s = 0;
  } else if (l <= 0.5) {
    s = delta / (max + min);
  } else {
    s = delta / (2 - max - min);
  }
  return [h, s * 100, l * 100];
};
convert$2.rgb.hsv = function(rgb) {
  let rdif;
  let gdif;
  let bdif;
  let h;
  let s;
  const r = rgb[0] / 255;
  const g = rgb[1] / 255;
  const b = rgb[2] / 255;
  const v = Math.max(r, g, b);
  const diff = v - Math.min(r, g, b);
  const diffc = function(c) {
    return (v - c) / 6 / diff + 1 / 2;
  };
  if (diff === 0) {
    h = 0;
    s = 0;
  } else {
    s = diff / v;
    rdif = diffc(r);
    gdif = diffc(g);
    bdif = diffc(b);
    if (r === v) {
      h = bdif - gdif;
    } else if (g === v) {
      h = 1 / 3 + rdif - bdif;
    } else if (b === v) {
      h = 2 / 3 + gdif - rdif;
    }
    if (h < 0) {
      h += 1;
    } else if (h > 1) {
      h -= 1;
    }
  }
  return [
    h * 360,
    s * 100,
    v * 100
  ];
};
convert$2.rgb.hwb = function(rgb) {
  const r = rgb[0];
  const g = rgb[1];
  let b = rgb[2];
  const h = convert$2.rgb.hsl(rgb)[0];
  const w = 1 / 255 * Math.min(r, Math.min(g, b));
  b = 1 - 1 / 255 * Math.max(r, Math.max(g, b));
  return [h, w * 100, b * 100];
};
convert$2.rgb.cmyk = function(rgb) {
  const r = rgb[0] / 255;
  const g = rgb[1] / 255;
  const b = rgb[2] / 255;
  const k = Math.min(1 - r, 1 - g, 1 - b);
  const c = (1 - r - k) / (1 - k) || 0;
  const m = (1 - g - k) / (1 - k) || 0;
  const y = (1 - b - k) / (1 - k) || 0;
  return [c * 100, m * 100, y * 100, k * 100];
};
function comparativeDistance(x, y) {
  return (x[0] - y[0]) ** 2 + (x[1] - y[1]) ** 2 + (x[2] - y[2]) ** 2;
}
convert$2.rgb.keyword = function(rgb) {
  const reversed = reverseKeywords[rgb];
  if (reversed) {
    return reversed;
  }
  let currentClosestDistance = Infinity;
  let currentClosestKeyword;
  for (const keyword of Object.keys(cssKeywords)) {
    const value = cssKeywords[keyword];
    const distance = comparativeDistance(rgb, value);
    if (distance < currentClosestDistance) {
      currentClosestDistance = distance;
      currentClosestKeyword = keyword;
    }
  }
  return currentClosestKeyword;
};
convert$2.keyword.rgb = function(keyword) {
  return cssKeywords[keyword];
};
convert$2.rgb.xyz = function(rgb) {
  let r = rgb[0] / 255;
  let g = rgb[1] / 255;
  let b = rgb[2] / 255;
  r = r > 0.04045 ? ((r + 0.055) / 1.055) ** 2.4 : r / 12.92;
  g = g > 0.04045 ? ((g + 0.055) / 1.055) ** 2.4 : g / 12.92;
  b = b > 0.04045 ? ((b + 0.055) / 1.055) ** 2.4 : b / 12.92;
  const x = r * 0.4124 + g * 0.3576 + b * 0.1805;
  const y = r * 0.2126 + g * 0.7152 + b * 0.0722;
  const z = r * 0.0193 + g * 0.1192 + b * 0.9505;
  return [x * 100, y * 100, z * 100];
};
convert$2.rgb.lab = function(rgb) {
  const xyz = convert$2.rgb.xyz(rgb);
  let x = xyz[0];
  let y = xyz[1];
  let z = xyz[2];
  x /= 95.047;
  y /= 100;
  z /= 108.883;
  x = x > 8856e-6 ? x ** (1 / 3) : 7.787 * x + 16 / 116;
  y = y > 8856e-6 ? y ** (1 / 3) : 7.787 * y + 16 / 116;
  z = z > 8856e-6 ? z ** (1 / 3) : 7.787 * z + 16 / 116;
  const l = 116 * y - 16;
  const a = 500 * (x - y);
  const b = 200 * (y - z);
  return [l, a, b];
};
convert$2.hsl.rgb = function(hsl) {
  const h = hsl[0] / 360;
  const s = hsl[1] / 100;
  const l = hsl[2] / 100;
  let t2;
  let t3;
  let val;
  if (s === 0) {
    val = l * 255;
    return [val, val, val];
  }
  if (l < 0.5) {
    t2 = l * (1 + s);
  } else {
    t2 = l + s - l * s;
  }
  const t1 = 2 * l - t2;
  const rgb = [0, 0, 0];
  for (let i2 = 0; i2 < 3; i2++) {
    t3 = h + 1 / 3 * -(i2 - 1);
    if (t3 < 0) {
      t3++;
    }
    if (t3 > 1) {
      t3--;
    }
    if (6 * t3 < 1) {
      val = t1 + (t2 - t1) * 6 * t3;
    } else if (2 * t3 < 1) {
      val = t2;
    } else if (3 * t3 < 2) {
      val = t1 + (t2 - t1) * (2 / 3 - t3) * 6;
    } else {
      val = t1;
    }
    rgb[i2] = val * 255;
  }
  return rgb;
};
convert$2.hsl.hsv = function(hsl) {
  const h = hsl[0];
  let s = hsl[1] / 100;
  let l = hsl[2] / 100;
  let smin = s;
  const lmin = Math.max(l, 0.01);
  l *= 2;
  s *= l <= 1 ? l : 2 - l;
  smin *= lmin <= 1 ? lmin : 2 - lmin;
  const v = (l + s) / 2;
  const sv = l === 0 ? 2 * smin / (lmin + smin) : 2 * s / (l + s);
  return [h, sv * 100, v * 100];
};
convert$2.hsv.rgb = function(hsv) {
  const h = hsv[0] / 60;
  const s = hsv[1] / 100;
  let v = hsv[2] / 100;
  const hi = Math.floor(h) % 6;
  const f = h - Math.floor(h);
  const p = 255 * v * (1 - s);
  const q = 255 * v * (1 - s * f);
  const t2 = 255 * v * (1 - s * (1 - f));
  v *= 255;
  switch (hi) {
    case 0:
      return [v, t2, p];
    case 1:
      return [q, v, p];
    case 2:
      return [p, v, t2];
    case 3:
      return [p, q, v];
    case 4:
      return [t2, p, v];
    case 5:
      return [v, p, q];
  }
};
convert$2.hsv.hsl = function(hsv) {
  const h = hsv[0];
  const s = hsv[1] / 100;
  const v = hsv[2] / 100;
  const vmin = Math.max(v, 0.01);
  let sl;
  let l;
  l = (2 - s) * v;
  const lmin = (2 - s) * vmin;
  sl = s * vmin;
  sl /= lmin <= 1 ? lmin : 2 - lmin;
  sl = sl || 0;
  l /= 2;
  return [h, sl * 100, l * 100];
};
convert$2.hwb.rgb = function(hwb) {
  const h = hwb[0] / 360;
  let wh = hwb[1] / 100;
  let bl = hwb[2] / 100;
  const ratio = wh + bl;
  let f;
  if (ratio > 1) {
    wh /= ratio;
    bl /= ratio;
  }
  const i2 = Math.floor(6 * h);
  const v = 1 - bl;
  f = 6 * h - i2;
  if ((i2 & 1) !== 0) {
    f = 1 - f;
  }
  const n = wh + f * (v - wh);
  let r;
  let g;
  let b;
  switch (i2) {
    default:
    case 6:
    case 0:
      r = v;
      g = n;
      b = wh;
      break;
    case 1:
      r = n;
      g = v;
      b = wh;
      break;
    case 2:
      r = wh;
      g = v;
      b = n;
      break;
    case 3:
      r = wh;
      g = n;
      b = v;
      break;
    case 4:
      r = n;
      g = wh;
      b = v;
      break;
    case 5:
      r = v;
      g = wh;
      b = n;
      break;
  }
  return [r * 255, g * 255, b * 255];
};
convert$2.cmyk.rgb = function(cmyk) {
  const c = cmyk[0] / 100;
  const m = cmyk[1] / 100;
  const y = cmyk[2] / 100;
  const k = cmyk[3] / 100;
  const r = 1 - Math.min(1, c * (1 - k) + k);
  const g = 1 - Math.min(1, m * (1 - k) + k);
  const b = 1 - Math.min(1, y * (1 - k) + k);
  return [r * 255, g * 255, b * 255];
};
convert$2.xyz.rgb = function(xyz) {
  const x = xyz[0] / 100;
  const y = xyz[1] / 100;
  const z = xyz[2] / 100;
  let r;
  let g;
  let b;
  r = x * 3.2406 + y * -1.5372 + z * -0.4986;
  g = x * -0.9689 + y * 1.8758 + z * 0.0415;
  b = x * 0.0557 + y * -0.204 + z * 1.057;
  r = r > 31308e-7 ? 1.055 * r ** (1 / 2.4) - 0.055 : r * 12.92;
  g = g > 31308e-7 ? 1.055 * g ** (1 / 2.4) - 0.055 : g * 12.92;
  b = b > 31308e-7 ? 1.055 * b ** (1 / 2.4) - 0.055 : b * 12.92;
  r = Math.min(Math.max(0, r), 1);
  g = Math.min(Math.max(0, g), 1);
  b = Math.min(Math.max(0, b), 1);
  return [r * 255, g * 255, b * 255];
};
convert$2.xyz.lab = function(xyz) {
  let x = xyz[0];
  let y = xyz[1];
  let z = xyz[2];
  x /= 95.047;
  y /= 100;
  z /= 108.883;
  x = x > 8856e-6 ? x ** (1 / 3) : 7.787 * x + 16 / 116;
  y = y > 8856e-6 ? y ** (1 / 3) : 7.787 * y + 16 / 116;
  z = z > 8856e-6 ? z ** (1 / 3) : 7.787 * z + 16 / 116;
  const l = 116 * y - 16;
  const a = 500 * (x - y);
  const b = 200 * (y - z);
  return [l, a, b];
};
convert$2.lab.xyz = function(lab) {
  const l = lab[0];
  const a = lab[1];
  const b = lab[2];
  let x;
  let y;
  let z;
  y = (l + 16) / 116;
  x = a / 500 + y;
  z = y - b / 200;
  const y2 = y ** 3;
  const x2 = x ** 3;
  const z2 = z ** 3;
  y = y2 > 8856e-6 ? y2 : (y - 16 / 116) / 7.787;
  x = x2 > 8856e-6 ? x2 : (x - 16 / 116) / 7.787;
  z = z2 > 8856e-6 ? z2 : (z - 16 / 116) / 7.787;
  x *= 95.047;
  y *= 100;
  z *= 108.883;
  return [x, y, z];
};
convert$2.lab.lch = function(lab) {
  const l = lab[0];
  const a = lab[1];
  const b = lab[2];
  let h;
  const hr = Math.atan2(b, a);
  h = hr * 360 / 2 / Math.PI;
  if (h < 0) {
    h += 360;
  }
  const c = Math.sqrt(a * a + b * b);
  return [l, c, h];
};
convert$2.lch.lab = function(lch) {
  const l = lch[0];
  const c = lch[1];
  const h = lch[2];
  const hr = h / 360 * 2 * Math.PI;
  const a = c * Math.cos(hr);
  const b = c * Math.sin(hr);
  return [l, a, b];
};
convert$2.rgb.ansi16 = function(args, saturation = null) {
  const [r, g, b] = args;
  let value = saturation === null ? convert$2.rgb.hsv(args)[2] : saturation;
  value = Math.round(value / 50);
  if (value === 0) {
    return 30;
  }
  let ansi = 30 + (Math.round(b / 255) << 2 | Math.round(g / 255) << 1 | Math.round(r / 255));
  if (value === 2) {
    ansi += 60;
  }
  return ansi;
};
convert$2.hsv.ansi16 = function(args) {
  return convert$2.rgb.ansi16(convert$2.hsv.rgb(args), args[2]);
};
convert$2.rgb.ansi256 = function(args) {
  const r = args[0];
  const g = args[1];
  const b = args[2];
  if (r === g && g === b) {
    if (r < 8) {
      return 16;
    }
    if (r > 248) {
      return 231;
    }
    return Math.round((r - 8) / 247 * 24) + 232;
  }
  const ansi = 16 + 36 * Math.round(r / 255 * 5) + 6 * Math.round(g / 255 * 5) + Math.round(b / 255 * 5);
  return ansi;
};
convert$2.ansi16.rgb = function(args) {
  let color2 = args % 10;
  if (color2 === 0 || color2 === 7) {
    if (args > 50) {
      color2 += 3.5;
    }
    color2 = color2 / 10.5 * 255;
    return [color2, color2, color2];
  }
  const mult = (~~(args > 50) + 1) * 0.5;
  const r = (color2 & 1) * mult * 255;
  const g = (color2 >> 1 & 1) * mult * 255;
  const b = (color2 >> 2 & 1) * mult * 255;
  return [r, g, b];
};
convert$2.ansi256.rgb = function(args) {
  if (args >= 232) {
    const c = (args - 232) * 10 + 8;
    return [c, c, c];
  }
  args -= 16;
  let rem;
  const r = Math.floor(args / 36) / 5 * 255;
  const g = Math.floor((rem = args % 36) / 6) / 5 * 255;
  const b = rem % 6 / 5 * 255;
  return [r, g, b];
};
convert$2.rgb.hex = function(args) {
  const integer2 = ((Math.round(args[0]) & 255) << 16) + ((Math.round(args[1]) & 255) << 8) + (Math.round(args[2]) & 255);
  const string2 = integer2.toString(16).toUpperCase();
  return "000000".substring(string2.length) + string2;
};
convert$2.hex.rgb = function(args) {
  const match = args.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);
  if (!match) {
    return [0, 0, 0];
  }
  let colorString2 = match[0];
  if (match[0].length === 3) {
    colorString2 = colorString2.split("").map((char) => {
      return char + char;
    }).join("");
  }
  const integer2 = parseInt(colorString2, 16);
  const r = integer2 >> 16 & 255;
  const g = integer2 >> 8 & 255;
  const b = integer2 & 255;
  return [r, g, b];
};
convert$2.rgb.hcg = function(rgb) {
  const r = rgb[0] / 255;
  const g = rgb[1] / 255;
  const b = rgb[2] / 255;
  const max = Math.max(Math.max(r, g), b);
  const min = Math.min(Math.min(r, g), b);
  const chroma = max - min;
  let grayscale2;
  let hue;
  if (chroma < 1) {
    grayscale2 = min / (1 - chroma);
  } else {
    grayscale2 = 0;
  }
  if (chroma <= 0) {
    hue = 0;
  } else if (max === r) {
    hue = (g - b) / chroma % 6;
  } else if (max === g) {
    hue = 2 + (b - r) / chroma;
  } else {
    hue = 4 + (r - g) / chroma;
  }
  hue /= 6;
  hue %= 1;
  return [hue * 360, chroma * 100, grayscale2 * 100];
};
convert$2.hsl.hcg = function(hsl) {
  const s = hsl[1] / 100;
  const l = hsl[2] / 100;
  const c = l < 0.5 ? 2 * s * l : 2 * s * (1 - l);
  let f = 0;
  if (c < 1) {
    f = (l - 0.5 * c) / (1 - c);
  }
  return [hsl[0], c * 100, f * 100];
};
convert$2.hsv.hcg = function(hsv) {
  const s = hsv[1] / 100;
  const v = hsv[2] / 100;
  const c = s * v;
  let f = 0;
  if (c < 1) {
    f = (v - c) / (1 - c);
  }
  return [hsv[0], c * 100, f * 100];
};
convert$2.hcg.rgb = function(hcg) {
  const h = hcg[0] / 360;
  const c = hcg[1] / 100;
  const g = hcg[2] / 100;
  if (c === 0) {
    return [g * 255, g * 255, g * 255];
  }
  const pure = [0, 0, 0];
  const hi = h % 1 * 6;
  const v = hi % 1;
  const w = 1 - v;
  let mg = 0;
  switch (Math.floor(hi)) {
    case 0:
      pure[0] = 1;
      pure[1] = v;
      pure[2] = 0;
      break;
    case 1:
      pure[0] = w;
      pure[1] = 1;
      pure[2] = 0;
      break;
    case 2:
      pure[0] = 0;
      pure[1] = 1;
      pure[2] = v;
      break;
    case 3:
      pure[0] = 0;
      pure[1] = w;
      pure[2] = 1;
      break;
    case 4:
      pure[0] = v;
      pure[1] = 0;
      pure[2] = 1;
      break;
    default:
      pure[0] = 1;
      pure[1] = 0;
      pure[2] = w;
  }
  mg = (1 - c) * g;
  return [
    (c * pure[0] + mg) * 255,
    (c * pure[1] + mg) * 255,
    (c * pure[2] + mg) * 255
  ];
};
convert$2.hcg.hsv = function(hcg) {
  const c = hcg[1] / 100;
  const g = hcg[2] / 100;
  const v = c + g * (1 - c);
  let f = 0;
  if (v > 0) {
    f = c / v;
  }
  return [hcg[0], f * 100, v * 100];
};
convert$2.hcg.hsl = function(hcg) {
  const c = hcg[1] / 100;
  const g = hcg[2] / 100;
  const l = g * (1 - c) + 0.5 * c;
  let s = 0;
  if (l > 0 && l < 0.5) {
    s = c / (2 * l);
  } else if (l >= 0.5 && l < 1) {
    s = c / (2 * (1 - l));
  }
  return [hcg[0], s * 100, l * 100];
};
convert$2.hcg.hwb = function(hcg) {
  const c = hcg[1] / 100;
  const g = hcg[2] / 100;
  const v = c + g * (1 - c);
  return [hcg[0], (v - c) * 100, (1 - v) * 100];
};
convert$2.hwb.hcg = function(hwb) {
  const w = hwb[1] / 100;
  const b = hwb[2] / 100;
  const v = 1 - b;
  const c = v - w;
  let g = 0;
  if (c < 1) {
    g = (v - c) / (1 - c);
  }
  return [hwb[0], c * 100, g * 100];
};
convert$2.apple.rgb = function(apple) {
  return [apple[0] / 65535 * 255, apple[1] / 65535 * 255, apple[2] / 65535 * 255];
};
convert$2.rgb.apple = function(rgb) {
  return [rgb[0] / 255 * 65535, rgb[1] / 255 * 65535, rgb[2] / 255 * 65535];
};
convert$2.gray.rgb = function(args) {
  return [args[0] / 100 * 255, args[0] / 100 * 255, args[0] / 100 * 255];
};
convert$2.gray.hsl = function(args) {
  return [0, 0, args[0]];
};
convert$2.gray.hsv = convert$2.gray.hsl;
convert$2.gray.hwb = function(gray) {
  return [0, 100, gray[0]];
};
convert$2.gray.cmyk = function(gray) {
  return [0, 0, 0, gray[0]];
};
convert$2.gray.lab = function(gray) {
  return [gray[0], 0, 0];
};
convert$2.gray.hex = function(gray) {
  const val = Math.round(gray[0] / 100 * 255) & 255;
  const integer2 = (val << 16) + (val << 8) + val;
  const string2 = integer2.toString(16).toUpperCase();
  return "000000".substring(string2.length) + string2;
};
convert$2.rgb.gray = function(rgb) {
  const val = (rgb[0] + rgb[1] + rgb[2]) / 3;
  return [val / 255 * 100];
};
const conversions$1 = conversions$2;
function buildGraph() {
  const graph = {};
  const models2 = Object.keys(conversions$1);
  for (let len = models2.length, i2 = 0; i2 < len; i2++) {
    graph[models2[i2]] = {
      distance: -1,
      parent: null
    };
  }
  return graph;
}
function deriveBFS(fromModel) {
  const graph = buildGraph();
  const queue2 = [fromModel];
  graph[fromModel].distance = 0;
  while (queue2.length) {
    const current = queue2.pop();
    const adjacents = Object.keys(conversions$1[current]);
    for (let len = adjacents.length, i2 = 0; i2 < len; i2++) {
      const adjacent = adjacents[i2];
      const node = graph[adjacent];
      if (node.distance === -1) {
        node.distance = graph[current].distance + 1;
        node.parent = current;
        queue2.unshift(adjacent);
      }
    }
  }
  return graph;
}
function link(from, to) {
  return function(args) {
    return to(from(args));
  };
}
function wrapConversion(toModel, graph) {
  const path2 = [graph[toModel].parent, toModel];
  let fn2 = conversions$1[graph[toModel].parent][toModel];
  let cur = graph[toModel].parent;
  while (graph[cur].parent) {
    path2.unshift(graph[cur].parent);
    fn2 = link(conversions$1[graph[cur].parent][cur], fn2);
    cur = graph[cur].parent;
  }
  fn2.conversion = path2;
  return fn2;
}
var route$1 = function(fromModel) {
  const graph = deriveBFS(fromModel);
  const conversion = {};
  const models2 = Object.keys(graph);
  for (let len = models2.length, i2 = 0; i2 < len; i2++) {
    const toModel = models2[i2];
    const node = graph[toModel];
    if (node.parent === null) {
      continue;
    }
    conversion[toModel] = wrapConversion(toModel, graph);
  }
  return conversion;
};
const conversions = conversions$2;
const route = route$1;
const convert$1 = {};
const models = Object.keys(conversions);
function wrapRaw(fn2) {
  const wrappedFn = function(...args) {
    const arg0 = args[0];
    if (arg0 === void 0 || arg0 === null) {
      return arg0;
    }
    if (arg0.length > 1) {
      args = arg0;
    }
    return fn2(args);
  };
  if ("conversion" in fn2) {
    wrappedFn.conversion = fn2.conversion;
  }
  return wrappedFn;
}
function wrapRounded(fn2) {
  const wrappedFn = function(...args) {
    const arg0 = args[0];
    if (arg0 === void 0 || arg0 === null) {
      return arg0;
    }
    if (arg0.length > 1) {
      args = arg0;
    }
    const result = fn2(args);
    if (typeof result === "object") {
      for (let len = result.length, i2 = 0; i2 < len; i2++) {
        result[i2] = Math.round(result[i2]);
      }
    }
    return result;
  };
  if ("conversion" in fn2) {
    wrappedFn.conversion = fn2.conversion;
  }
  return wrappedFn;
}
models.forEach((fromModel) => {
  convert$1[fromModel] = {};
  Object.defineProperty(convert$1[fromModel], "channels", { value: conversions[fromModel].channels });
  Object.defineProperty(convert$1[fromModel], "labels", { value: conversions[fromModel].labels });
  const routes = route(fromModel);
  const routeModels = Object.keys(routes);
  routeModels.forEach((toModel) => {
    const fn2 = routes[toModel];
    convert$1[fromModel][toModel] = wrapRounded(fn2);
    convert$1[fromModel][toModel].raw = wrapRaw(fn2);
  });
});
var colorConvert = convert$1;
const colorString = colorString$1.exports;
const convert = colorConvert;
const _slice = [].slice;
const skippedModels = [
  "keyword",
  "gray",
  "hex"
];
const hashedModelKeys = {};
for (const model of Object.keys(convert)) {
  hashedModelKeys[_slice.call(convert[model].labels).sort().join("")] = model;
}
const limiters = {};
function Color(object2, model) {
  if (!(this instanceof Color)) {
    return new Color(object2, model);
  }
  if (model && model in skippedModels) {
    model = null;
  }
  if (model && !(model in convert)) {
    throw new Error("Unknown model: " + model);
  }
  let i2;
  let channels;
  if (object2 == null) {
    this.model = "rgb";
    this.color = [0, 0, 0];
    this.valpha = 1;
  } else if (object2 instanceof Color) {
    this.model = object2.model;
    this.color = object2.color.slice();
    this.valpha = object2.valpha;
  } else if (typeof object2 === "string") {
    const result = colorString.get(object2);
    if (result === null) {
      throw new Error("Unable to parse color from string: " + object2);
    }
    this.model = result.model;
    channels = convert[this.model].channels;
    this.color = result.value.slice(0, channels);
    this.valpha = typeof result.value[channels] === "number" ? result.value[channels] : 1;
  } else if (object2.length > 0) {
    this.model = model || "rgb";
    channels = convert[this.model].channels;
    const newArray = _slice.call(object2, 0, channels);
    this.color = zeroArray(newArray, channels);
    this.valpha = typeof object2[channels] === "number" ? object2[channels] : 1;
  } else if (typeof object2 === "number") {
    this.model = "rgb";
    this.color = [
      object2 >> 16 & 255,
      object2 >> 8 & 255,
      object2 & 255
    ];
    this.valpha = 1;
  } else {
    this.valpha = 1;
    const keys = Object.keys(object2);
    if ("alpha" in object2) {
      keys.splice(keys.indexOf("alpha"), 1);
      this.valpha = typeof object2.alpha === "number" ? object2.alpha : 0;
    }
    const hashedKeys = keys.sort().join("");
    if (!(hashedKeys in hashedModelKeys)) {
      throw new Error("Unable to parse color from object: " + JSON.stringify(object2));
    }
    this.model = hashedModelKeys[hashedKeys];
    const labels = convert[this.model].labels;
    const color2 = [];
    for (i2 = 0; i2 < labels.length; i2++) {
      color2.push(object2[labels[i2]]);
    }
    this.color = zeroArray(color2);
  }
  if (limiters[this.model]) {
    channels = convert[this.model].channels;
    for (i2 = 0; i2 < channels; i2++) {
      const limit = limiters[this.model][i2];
      if (limit) {
        this.color[i2] = limit(this.color[i2]);
      }
    }
  }
  this.valpha = Math.max(0, Math.min(1, this.valpha));
  if (Object.freeze) {
    Object.freeze(this);
  }
}
Color.prototype = {
  toString() {
    return this.string();
  },
  toJSON() {
    return this[this.model]();
  },
  string(places) {
    let self = this.model in colorString.to ? this : this.rgb();
    self = self.round(typeof places === "number" ? places : 1);
    const args = self.valpha === 1 ? self.color : self.color.concat(this.valpha);
    return colorString.to[self.model](args);
  },
  percentString(places) {
    const self = this.rgb().round(typeof places === "number" ? places : 1);
    const args = self.valpha === 1 ? self.color : self.color.concat(this.valpha);
    return colorString.to.rgb.percent(args);
  },
  array() {
    return this.valpha === 1 ? this.color.slice() : this.color.concat(this.valpha);
  },
  object() {
    const result = {};
    const channels = convert[this.model].channels;
    const labels = convert[this.model].labels;
    for (let i2 = 0; i2 < channels; i2++) {
      result[labels[i2]] = this.color[i2];
    }
    if (this.valpha !== 1) {
      result.alpha = this.valpha;
    }
    return result;
  },
  unitArray() {
    const rgb = this.rgb().color;
    rgb[0] /= 255;
    rgb[1] /= 255;
    rgb[2] /= 255;
    if (this.valpha !== 1) {
      rgb.push(this.valpha);
    }
    return rgb;
  },
  unitObject() {
    const rgb = this.rgb().object();
    rgb.r /= 255;
    rgb.g /= 255;
    rgb.b /= 255;
    if (this.valpha !== 1) {
      rgb.alpha = this.valpha;
    }
    return rgb;
  },
  round(places) {
    places = Math.max(places || 0, 0);
    return new Color(this.color.map(roundToPlace(places)).concat(this.valpha), this.model);
  },
  alpha(value) {
    if (arguments.length > 0) {
      return new Color(this.color.concat(Math.max(0, Math.min(1, value))), this.model);
    }
    return this.valpha;
  },
  red: getset("rgb", 0, maxfn(255)),
  green: getset("rgb", 1, maxfn(255)),
  blue: getset("rgb", 2, maxfn(255)),
  hue: getset(["hsl", "hsv", "hsl", "hwb", "hcg"], 0, (value) => (value % 360 + 360) % 360),
  saturationl: getset("hsl", 1, maxfn(100)),
  lightness: getset("hsl", 2, maxfn(100)),
  saturationv: getset("hsv", 1, maxfn(100)),
  value: getset("hsv", 2, maxfn(100)),
  chroma: getset("hcg", 1, maxfn(100)),
  gray: getset("hcg", 2, maxfn(100)),
  white: getset("hwb", 1, maxfn(100)),
  wblack: getset("hwb", 2, maxfn(100)),
  cyan: getset("cmyk", 0, maxfn(100)),
  magenta: getset("cmyk", 1, maxfn(100)),
  yellow: getset("cmyk", 2, maxfn(100)),
  black: getset("cmyk", 3, maxfn(100)),
  x: getset("xyz", 0, maxfn(100)),
  y: getset("xyz", 1, maxfn(100)),
  z: getset("xyz", 2, maxfn(100)),
  l: getset("lab", 0, maxfn(100)),
  a: getset("lab", 1),
  b: getset("lab", 2),
  keyword(value) {
    if (arguments.length > 0) {
      return new Color(value);
    }
    return convert[this.model].keyword(this.color);
  },
  hex(value) {
    if (arguments.length > 0) {
      return new Color(value);
    }
    return colorString.to.hex(this.rgb().round().color);
  },
  hexa(value) {
    if (arguments.length > 0) {
      return new Color(value);
    }
    const rgbArray = this.rgb().round().color;
    let alphaHex = Math.round(this.valpha * 255).toString(16).toUpperCase();
    if (alphaHex.length === 1) {
      alphaHex = "0" + alphaHex;
    }
    return colorString.to.hex(rgbArray) + alphaHex;
  },
  rgbNumber() {
    const rgb = this.rgb().color;
    return (rgb[0] & 255) << 16 | (rgb[1] & 255) << 8 | rgb[2] & 255;
  },
  luminosity() {
    const rgb = this.rgb().color;
    const lum = [];
    for (const [i2, element] of rgb.entries()) {
      const chan = element / 255;
      lum[i2] = chan <= 0.03928 ? chan / 12.92 : ((chan + 0.055) / 1.055) ** 2.4;
    }
    return 0.2126 * lum[0] + 0.7152 * lum[1] + 0.0722 * lum[2];
  },
  contrast(color2) {
    const lum1 = this.luminosity();
    const lum2 = color2.luminosity();
    if (lum1 > lum2) {
      return (lum1 + 0.05) / (lum2 + 0.05);
    }
    return (lum2 + 0.05) / (lum1 + 0.05);
  },
  level(color2) {
    const contrastRatio = this.contrast(color2);
    if (contrastRatio >= 7.1) {
      return "AAA";
    }
    return contrastRatio >= 4.5 ? "AA" : "";
  },
  isDark() {
    const rgb = this.rgb().color;
    const yiq = (rgb[0] * 299 + rgb[1] * 587 + rgb[2] * 114) / 1e3;
    return yiq < 128;
  },
  isLight() {
    return !this.isDark();
  },
  negate() {
    const rgb = this.rgb();
    for (let i2 = 0; i2 < 3; i2++) {
      rgb.color[i2] = 255 - rgb.color[i2];
    }
    return rgb;
  },
  lighten(ratio) {
    const hsl = this.hsl();
    hsl.color[2] += hsl.color[2] * ratio;
    return hsl;
  },
  darken(ratio) {
    const hsl = this.hsl();
    hsl.color[2] -= hsl.color[2] * ratio;
    return hsl;
  },
  saturate(ratio) {
    const hsl = this.hsl();
    hsl.color[1] += hsl.color[1] * ratio;
    return hsl;
  },
  desaturate(ratio) {
    const hsl = this.hsl();
    hsl.color[1] -= hsl.color[1] * ratio;
    return hsl;
  },
  whiten(ratio) {
    const hwb = this.hwb();
    hwb.color[1] += hwb.color[1] * ratio;
    return hwb;
  },
  blacken(ratio) {
    const hwb = this.hwb();
    hwb.color[2] += hwb.color[2] * ratio;
    return hwb;
  },
  grayscale() {
    const rgb = this.rgb().color;
    const value = rgb[0] * 0.3 + rgb[1] * 0.59 + rgb[2] * 0.11;
    return Color.rgb(value, value, value);
  },
  fade(ratio) {
    return this.alpha(this.valpha - this.valpha * ratio);
  },
  opaquer(ratio) {
    return this.alpha(this.valpha + this.valpha * ratio);
  },
  rotate(degrees) {
    const hsl = this.hsl();
    let hue = hsl.color[0];
    hue = (hue + degrees) % 360;
    hue = hue < 0 ? 360 + hue : hue;
    hsl.color[0] = hue;
    return hsl;
  },
  mix(mixinColor, weight) {
    if (!mixinColor || !mixinColor.rgb) {
      throw new Error('Argument to "mix" was not a Color instance, but rather an instance of ' + typeof mixinColor);
    }
    const color1 = mixinColor.rgb();
    const color2 = this.rgb();
    const p = weight === void 0 ? 0.5 : weight;
    const w = 2 * p - 1;
    const a = color1.alpha() - color2.alpha();
    const w1 = ((w * a === -1 ? w : (w + a) / (1 + w * a)) + 1) / 2;
    const w2 = 1 - w1;
    return Color.rgb(w1 * color1.red() + w2 * color2.red(), w1 * color1.green() + w2 * color2.green(), w1 * color1.blue() + w2 * color2.blue(), color1.alpha() * p + color2.alpha() * (1 - p));
  }
};
for (const model of Object.keys(convert)) {
  if (skippedModels.includes(model)) {
    continue;
  }
  const channels = convert[model].channels;
  Color.prototype[model] = function() {
    if (this.model === model) {
      return new Color(this);
    }
    if (arguments.length > 0) {
      return new Color(arguments, model);
    }
    const newAlpha = typeof arguments[channels] === "number" ? channels : this.valpha;
    return new Color(assertArray(convert[this.model][model].raw(this.color)).concat(newAlpha), model);
  };
  Color[model] = function(color2) {
    if (typeof color2 === "number") {
      color2 = zeroArray(_slice.call(arguments), channels);
    }
    return new Color(color2, model);
  };
}
function roundTo(number2, places) {
  return Number(number2.toFixed(places));
}
function roundToPlace(places) {
  return function(number2) {
    return roundTo(number2, places);
  };
}
function getset(model, channel2, modifier) {
  model = Array.isArray(model) ? model : [model];
  for (const m of model) {
    (limiters[m] || (limiters[m] = []))[channel2] = modifier;
  }
  model = model[0];
  return function(value) {
    let result;
    if (arguments.length > 0) {
      if (modifier) {
        value = modifier(value);
      }
      result = this[model]();
      result.color[channel2] = value;
      return result;
    }
    result = this[model]().color[channel2];
    if (modifier) {
      result = modifier(result);
    }
    return result;
  };
}
function maxfn(max) {
  return function(v) {
    return Math.max(0, Math.min(max, v));
  };
}
function assertArray(value) {
  return Array.isArray(value) ? value : [value];
}
function zeroArray(array, length) {
  for (let i2 = 0; i2 < length; i2++) {
    if (typeof array[i2] !== "number") {
      array[i2] = 0;
    }
  }
  return array;
}
var color$3 = Color;
const color$2 = color$3;
const is$7 = is$9;
const sharp$2 = sharp$3.exports;
function _inputOptionsFromObject(obj) {
  const { raw: raw2, density, limitInputPixels, unlimited, sequentialRead, failOnError, animated, page, pages, subifd } = obj;
  return [raw2, density, limitInputPixels, unlimited, sequentialRead, failOnError, animated, page, pages, subifd].some(is$7.defined) ? { raw: raw2, density, limitInputPixels, unlimited, sequentialRead, failOnError, animated, page, pages, subifd } : void 0;
}
function _createInputDescriptor(input2, inputOptions, containerOptions) {
  const inputDescriptor = {
    failOnError: true,
    limitInputPixels: Math.pow(16383, 2),
    unlimited: false,
    sequentialRead: false
  };
  if (is$7.string(input2)) {
    inputDescriptor.file = input2;
  } else if (is$7.buffer(input2)) {
    if (input2.length === 0) {
      throw Error("Input Buffer is empty");
    }
    inputDescriptor.buffer = input2;
  } else if (is$7.typedArray(input2)) {
    if (input2.length === 0) {
      throw Error("Input Bit Array is empty");
    }
    inputDescriptor.buffer = Buffer.from(input2.buffer);
  } else if (is$7.plainObject(input2) && !is$7.defined(inputOptions)) {
    inputOptions = input2;
    if (_inputOptionsFromObject(inputOptions)) {
      inputDescriptor.buffer = [];
    }
  } else if (!is$7.defined(input2) && !is$7.defined(inputOptions) && is$7.object(containerOptions) && containerOptions.allowStream) {
    inputDescriptor.buffer = [];
  } else {
    throw new Error(`Unsupported input '${input2}' of type ${typeof input2}${is$7.defined(inputOptions) ? ` when also providing options of type ${typeof inputOptions}` : ""}`);
  }
  if (is$7.object(inputOptions)) {
    if (is$7.defined(inputOptions.failOnError)) {
      if (is$7.bool(inputOptions.failOnError)) {
        inputDescriptor.failOnError = inputOptions.failOnError;
      } else {
        throw is$7.invalidParameterError("failOnError", "boolean", inputOptions.failOnError);
      }
    }
    if (is$7.defined(inputOptions.density)) {
      if (is$7.inRange(inputOptions.density, 1, 1e5)) {
        inputDescriptor.density = inputOptions.density;
      } else {
        throw is$7.invalidParameterError("density", "number between 1 and 100000", inputOptions.density);
      }
    }
    if (is$7.defined(inputOptions.limitInputPixels)) {
      if (is$7.bool(inputOptions.limitInputPixels)) {
        inputDescriptor.limitInputPixels = inputOptions.limitInputPixels ? Math.pow(16383, 2) : 0;
      } else if (is$7.integer(inputOptions.limitInputPixels) && inputOptions.limitInputPixels >= 0) {
        inputDescriptor.limitInputPixels = inputOptions.limitInputPixels;
      } else {
        throw is$7.invalidParameterError("limitInputPixels", "integer >= 0", inputOptions.limitInputPixels);
      }
    }
    if (is$7.defined(inputOptions.unlimited)) {
      if (is$7.bool(inputOptions.unlimited)) {
        inputDescriptor.unlimited = inputOptions.unlimited;
      } else {
        throw is$7.invalidParameterError("unlimited", "boolean", inputOptions.unlimited);
      }
    }
    if (is$7.defined(inputOptions.sequentialRead)) {
      if (is$7.bool(inputOptions.sequentialRead)) {
        inputDescriptor.sequentialRead = inputOptions.sequentialRead;
      } else {
        throw is$7.invalidParameterError("sequentialRead", "boolean", inputOptions.sequentialRead);
      }
    }
    if (is$7.defined(inputOptions.raw)) {
      if (is$7.object(inputOptions.raw) && is$7.integer(inputOptions.raw.width) && inputOptions.raw.width > 0 && is$7.integer(inputOptions.raw.height) && inputOptions.raw.height > 0 && is$7.integer(inputOptions.raw.channels) && is$7.inRange(inputOptions.raw.channels, 1, 4)) {
        inputDescriptor.rawWidth = inputOptions.raw.width;
        inputDescriptor.rawHeight = inputOptions.raw.height;
        inputDescriptor.rawChannels = inputOptions.raw.channels;
        inputDescriptor.rawPremultiplied = !!inputOptions.raw.premultiplied;
        switch (input2.constructor) {
          case Uint8Array:
          case Uint8ClampedArray:
            inputDescriptor.rawDepth = "uchar";
            break;
          case Int8Array:
            inputDescriptor.rawDepth = "char";
            break;
          case Uint16Array:
            inputDescriptor.rawDepth = "ushort";
            break;
          case Int16Array:
            inputDescriptor.rawDepth = "short";
            break;
          case Uint32Array:
            inputDescriptor.rawDepth = "uint";
            break;
          case Int32Array:
            inputDescriptor.rawDepth = "int";
            break;
          case Float32Array:
            inputDescriptor.rawDepth = "float";
            break;
          case Float64Array:
            inputDescriptor.rawDepth = "double";
            break;
          default:
            inputDescriptor.rawDepth = "uchar";
            break;
        }
      } else {
        throw new Error("Expected width, height and channels for raw pixel input");
      }
    }
    if (is$7.defined(inputOptions.animated)) {
      if (is$7.bool(inputOptions.animated)) {
        inputDescriptor.pages = inputOptions.animated ? -1 : 1;
      } else {
        throw is$7.invalidParameterError("animated", "boolean", inputOptions.animated);
      }
    }
    if (is$7.defined(inputOptions.pages)) {
      if (is$7.integer(inputOptions.pages) && is$7.inRange(inputOptions.pages, -1, 1e5)) {
        inputDescriptor.pages = inputOptions.pages;
      } else {
        throw is$7.invalidParameterError("pages", "integer between -1 and 100000", inputOptions.pages);
      }
    }
    if (is$7.defined(inputOptions.page)) {
      if (is$7.integer(inputOptions.page) && is$7.inRange(inputOptions.page, 0, 1e5)) {
        inputDescriptor.page = inputOptions.page;
      } else {
        throw is$7.invalidParameterError("page", "integer between 0 and 100000", inputOptions.page);
      }
    }
    if (is$7.defined(inputOptions.level)) {
      if (is$7.integer(inputOptions.level) && is$7.inRange(inputOptions.level, 0, 256)) {
        inputDescriptor.level = inputOptions.level;
      } else {
        throw is$7.invalidParameterError("level", "integer between 0 and 256", inputOptions.level);
      }
    }
    if (is$7.defined(inputOptions.subifd)) {
      if (is$7.integer(inputOptions.subifd) && is$7.inRange(inputOptions.subifd, -1, 1e5)) {
        inputDescriptor.subifd = inputOptions.subifd;
      } else {
        throw is$7.invalidParameterError("subifd", "integer between -1 and 100000", inputOptions.subifd);
      }
    }
    if (is$7.defined(inputOptions.create)) {
      if (is$7.object(inputOptions.create) && is$7.integer(inputOptions.create.width) && inputOptions.create.width > 0 && is$7.integer(inputOptions.create.height) && inputOptions.create.height > 0 && is$7.integer(inputOptions.create.channels)) {
        inputDescriptor.createWidth = inputOptions.create.width;
        inputDescriptor.createHeight = inputOptions.create.height;
        inputDescriptor.createChannels = inputOptions.create.channels;
        if (is$7.defined(inputOptions.create.noise)) {
          if (!is$7.object(inputOptions.create.noise)) {
            throw new Error("Expected noise to be an object");
          }
          if (!is$7.inArray(inputOptions.create.noise.type, ["gaussian"])) {
            throw new Error("Only gaussian noise is supported at the moment");
          }
          if (!is$7.inRange(inputOptions.create.channels, 1, 4)) {
            throw is$7.invalidParameterError("create.channels", "number between 1 and 4", inputOptions.create.channels);
          }
          inputDescriptor.createNoiseType = inputOptions.create.noise.type;
          if (is$7.number(inputOptions.create.noise.mean) && is$7.inRange(inputOptions.create.noise.mean, 0, 1e4)) {
            inputDescriptor.createNoiseMean = inputOptions.create.noise.mean;
          } else {
            throw is$7.invalidParameterError("create.noise.mean", "number between 0 and 10000", inputOptions.create.noise.mean);
          }
          if (is$7.number(inputOptions.create.noise.sigma) && is$7.inRange(inputOptions.create.noise.sigma, 0, 1e4)) {
            inputDescriptor.createNoiseSigma = inputOptions.create.noise.sigma;
          } else {
            throw is$7.invalidParameterError("create.noise.sigma", "number between 0 and 10000", inputOptions.create.noise.sigma);
          }
        } else if (is$7.defined(inputOptions.create.background)) {
          if (!is$7.inRange(inputOptions.create.channels, 3, 4)) {
            throw is$7.invalidParameterError("create.channels", "number between 3 and 4", inputOptions.create.channels);
          }
          const background = color$2(inputOptions.create.background);
          inputDescriptor.createBackground = [
            background.red(),
            background.green(),
            background.blue(),
            Math.round(background.alpha() * 255)
          ];
        } else {
          throw new Error("Expected valid noise or background to create a new input image");
        }
        delete inputDescriptor.buffer;
      } else {
        throw new Error("Expected valid width, height and channels to create a new input image");
      }
    }
  } else if (is$7.defined(inputOptions)) {
    throw new Error("Invalid input options " + inputOptions);
  }
  return inputDescriptor;
}
function _write(chunk, encoding, callback) {
  if (Array.isArray(this.options.input.buffer)) {
    if (is$7.buffer(chunk)) {
      if (this.options.input.buffer.length === 0) {
        this.on("finish", () => {
          this.streamInFinished = true;
        });
      }
      this.options.input.buffer.push(chunk);
      callback();
    } else {
      callback(new Error("Non-Buffer data on Writable Stream"));
    }
  } else {
    callback(new Error("Unexpected data on Writable Stream"));
  }
}
function _flattenBufferIn() {
  if (this._isStreamInput()) {
    this.options.input.buffer = Buffer.concat(this.options.input.buffer);
  }
}
function _isStreamInput() {
  return Array.isArray(this.options.input.buffer);
}
function metadata(callback) {
  if (is$7.fn(callback)) {
    if (this._isStreamInput()) {
      this.on("finish", () => {
        this._flattenBufferIn();
        sharp$2.metadata(this.options, callback);
      });
    } else {
      sharp$2.metadata(this.options, callback);
    }
    return this;
  } else {
    if (this._isStreamInput()) {
      return new Promise((resolve, reject) => {
        this.on("finish", () => {
          this._flattenBufferIn();
          sharp$2.metadata(this.options, (err, metadata2) => {
            if (err) {
              reject(err);
            } else {
              resolve(metadata2);
            }
          });
        });
      });
    } else {
      return new Promise((resolve, reject) => {
        sharp$2.metadata(this.options, (err, metadata2) => {
          if (err) {
            reject(err);
          } else {
            resolve(metadata2);
          }
        });
      });
    }
  }
}
function stats(callback) {
  if (is$7.fn(callback)) {
    if (this._isStreamInput()) {
      this.on("finish", () => {
        this._flattenBufferIn();
        sharp$2.stats(this.options, callback);
      });
    } else {
      sharp$2.stats(this.options, callback);
    }
    return this;
  } else {
    if (this._isStreamInput()) {
      return new Promise((resolve, reject) => {
        this.on("finish", function() {
          this._flattenBufferIn();
          sharp$2.stats(this.options, (err, stats2) => {
            if (err) {
              reject(err);
            } else {
              resolve(stats2);
            }
          });
        });
      });
    } else {
      return new Promise((resolve, reject) => {
        sharp$2.stats(this.options, (err, stats2) => {
          if (err) {
            reject(err);
          } else {
            resolve(stats2);
          }
        });
      });
    }
  }
}
var input = function(Sharp2) {
  Object.assign(Sharp2.prototype, {
    _inputOptionsFromObject,
    _createInputDescriptor,
    _write,
    _flattenBufferIn,
    _isStreamInput,
    metadata,
    stats
  });
};
const is$6 = is$9;
const gravity = {
  center: 0,
  centre: 0,
  north: 1,
  east: 2,
  south: 3,
  west: 4,
  northeast: 5,
  southeast: 6,
  southwest: 7,
  northwest: 8
};
const position = {
  top: 1,
  right: 2,
  bottom: 3,
  left: 4,
  "right top": 5,
  "right bottom": 6,
  "left bottom": 7,
  "left top": 8
};
const strategy = {
  entropy: 16,
  attention: 17
};
const kernel = {
  nearest: "nearest",
  cubic: "cubic",
  mitchell: "mitchell",
  lanczos2: "lanczos2",
  lanczos3: "lanczos3"
};
const fit = {
  contain: "contain",
  cover: "cover",
  fill: "fill",
  inside: "inside",
  outside: "outside"
};
const mapFitToCanvas = {
  contain: "embed",
  cover: "crop",
  fill: "ignore_aspect",
  inside: "max",
  outside: "min"
};
function isRotationExpected(options2) {
  return options2.angle % 360 !== 0 || options2.useExifOrientation === true || options2.rotationAngle !== 0;
}
function resize(width, height, options2) {
  if (is$6.defined(width)) {
    if (is$6.object(width) && !is$6.defined(options2)) {
      options2 = width;
    } else if (is$6.integer(width) && width > 0) {
      this.options.width = width;
    } else {
      throw is$6.invalidParameterError("width", "positive integer", width);
    }
  } else {
    this.options.width = -1;
  }
  if (is$6.defined(height)) {
    if (is$6.integer(height) && height > 0) {
      this.options.height = height;
    } else {
      throw is$6.invalidParameterError("height", "positive integer", height);
    }
  } else {
    this.options.height = -1;
  }
  if (is$6.object(options2)) {
    if (is$6.defined(options2.width)) {
      if (is$6.integer(options2.width) && options2.width > 0) {
        this.options.width = options2.width;
      } else {
        throw is$6.invalidParameterError("width", "positive integer", options2.width);
      }
    }
    if (is$6.defined(options2.height)) {
      if (is$6.integer(options2.height) && options2.height > 0) {
        this.options.height = options2.height;
      } else {
        throw is$6.invalidParameterError("height", "positive integer", options2.height);
      }
    }
    if (is$6.defined(options2.fit)) {
      const canvas = mapFitToCanvas[options2.fit];
      if (is$6.string(canvas)) {
        this.options.canvas = canvas;
      } else {
        throw is$6.invalidParameterError("fit", "valid fit", options2.fit);
      }
    }
    if (is$6.defined(options2.position)) {
      const pos = is$6.integer(options2.position) ? options2.position : strategy[options2.position] || position[options2.position] || gravity[options2.position];
      if (is$6.integer(pos) && (is$6.inRange(pos, 0, 8) || is$6.inRange(pos, 16, 17))) {
        this.options.position = pos;
      } else {
        throw is$6.invalidParameterError("position", "valid position/gravity/strategy", options2.position);
      }
    }
    this._setBackgroundColourOption("resizeBackground", options2.background);
    if (is$6.defined(options2.kernel)) {
      if (is$6.string(kernel[options2.kernel])) {
        this.options.kernel = kernel[options2.kernel];
      } else {
        throw is$6.invalidParameterError("kernel", "valid kernel name", options2.kernel);
      }
    }
    if (is$6.defined(options2.withoutEnlargement)) {
      this._setBooleanOption("withoutEnlargement", options2.withoutEnlargement);
    }
    if (is$6.defined(options2.withoutReduction)) {
      this._setBooleanOption("withoutReduction", options2.withoutReduction);
    }
    if (is$6.defined(options2.fastShrinkOnLoad)) {
      this._setBooleanOption("fastShrinkOnLoad", options2.fastShrinkOnLoad);
    }
  }
  return this;
}
function extend(extend3) {
  if (is$6.integer(extend3) && extend3 > 0) {
    this.options.extendTop = extend3;
    this.options.extendBottom = extend3;
    this.options.extendLeft = extend3;
    this.options.extendRight = extend3;
  } else if (is$6.object(extend3)) {
    if (is$6.defined(extend3.top)) {
      if (is$6.integer(extend3.top) && extend3.top >= 0) {
        this.options.extendTop = extend3.top;
      } else {
        throw is$6.invalidParameterError("top", "positive integer", extend3.top);
      }
    }
    if (is$6.defined(extend3.bottom)) {
      if (is$6.integer(extend3.bottom) && extend3.bottom >= 0) {
        this.options.extendBottom = extend3.bottom;
      } else {
        throw is$6.invalidParameterError("bottom", "positive integer", extend3.bottom);
      }
    }
    if (is$6.defined(extend3.left)) {
      if (is$6.integer(extend3.left) && extend3.left >= 0) {
        this.options.extendLeft = extend3.left;
      } else {
        throw is$6.invalidParameterError("left", "positive integer", extend3.left);
      }
    }
    if (is$6.defined(extend3.right)) {
      if (is$6.integer(extend3.right) && extend3.right >= 0) {
        this.options.extendRight = extend3.right;
      } else {
        throw is$6.invalidParameterError("right", "positive integer", extend3.right);
      }
    }
    this._setBackgroundColourOption("extendBackground", extend3.background);
  } else {
    throw is$6.invalidParameterError("extend", "integer or object", extend3);
  }
  return this;
}
function extract(options2) {
  const suffix = this.options.width === -1 && this.options.height === -1 ? "Pre" : "Post";
  ["left", "top", "width", "height"].forEach(function(name2) {
    const value = options2[name2];
    if (is$6.integer(value) && value >= 0) {
      this.options[name2 + (name2 === "left" || name2 === "top" ? "Offset" : "") + suffix] = value;
    } else {
      throw is$6.invalidParameterError(name2, "integer", value);
    }
  }, this);
  if (suffix === "Pre" && isRotationExpected(this.options)) {
    this.options.rotateBeforePreExtract = true;
  }
  return this;
}
function trim(threshold2) {
  if (!is$6.defined(threshold2)) {
    this.options.trimThreshold = 10;
  } else if (is$6.number(threshold2) && threshold2 > 0) {
    this.options.trimThreshold = threshold2;
  } else {
    throw is$6.invalidParameterError("threshold", "number greater than zero", threshold2);
  }
  if (this.options.trimThreshold && isRotationExpected(this.options)) {
    this.options.rotateBeforePreExtract = true;
  }
  return this;
}
var resize_1 = function(Sharp2) {
  Object.assign(Sharp2.prototype, {
    resize,
    extend,
    extract,
    trim
  });
  Sharp2.gravity = gravity;
  Sharp2.strategy = strategy;
  Sharp2.kernel = kernel;
  Sharp2.fit = fit;
  Sharp2.position = position;
};
const is$5 = is$9;
const blend = {
  clear: "clear",
  source: "source",
  over: "over",
  in: "in",
  out: "out",
  atop: "atop",
  dest: "dest",
  "dest-over": "dest-over",
  "dest-in": "dest-in",
  "dest-out": "dest-out",
  "dest-atop": "dest-atop",
  xor: "xor",
  add: "add",
  saturate: "saturate",
  multiply: "multiply",
  screen: "screen",
  overlay: "overlay",
  darken: "darken",
  lighten: "lighten",
  "colour-dodge": "colour-dodge",
  "color-dodge": "colour-dodge",
  "colour-burn": "colour-burn",
  "color-burn": "colour-burn",
  "hard-light": "hard-light",
  "soft-light": "soft-light",
  difference: "difference",
  exclusion: "exclusion"
};
function composite(images) {
  if (!Array.isArray(images)) {
    throw is$5.invalidParameterError("images to composite", "array", images);
  }
  this.options.composite = images.map((image) => {
    if (!is$5.object(image)) {
      throw is$5.invalidParameterError("image to composite", "object", image);
    }
    const inputOptions = this._inputOptionsFromObject(image);
    const composite2 = {
      input: this._createInputDescriptor(image.input, inputOptions, { allowStream: false }),
      blend: "over",
      tile: false,
      left: 0,
      top: 0,
      hasOffset: false,
      gravity: 0,
      premultiplied: false
    };
    if (is$5.defined(image.blend)) {
      if (is$5.string(blend[image.blend])) {
        composite2.blend = blend[image.blend];
      } else {
        throw is$5.invalidParameterError("blend", "valid blend name", image.blend);
      }
    }
    if (is$5.defined(image.tile)) {
      if (is$5.bool(image.tile)) {
        composite2.tile = image.tile;
      } else {
        throw is$5.invalidParameterError("tile", "boolean", image.tile);
      }
    }
    if (is$5.defined(image.left)) {
      if (is$5.integer(image.left)) {
        composite2.left = image.left;
      } else {
        throw is$5.invalidParameterError("left", "integer", image.left);
      }
    }
    if (is$5.defined(image.top)) {
      if (is$5.integer(image.top)) {
        composite2.top = image.top;
      } else {
        throw is$5.invalidParameterError("top", "integer", image.top);
      }
    }
    if (is$5.defined(image.top) !== is$5.defined(image.left)) {
      throw new Error("Expected both left and top to be set");
    } else {
      composite2.hasOffset = is$5.integer(image.top) && is$5.integer(image.left);
    }
    if (is$5.defined(image.gravity)) {
      if (is$5.integer(image.gravity) && is$5.inRange(image.gravity, 0, 8)) {
        composite2.gravity = image.gravity;
      } else if (is$5.string(image.gravity) && is$5.integer(this.constructor.gravity[image.gravity])) {
        composite2.gravity = this.constructor.gravity[image.gravity];
      } else {
        throw is$5.invalidParameterError("gravity", "valid gravity", image.gravity);
      }
    }
    if (is$5.defined(image.premultiplied)) {
      if (is$5.bool(image.premultiplied)) {
        composite2.premultiplied = image.premultiplied;
      } else {
        throw is$5.invalidParameterError("premultiplied", "boolean", image.premultiplied);
      }
    }
    return composite2;
  });
  return this;
}
var composite_1 = function(Sharp2) {
  Sharp2.prototype.composite = composite;
  Sharp2.blend = blend;
};
const color$1 = color$3;
const is$4 = is$9;
function rotate(angle, options2) {
  if (!is$4.defined(angle)) {
    this.options.useExifOrientation = true;
  } else if (is$4.integer(angle) && !(angle % 90)) {
    this.options.angle = angle;
  } else if (is$4.number(angle)) {
    this.options.rotationAngle = angle;
    if (is$4.object(options2) && options2.background) {
      const backgroundColour = color$1(options2.background);
      this.options.rotationBackground = [
        backgroundColour.red(),
        backgroundColour.green(),
        backgroundColour.blue(),
        Math.round(backgroundColour.alpha() * 255)
      ];
    }
  } else {
    throw is$4.invalidParameterError("angle", "numeric", angle);
  }
  return this;
}
function flip(flip2) {
  this.options.flip = is$4.bool(flip2) ? flip2 : true;
  return this;
}
function flop(flop2) {
  this.options.flop = is$4.bool(flop2) ? flop2 : true;
  return this;
}
function affine(matrix, options2) {
  const flatMatrix = [].concat(...matrix);
  if (flatMatrix.length === 4 && flatMatrix.every(is$4.number)) {
    this.options.affineMatrix = flatMatrix;
  } else {
    throw is$4.invalidParameterError("matrix", "1x4 or 2x2 array", matrix);
  }
  if (is$4.defined(options2)) {
    if (is$4.object(options2)) {
      this._setBackgroundColourOption("affineBackground", options2.background);
      if (is$4.defined(options2.idx)) {
        if (is$4.number(options2.idx)) {
          this.options.affineIdx = options2.idx;
        } else {
          throw is$4.invalidParameterError("options.idx", "number", options2.idx);
        }
      }
      if (is$4.defined(options2.idy)) {
        if (is$4.number(options2.idy)) {
          this.options.affineIdy = options2.idy;
        } else {
          throw is$4.invalidParameterError("options.idy", "number", options2.idy);
        }
      }
      if (is$4.defined(options2.odx)) {
        if (is$4.number(options2.odx)) {
          this.options.affineOdx = options2.odx;
        } else {
          throw is$4.invalidParameterError("options.odx", "number", options2.odx);
        }
      }
      if (is$4.defined(options2.ody)) {
        if (is$4.number(options2.ody)) {
          this.options.affineOdy = options2.ody;
        } else {
          throw is$4.invalidParameterError("options.ody", "number", options2.ody);
        }
      }
      if (is$4.defined(options2.interpolator)) {
        if (is$4.inArray(options2.interpolator, Object.values(this.constructor.interpolators))) {
          this.options.affineInterpolator = options2.interpolator;
        } else {
          throw is$4.invalidParameterError("options.interpolator", "valid interpolator name", options2.interpolator);
        }
      }
    } else {
      throw is$4.invalidParameterError("options", "object", options2);
    }
  }
  return this;
}
function sharpen(options2, flat, jagged) {
  if (!is$4.defined(options2)) {
    this.options.sharpenSigma = -1;
  } else if (is$4.bool(options2)) {
    this.options.sharpenSigma = options2 ? -1 : 0;
  } else if (is$4.number(options2) && is$4.inRange(options2, 0.01, 1e4)) {
    this.options.sharpenSigma = options2;
    if (is$4.defined(flat)) {
      if (is$4.number(flat) && is$4.inRange(flat, 0, 1e4)) {
        this.options.sharpenM1 = flat;
      } else {
        throw is$4.invalidParameterError("flat", "number between 0 and 10000", flat);
      }
    }
    if (is$4.defined(jagged)) {
      if (is$4.number(jagged) && is$4.inRange(jagged, 0, 1e4)) {
        this.options.sharpenM2 = jagged;
      } else {
        throw is$4.invalidParameterError("jagged", "number between 0 and 10000", jagged);
      }
    }
  } else if (is$4.plainObject(options2)) {
    if (is$4.number(options2.sigma) && is$4.inRange(options2.sigma, 0.01, 1e4)) {
      this.options.sharpenSigma = options2.sigma;
    } else {
      throw is$4.invalidParameterError("options.sigma", "number between 0.01 and 10000", options2.sigma);
    }
    if (is$4.defined(options2.m1)) {
      if (is$4.number(options2.m1) && is$4.inRange(options2.m1, 0, 1e4)) {
        this.options.sharpenM1 = options2.m1;
      } else {
        throw is$4.invalidParameterError("options.m1", "number between 0 and 10000", options2.m1);
      }
    }
    if (is$4.defined(options2.m2)) {
      if (is$4.number(options2.m2) && is$4.inRange(options2.m2, 0, 1e4)) {
        this.options.sharpenM2 = options2.m2;
      } else {
        throw is$4.invalidParameterError("options.m2", "number between 0 and 10000", options2.m2);
      }
    }
    if (is$4.defined(options2.x1)) {
      if (is$4.number(options2.x1) && is$4.inRange(options2.x1, 0, 1e4)) {
        this.options.sharpenX1 = options2.x1;
      } else {
        throw is$4.invalidParameterError("options.x1", "number between 0 and 10000", options2.x1);
      }
    }
    if (is$4.defined(options2.y2)) {
      if (is$4.number(options2.y2) && is$4.inRange(options2.y2, 0, 1e4)) {
        this.options.sharpenY2 = options2.y2;
      } else {
        throw is$4.invalidParameterError("options.y2", "number between 0 and 10000", options2.y2);
      }
    }
    if (is$4.defined(options2.y3)) {
      if (is$4.number(options2.y3) && is$4.inRange(options2.y3, 0, 1e4)) {
        this.options.sharpenY3 = options2.y3;
      } else {
        throw is$4.invalidParameterError("options.y3", "number between 0 and 10000", options2.y3);
      }
    }
  } else {
    throw is$4.invalidParameterError("sigma", "number between 0.01 and 10000", options2);
  }
  return this;
}
function median(size) {
  if (!is$4.defined(size)) {
    this.options.medianSize = 3;
  } else if (is$4.integer(size) && is$4.inRange(size, 1, 1e3)) {
    this.options.medianSize = size;
  } else {
    throw is$4.invalidParameterError("size", "integer between 1 and 1000", size);
  }
  return this;
}
function blur(sigma) {
  if (!is$4.defined(sigma)) {
    this.options.blurSigma = -1;
  } else if (is$4.bool(sigma)) {
    this.options.blurSigma = sigma ? -1 : 0;
  } else if (is$4.number(sigma) && is$4.inRange(sigma, 0.3, 1e3)) {
    this.options.blurSigma = sigma;
  } else {
    throw is$4.invalidParameterError("sigma", "number between 0.3 and 1000", sigma);
  }
  return this;
}
function flatten(options2) {
  this.options.flatten = is$4.bool(options2) ? options2 : true;
  if (is$4.object(options2)) {
    this._setBackgroundColourOption("flattenBackground", options2.background);
  }
  return this;
}
function gamma(gamma2, gammaOut) {
  if (!is$4.defined(gamma2)) {
    this.options.gamma = 2.2;
  } else if (is$4.number(gamma2) && is$4.inRange(gamma2, 1, 3)) {
    this.options.gamma = gamma2;
  } else {
    throw is$4.invalidParameterError("gamma", "number between 1.0 and 3.0", gamma2);
  }
  if (!is$4.defined(gammaOut)) {
    this.options.gammaOut = this.options.gamma;
  } else if (is$4.number(gammaOut) && is$4.inRange(gammaOut, 1, 3)) {
    this.options.gammaOut = gammaOut;
  } else {
    throw is$4.invalidParameterError("gammaOut", "number between 1.0 and 3.0", gammaOut);
  }
  return this;
}
function negate(options2) {
  this.options.negate = is$4.bool(options2) ? options2 : true;
  if (is$4.plainObject(options2) && "alpha" in options2) {
    if (!is$4.bool(options2.alpha)) {
      throw is$4.invalidParameterError("alpha", "should be boolean value", options2.alpha);
    } else {
      this.options.negateAlpha = options2.alpha;
    }
  }
  return this;
}
function normalise(normalise2) {
  this.options.normalise = is$4.bool(normalise2) ? normalise2 : true;
  return this;
}
function normalize(normalize2) {
  return this.normalise(normalize2);
}
function clahe(options2) {
  if (!is$4.plainObject(options2)) {
    throw is$4.invalidParameterError("options", "plain object", options2);
  }
  if (!("width" in options2) || !is$4.integer(options2.width) || options2.width <= 0) {
    throw is$4.invalidParameterError("width", "integer above zero", options2.width);
  } else {
    this.options.claheWidth = options2.width;
  }
  if (!("height" in options2) || !is$4.integer(options2.height) || options2.height <= 0) {
    throw is$4.invalidParameterError("height", "integer above zero", options2.height);
  } else {
    this.options.claheHeight = options2.height;
  }
  if (!is$4.defined(options2.maxSlope)) {
    this.options.claheMaxSlope = 3;
  } else if (!is$4.integer(options2.maxSlope) || options2.maxSlope < 0 || options2.maxSlope > 100) {
    throw is$4.invalidParameterError("maxSlope", "integer 0-100", options2.maxSlope);
  } else {
    this.options.claheMaxSlope = options2.maxSlope;
  }
  return this;
}
function convolve(kernel2) {
  if (!is$4.object(kernel2) || !Array.isArray(kernel2.kernel) || !is$4.integer(kernel2.width) || !is$4.integer(kernel2.height) || !is$4.inRange(kernel2.width, 3, 1001) || !is$4.inRange(kernel2.height, 3, 1001) || kernel2.height * kernel2.width !== kernel2.kernel.length) {
    throw new Error("Invalid convolution kernel");
  }
  if (!is$4.integer(kernel2.scale)) {
    kernel2.scale = kernel2.kernel.reduce(function(a, b) {
      return a + b;
    }, 0);
  }
  if (kernel2.scale < 1) {
    kernel2.scale = 1;
  }
  if (!is$4.integer(kernel2.offset)) {
    kernel2.offset = 0;
  }
  this.options.convKernel = kernel2;
  return this;
}
function threshold(threshold2, options2) {
  if (!is$4.defined(threshold2)) {
    this.options.threshold = 128;
  } else if (is$4.bool(threshold2)) {
    this.options.threshold = threshold2 ? 128 : 0;
  } else if (is$4.integer(threshold2) && is$4.inRange(threshold2, 0, 255)) {
    this.options.threshold = threshold2;
  } else {
    throw is$4.invalidParameterError("threshold", "integer between 0 and 255", threshold2);
  }
  if (!is$4.object(options2) || options2.greyscale === true || options2.grayscale === true) {
    this.options.thresholdGrayscale = true;
  } else {
    this.options.thresholdGrayscale = false;
  }
  return this;
}
function boolean(operand, operator, options2) {
  this.options.boolean = this._createInputDescriptor(operand, options2);
  if (is$4.string(operator) && is$4.inArray(operator, ["and", "or", "eor"])) {
    this.options.booleanOp = operator;
  } else {
    throw is$4.invalidParameterError("operator", "one of: and, or, eor", operator);
  }
  return this;
}
function linear(a, b) {
  if (!is$4.defined(a)) {
    this.options.linearA = 1;
  } else if (is$4.number(a)) {
    this.options.linearA = a;
  } else {
    throw is$4.invalidParameterError("a", "numeric", a);
  }
  if (!is$4.defined(b)) {
    this.options.linearB = 0;
  } else if (is$4.number(b)) {
    this.options.linearB = b;
  } else {
    throw is$4.invalidParameterError("b", "numeric", b);
  }
  return this;
}
function recomb(inputMatrix) {
  if (!Array.isArray(inputMatrix) || inputMatrix.length !== 3 || inputMatrix[0].length !== 3 || inputMatrix[1].length !== 3 || inputMatrix[2].length !== 3) {
    throw new Error("Invalid recombination matrix");
  }
  this.options.recombMatrix = [
    inputMatrix[0][0],
    inputMatrix[0][1],
    inputMatrix[0][2],
    inputMatrix[1][0],
    inputMatrix[1][1],
    inputMatrix[1][2],
    inputMatrix[2][0],
    inputMatrix[2][1],
    inputMatrix[2][2]
  ].map(Number);
  return this;
}
function modulate(options2) {
  if (!is$4.plainObject(options2)) {
    throw is$4.invalidParameterError("options", "plain object", options2);
  }
  if ("brightness" in options2) {
    if (is$4.number(options2.brightness) && options2.brightness >= 0) {
      this.options.brightness = options2.brightness;
    } else {
      throw is$4.invalidParameterError("brightness", "number above zero", options2.brightness);
    }
  }
  if ("saturation" in options2) {
    if (is$4.number(options2.saturation) && options2.saturation >= 0) {
      this.options.saturation = options2.saturation;
    } else {
      throw is$4.invalidParameterError("saturation", "number above zero", options2.saturation);
    }
  }
  if ("hue" in options2) {
    if (is$4.integer(options2.hue)) {
      this.options.hue = options2.hue % 360;
    } else {
      throw is$4.invalidParameterError("hue", "number", options2.hue);
    }
  }
  if ("lightness" in options2) {
    if (is$4.number(options2.lightness)) {
      this.options.lightness = options2.lightness;
    } else {
      throw is$4.invalidParameterError("lightness", "number", options2.lightness);
    }
  }
  return this;
}
var operation = function(Sharp2) {
  Object.assign(Sharp2.prototype, {
    rotate,
    flip,
    flop,
    affine,
    sharpen,
    median,
    blur,
    flatten,
    gamma,
    negate,
    normalise,
    normalize,
    clahe,
    convolve,
    threshold,
    boolean,
    linear,
    recomb,
    modulate
  });
};
const color = color$3;
const is$3 = is$9;
const colourspace = {
  multiband: "multiband",
  "b-w": "b-w",
  bw: "b-w",
  cmyk: "cmyk",
  srgb: "srgb"
};
function tint(rgb) {
  const colour2 = color(rgb);
  this.options.tintA = colour2.a();
  this.options.tintB = colour2.b();
  return this;
}
function greyscale(greyscale2) {
  this.options.greyscale = is$3.bool(greyscale2) ? greyscale2 : true;
  return this;
}
function grayscale(grayscale2) {
  return this.greyscale(grayscale2);
}
function pipelineColourspace(colourspace2) {
  if (!is$3.string(colourspace2)) {
    throw is$3.invalidParameterError("colourspace", "string", colourspace2);
  }
  this.options.colourspaceInput = colourspace2;
  return this;
}
function pipelineColorspace(colorspace) {
  return this.pipelineColourspace(colorspace);
}
function toColourspace(colourspace2) {
  if (!is$3.string(colourspace2)) {
    throw is$3.invalidParameterError("colourspace", "string", colourspace2);
  }
  this.options.colourspace = colourspace2;
  return this;
}
function toColorspace(colorspace) {
  return this.toColourspace(colorspace);
}
function _setBackgroundColourOption(key, value) {
  if (is$3.defined(value)) {
    if (is$3.object(value) || is$3.string(value)) {
      const colour2 = color(value);
      this.options[key] = [
        colour2.red(),
        colour2.green(),
        colour2.blue(),
        Math.round(colour2.alpha() * 255)
      ];
    } else {
      throw is$3.invalidParameterError("background", "object or string", value);
    }
  }
}
var colour = function(Sharp2) {
  Object.assign(Sharp2.prototype, {
    tint,
    greyscale,
    grayscale,
    pipelineColourspace,
    pipelineColorspace,
    toColourspace,
    toColorspace,
    _setBackgroundColourOption
  });
  Sharp2.colourspace = colourspace;
  Sharp2.colorspace = colourspace;
};
const is$2 = is$9;
const bool = {
  and: "and",
  or: "or",
  eor: "eor"
};
function removeAlpha() {
  this.options.removeAlpha = true;
  return this;
}
function ensureAlpha(alpha) {
  if (is$2.defined(alpha)) {
    if (is$2.number(alpha) && is$2.inRange(alpha, 0, 1)) {
      this.options.ensureAlpha = alpha;
    } else {
      throw is$2.invalidParameterError("alpha", "number between 0 and 1", alpha);
    }
  } else {
    this.options.ensureAlpha = 1;
  }
  return this;
}
function extractChannel(channel2) {
  const channelMap = { red: 0, green: 1, blue: 2, alpha: 3 };
  if (Object.keys(channelMap).includes(channel2)) {
    channel2 = channelMap[channel2];
  }
  if (is$2.integer(channel2) && is$2.inRange(channel2, 0, 4)) {
    this.options.extractChannel = channel2;
  } else {
    throw is$2.invalidParameterError("channel", "integer or one of: red, green, blue, alpha", channel2);
  }
  return this.toColourspace("b-w");
}
function joinChannel(images, options2) {
  if (Array.isArray(images)) {
    images.forEach(function(image) {
      this.options.joinChannelIn.push(this._createInputDescriptor(image, options2));
    }, this);
  } else {
    this.options.joinChannelIn.push(this._createInputDescriptor(images, options2));
  }
  return this;
}
function bandbool(boolOp) {
  if (is$2.string(boolOp) && is$2.inArray(boolOp, ["and", "or", "eor"])) {
    this.options.bandBoolOp = boolOp;
  } else {
    throw is$2.invalidParameterError("boolOp", "one of: and, or, eor", boolOp);
  }
  return this;
}
var channel = function(Sharp2) {
  Object.assign(Sharp2.prototype, {
    removeAlpha,
    ensureAlpha,
    extractChannel,
    joinChannel,
    bandbool
  });
  Sharp2.bool = bool;
};
const path$1 = require$$2;
const is$1 = is$9;
const sharp$1 = sharp$3.exports;
const formats = /* @__PURE__ */ new Map([
  ["heic", "heif"],
  ["heif", "heif"],
  ["avif", "avif"],
  ["jpeg", "jpeg"],
  ["jpg", "jpeg"],
  ["png", "png"],
  ["raw", "raw"],
  ["tiff", "tiff"],
  ["tif", "tiff"],
  ["webp", "webp"],
  ["gif", "gif"],
  ["jp2", "jp2"],
  ["jpx", "jp2"],
  ["j2k", "jp2"],
  ["j2c", "jp2"]
]);
const errJp2Save = new Error("JP2 output requires libvips with support for OpenJPEG");
const bitdepthFromColourCount = (colours) => 1 << 31 - Math.clz32(Math.ceil(Math.log2(colours)));
function toFile(fileOut, callback) {
  let err;
  if (!is$1.string(fileOut)) {
    err = new Error("Missing output file path");
  } else if (is$1.string(this.options.input.file) && path$1.resolve(this.options.input.file) === path$1.resolve(fileOut)) {
    err = new Error("Cannot use same file for input and output");
  }
  if (err) {
    if (is$1.fn(callback)) {
      callback(err);
    } else {
      return Promise.reject(err);
    }
  } else {
    this.options.fileOut = fileOut;
    return this._pipeline(callback);
  }
  return this;
}
function toBuffer(options2, callback) {
  if (is$1.object(options2)) {
    this._setBooleanOption("resolveWithObject", options2.resolveWithObject);
  } else if (this.options.resolveWithObject) {
    this.options.resolveWithObject = false;
  }
  this.options.fileOut = "";
  return this._pipeline(is$1.fn(options2) ? options2 : callback);
}
function withMetadata(options2) {
  this.options.withMetadata = is$1.bool(options2) ? options2 : true;
  if (is$1.object(options2)) {
    if (is$1.defined(options2.orientation)) {
      if (is$1.integer(options2.orientation) && is$1.inRange(options2.orientation, 1, 8)) {
        this.options.withMetadataOrientation = options2.orientation;
      } else {
        throw is$1.invalidParameterError("orientation", "integer between 1 and 8", options2.orientation);
      }
    }
    if (is$1.defined(options2.density)) {
      if (is$1.number(options2.density) && options2.density > 0) {
        this.options.withMetadataDensity = options2.density;
      } else {
        throw is$1.invalidParameterError("density", "positive number", options2.density);
      }
    }
    if (is$1.defined(options2.icc)) {
      if (is$1.string(options2.icc)) {
        this.options.withMetadataIcc = options2.icc;
      } else {
        throw is$1.invalidParameterError("icc", "string filesystem path to ICC profile", options2.icc);
      }
    }
    if (is$1.defined(options2.exif)) {
      if (is$1.object(options2.exif)) {
        for (const [ifd, entries] of Object.entries(options2.exif)) {
          if (is$1.object(entries)) {
            for (const [k, v] of Object.entries(entries)) {
              if (is$1.string(v)) {
                this.options.withMetadataStrs[`exif-${ifd.toLowerCase()}-${k}`] = v;
              } else {
                throw is$1.invalidParameterError(`exif.${ifd}.${k}`, "string", v);
              }
            }
          } else {
            throw is$1.invalidParameterError(`exif.${ifd}`, "object", entries);
          }
        }
      } else {
        throw is$1.invalidParameterError("exif", "object", options2.exif);
      }
    }
  }
  return this;
}
function toFormat(format2, options2) {
  const actualFormat = formats.get((is$1.object(format2) && is$1.string(format2.id) ? format2.id : format2).toLowerCase());
  if (!actualFormat) {
    throw is$1.invalidParameterError("format", `one of: ${[...formats.keys()].join(", ")}`, format2);
  }
  return this[actualFormat](options2);
}
function jpeg(options2) {
  if (is$1.object(options2)) {
    if (is$1.defined(options2.quality)) {
      if (is$1.integer(options2.quality) && is$1.inRange(options2.quality, 1, 100)) {
        this.options.jpegQuality = options2.quality;
      } else {
        throw is$1.invalidParameterError("quality", "integer between 1 and 100", options2.quality);
      }
    }
    if (is$1.defined(options2.progressive)) {
      this._setBooleanOption("jpegProgressive", options2.progressive);
    }
    if (is$1.defined(options2.chromaSubsampling)) {
      if (is$1.string(options2.chromaSubsampling) && is$1.inArray(options2.chromaSubsampling, ["4:2:0", "4:4:4"])) {
        this.options.jpegChromaSubsampling = options2.chromaSubsampling;
      } else {
        throw is$1.invalidParameterError("chromaSubsampling", "one of: 4:2:0, 4:4:4", options2.chromaSubsampling);
      }
    }
    const optimiseCoding = is$1.bool(options2.optimizeCoding) ? options2.optimizeCoding : options2.optimiseCoding;
    if (is$1.defined(optimiseCoding)) {
      this._setBooleanOption("jpegOptimiseCoding", optimiseCoding);
    }
    if (is$1.defined(options2.mozjpeg)) {
      if (is$1.bool(options2.mozjpeg)) {
        if (options2.mozjpeg) {
          this.options.jpegTrellisQuantisation = true;
          this.options.jpegOvershootDeringing = true;
          this.options.jpegOptimiseScans = true;
          this.options.jpegProgressive = true;
          this.options.jpegQuantisationTable = 3;
        }
      } else {
        throw is$1.invalidParameterError("mozjpeg", "boolean", options2.mozjpeg);
      }
    }
    const trellisQuantisation = is$1.bool(options2.trellisQuantization) ? options2.trellisQuantization : options2.trellisQuantisation;
    if (is$1.defined(trellisQuantisation)) {
      this._setBooleanOption("jpegTrellisQuantisation", trellisQuantisation);
    }
    if (is$1.defined(options2.overshootDeringing)) {
      this._setBooleanOption("jpegOvershootDeringing", options2.overshootDeringing);
    }
    const optimiseScans = is$1.bool(options2.optimizeScans) ? options2.optimizeScans : options2.optimiseScans;
    if (is$1.defined(optimiseScans)) {
      this._setBooleanOption("jpegOptimiseScans", optimiseScans);
      if (optimiseScans) {
        this.options.jpegProgressive = true;
      }
    }
    const quantisationTable = is$1.number(options2.quantizationTable) ? options2.quantizationTable : options2.quantisationTable;
    if (is$1.defined(quantisationTable)) {
      if (is$1.integer(quantisationTable) && is$1.inRange(quantisationTable, 0, 8)) {
        this.options.jpegQuantisationTable = quantisationTable;
      } else {
        throw is$1.invalidParameterError("quantisationTable", "integer between 0 and 8", quantisationTable);
      }
    }
  }
  return this._updateFormatOut("jpeg", options2);
}
function png(options2) {
  if (is$1.object(options2)) {
    if (is$1.defined(options2.progressive)) {
      this._setBooleanOption("pngProgressive", options2.progressive);
    }
    if (is$1.defined(options2.compressionLevel)) {
      if (is$1.integer(options2.compressionLevel) && is$1.inRange(options2.compressionLevel, 0, 9)) {
        this.options.pngCompressionLevel = options2.compressionLevel;
      } else {
        throw is$1.invalidParameterError("compressionLevel", "integer between 0 and 9", options2.compressionLevel);
      }
    }
    if (is$1.defined(options2.adaptiveFiltering)) {
      this._setBooleanOption("pngAdaptiveFiltering", options2.adaptiveFiltering);
    }
    if (is$1.defined(options2.palette)) {
      this._setBooleanOption("pngPalette", options2.palette);
    } else if ([options2.quality, options2.effort, options2.colours, options2.colors, options2.dither].some(is$1.defined)) {
      this._setBooleanOption("pngPalette", true);
    }
    if (this.options.pngPalette) {
      if (is$1.defined(options2.quality)) {
        if (is$1.integer(options2.quality) && is$1.inRange(options2.quality, 0, 100)) {
          this.options.pngQuality = options2.quality;
        } else {
          throw is$1.invalidParameterError("quality", "integer between 0 and 100", options2.quality);
        }
      }
      if (is$1.defined(options2.effort)) {
        if (is$1.integer(options2.effort) && is$1.inRange(options2.effort, 1, 10)) {
          this.options.pngEffort = options2.effort;
        } else {
          throw is$1.invalidParameterError("effort", "integer between 1 and 10", options2.effort);
        }
      }
      const colours = options2.colours || options2.colors;
      if (is$1.defined(colours)) {
        if (is$1.integer(colours) && is$1.inRange(colours, 2, 256)) {
          this.options.pngBitdepth = bitdepthFromColourCount(colours);
        } else {
          throw is$1.invalidParameterError("colours", "integer between 2 and 256", colours);
        }
      }
      if (is$1.defined(options2.dither)) {
        if (is$1.number(options2.dither) && is$1.inRange(options2.dither, 0, 1)) {
          this.options.pngDither = options2.dither;
        } else {
          throw is$1.invalidParameterError("dither", "number between 0.0 and 1.0", options2.dither);
        }
      }
    }
  }
  return this._updateFormatOut("png", options2);
}
function webp(options2) {
  if (is$1.object(options2)) {
    if (is$1.defined(options2.quality)) {
      if (is$1.integer(options2.quality) && is$1.inRange(options2.quality, 1, 100)) {
        this.options.webpQuality = options2.quality;
      } else {
        throw is$1.invalidParameterError("quality", "integer between 1 and 100", options2.quality);
      }
    }
    if (is$1.defined(options2.alphaQuality)) {
      if (is$1.integer(options2.alphaQuality) && is$1.inRange(options2.alphaQuality, 0, 100)) {
        this.options.webpAlphaQuality = options2.alphaQuality;
      } else {
        throw is$1.invalidParameterError("alphaQuality", "integer between 0 and 100", options2.alphaQuality);
      }
    }
    if (is$1.defined(options2.lossless)) {
      this._setBooleanOption("webpLossless", options2.lossless);
    }
    if (is$1.defined(options2.nearLossless)) {
      this._setBooleanOption("webpNearLossless", options2.nearLossless);
    }
    if (is$1.defined(options2.smartSubsample)) {
      this._setBooleanOption("webpSmartSubsample", options2.smartSubsample);
    }
    const effort = options2.effort || options2.reductionEffort;
    if (is$1.defined(effort)) {
      if (is$1.integer(effort) && is$1.inRange(effort, 0, 6)) {
        this.options.webpEffort = effort;
      } else {
        throw is$1.invalidParameterError("effort", "integer between 0 and 6", effort);
      }
    }
  }
  trySetAnimationOptions(options2, this.options);
  return this._updateFormatOut("webp", options2);
}
function gif(options2) {
  if (is$1.object(options2)) {
    const colours = options2.colours || options2.colors;
    if (is$1.defined(colours)) {
      if (is$1.integer(colours) && is$1.inRange(colours, 2, 256)) {
        this.options.gifBitdepth = bitdepthFromColourCount(colours);
      } else {
        throw is$1.invalidParameterError("colours", "integer between 2 and 256", colours);
      }
    }
    if (is$1.defined(options2.effort)) {
      if (is$1.number(options2.effort) && is$1.inRange(options2.effort, 1, 10)) {
        this.options.gifEffort = options2.effort;
      } else {
        throw is$1.invalidParameterError("effort", "integer between 1 and 10", options2.effort);
      }
    }
    if (is$1.defined(options2.dither)) {
      if (is$1.number(options2.dither) && is$1.inRange(options2.dither, 0, 1)) {
        this.options.gifDither = options2.dither;
      } else {
        throw is$1.invalidParameterError("dither", "number between 0.0 and 1.0", options2.dither);
      }
    }
  }
  trySetAnimationOptions(options2, this.options);
  return this._updateFormatOut("gif", options2);
}
function jp2(options2) {
  if (!this.constructor.format.jp2k.output.buffer) {
    throw errJp2Save;
  }
  if (is$1.object(options2)) {
    if (is$1.defined(options2.quality)) {
      if (is$1.integer(options2.quality) && is$1.inRange(options2.quality, 1, 100)) {
        this.options.jp2Quality = options2.quality;
      } else {
        throw is$1.invalidParameterError("quality", "integer between 1 and 100", options2.quality);
      }
    }
    if (is$1.defined(options2.lossless)) {
      if (is$1.bool(options2.lossless)) {
        this.options.jp2Lossless = options2.lossless;
      } else {
        throw is$1.invalidParameterError("lossless", "boolean", options2.lossless);
      }
    }
    if (is$1.defined(options2.tileWidth)) {
      if (is$1.integer(options2.tileWidth) && is$1.inRange(options2.tileWidth, 1, 32768)) {
        this.options.jp2TileWidth = options2.tileWidth;
      } else {
        throw is$1.invalidParameterError("tileWidth", "integer between 1 and 32768", options2.tileWidth);
      }
    }
    if (is$1.defined(options2.tileHeight)) {
      if (is$1.integer(options2.tileHeight) && is$1.inRange(options2.tileHeight, 1, 32768)) {
        this.options.jp2TileHeight = options2.tileHeight;
      } else {
        throw is$1.invalidParameterError("tileHeight", "integer between 1 and 32768", options2.tileHeight);
      }
    }
    if (is$1.defined(options2.chromaSubsampling)) {
      if (is$1.string(options2.chromaSubsampling) && is$1.inArray(options2.chromaSubsampling, ["4:2:0", "4:4:4"])) {
        this.options.heifChromaSubsampling = options2.chromaSubsampling;
      } else {
        throw is$1.invalidParameterError("chromaSubsampling", "one of: 4:2:0, 4:4:4", options2.chromaSubsampling);
      }
    }
  }
  return this._updateFormatOut("jp2", options2);
}
function trySetAnimationOptions(source, target) {
  if (is$1.object(source) && is$1.defined(source.loop)) {
    if (is$1.integer(source.loop) && is$1.inRange(source.loop, 0, 65535)) {
      target.loop = source.loop;
    } else {
      throw is$1.invalidParameterError("loop", "integer between 0 and 65535", source.loop);
    }
  }
  if (is$1.object(source) && is$1.defined(source.delay)) {
    if (is$1.integer(source.delay) && is$1.inRange(source.delay, 0, 65535)) {
      target.delay = [source.delay];
    } else if (Array.isArray(source.delay) && source.delay.every(is$1.integer) && source.delay.every((v) => is$1.inRange(v, 0, 65535))) {
      target.delay = source.delay;
    } else {
      throw is$1.invalidParameterError("delay", "integer or an array of integers between 0 and 65535", source.delay);
    }
  }
}
function tiff(options2) {
  if (is$1.object(options2)) {
    if (is$1.defined(options2.quality)) {
      if (is$1.integer(options2.quality) && is$1.inRange(options2.quality, 1, 100)) {
        this.options.tiffQuality = options2.quality;
      } else {
        throw is$1.invalidParameterError("quality", "integer between 1 and 100", options2.quality);
      }
    }
    if (is$1.defined(options2.bitdepth)) {
      if (is$1.integer(options2.bitdepth) && is$1.inArray(options2.bitdepth, [1, 2, 4, 8])) {
        this.options.tiffBitdepth = options2.bitdepth;
      } else {
        throw is$1.invalidParameterError("bitdepth", "1, 2, 4 or 8", options2.bitdepth);
      }
    }
    if (is$1.defined(options2.tile)) {
      this._setBooleanOption("tiffTile", options2.tile);
    }
    if (is$1.defined(options2.tileWidth)) {
      if (is$1.integer(options2.tileWidth) && options2.tileWidth > 0) {
        this.options.tiffTileWidth = options2.tileWidth;
      } else {
        throw is$1.invalidParameterError("tileWidth", "integer greater than zero", options2.tileWidth);
      }
    }
    if (is$1.defined(options2.tileHeight)) {
      if (is$1.integer(options2.tileHeight) && options2.tileHeight > 0) {
        this.options.tiffTileHeight = options2.tileHeight;
      } else {
        throw is$1.invalidParameterError("tileHeight", "integer greater than zero", options2.tileHeight);
      }
    }
    if (is$1.defined(options2.pyramid)) {
      this._setBooleanOption("tiffPyramid", options2.pyramid);
    }
    if (is$1.defined(options2.xres)) {
      if (is$1.number(options2.xres) && options2.xres > 0) {
        this.options.tiffXres = options2.xres;
      } else {
        throw is$1.invalidParameterError("xres", "number greater than zero", options2.xres);
      }
    }
    if (is$1.defined(options2.yres)) {
      if (is$1.number(options2.yres) && options2.yres > 0) {
        this.options.tiffYres = options2.yres;
      } else {
        throw is$1.invalidParameterError("yres", "number greater than zero", options2.yres);
      }
    }
    if (is$1.defined(options2.compression)) {
      if (is$1.string(options2.compression) && is$1.inArray(options2.compression, ["lzw", "deflate", "jpeg", "ccittfax4", "none"])) {
        this.options.tiffCompression = options2.compression;
      } else {
        throw is$1.invalidParameterError("compression", "one of: lzw, deflate, jpeg, ccittfax4, none", options2.compression);
      }
    }
    if (is$1.defined(options2.predictor)) {
      if (is$1.string(options2.predictor) && is$1.inArray(options2.predictor, ["none", "horizontal", "float"])) {
        this.options.tiffPredictor = options2.predictor;
      } else {
        throw is$1.invalidParameterError("predictor", "one of: none, horizontal, float", options2.predictor);
      }
    }
    if (is$1.defined(options2.resolutionUnit)) {
      if (is$1.string(options2.resolutionUnit) && is$1.inArray(options2.resolutionUnit, ["inch", "cm"])) {
        this.options.tiffResolutionUnit = options2.resolutionUnit;
      } else {
        throw is$1.invalidParameterError("resolutionUnit", "one of: inch, cm", options2.resolutionUnit);
      }
    }
  }
  return this._updateFormatOut("tiff", options2);
}
function avif(options2) {
  return this.heif(__spreadProps(__spreadValues({}, options2), { compression: "av1" }));
}
function heif(options2) {
  if (is$1.object(options2)) {
    if (is$1.defined(options2.quality)) {
      if (is$1.integer(options2.quality) && is$1.inRange(options2.quality, 1, 100)) {
        this.options.heifQuality = options2.quality;
      } else {
        throw is$1.invalidParameterError("quality", "integer between 1 and 100", options2.quality);
      }
    }
    if (is$1.defined(options2.lossless)) {
      if (is$1.bool(options2.lossless)) {
        this.options.heifLossless = options2.lossless;
      } else {
        throw is$1.invalidParameterError("lossless", "boolean", options2.lossless);
      }
    }
    if (is$1.defined(options2.compression)) {
      if (is$1.string(options2.compression) && is$1.inArray(options2.compression, ["av1", "hevc"])) {
        this.options.heifCompression = options2.compression;
      } else {
        throw is$1.invalidParameterError("compression", "one of: av1, hevc", options2.compression);
      }
    }
    if (is$1.defined(options2.effort)) {
      if (is$1.integer(options2.effort) && is$1.inRange(options2.effort, 0, 9)) {
        this.options.heifEffort = options2.effort;
      } else {
        throw is$1.invalidParameterError("effort", "integer between 0 and 9", options2.effort);
      }
    } else if (is$1.defined(options2.speed)) {
      if (is$1.integer(options2.speed) && is$1.inRange(options2.speed, 0, 9)) {
        this.options.heifEffort = 9 - options2.speed;
      } else {
        throw is$1.invalidParameterError("speed", "integer between 0 and 9", options2.speed);
      }
    }
    if (is$1.defined(options2.chromaSubsampling)) {
      if (is$1.string(options2.chromaSubsampling) && is$1.inArray(options2.chromaSubsampling, ["4:2:0", "4:4:4"])) {
        this.options.heifChromaSubsampling = options2.chromaSubsampling;
      } else {
        throw is$1.invalidParameterError("chromaSubsampling", "one of: 4:2:0, 4:4:4", options2.chromaSubsampling);
      }
    }
  }
  return this._updateFormatOut("heif", options2);
}
function raw(options2) {
  if (is$1.object(options2)) {
    if (is$1.defined(options2.depth)) {
      if (is$1.string(options2.depth) && is$1.inArray(options2.depth, ["char", "uchar", "short", "ushort", "int", "uint", "float", "complex", "double", "dpcomplex"])) {
        this.options.rawDepth = options2.depth;
      } else {
        throw is$1.invalidParameterError("depth", "one of: char, uchar, short, ushort, int, uint, float, complex, double, dpcomplex", options2.depth);
      }
    }
  }
  return this._updateFormatOut("raw");
}
function tile(options2) {
  if (is$1.object(options2)) {
    if (is$1.defined(options2.size)) {
      if (is$1.integer(options2.size) && is$1.inRange(options2.size, 1, 8192)) {
        this.options.tileSize = options2.size;
      } else {
        throw is$1.invalidParameterError("size", "integer between 1 and 8192", options2.size);
      }
    }
    if (is$1.defined(options2.overlap)) {
      if (is$1.integer(options2.overlap) && is$1.inRange(options2.overlap, 0, 8192)) {
        if (options2.overlap > this.options.tileSize) {
          throw is$1.invalidParameterError("overlap", `<= size (${this.options.tileSize})`, options2.overlap);
        }
        this.options.tileOverlap = options2.overlap;
      } else {
        throw is$1.invalidParameterError("overlap", "integer between 0 and 8192", options2.overlap);
      }
    }
    if (is$1.defined(options2.container)) {
      if (is$1.string(options2.container) && is$1.inArray(options2.container, ["fs", "zip"])) {
        this.options.tileContainer = options2.container;
      } else {
        throw is$1.invalidParameterError("container", "one of: fs, zip", options2.container);
      }
    }
    if (is$1.defined(options2.layout)) {
      if (is$1.string(options2.layout) && is$1.inArray(options2.layout, ["dz", "google", "iiif", "iiif3", "zoomify"])) {
        this.options.tileLayout = options2.layout;
      } else {
        throw is$1.invalidParameterError("layout", "one of: dz, google, iiif, iiif3, zoomify", options2.layout);
      }
    }
    if (is$1.defined(options2.angle)) {
      if (is$1.integer(options2.angle) && !(options2.angle % 90)) {
        this.options.tileAngle = options2.angle;
      } else {
        throw is$1.invalidParameterError("angle", "positive/negative multiple of 90", options2.angle);
      }
    }
    this._setBackgroundColourOption("tileBackground", options2.background);
    if (is$1.defined(options2.depth)) {
      if (is$1.string(options2.depth) && is$1.inArray(options2.depth, ["onepixel", "onetile", "one"])) {
        this.options.tileDepth = options2.depth;
      } else {
        throw is$1.invalidParameterError("depth", "one of: onepixel, onetile, one", options2.depth);
      }
    }
    if (is$1.defined(options2.skipBlanks)) {
      if (is$1.integer(options2.skipBlanks) && is$1.inRange(options2.skipBlanks, -1, 65535)) {
        this.options.tileSkipBlanks = options2.skipBlanks;
      } else {
        throw is$1.invalidParameterError("skipBlanks", "integer between -1 and 255/65535", options2.skipBlanks);
      }
    } else if (is$1.defined(options2.layout) && options2.layout === "google") {
      this.options.tileSkipBlanks = 5;
    }
    const centre = is$1.bool(options2.center) ? options2.center : options2.centre;
    if (is$1.defined(centre)) {
      this._setBooleanOption("tileCentre", centre);
    }
    if (is$1.defined(options2.id)) {
      if (is$1.string(options2.id)) {
        this.options.tileId = options2.id;
      } else {
        throw is$1.invalidParameterError("id", "string", options2.id);
      }
    }
  }
  if (is$1.inArray(this.options.formatOut, ["jpeg", "png", "webp"])) {
    this.options.tileFormat = this.options.formatOut;
  } else if (this.options.formatOut !== "input") {
    throw is$1.invalidParameterError("format", "one of: jpeg, png, webp", this.options.formatOut);
  }
  return this._updateFormatOut("dz");
}
function timeout(options2) {
  if (!is$1.plainObject(options2)) {
    throw is$1.invalidParameterError("options", "object", options2);
  }
  if (is$1.integer(options2.seconds) && is$1.inRange(options2.seconds, 0, 3600)) {
    this.options.timeoutSeconds = options2.seconds;
  } else {
    throw is$1.invalidParameterError("seconds", "integer between 0 and 3600", options2.seconds);
  }
  return this;
}
function _updateFormatOut(formatOut, options2) {
  if (!(is$1.object(options2) && options2.force === false)) {
    this.options.formatOut = formatOut;
  }
  return this;
}
function _setBooleanOption(key, val) {
  if (is$1.bool(val)) {
    this.options[key] = val;
  } else {
    throw is$1.invalidParameterError(key, "boolean", val);
  }
}
function _read() {
  if (!this.options.streamOut) {
    this.options.streamOut = true;
    this._pipeline();
  }
}
function _pipeline(callback) {
  if (typeof callback === "function") {
    if (this._isStreamInput()) {
      this.on("finish", () => {
        this._flattenBufferIn();
        sharp$1.pipeline(this.options, callback);
      });
    } else {
      sharp$1.pipeline(this.options, callback);
    }
    return this;
  } else if (this.options.streamOut) {
    if (this._isStreamInput()) {
      this.once("finish", () => {
        this._flattenBufferIn();
        sharp$1.pipeline(this.options, (err, data, info) => {
          if (err) {
            this.emit("error", err);
          } else {
            this.emit("info", info);
            this.push(data);
          }
          this.push(null);
          this.emit("close");
        });
      });
      if (this.streamInFinished) {
        this.emit("finish");
      }
    } else {
      sharp$1.pipeline(this.options, (err, data, info) => {
        if (err) {
          this.emit("error", err);
        } else {
          this.emit("info", info);
          this.push(data);
        }
        this.push(null);
        this.emit("close");
      });
    }
    return this;
  } else {
    if (this._isStreamInput()) {
      return new Promise((resolve, reject) => {
        this.once("finish", () => {
          this._flattenBufferIn();
          sharp$1.pipeline(this.options, (err, data, info) => {
            if (err) {
              reject(err);
            } else {
              if (this.options.resolveWithObject) {
                resolve({ data, info });
              } else {
                resolve(data);
              }
            }
          });
        });
      });
    } else {
      return new Promise((resolve, reject) => {
        sharp$1.pipeline(this.options, (err, data, info) => {
          if (err) {
            reject(err);
          } else {
            if (this.options.resolveWithObject) {
              resolve({ data, info });
            } else {
              resolve(data);
            }
          }
        });
      });
    }
  }
}
var output = function(Sharp2) {
  Object.assign(Sharp2.prototype, {
    toFile,
    toBuffer,
    withMetadata,
    toFormat,
    jpeg,
    jp2,
    png,
    webp,
    tiff,
    avif,
    heif,
    gif,
    raw,
    tile,
    timeout,
    _updateFormatOut,
    _setBooleanOption,
    _read,
    _pipeline
  });
};
const fs = require$$2;
const path = require$$2;
const events = require$$2;
const detectLibc = detectLibc$2;
const is = is$9;
const platformAndArch = platform$1();
const sharp = sharp$3.exports;
const format = sharp.format();
const interpolators = {
  nearest: "nearest",
  bilinear: "bilinear",
  bicubic: "bicubic",
  locallyBoundedBicubic: "lbb",
  nohalo: "nohalo",
  vertexSplitQuadraticBasisSpline: "vsqbs"
};
let versions = {
  vips: sharp.libvipsVersion()
};
try {
  versions = commonjsRequire(`../vendor/${versions.vips}/${platformAndArch}/versions.json`);
} catch (_err) {
}
const vendor = {
  current: platformAndArch,
  installed: []
};
try {
  vendor.installed = fs.readdirSync(path.join(__dirname, `../vendor/${versions.vips}`));
} catch (_err) {
}
function cache(options2) {
  if (is.bool(options2)) {
    if (options2) {
      return sharp.cache(50, 20, 100);
    } else {
      return sharp.cache(0, 0, 0);
    }
  } else if (is.object(options2)) {
    return sharp.cache(options2.memory, options2.files, options2.items);
  } else {
    return sharp.cache();
  }
}
cache(true);
function concurrency(concurrency2) {
  return sharp.concurrency(is.integer(concurrency2) ? concurrency2 : null);
}
if (detectLibc.familySync() === detectLibc.GLIBC && !sharp._isUsingJemalloc()) {
  sharp.concurrency(1);
}
const queue = new events.EventEmitter();
function counters() {
  return sharp.counters();
}
function simd(simd2) {
  return sharp.simd(is.bool(simd2) ? simd2 : null);
}
simd(true);
var utility = function(Sharp2) {
  Sharp2.cache = cache;
  Sharp2.concurrency = concurrency;
  Sharp2.counters = counters;
  Sharp2.simd = simd;
  Sharp2.format = format;
  Sharp2.interpolators = interpolators;
  Sharp2.versions = versions;
  Sharp2.vendor = vendor;
  Sharp2.queue = queue;
};
const Sharp = constructor;
input(Sharp);
resize_1(Sharp);
composite_1(Sharp);
operation(Sharp);
colour(Sharp);
channel(Sharp);
output(Sharp);
utility(Sharp);
var lib = Sharp;
function generatePages({
  dirs = [{ dir: "pages", baseRoute: "pages" }],
  mediaFolder = "media_files",
  publicMedia = {
    icon: { width: 300, height: 300, fit: "inside" },
    cover: { size: 1200, height: 800, fit: "inside" }
  },
  extensions = ["md"]
} = {}) {
  function extendRoute(route2) {
    const pageDir = path$3.resolve(route2.component.substr(1));
    const frontmatter = grayMatter.read(pageDir, { excerpt: true });
    const { data, excerpt: excerpt2, content } = frontmatter;
    const page = __spreadProps(__spreadValues(__spreadValues({}, route2), data), {
      excerpt: excerpt2,
      empty: !content
    });
    if (data.type == "block") {
      page.content = content;
    }
    for (let media in publicMedia) {
      if (data[media]) {
        let file = data[media];
        const filePath = path$3.join(route2.path, file);
        const fileName = filePath.split("/").filter(Boolean).join("-");
        const publicPath = path$3.resolve("public", mediaFolder, media);
        const url = path$3.join("/", mediaFolder, media, fileName);
        page[media] = url;
        if (!path$3.existsSync(publicPath)) {
          path$3.mkdirSync(publicPath, {
            recursive: true
          });
        }
        lib(path$3.resolve(filePath.substr(1))).resize({
          width: publicMedia[media].width,
          height: publicMedia[media].height,
          fit: publicMedia[media].fit
        }).toFile(path$3.join(publicPath, fileName), (err, info) => {
          if (err) {
            console.log(err, filePath);
          }
        });
      }
    }
    return page;
  }
  return {
    dirs,
    extensions,
    extendRoute
  };
}
export { generatePages };
//# sourceMappingURL=vitepress-pages.es.js.map
