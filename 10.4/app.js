const filterOutOdds = (...nums) => nums.filter((num) => num % 2 === 0);

const findMin = (...args) => Math.min(...args);

const mergeObjects = (obj1, obj2) => ({ ...obj1, ...obj2 });

const doubleAndReturnArgs = (arr, ...additonalNums) => [...arr, ...additonalNums.map((num) => num * 2)]

const removeRandom = (...items) => {
    const newItems = [...items];
    newItems.splice(Math.floor(Math.random() * items.length), 1);
    return newItems;
}

const extend = (array1, array2) => [...array1, ...array2];

const addKeyVal = (obj, key, val) => ({ ...obj, [key]: val });

const removeKey = (obj, key) => {
    let newObj = { ...obj };
    delete newObj[key];
    return newObj;
}

const combine = (obj1, obj2) => ({ ...obj1, ...obj2 });

const update = (obj, key, val) => {
   let newObj = {...obj};
   newObj[key] = val;
   return newObj; 
}