const assert = require('assert');

function assertRules(rulesPath) {
  console.log(`check ${rulesPath}`);
  const rulesObj = require(rulesPath);
  if (!rulesObj.rules) {
    return;
  }
  let rulesArray = Object.values(rulesObj.rules);
  let allowValues = ['off', 'error', 'warn', 0, 1, 2];
  for (const rule of rulesArray) {
    if (rule instanceof Array) {
      assert.equal(true, allowValues.indexOf(rule[0]) > -1);
    } else {
      assert.equal(true, allowValues.indexOf(rule) > -1);
    }
  }
}

function deepEqual(x, y) {
  if (x === y) {
    return true;
  } else if (typeof x == 'object' && x != null && typeof y == 'object' && y != null) {
    if (Object.keys(x).length != Object.keys(y).length) {
      return false;
    }
    for (let prop in x) {
      if (y.hasOwnProperty(prop)) {
        if (!deepEqual(x[prop], y[prop])) {
          return false;
        }
      } else {
        return false;
      }
    }
    return true;
  } else {
    return false;
  }
}

function assertDupRules(rules, whiteList = []) {
  let allRules = new Map();
  let result = true;
  for (const rule of rules) {
    const rulesObj = require(`../${rule}`);
    if (!rulesObj.rules) {
      return;
    }
    for (const [key, value] of Object.entries(rulesObj.rules)) {
      let inRule = allRules.get(key);
      if (inRule === undefined) {
        allRules.set(key, value);
      } else {
        if (whiteList.indexOf(key) > -1) {
          continue;
        }
        if (deepEqual(inRule, value)) {
          console.error(`重复规则，配置相同 ${key}`);
        } else {
          console.error(`重复规则${key}，配置不同，分别是${value}, ${inRule}`);
        }
        result = false;
      }
    }
  }
  if (!result) {
    assert.fail();
  }
}
const rules = ['base', 'angular', 'react', 'vue', 'typescript', 'typescript/react', 'typescript/vue', 'rxjs'];

describe('规则配置值都是off, error, warn, 0, 1, 2', function () {
  it('all', function () {
    for (const rule of rules) {
      assertRules(`../${rule}`);
    }
  });
});

describe('配置规则，没有重复', function () {
  it('base和基于base的检查没有重复', function () {
    const whiteList = [`no-useless-constructor`, `max-params`];
    const rulesFromBase = ['base', 'angular', 'react', 'vue', 'typescript/react', 'typescript/vue'];
    assertDupRules(rulesFromBase, whiteList);
  });

  it('单个配置文件内部没有重复', function () {
    for (const rule of rules) {
      assertDupRules(Array.of(rule));
    }
  });
});
