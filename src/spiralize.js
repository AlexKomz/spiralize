const spiralize = (size) => {
    const array = Array.from({ length: size }).map(
        (_) => Array.from({ length: size }).map(
            (_) => 0
        )
    );

    return array;
};

module.exports = spiralize;
