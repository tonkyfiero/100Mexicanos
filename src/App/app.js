import React, { Component } from 'react';
import { PageSettings } from '../config/page-settings';

//css
import './App.css';

//componentes
import Header from '../components/Layout/header/header';
import Sidebar from '../components/Layout/sideBar/sidebar';
import Contenido from '../components/Layout/contenido/cotenido';

class App extends Component {
  constructor(props) {
    super(props);

    this.handlePrueba = (valor) => {
      this.setState((state) => ({
        prueba: valor,
      }));
    };

    this.state = {
      prueba: true,

      handlePrueba: this.handlePrueba,
    };
  }

  render() {
    return (
      <PageSettings.Provider value={this.state}>
        <div>
          <Header />
          <Sidebar />
          <Contenido />
        </div>
      </PageSettings.Provider>
    );
  }
}

export default App;
