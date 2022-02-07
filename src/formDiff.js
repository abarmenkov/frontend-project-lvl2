import _ from 'lodash';

const getKeys = (obj1, obj2) => {
    let keys1 = Object.keys(obj1);
    let keys2 = Object.keys(obj2);
    return keys1.concat(keys2.filter((item) => !keys1.includes(item))).sort();
};

const compareObj = (obj1, obj2) => {
    let keys = getKeys(obj1, obj2);
    let result = [];
    for (let item of keys) {
        if (_.has(obj1, item) && _.has(obj2, item)) {
            if (obj1[item] === obj2[item]) {
                result.push(`  ${item}: ${obj1[item]}`);
            } else {
                result.push(`- ${item}: ${obj1[item]}`);
                result.push(`+ ${item}: ${obj2[item]}`);
            };
        };
        if (_.has(obj1, item) && !_.has(obj2, item)) {
            result.push(`- ${item}: ${obj1[item]}`);
        };
        if (!_.has(obj1, item) && _.has(obj2, item)) {
            result.push(`+ ${item}: ${obj2[item]}`);
        }

    }
    return result;
};

export default compareObj;