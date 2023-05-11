const stringLength = (string) => {
    if (string.length && string.length >= 1 && string.length <= 10) {
        return true;
    } else {
        return false;
    };
}

module.exports = stringLength;