const PLUS_NUMBER = "PLUS_NUMBER";
const MINUS_NUMBER = "MINUS_NUMBER";

export const plusNumber = (payload) => {
  return {
    type: PLUS_NUMBER,
    payload,
  };
};

export const minusNumber = (payload) => {
  return {
    type: MINUS_NUMBER,
    payload,
  };
};

// 초기 상태값
const initialState = {
  number: 0,
};

// 리듀서
const calculator = (state = initialState, action) => {
  switch (action.type) {
    case PLUS_NUMBER:
      return {
        ...state,
        number: state.number + action.payload,
      };
    case MINUS_NUMBER:
      return {
        ...state,
        number: state.number - action.payload,
      };
    default:
      return state;
  }
};

// 모듈파일에서는 리듀서를 export default 한다.
export default calculator;
