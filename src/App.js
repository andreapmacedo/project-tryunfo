import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

const INITIAL_STATE = {
  cardName: '',
  cardDescription: '',
  cardAttr1: '0',
  cardAttr2: '0',
  cardAttr3: '0',
  cardImage: '',
  cardRare: '',
  cardTrunfo: false,
  savedCards: [],
};

class App extends React.Component {
  constructor() {
    super();
    this.state = INITIAL_STATE;
  }

  checkTrunfo = () => {
    const { savedCards } = this.state;
    console.log(savedCards);
    const hasSTrunfo = savedCards.some((card) => card.cardTrunfo);
    console.log(hasSTrunfo);
    // this.setState({

    // });
    return hasSTrunfo;
  }

  onInputChange = ({ target }) => {
    const { name } = target;
    // console.log(name);
    const value = target.type === 'checkbox' ? target.checked : target.value;
    // console.log(this.state.hasTrunfo);
    // console.log(value);
    this.setState({
      [name]: value,
    });
    this.checkTrunfo();
  };

  // changeHandler = (event) => {
  //   let { name, value } = event.target;
  //   if (name === 'name') value = value.toUpperCase();
  //   // if (name === 'address') value = this.validateAddress(value);
  //   this.updateState(name, value);
  // }

  // updateState(name, value) {
  //   console.log(name, value);
  //   this.setState(() => ({
  //     [name]: value,
  //     // formError: {
  //     //   ...state.formError,
  //     //   [name]: this.validateField(name, value),
  //     // },
  //   }));
  // }
  invalidateAttrs = () => {
    let { cardAttr1, cardAttr2, cardAttr3 } = this.state;
    const { cardName, cardDescription, cardImage } = this.state;
    const maxAttr = 90;
    const maxTotal = 210;
    cardAttr1 = parseInt(cardAttr1, 10);
    cardAttr2 = parseInt(cardAttr2, 10);
    cardAttr3 = parseInt(cardAttr3, 10);
    if (
      cardName
      && cardDescription
      && cardImage
      && cardAttr1 >= 0 && cardAttr1 <= maxAttr
      && cardAttr2 >= 0 && cardAttr2 <= maxAttr
      && cardAttr3 >= 0 && cardAttr3 <= maxAttr
      && cardAttr1 + cardAttr2 + cardAttr3 <= maxTotal
    ) {
      return false;
    }
    return true;
  }

  onSaveButtonClick = () => {
    const { savedCards } = this.state; // Guarda a lista de cartas já criadas
    const card = this.state; // Nova carta que será adicionada a lista;
    delete card.savedCards; // Remove a lista atual para que não fique duplicada quando a nova lista com a adiçao da nova carte for adicionada na linha abaixo
    savedCards.push(card); // Adiciona a nova carta à lista de cartas já criada
    this.setState({
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: '',
      cardTrunfo: '',
      savedCards,
    });
  }

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
      savedCards,
    } = this.state;
    const hasTrunfo = savedCards.some((card) => card.cardTrunfo);

    return (
      <main>
        <Form
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
          onInputChange={ this.onInputChange }
          isSaveButtonDisabled={ this.invalidateAttrs() }
          onSaveButtonClick={ this.onSaveButtonClick }
          hasTrunfo={ hasTrunfo }
          savedCards={ savedCards }
        />
        <Card
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
        />
        <div className="cards">
          {savedCards.map((item) => (
            <div className="card" key={ item.cardName }>
              <p>{ item.cardName }</p>
              <img src={ item.cardImage } alt={ item.cardName } />
              <p>{ item.cardDescription }</p>
              <strong>{ item.cardAttr1 }</strong>
              <strong>{ item.cardAttr2 }</strong>
              <strong>{ item.cardAttr3 }</strong>
            </div>
          ))}
        </div>
      </main>
    );
  }
}

export default App;
