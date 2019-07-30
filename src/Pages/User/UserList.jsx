import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import shortid from 'shortid';
import { List } from 'immutable';
import { createItem } from '../../ducks/User';

function UserList() {
  const items = useSelector(state => state.user.items).toJS();
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(createItem({ name: shortid.generate() }));
  };

  return (
    <div>
      Users:
      <button onClick={handleClick}> Click On Me</button>
      {
      items.map(
        item => (<div key={shortid.generate()}>{ item }</div>))
      }
    </div>
  );
}

UserList.defaultProps = {
  items: List(),
};


export default UserList;
