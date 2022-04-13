import React from 'react';
import PropTypes from 'prop-types';
import MyInput from './MyInput';

class Form extends React.Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      isButtonDisable,
      onInputChange,
      onSaveButtonClick,
    } = this.props;
    return (
      <fieldset>
        <legend>Form</legend>
        <section>
          <h2>Form</h2>
          <form>
            <MyInput
              dataTestid="name-input"
              name="cardName"
              type="text"
              value={ cardName }
              // value="cardName"
              inputChange={ onInputChange }
            />
            <MyInput
              dataTestid="description-input"
              name="cardDescription"
              type="textarea"
              value={ cardDescription }
              inputChange={ onInputChange }
            />
            <MyInput
              dataTestid="attr1-input"
              name="cardAttr1"
              type="number"
              value={ cardAttr1 }
              inputChange={ onInputChange }
            />
            <MyInput
              dataTestid="attr2-input"
              name="cardAttr2"
              type="number"
              value={ cardAttr2 }
              inputChange={ onInputChange }
            />
            <MyInput
              dataTestid="attr3-input"
              name="cardAttr3"
              type="number"
              value={ cardAttr3 }
              inputChange={ onInputChange }
            />
            <MyInput
              dataTestid="image-input"
              name="cardImage"
              type="text"
              value={ cardImage }
              inputChange={ onInputChange }
            />
            Raridade
            <select
              name="cardRare"
              id="select"
              data-testid="rare-input"
              value={ cardRare }
              onChange={ onInputChange }
            >
              <option value="normal">normal</option>
              <option value="raro">raro</option>
              <option value="muito raro">muito raro</option>
            </select>
            {cardTrunfo}
            <input
              label="Super Trybe Trunfo"
              data-testid="trunfo-input"
              name="cardTrunfo"
              type="checkbox"
              checked={ cardTrunfo }
              onChange={ onInputChange }
            />
            <button
              type="submit"
              data-testid="save-button"
              onSaveButtonClick
              disabled={ isButtonDisable }
              onClick={ onSaveButtonClick }
            >
              Salvar
            </button>
          </form>
        </section>
      </fieldset>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  isButtonDisable: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

export default Form;
