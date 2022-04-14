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
    // this.onSaveButtonClick = this.onSaveButtonClick.bind(this);
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
  };

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

  clearForm = () => {
    this.setState({ ...INITIAL_STATE });
    // this.setState({
    //   cardName: '',
    //   cardDescription: '',
    //   cardAttr1: '0',
    //   cardAttr2: '0',
    //   cardAttr3: '0',
    //   cardImage: '',
    //   cardRare: '',
    //   cardTrunfo: false,
    //   savedCards,
    // });
  }

  onSaveButtonClick = () => {
    // e.preventDefault();
    const { savedCards } = this.state; // Lista de cartas
    const newCard = this.state; // Nova carta que será adicionada a lista;
    console.log(newCard);
    // delete newCard.savedCards; // Remove a lista atual para que não fique duplicada quando a nova lista com a adiçao da nova carte for adicionada na linha abaixo
    // savedCards.push(newCard);
    this.setState((prevState) => ({
      savedCards: [...prevState.savedCards, newCard],
    }));
    // this.setState({
    //   savedCards: [...savedCards, newCard],
    // });
    // this.setState({
    //   savedCards,
    // });
    console.log(savedCards);
    this.clearForm();
    // this.setState({
    //   cardName: '',
    //   cardDescription: '',
    //   cardAttr1: '0',
    //   cardAttr2: '0',
    //   cardAttr3: '0',
    //   cardImage: '',
    //   cardRare: '',
    //   cardTrunfo: false,
    //   savedCards,
    // });
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
          {savedCards.map((card, index) => (
            <div className="card" key={ index }>
              <p>{ card.cardName }</p>
              <img src={ card.cardImage } alt={ card.cardName } />
              <p>{ card.cardDescription }</p>
              <p>{ card.cardAttr1 }</p>
              <p>{ card.cardAttr2 }</p>
              <p>{ card.cardAttr3 }</p>
            </div>
          ))}
        </div>
      </main>
    );
  }
}

export default App;
