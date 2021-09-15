// Write your tests here!
const polybius = require('../src/polybius');
const expect = require('chai').expect;

describe("polybuis square", () => {
    it("should turn input into encoded number", () => {
        const actual = polybius.polybius("thinkful");
        const expected = "4432423352125413";
        expect(actual).to.eql(expected);
    });
    it("should work with uppercase inputs", () => {
        const actual = polybius.polybius("hello world");
        const expected = "3251131343 2543241341";
        expect(actual).to.eql(expected);
    });
    it("should be able to decode numbers to a message", () => {
        const actual = polybius.polybius("3251131343 2543241341", false);
        const expected = "hello world";
        expect(actual).to.eql(expected);
    });
    it('should return a message with "(i/j)" if message has either', () => {
        const actual = polybius.polybius("4432423352125413", false);
        const expected = "thjnkful";
        expect(actual).to.eql(expected);
    });
    it("should return false if the number input to decode is not complete", () => {
        const actual = polybius.polybius("44324233521254134", false);
        const expected = false;
        expect(actual).to.eql(expected);
    });
 });