import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Equipos from '../Catalogos/Equipos'


//css
import "./App.css";

//Material-UI

//componentes
import Layout from "../Layout";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: true,
      title:'home'      
    };
  }

  handleSidebar = () => {
    this.setState({
      open: !this.state.open
    });
  };

  setTitle = (texto) => {
    this.setState({
      title: texto
    });
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          <Router>
           <Layout>
             <Equipos />
           </Layout>
          </Router>
        </div>
      </div>
    );
  }
}

export default App;
