export const add = (numbers: string) => {
    if (numbers === "") {
        return 0;
    }
    let digits: number[] = [];
    let delimiter: string | RegExp = /[\s,]+/;

    // Check if a custom delimiter is provided
    if (numbers.startsWith("//")) {
        const match = numbers.match(/\/\/(.+)*\n/);
        if (!match || match.length < 2) {
            throw new Error("Invalid delimiter format");
        }

        // Extract the delimiter and the numbers
        delimiter = match[1];
        numbers = numbers.substring(match[0].length);


        // Extract multiple delimiters
        if (delimiter.startsWith("[")) {
            delimiter = delimiter.substring(1, delimiter.length - 1);
            if (delimiter.includes("][")) {
                delimiter = delimiter.split("][").join("|");
                // Escape special characters in the delimiter
                delimiter = delimiter.replace(/[.*+?^$\[\]\\]/g, '\\$&');                
                delimiter = new RegExp(delimiter);
            }
        }
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

    const negativeDigits: number[] = [];

    // Filter out numbers greater than 1000
    digits = digits.filter((digit) => {
        // Check for negative numbers
        if (digit < 0) {
            negativeDigits.push(digit);
        }

        return digit <= 1000;
    });

    if (negativeDigits.length > 0) {
        throw new Error("Negatives not allowed: " + negativeDigits.join(","));
    }

    // Return the sum of the digits
    return digits.reduce((acc, curr) => acc + curr);
};
