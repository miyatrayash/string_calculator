export const add = (numbers: string) => {
    if (numbers === "") {
        return 0;
    }

    if (!numbers.startsWith("//")) {
        const digits = numbers.split(/[\s,]+/).map(Number);
        return digits.reduce((acc, curr) => acc + curr);
    }

    const delimiter = numbers[2];
    const digits = numbers.split(delimiter).slice(1).map(Number);

    return digits.reduce((acc, curr) => acc + curr);
};
