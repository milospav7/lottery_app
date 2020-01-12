const getDrawingNumbers = () => {
    const max = 49; // I could declare min also and then go with for loop to populate from min to max
    const numbers = [...Array(max).keys()].map(n => n+=1);
    
    return numbers;
}

const drawingNumbers = getDrawingNumbers();
const nummbersToDraw = 6; // here in the future we can just increase/decrease number of balls for drawing

export { drawingNumbers, nummbersToDraw as totalNumbersToDraw };