import classes from "./MeetupItem.module.css";
import Card from "../ui/Card";
import {useContext} from 'react'
import FavoritesContext from "../../store/favorites-context";


function MeetupItem(props) {

  const favoritesctx= useContext(FavoritesContext);
  const itemisfavorite=favoritesctx.itemisfavorite(props.id);
  
  function togglefavoritestatushandler()
  {
    if (itemisfavorite)
    {
      favoritesctx.removefavorite(props.id)
    }
    else
    {
      favoritesctx.addfavorite({
        id:props.id,
        title:props.title,
        description:props.description,
        image:props.image,
        address:props.address,

      });
    }
  }

  return (
    <li className={classes.item}>
      <Card  >
        <div className={classes.image}>
          <img src={props.image} alt={props.title} />
        </div>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
          <p>{props.description}</p>
        </div>
        <div className={classes.actions}>
          <button onClick={togglefavoritestatushandler}>
            {itemisfavorite ? 'Remove From Favorite':'Move to Favorites'}
            </button>
        </div>
      </Card>
    </li>
  );
}

export default MeetupItem;
