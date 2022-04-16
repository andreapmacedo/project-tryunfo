import React from 'react';
import PropTypes from 'prop-types';
import '../styles/Form.css';

class MyInput extends React.Component {
  render() {
    const { text, dataTestid, name, type, value, inputChange } = this.props;
    return (
      <label htmlFor={ name } className="input">
        { text }
        <input
          className="normal-inputbox"
          data-testid={ dataTestid }
          type={ type }
          name={ name }
          value={ value }
          onChange={ inputChange }
        />
      </label>
    );
  }
}

MyInput.propTypes = {
  dataTestid: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  inputChange: PropTypes.func.isRequired,
};

export default MyInput;
