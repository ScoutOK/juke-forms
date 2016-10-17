'use strict';


import {connect} from 'react-redux';
import newplaylist from './newplaylist';
import {newPlaylistDispatcher} from '../../ducks/newPlaylist'

const mapStateToProps = function (state) {
  return state;
}
const mapDispatchToProps = function (dispatch) {
  return {
    createPlaylist:
    function (data) {
      //dispatch(newPlaylistDispatcher(data));
      console.log(data);
    }
  }
}


const  NewPlaylistContainer = connect(mapStateToProps, mapDispatchToProps);

export default NewPlaylistContainer(newplaylist);

