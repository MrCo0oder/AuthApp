import {useReducer} from 'react';

function reducer(state, action) {
  if (state === null || action === null) {
    throw new Error('state and action cannot be null in useValidation reducer');
  }

  switch (action.type) {
    case 'Email':
      return {
        ...state,
        email: action.payload.trim(),
        isValidEmail:
          action.payload !== null &&
          action.payload !== undefined &&
          validateEmail(action.payload),
      };
    case 'Phone':
      return {
        ...state,
        phone: action.payload.trim(),
        isValidPhone:
          action.payload !== null &&
          action.payload !== undefined &&
          isValidPhone(action.payload),
      };
    case 'Password':
      return {
        ...state,
        password: action.payload.trim(),
        isValidPassword:
          action.payload !== null &&
          action.payload !== undefined &&
          validatePassword(action.payload),
      };

    default:
      return state;
  }
}
const initialState = {
    email: '',
    phone: '',
    password: '',
    isValidEmail: false,
    isValidPhone: false,
    isValidPassword: false,
  };
function useValidation() {
  const [state, dispatch] = useReducer(reducer, initialState);

  if (state === null || dispatch === null) {
    throw new Error('useValidation hook state and dispatch cannot be null');
  }
  const handleSubmition = action => {
    dispatch({type: action.type, payload: action.payload});
  };

  return {state, handleSubmition};
}
function validateEmail(email) {
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailPattern.test(email);
}
function validatePassword(password) {
  const passwordPattern = /^(?=.*\d).{6,}$/;
  return passwordPattern.test(password);
}
function isValidPhone(phone) {
  const phoneRegex = /^\d{10,15}$/;
  return phoneRegex.test(phone);
}

export default useValidation;
