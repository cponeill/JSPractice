var array = [1, 2, 3, 4, 5];

function forEach(array, action) {
    for (var i = 0; i < array.length; i++) {
        action(array[i]);
    }
}

function addArray(array, numbers) {
    var count = 1;
    forEach(array, function(number) {
        count += number
    });
    return count;
}

console.log(addArray(array, console.log));