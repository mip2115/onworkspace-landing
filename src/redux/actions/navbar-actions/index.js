export const setSignupFormAction = (bool) => {
  return (dispatch, getState) => {
    dispatch({
      type: "SET_SIGNUP_FORM_ACTION",
      payload: bool,
    });
  };
};

export const setDisplayMobileMenuAction = (bool) => {
  return {
    type: "SET_DISPLAY_MOBILE_MENU",
    payload: bool,
  };
};
