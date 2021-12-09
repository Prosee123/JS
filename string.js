let name = 'proseed';
let len = name.length;
var arr = [];

for (let i = 0; i < len; i++) {
    store = '';
    for (let j = i; j < len; j++) {
        let string =name[j];
        store += string;
        // console.log(store);
        arr.push(store);
    }
}
// console.log(arr)
let array = []
for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j <= arr.length; j++) {
        if (arr[i] == arr[j]) {
            array.push(arr[i]);
            arr.splice(j, 1)
        }
    }
}
// console.log(arr)
// console.log(array);
