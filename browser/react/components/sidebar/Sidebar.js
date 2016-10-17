'use strict';

import React from 'react';
import { Link } from 'react-router';

export default function () {
  return (
    <sidebar>
      <img src="/juke.svg" className="logo" />
      <section>
        <Link to="/albums" activeClassName="menu-item active" className="menu-item">ALBUMS</Link>
      </section>
      <section>
        <Link to="/artists" activeClassName="menu-item active" className="menu-item">ARTISTS</Link>
      </section>
      <hr/>
      <section>
        <Link activeClassName="menu-item active" className="menu-item">PLAYLISTS
        </Link>
      </section>
      <section>
        <Link to="/playlist" className="menu-item">
          <button className="btn example-btn">ADD PLAYLIST</button>
        </Link>
      </section>
    </sidebar>
  );
}
