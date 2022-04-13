import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

const INITIAL_STATE = {
  cardName: '',
  cardDescription: '',
  cardAttr1: '',
  cardAttr2: '',
  cardAttr3: '',
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

  onInputChange = ({ target }) => {
    const { name } = target;
    console.log(name);
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
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
    // console.log('invalidateAttrs');
    let { cardAttr1, cardAttr2, cardAttr3 } = this.state;
    const { cardName, cardDescription, cardImage } = this.state;
    const maxAttr = 90;
    const maxTotal = 210;
    cardAttr1 = parseInt(cardAttr1, 10);
    cardAttr2 = parseInt(cardAttr2, 10);
    cardAttr3 = parseInt(cardAttr3, 10);
    // if (cardName !== '') return false;
    if (
      cardName !== ''
      && cardDescription !== ''
      && cardImage !== ''
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
    const { savedCards } = this.state;
    const newCards = this.state;
    delete newCards.savedCards;
    savedCards.push(newCards);
    this.setState({
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: '',
      cardTrunfo: false,
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
      // savedCards,
    } = this.state;
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
          // hasTrunfo={ hasTrunfo }
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
      </main>
    );
  }
}

export default App;
