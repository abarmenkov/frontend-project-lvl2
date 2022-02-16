import _ from 'lodash';

const getKeys = (obj1, obj2) => {
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);
  return _.sortBy(_.union(keys1, keys2));
};

const getDiff = (data1, data2) => {
  const keys = getKeys(data1, data2);
  return keys
    .map((key) => {
      if (_.isObject(data1[key]) && _.isObject(data2[key])) {
        return {
          type: 'nested',
          key,
          value: null,
          children: getDiff(data1[key], data2[key]),
        };
      }
      if (!_.has(data1, key)) {
        return {
          type: 'added',
          key,
          value: data2[key],
        };
      }
      if (!_.has(data2, key)) {
        return {
          type: 'removed',
          key,
          value: data1[key],
        };
      }
      if (data1[key] !== data2[key]) {
        return {
          key,
          type: 'different',
          value: data1[key],
          value2: data2[key],
        };
      }
      return { type: 'unchanged', key, value: data1[key] };
    });
};

export default getDiff;
