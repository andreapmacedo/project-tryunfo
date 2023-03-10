import React from 'react';
import PropTypes from 'prop-types';
import MyInput from './MyInput';
import '../styles/Form.css';

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
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,
      hasTrunfo,
      // savedCards,
    } = this.props;
    return (
      <fieldset>
        <legend>Criar Carta</legend>
        <section className="form-sec">
          <form lassName="form">
            <MyInput
              text="Nome"
              dataTestid="name-input"
              name="cardName"
              type="text"
              value={ cardName }
              inputChange={ onInputChange }
            />
            <MyInput
              text="Descrição"
              dataTestid="description-input"
              name="cardDescription"
              type="textarea"
              value={ cardDescription }
              inputChange={ onInputChange }
            />
            <MyInput
              text="Atributo 1"
              dataTestid="attr1-input"
              name="cardAttr1"
              type="number"
              value={ cardAttr1 }
              inputChange={ onInputChange }
            />
            <MyInput
              text="Atributo 2"
              dataTestid="attr2-input"
              name="cardAttr2"
              type="number"
              value={ cardAttr2 }
              inputChange={ onInputChange }
            />
            <MyInput
              text="Atributo 3"
              dataTestid="attr3-input"
              name="cardAttr3"
              type="number"
              value={ cardAttr3 }
              inputChange={ onInputChange }
            />
            <MyInput
              text="Imagem"
              dataTestid="image-input"
              name="cardImage"
              type="text"
              value={ cardImage }
              inputChange={ onInputChange }
            />
            Raridade
            <select
              className="normal-inputbox"
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
            <div className="superTrunfo">
              {/* {hasTrunfo
                ? <p>Você já tem um Super Trunfo em seu baralho</p>
                : (<input
                  label="Super Trybe Trunfo"
                  data-testid="trunfo-input"
                  name="cardTrunfo"
                  type="checkbox"
                  checked={ cardTrunfo }
                  onChange={ onInputChange }
                />)} */}
              {hasTrunfo
              && <p>Você já tem um Super Trunfo em seu baralho</p> }
              {!hasTrunfo
              && <input
                label="Super Trybe Trunfo"
                data-testid="trunfo-input"
                name="cardTrunfo"
                type="checkbox"
                checked={ cardTrunfo }
                onChange={ onInputChange }
              />}
            </div>
            <button
              className="button-save"
              type="submit"
              data-testid="save-button"
              onSaveButtonClick
              disabled={ isSaveButtonDisabled }
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
  hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

export default Form;
