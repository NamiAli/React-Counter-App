import React, { Component } from 'react';
import NavBar from './components/navbar';
import Counters from './components/counters';
import './App.css';

class App extends Component {

  state = {
      counters: [
        {id: 1, value:3},
        {id: 2, value:0},
        {id: 3, value:0},
        {id: 4, value:0},
      ]
     };
    

    constructor(){
      super();
      console.log('app constructor')
    }

    componentDidMount(){
      // Ajax call
      console.log('App Mounted')
    }


    handleDelete = (counterId) => {
       const counters = this.state.counters.filter(c => c.id !== counterId);
       this.setState({counters});
    };

    handleReset = () => {
         const counters = this.state.counters.map(c => {
            c.value = 0;
            return c;
        });

            this.setState({counters});
           
    };

    handleIcreament = counter => {
        const counters = [...this.state.counters];
        const index = counters.indexOf(counter);
        counters[index] = {...counter}
        counters[index].value++;
        this.setState({counters});
    }


  render() {
    console.log("App rendered");
    return (
      <React.Fragment>
        <NavBar totalCounters={this.state.counters.filter(c => c.value > 0).length} />
        <main className="container" >
          <Counters 
          counters={this.state.counters}
          onReset={this.handleReset} 
          onIcreament={this.handleIcreament}
          onDelete={this.handleDelete}
             />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
