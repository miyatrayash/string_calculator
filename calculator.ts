export const add = (numbers: string) => {
    if (numbers === "") {
        return 0;
    }
    let digits: number[] = [];
    let delimiter: string | RegExp = /[\s,]+/;
    
    // Check if a custom delimiter is provided
    if (numbers.startsWith("//")) {
        delimiter = numbers[2];
    }
    
    // Split the numbers by the delimiter provided
    digits = numbers.split(delimiter).map(Number);        

    // Filter out any empty strings
    digits = digits.filter(
        (digit) => digit !== null && digit !== undefined && !isNaN(digit)
    );

    // return 0 if no digits are provided
    if (digits.length === 0) {
        return 0;
    }

    // Check for negative numbers
    const negativeDigits = digits.filter((digit) => digit < 0);
    if (negativeDigits.length > 0) {
        throw new Error("Negatives not allowed: " + negativeDigits.join(","));
    }

    // Return the sum of the digits
    return digits.reduce((acc, curr) => acc + curr);
};
