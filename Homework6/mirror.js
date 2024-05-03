function mirror(x) {
    if (!Array.isArray(x)) {
        return x;
    }
    if (x.length === 0) {
        return [];
    }
    return x.slice(1).reduceRight((acc, curr) => {
        acc.push(mirror(curr));
        return acc;
    }, []).concat([mirror(x[0])]);
}

console.log(mirror([1, 2, [3, [4, 5], 6]])); // [[6,[5,4],3],2,1]
console.log(mirror([])); // []
console.log(mirror([1])); // [1]
