const name = "Susan";
const height = 38;
const message = `${name} is ${height} inches tall`;

module.exports = {name, height, message};

describe ("Name", () => {
    it ('returns "Susan"', () => {
        expect (name).toEqual("Susan");
    });
});

describe ("Height", () => {
    it("is less than 40", () => {
        expect (height).toBeLessThan(40);
    });
});

describe ("Message", () => {
    it ("gives the name and height", () => {
        expect (message).toInclude (name);
        expect (message).toInclude (height);
    });
});