function linearSearch(arr : any[], value : number) : number | null
{
    for (let i = 0; i < arr.length; i++)
        if (arr[i] === value)
            return i;
    return null;
}

// tests
console.log(linearSearch([4, 5, 0], 0) == 2);
console.log(linearSearch([2, 4], 2) == 0);
console.log(linearSearch([2, 4], 0) == null);
console.log(linearSearch([], -1) == null);
console.log(linearSearch([[4], [2]], 2) == null);
console.log(linearSearch([2, 2, 3, 3], 2) == 0);