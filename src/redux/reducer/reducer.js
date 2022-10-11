let initialState = {
  user: '',
};

function reducer(state = initialState, action) {
  let { type, payload } = action;

  switch (type) {
    case 'USER_NAME':
      state.user = payload.user;
      break;
    default:
      return { ...state };
  }
}

export default reducer;
