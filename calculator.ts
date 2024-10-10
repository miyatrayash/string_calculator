export const add = (numbers: string) => {
    if (numbers === "") {
        return 0;
    }

    const digits = numbers.split(/[\s,]+/).map(Number);

    return digits.reduce((acc, curr) => acc + curr);
};
