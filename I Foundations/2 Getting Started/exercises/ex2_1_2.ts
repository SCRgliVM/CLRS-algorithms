function insertionSort(A : any[]) : any[]
{
    for (let j = 1; j < A.length; j++)
    {
        let key = A[j];
        let i = j - 1;
        while (i >= 0 && A[i] < key) // here
        {
            A[i+1] = A[i];
            i--;
        }
        A[i+1] = key;
    }
    return A;
}

console.log(insertionSort([5,2,4,6,1,3]));