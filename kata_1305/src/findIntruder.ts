function findIntruder(numbers:  number[]){

    if (numbers.length < 3) return false;

    const isEven = numbers.filter(number => number % 2 === 0);
    const isOdd = numbers.filter(number => number % 2 !== 0);

    console.log(isEven)
    console.log(isOdd)

    if(isEven.length === 1 || isOdd.length === 1){
        isEven.length > isOdd.length ?  console.log(isOdd[0]) : console.log(isEven[0]);
        return isEven.length === 1 ? isEven[0] : isOdd[0];
    } else{
        let onlyType;
        isEven.length >= 1 ? onlyType = 'even' : onlyType = 'odd';
        throw new Error(`Aucun intrus trouvé dans le tableau, ne contient que des chiffres de type ${onlyType}`)
    }
}

// findIntruder([1,2,3,5,7,9])
// findIntruder([2,4,6,8,9])
// findIntruder([2,4,6,8])
export default findIntruder;