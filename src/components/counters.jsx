import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {
   
     

    render() {

      const {onReset, counters, onDelete, onIcreament } = this.props;

        return (
            <div>
                    <button
                     onClick = {onReset}
                     className="btn btn-primary bt-sm m-2">Reset</button>
                     <br />
            		{counters.map(counter => (
                        <Counter

                             key={counter.id}
                             value={counter.value}  
                             onDelete={onDelete} 
                             onIcreament={onIcreament}
                             counter={counter}

                         />))}
            </div>
        );
    }
}

export default Counters;
