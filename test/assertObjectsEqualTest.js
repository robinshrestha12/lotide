const assertObjectsEqual = require('../assertObjectsEqual');
//checking the two objects in different scenerios.
assertObjectsEqual({ a: '1', b: 2 }, { b: 2, a: '1' });
assertObjectsEqual({ c: '1', b: 2 }, { j: 2, a: '1' });
assertObjectsEqual({ c: '1', b: 2 }, { b: 2, a: '1' });
assertObjectsEqual({ a: '1', b: 2 }, { j: 2, a: '1' });