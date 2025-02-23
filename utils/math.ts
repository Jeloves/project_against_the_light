export function getRandomUniqueIndices(totalItems: number, count: number): number[] {

    const result = [];
    const numbers = Array.from({ length: totalItems }, (_, i) => i); 

    while (result.length < count) {
        const randomIndex = Math.floor(Math.random() * numbers.length);
        const randomNum = numbers[randomIndex];
        result.push(randomNum);
        numbers.splice(randomIndex, 1);
    }

    return result;
}

export function getRandomIndex(totalItems: number): number {
    return Math.floor(Math.random() * totalItems);
}