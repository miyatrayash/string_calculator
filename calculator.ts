export const add = (numbers: string) => {
    if (numbers === '') {
        return 0;
    }

    const [a, b] = numbers.split(',').map(Number);

    return a + b;
}
