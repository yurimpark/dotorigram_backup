function login(id, password) {
  return (dispatch, getState) => {
    console.log('와앙웅');
    dispatch({ type: 'LOGIN_SUCCESS', payload: { id, password } });
  };
}

export const authAction = { login };
