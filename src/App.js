// create your App component here
import React, { Component } from 'react';
class App extends Component {
    state = {  }

    componentDidMount (){

    
        fetch("http://api.open-notify.org/astros.json")
        .then(resp => resp.json())
    }
    render() { 
        return (  );
    }
}
 
export default App;