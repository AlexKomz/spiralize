const spiralize = (size) => {
    const matrix = Array.from({ length: size }).map(
        (_) => Array.from({ length: size }).map(
            (_) => 0
        )
    );

    let subMatrixSize = size;

    let i = 0;

    while (subMatrixSize > 0) {
        let step = i * 2;

        let m = step;
        let n = step;

        while (m < subMatrixSize + step) {
            matrix[n][m] = 1;
            m++;
        }
        m--;
        n++;

        while (n < subMatrixSize + step) {
            matrix[n][m] = 1;
            n++;
        }
        n--;
        m--
        
        while (m >= 0 + step) {
            matrix[n][m] = 1;
            m--;
        }
        m++;
        n--;

        while (n > 1 + step) {
            matrix[n][m] = 1;
            n--;
        }
        n++;
        m++;

        subMatrixSize -= 4;
        i++;

        if (matrix[n][m] === 0 && subMatrixSize > 0) matrix[n][m] = 1;
    }

    return matrix;
};

spiralize(5);

module.exports = spiralize;
