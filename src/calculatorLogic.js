export function add(numbers) {
    if (numbers === "") return 0;
    let delimiter = /[\n,]/;
    if (numbers.startsWith("//")) {
        const parts = numbers.split("\n");
        delimiter = new RegExp(parts[0][2]);
        numbers = parts[1];
    }
    const numberList = numbers.split(delimiter).map(Number);
    const negatives = numberList.filter(n => n < 0);
    if (negatives.length) {
        throw new Error(`Negative numbers not allowed: ${negatives.join(", ")}`);
    }
    return numberList.reduce((sum, num) => sum + num, 0);
}
