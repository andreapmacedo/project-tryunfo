import React from 'react';
import PropTypes from 'prop-types';
import '../styles/Card.css';

class Card extends React.Component {
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
      removeButton,
      deleteCard,
    } = this.props;
    return (
      <section className="tryunfo-card">
        <h2 data-testid="name-card">{ cardName }</h2>
        <img src={ cardImage } alt={ cardName } data-testid="image-card" />
        <p data-testid="description-card">{ cardDescription }</p>
        <p data-testid="attr1-card">{ cardAttr1 }</p>
        <p data-testid="attr2-card">{ cardAttr2 }</p>
        <p data-testid="attr3-card">{ cardAttr3 }</p>
        <p data-testid="rare-card">{ cardRare }</p>
        {/* <p data-testid="trunfo-card">{ cardTrunfo }</p> */}
        {/* https://medium.com/reactbrasil/renderiza%C3%A7%C3%A3o-condicional-em-react-bb8c16dddd6f */}
        <div>
          {cardTrunfo && <h2 data-testid="trunfo-card">Super Trunfo</h2>}
          { removeButton
          && (
            <button
              data-testid="delete-button"
              type="submit"
              name={ cardName }
              onClick={ deleteCard }
            >
              Excluir
            </button>
          )}
        </div>
      </section>
    );
  }
}

Card.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  removeButton: PropTypes.bool,
  deleteCard: PropTypes.func,
};

Card.defaultProps = {
  removeButton: false,
  deleteCard: '',
};
export default Card;
