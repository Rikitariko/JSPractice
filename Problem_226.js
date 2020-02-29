// Search and compare elements of array with index

let array = prompt("Array", "10 6 3 3 2 1").split(' ');

let ans = [];

for (let i = 0; i < array.length; i++) {
    if (+array[i] === i + 1)
        ans.push(array[i])
}

alert(ans);