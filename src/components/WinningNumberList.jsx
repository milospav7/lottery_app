import React from 'react';
import { generateNumbers, useSevenNumbersDrawing } from '../actions';
import store from '../reducers/store';

export default class WinningNumberList extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            winningNumbers: []
        }

        store.subscribe(() => {
            this.setState({
              winningNumbers: store.getState().numbers
            });
          });

    }

    getWinningNumbers = () => {
        if(!this.state.winningNumbers || this.state.winningNumbers.length == 0){
            // Here we can use some kind of alerter to display error message to user
            // Or throw exception and handle it in some custom made interceptor
            return; // Because app is simple and I am limited with time I will just return
        }

        let numbers = [];
        for(let i = 0; i < this.state.winningNumbers.length; i++) {
            // I could create separate component for WinningNumber, but didnt since I just want to print it without any style and funcionality
            numbers.push(<span key={i} className="mr-2">{this.state.winningNumbers[i]}</span>)
        }

        return numbers.sort((a, b) => a.props.children - b.props.children );
    }

    render() {
        return(
            <div className="mb-3">
                <buton onClick={() => store.dispatch(generateNumbers())} className="btn btn-outline-success px-2 py-1 mb-5">Draw numbers</buton>
                { 
                    this.state.winningNumbers.length > 0 ? 
                        <div>
                            <p>The winning numbers are: {this.getWinningNumbers()}</p>
                        </div>
                    : ''
                }
            </div>
        )
    }

}