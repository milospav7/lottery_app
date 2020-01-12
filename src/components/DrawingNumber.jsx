import React from 'react';

export default class DrawingNumber extends React.Component {

    getClassName = (number) => {
        if(number > 0 && number < 10)
            return 'number-box m-2 p-1 border border-dark bg-secondary text-light';
        else if(number >= 10 && number < 20)
            return 'number-box m-2 p-1 border border-dark bg-primary text-light';
        else if(number >= 20 && number < 30)
            return 'number-box m-2 p-1 border border-dark bg-danger text-light';
        else if(number >= 30 && number < 40)
            return 'number-box m-2 p-1 border border-dark bg-success text-light';
            else if(number >= 40 && number < 50)
            return 'number-box m-2 p-1 border border-dark bg-warning text-light';
        else  
            return 'number-box m-2 p-1 border border-dark';
    }

    render() {
        return(
            <span className={this.getClassName(this.props.number)}>
                {this.props.number}
            </span>
        )
    }

}