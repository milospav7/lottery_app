import React from 'react';
import DrawingNumber from './DrawingNumber';
import { drawingNumbers } from '../configuration';

export default class DrawingNumberList extends React.Component {

    createList = () => {
        if(!drawingNumbers || drawingNumbers.length === 0){
            // Here I would go with throwing exception and handling it with custom interceptor 
            // This is startup configuration errror and should never happen 
            return; // Because app is simple and time is limited I will just return
        }

        let drawingNumberList = [];
        for(let i = 0; i < drawingNumbers.length; i++) {
            drawingNumberList.push(<DrawingNumber key={i} number={drawingNumbers[i]}/>)
        }

        return drawingNumberList;
    }

    render() {
        return(
            <div className="d-flex flex-row flex-wrap mb-3">
                {this.createList()}
            </div>
        )
    }

}