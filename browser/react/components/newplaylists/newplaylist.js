'use strict';

import React from 'react';



export default function (props){
  let nameInput;
  const createPlaylist = props.createPlaylist;

  return (
  <div>
    <div className="well">
      <form className="form-horizontal" onSubmit={(event)=>{
                event.preventDefault();
                createPlaylist(nameInput.value);
              }}>
        <fieldset>
          <legend>New Playlist</legend>
          <div className="form-group">
            <label className="col-xs-2 control-label">Name</label>
            <div className="col-xs-10">
              <input
                className="form-control"
                type="text"
                ref={(inputElement) => {nameInput = inputElement}}
              />
            </div>
          </div>
          <div className="form-group">
            <div className="col-xs-10 col-xs-offset-2">
              <button type="submit" className="btn btn-success" >Create Playlist</button>
            </div>
          </div>
        </fieldset>
      </form>
  </div>

</div>


  )
}
