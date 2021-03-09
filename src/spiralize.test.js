const spiralize = require(`./spiralize`);

describe(`spiralize testing`, () => {
    it(`spiralize(1)`, () => {
        expect(spiralize(1)).toEqual([
            [1],
        ]);
    });
    
    it(`spiralize(2)`, () => {
        expect(spiralize(2)).toEqual([
            [1, 1],
            [0, 1]
        ]);
    });

    it(`spiralize(3)`, () => {
        expect(spiralize(3)).toEqual([
            [1, 1, 1],
            [0, 0, 1],
            [1, 1, 1],
        ]);
    });

    it(`spiralize(4)`, () => {
        expect(spiralize(4)).toEqual([
            [1, 1, 1, 1],
            [0, 0, 0, 1],
            [1, 0, 0, 1],
            [1, 1, 1, 1]
        ]);
    });

    it(`spiralize(5)`, () => {
        expect(spiralize(5)).toEqual([
            [1, 1, 1, 1, 1],
            [0, 0, 0, 0, 1],
            [1, 1, 1, 0, 1],
            [1, 0, 0, 0, 1],
            [1, 1, 1, 1, 1]
        ]);
    });

    it(`spiralize(6)`, () => {
        expect(spiralize(6)).toEqual([
            [1, 1, 1, 1, 1, 1],
            [0, 0, 0, 0, 0, 1],
            [1, 1, 1, 1, 0, 1],
            [1, 0, 0, 1, 0, 1],
            [1, 0, 0, 0, 0, 1],
            [1, 1, 1, 1, 1, 1]
        ]);
    });

    it(`spiralize(8)`, () => {
        expect(spiralize(8)).toEqual([
            [1, 1, 1, 1, 1, 1, 1, 1],
            [0, 0, 0, 0, 0, 0, 0, 1],
            [1, 1, 1, 1, 1, 1, 0, 1],
            [1, 0, 0, 0, 0, 1, 0, 1],
            [1, 0, 1, 0, 0, 1, 0, 1],
            [1, 0, 1, 1, 1, 1, 0, 1],
            [1, 0, 0, 0, 0, 0, 0, 1],
            [1, 1, 1, 1, 1, 1, 1, 1]
        ]);
    });
});
