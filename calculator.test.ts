import { add } from "./calculator";

describe("add", () => {
    it("should return the sum of two numbers", () => {
        expect(add("2,3")).toBe(5);
    });

    it("should return 0 when no numbers are provided", () => {
        expect(add("")).toBe(0);
    });

    it("should handle multiple numbers", () => {
        expect(add("2,3,5")).toBe(10);
    });

    it("should handle new lines between numbers", () => {
        expect(add("2\n3,5")).toBe(10);
    });

    it("should handle different delimiters", () => {
        expect(add("//;\n1;2;3")).toBe(6);
    });

    it("should throw an error when a negative number is provided", () => {
        expect(() => add("2,-3,-5")).toThrow("Negatives not allowed: -3,-5");
    });

    it("should filter out non-numeric values", () => {
        expect(add("2,3,5,abc")).toBe(10);
        expect(add("2,3,5,")).toBe(10);
        expect(add(",")).toBe(0);
    });
});
