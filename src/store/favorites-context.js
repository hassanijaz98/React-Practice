import { createContext ,useState } from "react";

const FavoritesContext = createContext({
  favorites: [],
  totalfavorites: 0,
  addfavorite:(favoritemeetup) =>{},
  removefavorite:(meetupid) =>{},
  itemisfavorite:(meetupid)=>{}

});

export function FavoritesContextProvider(props) {

    const [userfavorite,setuserfavorite]=useState([]);
   
    function addfavoritehandler(favoritemeetup)
    {
        setuserfavorite((prevuserfavorites) => {

            return prevuserfavorites.concat(favoritemeetup)
        });
    }
    
    function removefavoritehandler(meetupid)
    {
        setuserfavorite((prevuserfavorites) =>{

            return prevuserfavorites.filter(meetup =>meetup.id !== meetupid);
        });
    }

    function itemisfavoritehandler(meetupid)
    {
        return userfavorite.some(meetup =>meetup.id ===meetupid );
    }

   
    const context ={
        favorites:userfavorite,
        totalfavorites:userfavorite.length,

        addfavorite: addfavoritehandler,
        removefavorite:removefavoritehandler,
        itemisfavorite:itemisfavoritehandler,

    };

  return (
    <FavoritesContext.Provider value={context}>
        {props.children}
    </FavoritesContext.Provider>
  );
}

export default FavoritesContext;