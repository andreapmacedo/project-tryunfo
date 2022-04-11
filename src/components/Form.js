import React from 'react';
// import PropTypes from 'prop-types';
import MyInput from './MyInput';

const InitState = {
  cardName: '',
};

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // indexA: 0,
    };
  }

  changeInput = () => {

  }

  render() {
    return (
      <fieldset>
        <legend>Dados pessoais</legend>
        <section>
          <h2>Registro</h2>
          <form>
            <MyInput
              dataTestid="name-input"
              name="cardName"
              type="text"
              value={ InitState.cardName }
              onInputChange={ this.changeInput }
            />
            <MyInput
              dataTestid="description-input"
              name="descriptionCart"
              type="textarea"
              value={ InitState.cardName }
              onInputChange={ this.changeInput }
            />
            <MyInput
              dataTestid="attr1-input"
              name="Atributo 1"
              type="number"
              value={ InitState.cardName }
              onInputChange={ this.changeInput }
            />
            <MyInput
              dataTestid="attr2-input"
              name="Atributo 2"
              type="number"
              value={ InitState.cardName }
              onInputChange={ this.changeInput }
            />
            <MyInput
              dataTestid="attr3-input"
              name="Atributo 3"
              type="number"
              value={ InitState.cardName }
              onInputChange={ this.changeInput }
            />
            <MyInput
              dataTestid="image-input"
              name="Atributo 3"
              type="number"
              value={ InitState.cardName }
              onInputChange={ this.changeInput }
            />
            {/* <label htmlFor="select"> */}
            SeLECT
            <select name="select" id="select" data-testid="rare-input">
              <option value="normal" selected>normal</option>
              <option value="raro">raro</option>
              <option value="muito raro">muito raro</option>
            </select>
            <MyInput
              dataTestid="trunfo-input"
              name="Super Trumfo"
              type="checkbox"
              value={ InitState.cardName }
              onInputChange={ this.changeInput }
            />
            <button type="button" data-testid="save-button">Salvar</button>
          </form>
        </section>
      </fieldset>
    );
  }
}

export default Form;
