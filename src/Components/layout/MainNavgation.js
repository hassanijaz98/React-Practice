import { Link } from "react-router-dom";

import classes from "./MainNavigaton.module.css";

import {useContext} from 'react';

import FavoritesContext from "../../store/favorites-context";
import { useState } from "react/cjs/react.development";

function MainNavigation() {

  const favoritesctx = useContext(FavoritesContext)
  return (
    <header className={classes.header}>
      <div className={classes.logo}>React Meetups</div>
      <nav>
        <ul>
          <li>
            <Link to="/">All Meetups</Link>
          </li>
          <li>
            <Link to="/new-meetup">Add New Meetups</Link>
          </li>
          <li>
            <Link to="/favorites">
              Favorites Meetups
              <span className={classes.badge}>
                {favoritesctx.totalfavorites}
                </span>
                </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
