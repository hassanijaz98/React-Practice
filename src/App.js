import { Route, Switch } from "react-router-dom";

import AllMeetUpsPage from "./Pages/AllMeetups";
import NewMeetUpPage from "./Pages/NewMeetup";
import FavoritesPage from "./Pages/Favorites";
import Layout from ".//Components/layout/layout";

function App() {
  return (
    <div>
      <Layout>
        <Switch>
          <Route path="/" exact>
            <AllMeetUpsPage />
          </Route>

          <Route path="/new-meetup">
            <NewMeetUpPage />
          </Route>

          <Route path="/favorites">
            <FavoritesPage />
          </Route>
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
