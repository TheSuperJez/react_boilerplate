import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import shortid from 'shortid';
import { createItem, deleteItem } from '../../ducks/User';

class UserList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.createItem({ name: shortid.generate() });
  }

  render() {
    return (
      <div>
        Users:
        <button onClick={this.handleClick}> Click On Me</button>
        {
          this.props.items.map(
          item => (<div key={shortid.generate()}>{ item }</div>))
        }
      </div>
    );
  }
}

UserList.defaultProps = {
  items: [],
};

UserList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string),
  createItem: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  items: state.user.items,
});

const mapDispatchToProps = dispatch => ({
  createItem: item => dispatch(createItem(item)),
  deleteItem: id => dispatch(deleteItem(id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(UserList);
