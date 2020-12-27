export const setSignupFormAction = (bool) => {
  return (dispatch, getState) => {
    dispatch({
      type: "SET_SIGNUP_FORM_ACTION",
      payload: bool,
    });
  };
};
