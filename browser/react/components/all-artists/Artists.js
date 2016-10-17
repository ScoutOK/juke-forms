'use strict';

import React from 'react';
import { Link } from 'react-router';


//inputText is text property
//sendInput is function

export default function (props) {
  const artists = props.artists;
  const inputText = props.inputText;
  const sendInput = props.sendInput
  let currentInput = ''

  return (
    <div>
      <h3>Artists</h3>
      <input
        className="form-control"
        type="text"
        ref={(inputElement)=>{currentInput = inputElement}}
        onChange={()=> {
          sendInput(currentInput.value)}} />
      <div className="list-group">
        {
          artists
          .filter(artist => {
            if (!inputText) return true;
            if (artist.name.startsWith(inputText)) return true;
            else return false
          })
          .map(artist => (
            <div className="list-group-item" key={ artist.id }>
              <Link to={`/artists/${artist.id}`}>
                { artist.name }
              </Link>
            </div>
          ))
        }
      </div>
    </div>
  );
}
