import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Gasto extends Component {
  render() {
    return (
      <div>
        Gasto
        {console.log(this.props)}
      </div>
    );
  }
}

Gasto.propTypes = {
  itemGasto: PropTypes.object.isRequired,
};

export default Gasto;
