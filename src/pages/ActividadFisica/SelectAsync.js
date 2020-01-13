import React, { Component, Fragment } from 'react';
import AsyncSelect from 'react-select/async';
import PropTypes from 'prop-types'


//import Select from "react-select";
import { quitaAcentos } from '../../utils/index';

const colourStyles = {
  placeholder: (defaultStyles) => {
    return {
      ...defaultStyles,
      color: '#4e5b5c',
    };
  },
};

class SelectAsync extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedOption: null,
    };
  }

  filterData = (inputValue) => {
    return this.props.options.filter((i) => quitaAcentos(i.label).includes(quitaAcentos(inputValue)));
  };

  promiseOptions = (inputValue) =>
    new Promise((resolve) => {
      setTimeout(() => {
        resolve(this.filterData(inputValue));
      }, 200);
    });

  handleInputChange = (inputValue) => {
    this.setState({ inputValue });
    return inputValue;
  };

  handleChange = (selectedOption) => {
    this.setState({ selectedOption });
    console.log(`Option selected:`, selectedOption);
    if (selectedOption === null) {
      this.props.corregirErroneoEvent(this.props.keyText, null, this.props.keyText2, null);
    } else {
      this.props.corregirErroneoEvent(this.props.keyText, selectedOption.label, this.props.keyText2, selectedOption.value);
    }
  };

  resetControl = () => {
    this.setState({
      selectedOption: null,
    });
  };

  render() {
    const { selectedOption } = this.state;
    return (
      <AsyncSelect
        placeholder={this.props.placeholder ? this.props.placeholder.toUpperCase() : ''}
        id={this.props.id}
        name={this.props.id}
        loadOptions={this.promiseOptions}
        onInputChange={this.handleInputChange}
        onChange={this.handleChange}
        value={selectedOption}
        isClearable
      />
    );
  }
}

SelectAsync.propTypes = {
    placeholder:PropTypes.string.isRequired,
    options:PropTypes.array.isRequired,
    keyText:PropTypes.string.isRequired,
    id:PropTypes.string.isRequired
}

SelectAsync.defaultProps = {
    
}

export default SelectAsync;
