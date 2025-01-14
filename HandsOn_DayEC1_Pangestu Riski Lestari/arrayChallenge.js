let input = [1, 10, 12, 1, 9, 2, 12, 3];
// expected output = [1, 12];

function findDuplicates(input) {
    let result = [];
    let map = {};

    for (let i = 0; i < input.length; i++) {
        console.log(map[input[i]]);
        if (map[input[i]]) {
            
            result.push(input[i]);
        } else {
            map[input[i]] = true;
        }
    }

    return result;
}

console.log(findDuplicates(input));