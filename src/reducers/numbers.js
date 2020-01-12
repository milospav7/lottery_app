import { drawingNumbers, totalNumbersToDraw } from '../configuration';

const numbersReducer = (generatedNumbers = [], action) => {
    if(action.type === 'GENERATE_NUMBERS') {
        return getRandomNumbers();
    }
    return generatedNumbers;
}

const getRandomNumbers = () => {
    let numbersCopy = drawingNumbers.slice();

    var cidx, ridx,tmp;
    cidx = numbersCopy.length;

    // Shuffle drawing numbers and return first <totalNumbersToDraw> numbers in shuffled collection
    while (cidx != 0) {
        ridx = Math.floor(Math.random() * cidx);
        cidx--;
        tmp = numbersCopy[cidx];
        numbersCopy[cidx] = numbersCopy[ridx];
        numbersCopy[ridx] = tmp;
    }

    return numbersCopy.slice(0 , totalNumbersToDraw);
}

export { numbersReducer };