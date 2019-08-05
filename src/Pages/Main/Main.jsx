import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'reactstrap';
import { Welcome } from '../../components';

export default class Main extends Component {
  static propTypes = {
    history: PropTypes.shape({
      push: PropTypes.func.isRequired,
    }).isRequired,
  };
  constructor(props) {
    super(props);

    this.state = {};

    [
      'goToUser',
    ].forEach((method) => { this[method] = this[method].bind(this); });
  }

  goToUser() {
    const { history } = this.props;
    history.push('/user');
  }


  render() {
    return (
      <React.Fragment>
        <Welcome />
        <button onClick={this.goToUser} type="button" className="btn btn-primary">Go to user</button>
        <Button
          color="primary"
          onClick={this.goToUser}
        >
          Go to User
        </Button>
      </React.Fragment>
    );
  }
}
