import React, { Component } from 'react';




class Counter extends Component {

    
    formatCounter(){
    	const { value } = this.props.counter;
    	return value === 0 ? 'Zero' : value;
    }

    getBadgeClasses(){
    	let classes = "badge m-2 badge-";
    	classes += (this.props.counter.value === 0) ? 'warning' : 'primary';
    	return classes;
    }

    componentDidUpdate(prevProps, prevState){
           console.log('previous props', prevProps);
           console.log('previous states', prevState);

           if(prevProps.counter.value !== this.props.counter.value){
              // call ajax and get new data from server


           }
    }


     componentWillUnmount(){
        console.log('component unmount');
     }


    render() {
           
       
    	
        return (
        	<React.Fragment>
            
        	<span className={this.getBadgeClasses()}>{this.formatCounter()}</span>
        	<button 
        		onClick={() => this.props.onIcreament(this.props.counter)} 
        		className="btn btn-secondary btn-sm">
        		Increament
        	</button>
            <button onClick={() => this.props.onDelete(this.props.counter.id)} className="btn btn-danger btn-sm m-2">Delete</button>
             <br />
        	</React.Fragment>
        	);
            
        
    }



}

export default Counter;
