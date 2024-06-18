

const compareObjects_1 = (obj_1, obj_2) => {  // 1 способ
 return JSON.stringify(obj_1) === JSON.stringify(obj_2);
}

const compareObjects_2 = (obj_1, obj_2) => {  // 2 способ
    let keys1 = Object.keys(obj_1);
    let keys2 = Object.keys(obj_2);
 
    if (keys1.length != keys2.length) {
        return false;
    }
 
    for (let key of keys1) {
        if (!keys2.includes(key)) {
            return false;
        }
    }
 
    return true;
}

const user_1 = {
  name: 'Вася',
  age: 21
}
const user_2 = {
  name: 'Вася',
  age: 21
}

console.log(compareObjects_1(user_1, user_2))
console.log(compareObjects_2(user_1, user_2))