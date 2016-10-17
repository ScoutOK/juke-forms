'use strict';

const RECEIVED_INPUT = 'RECEIVED_INPUT'

export const receiveInput = function (inputText) {
  return {
    type: RECEIVED_INPUT,
    inputText: inputText
  }
}


export const inputDispatcher = function (data) {
  return function (dispatch) {
    dispatch(receiveInput(data))
  }
}

export default function inputReducer (state = '', action) {
  switch (action.type) {
    case RECEIVED_INPUT: return action.inputText;
    default: return state;
  }
};
