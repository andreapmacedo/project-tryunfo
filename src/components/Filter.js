import React from 'react';
import PropTypes from 'prop-types';

class Filter extends React.Component {
  render() {
    const {
      cardNameFilter,
      onInputChange,
    } = this.props;
    return (
      <fieldset>
        <legend>Filtrar Cartas</legend>
        <section className="filter-sec">
          <form className="form-filter">
            <input
              text="Filtrar por nome"
              data-testid="name-filter"
              name="cardNameFilter"
              type="text"
              value={ cardNameFilter }
              onChange={ onInputChange }
            />
          </form>
        </section>
      </fieldset>
    );
  }
}

Filter.propTypes = {
  cardNameFilter: PropTypes.string,
  onInputChange: PropTypes.func,
}.isRequired;

export default Filter;
