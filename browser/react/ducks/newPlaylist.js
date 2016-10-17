'use strict';

const NEW_PLAYLIST = 'NEW_PLAYLIST'

export const createPlaylist = function (inputText) {
  return {
    type: NEW_PLAYLIST,
    name: inputText
  }
}


export const newPlaylistDispatcher = function (data) {
  return function (dispatch) {
    dispatch(createPlaylist(data))
  }
}

export default function newPlaylistReducer (state = '', action) {
  switch (action.type) {
    case NEW_PLAYLIST: return action.name;
    default: return state;
  }
};
