import React from 'react';
import PropTypes from 'prop-types';

class MyInput extends React.Component {
  render() {
    const { dataTestid, name, type, value, inputChange } = this.props;
    return (
      <label htmlFor={ name } className="input">
        { name }
        <input
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
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  inputChange: PropTypes.func.isRequired,
};

export default MyInput;
