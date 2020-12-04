const incremento = (array) => {
    if (array.length > 0) {
        return array[array.length - 1].id + 1;
    } else {
        return 1;
    };
};

const data = () => new Date().toLocaleString();

module.exports = {
    incremento,
    data
}