export const add = (numbers: string) => {
    if (numbers === "") {
        return 0;
    }
    let digits: number[] = [];

    if (!numbers.startsWith("//")) {
        // Split the numbers by comma or new line
        digits = numbers.split(/[\s,]+/).map(Number);
    } else {
        // Split the numbers by the delimiter provided
        const delimiter = numbers[2];
        digits = numbers.split(delimiter).slice(1).map(Number);
    }

    // Check for negative numbers
    const negativeDigits = digits.filter((digit) => digit < 0);
    if (negativeDigits.length > 0) {
        throw new Error("Negatives not allowed: " + negativeDigits.join(","));
    }

    // Return the sum of the digits
    return digits.reduce((acc, curr) => acc + curr);
};
