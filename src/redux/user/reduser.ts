import { createReducer } from 'reduxsauce';
import * as actionTypes from '$redux/user/constants';
import * as ACTIONS from '$redux/user/actions';

export const INITIAL_STATE: RootState = {
  // key: value
};

const setState: ActionHandler<typeof ACTIONS.someAction> = (state, action) => ({
  ...state,
  //  ...action.newState,
});

const HANDLERS = {
  [actionTypes.USER_ACTIONS.SOME_ACTION]: setState,
};

export default createReducer(INITIAL_STATE, HANDLERS);
