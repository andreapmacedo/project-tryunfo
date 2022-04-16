import React from 'react';
import Form from './components/Form';
import Card from './components/Card';
import Filter from './components/Filter';

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
  cardNameFilter: '',
};

class App extends React.Component {
  constructor() {
    super();
    this.state = INITIAL_STATE;
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

  onSaveButtonClick = (event) => {
    event.preventDefault();
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      cardNameFilter,
    } = this.state;
    const newCard = {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      cardNameFilter,
    };
    this.setState((prevState) => ({
      savedCards: [...prevState.savedCards, newCard],
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: '',
      cardTrunfo: false,
      cardNameFilter: prevState.cardNameFilter,
    }));
  }

  deleteCard = ({ target }) => {
    const { name } = target;
    // console.log(name);
    const { savedCards } = this.state;
    const newArrayWithoutCard = savedCards.filter((card) => card.cardName !== name);
    this.setState({ savedCards: newArrayWithoutCard });
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
      cardNameFilter,
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
          <h2>Todas as cartas</h2>
          <Filter
            cardNameFilter={ cardNameFilter }
            onInputChange={ this.onInputChange }
          />
          {savedCards
            .filter((card) => card.cardName.includes(cardNameFilter))
            // .filter((card) => card.cardName !== cardNameFilter)
            .map((card) => (<Card
              key={ card.cardName }
              cardName={ card.cardName }
              cardDescription={ card.cardDescription }
              cardAttr1={ card.cardAttr1 }
              cardAttr2={ card.cardAttr2 }
              cardAttr3={ card.cardAttr3 }
              cardImage={ card.cardImage }
              cardRare={ card.cardRare }
              cardTrunfo={ card.cardTrunfo }
              removeButton
              deleteCard={ this.deleteCard }
            />))}
        </div>
      </main>
    );
  }
}

export default App;
