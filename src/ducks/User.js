import _ from 'lodash';
import initialState from '../state/InitialState';
// types of action
export const Types = {
  CREATE_ITEM: 'CREATE_ITEM',
  DELETE_ITEM: 'DELETE_ITEM',
};
// actions
export const createItem = task => ({
  type: Types.CREATE_ITEM,
  payload: task,
});

export const deleteItem = id => ({
  type: Types.DELETE_ITEM,
  payload: id,
});

// Reducer
export const UserReducer = (state = initialState.user, action) => {
  switch (action.type) {
    case Types.CREATE_ITEM: {
      const item = action.payload.name;
      const newState = _.cloneDeep(state);
      newState.items = newState.items.push(item);
      return newState;
    }

    case Types.DELETE_ITEM: {
      /* Missing imp */
      return {};
    }

    default:
      return state;
  }
};

