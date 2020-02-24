import React, { createRef } from 'react';

import './panel.css';

const PanelStat = React.createContext();

class Panel extends React.Component {
  constructor(props) {
    super(props);

    this.resizeObserver = null;
    this.resizeSubject = createRef();

    this.toggleExpand = () => {
      this.setState((state) => ({
        expand: !this.state.expand,
      }));
    };

    this.toggleRemove = () => {
      this.setState((state) => ({
        remove: !this.state.remove,
      }));
    };

    this.toggleCollapse = () => {
      this.setState((state) => ({
        collapse: !this.state.collapse,
      }));
    };

    this.toggleReload = () => {
      if (this.state.reload !== true) {
        this.setState((state) => ({
          reload: true,
        }));

        setTimeout(() => {
          this.setState((state) => ({
            reload: false,
          }));
        }, 2000);
      }
    };

    this.state = {
      expand: false,
      collapse: false,
      reload: false,
      remove: false,
      prueba:'prueba',      
      identificador:this.props.identificador,
      toggleExpand: this.toggleExpand,
      toggleReload: this.toggleReload,
      toggleRemove: this.toggleRemove,
      toggleCollapse: this.toggleCollapse,      
    };
  }

  componentDidMount() {
    if ('ResizeObserver' in window) {
      this.observe(ResizeObserver);
    } else {
      import('resize-observer-polyfill').then(this.observe);
    }
  }

  componentWillUnmount() {
    if (this.resizeObserver) {
      this.resizeObserver.disconnect();
    }
  }

  observe = (RO) => {
    this.resizeObserver = new RO((entries) => {
      const { width, height, top, right, bottom, left } = entries[0].contentRect;
      this.setState({ width, height, top, right, bottom, left });
    });

    if (this.resizeSubject.current) {
      this.resizeObserver.observe(this.resizeSubject.current);
    }
  };

  render() {
    // console.log(`${this.state.identificador} ${Date.now().toString()}`)
    let stilo = {
      height:this.state.expand ? '' : `${this.props.altura}px`
    }
    return (
      <PanelStat.Provider value={this.state}>
        
        {!this.state.remove && (
          
          <div
            ref={this.resizeSubject}
            className={
              'panel panel-' +
              (this.props.theme ? this.props.theme : 'inverse') +
              ' ' +
              (this.state.expand ? 'panel-expand ' : ' ') +
              (this.state.reload ? 'panel-loading ' : ' ') +
              (this.props.className ? this.props.className : '')
            } style={stilo}>
            {this.props.children}            
          </div>
        )}
      </PanelStat.Provider>
    );
  }
}

class PanelHeader extends React.Component {
  render() {
    return (
      <div className="panel-heading">
        <h4 className="panel-title">{this.props.children}</h4>
        {!this.props.noButton && (
          <PanelStat.Consumer>
            {({ toggleExpand, toggleRemove, toggleCollapse, toggleReload }) => (
              <div className="panel-heading-btn">
                <button className="btn btn-xs btn-icon btn-circle btn-default" onClick={toggleExpand}>
                  <i className="fa fa-expand"></i>
                </button>
                &nbsp;&nbsp;
                <button className="btn btn-xs btn-icon btn-circle btn-success">
                  <i className="fa fa-redo"></i>
                </button>
                &nbsp;&nbsp;
                <button className="btn btn-xs btn-icon btn-circle btn-warning">
                  <i className="fa fa-minus"></i>
                </button>
                &nbsp;&nbsp;
                <button className="btn btn-xs btn-icon btn-circle btn-danger">
                  <i className="fa fa-times"></i>
                </button>
              </div>
            )}
          </PanelStat.Consumer>
        )}
      </div>
    );
  }
}

class PanelBody extends React.Component {
  crearChildren = (alto,ancho,expand) => {
    let children = React.Children.map(this.props.children, (child, index) => {
      return React.cloneElement(child, {
        index,
        alto: alto,
        ancho:ancho,
        expand:expand
      });
    });
  return children
  };

  render() {
    // + (collapse ? 'd-none ' : ' ') + this.props.className}
    return (
      <PanelStat.Consumer>
        {({ collapse, reload,height,width,expand}) => (
          <div className={'panel-body '}>
            {this.crearChildren(height,width,expand)}
            {reload && (
              <div className="panel-loader">
                <span className="spinner-small"></span>
              </div>
            )}
          </div>
        )}
      </PanelStat.Consumer>
    );
  }
}

class PanelFooter extends React.Component {
  render() {
    return <div className={'panel-footer ' + this.props.className}>{this.props.children}</div>;
  }
}

export { Panel, PanelHeader, PanelBody, PanelFooter };
