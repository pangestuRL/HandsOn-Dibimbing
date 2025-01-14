const compressString = (input) => {
    if (!input || input.length === 0) return input;

    let compressed = '';
    let count = 1;

    for (let i = 1; i < input.length; i++) {
        if (input[i] === input[i - 1]) {
            count++;
        } else {
            compressed += input[i - 1] + count;
            count = 1;
        }
    }

    // Add the last character and its count
    compressed += input[input.length - 1] + count;

    // Return the original string if the compressed one is not smaller
    return compressed.length < input.length ? compressed : input;
}

console.log(compressString(aabcccccaaa))
