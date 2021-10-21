import { useContext } from "react";

import FavoritesContext from "../store/favorites-context";

import Meetuplist from "../Components/Meetups/Meetuplist";

function FavoritesPage() {
  const favoritesctx = useContext(FavoritesContext);

  let content;

  if (favoritesctx.totalfavorites === 0) {
    content = <p>You got no favorites yet. Start adding some?</p>;
  } else {
    content =<Meetuplist meetups={favoritesctx.favorites} />;
  }
  return (
    <section>
      <h1>My favorites</h1>
      {content}
    </section>
  );
}

export default FavoritesPage;
