'use strict';

import { connect } from 'react-redux';
import Artists from './Artists';
import {inputDispatcher} from '../../ducks/artistSearch'

const mapStateToProps = function (state) {
  return {
    artists: state.artists,
    inputText: state.inputText
  };
};

const mapDispatchToProps = function (dispatch) {
  return {
    sendInput: function (data) {
      dispatch(inputDispatcher(data));
    }
  }
}

const statefulComponentCreator = connect(mapStateToProps, mapDispatchToProps);
const ArtistsContainer = statefulComponentCreator(Artists);
export default ArtistsContainer;
