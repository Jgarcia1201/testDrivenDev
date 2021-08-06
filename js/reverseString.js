function reverseString(string) {
    let stringToArray = string.split("");

    let reverse = stringToArray.reverse();

    let join = reverse.join("");

    return join;
}

module.exports = reverseString;