import React from 'react';
import PropTypes from 'prop-types';

class Filter extends React.Component {
  render() {
    const {
      cardNameFilter,
      cardRareFilter,
      cardTrunfoFilter,
      onInputChange,
    } = this.props;
    return (
      <fieldset>
        <legend>Filtrar Cartas</legend>
        <section className="filter-sec">
          <form className="form-filter">
            Nome
            <input
              text="Filtrar por nome"
              data-testid="name-filter"
              name="cardNameFilter"
              type="text"
              value={ cardNameFilter }
              onChange={ onInputChange }
            />
            Raridade
            <select
              text="Filtrar por raridade"
              data-testid="rare-filter"
              name="cardRareFilter"
              value={ cardRareFilter }
              onChange={ onInputChange }
            >
              <option value="todas">todas</option>
              <option value="normal">normal</option>
              <option value="raro">raro</option>
              <option value="muito raro">muito raro</option>
            </select>
            <section>
              Super Trunfo
              <input
                data-testid="trunfo-filter"
                name="cardTrunfoFilter"
                type="checkbox"
                value={ cardTrunfoFilter }
                onChange={ onInputChange }
              />
            </section>
          </form>
        </section>
      </fieldset>
    );
  }
}

Filter.propTypes = {
  cardNameFilter: PropTypes.string,
  cardRareFilter: PropTypes.string,
  cardTrunfoFilter: PropTypes.string,
  onInputChange: PropTypes.func,
}.isRequired;

export default Filter;
