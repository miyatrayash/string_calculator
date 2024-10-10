export const add = (numbers: string) => {
    if (numbers === '') {
        return 0;
    }

    const digits = numbers.split(',').map(Number);

    return digits.reduce((acc, curr) => acc + curr);
}
