import React from 'react';
import PropTypes from 'prop-types';

class MyInput extends React.Component {
  render() {
    const { dataTestid, name, type, value, onInputChange } = this.props;
    return (
      <label htmlFor={ name } className="input">
        { name }
        <input
          data-testid={ dataTestid }
          type={ type }
          name={ name }
          value={ value }
          onChange={ onInputChange }
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
  onInputChange: PropTypes.func.isRequired,
};

export default MyInput;
