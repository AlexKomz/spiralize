const spiralize = (size) => {
    const matrix = Array.from({ length: size }).map(
        (_) => Array.from({ length: size }).map(
            (_) => 0
        )
    );

    let subMatrixSize = size;

    let i = 0;

    while (subMatrixSize > 0) {
        let m = i * 2;
        let n = m;

        while (m < subMatrixSize + (i * 2)) {
            matrix[n][m] = 1;
            m++;
        }
        m--;
        n++;

        while (n < subMatrixSize + (i * 2)) {
            matrix[n][m] = 1;
            n++;
        }
        n--;
        m--
        
        while (m >= 0 + (i * 2)) {
            matrix[n][m] = 1;
            m--;
        }
        m++;
        n--;

        while (n > 1 + (i * 2)) {
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
