
import React from 'react';
import './App.css';

class App extends React.Component {
   state = { 
    
       fullName : "Amal Bourezgui" ,
       bio : "I am 27 years old" ,
       profession : "A developper web ",
       imgSrc : <img src="./img.jpg" alt="imageProfile" className="image"/>
   };

   render() {
     
     
     return (


      <div className="App" >
            {this.state.fullName} <br/>
            {this.state.bio}<br/>
            {this.state.profession}<br/>
            {this.state.imgSrc}

            
      </div>
      

     );
   };
};


export default App;
