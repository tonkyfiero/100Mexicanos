import React, { Component } from 'react';
import { PageSettings } from '../config/page-settings';

///acciones redux

import { getDataIni } from '../redux/actions/FetchFunctions';

//css
import './App.css';

//componentes
import Header from '../components/Layout/header/header';
import Sidebar from '../components/Layout/sideBar/sidebar';
import Contenido from '../components/Layout/contenido/contenido';

class App extends Component {
  constructor(props) {
    super(props);

    this.handleViewSideBar = () => {
      this.setState((state) => ({
        viewSidebar: !this.state.viewSidebar,
      }));
    };

    this.handlePrueba = (valor) => {
      this.setState((state) => ({
        prueba: valor,
      }));
    };

    this.state = {
      prueba: true,
      viewSidebar: false,
      handleViewSideBar: this.handleViewSideBar,
      funcionPrueba: this.handlePrueba,
      height: window.innerHeight,
      width: window.innerWidth,
    };
  }

  render() {
    return (
      <PageSettings.Provider value={this.state}>
        <div style={{height:'100%'}}>
          <Header />
          <Sidebar />
          <Contenido />
        </div>
      </PageSettings.Provider>
    );
  }
}

export default App;
