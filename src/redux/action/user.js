export const USER_LOGOUT = 'USER_LOGOUT';

export const setAccessToken = (accessToken) => {
  return (dispatch) => {
    // dispatch(setLogoutTimer(expiryTime));
    dispatch({
      type: USER_AUTHENTICATE,
      accessToken,
    });
  };
};

export const authenticate = (
  userId,
  token,
  user_profile,
  expiryTime,
  user_type,
) => {
  return (dispatch) => {
    // dispatch(setLogoutTimer(expiryTime));
    dispatch({
      type: USER_AUTHENTICATE,
      userId: userId,
      token: token,
      user: user_profile,
      user_type: user_type,
    });
  };
};

export const logout = () => {
  clearLogoutTimer();
  AsyncStorage.removeItem('userData');
  return { type: USER_LOGOUT };
};

const clearLogoutTimer = () => {
  if (timer) {
    clearTimeout(timer);
  }
};

const setLogoutTimer = (expirationTime) => {
  return (dispatch) => {
    timer = setTimeout(() => {
      dispatch(logout());
    }, expirationTime);
  };
};