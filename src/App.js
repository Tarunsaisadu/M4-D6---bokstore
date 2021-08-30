import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import WarningSign from "./components/WarningSign";
import MyBadge from "./components/MyBadge";
import SingleBook from "./components/SingleBook";
import BookList from "./components/BookList";

import FantasyBooks from "../src/data/fantasy.json";

function App() {
  return (
    <div className="App">
      {/* <WarningSign />
      <MyBadge variant="primary" text="Tarun" /> */}
      {/* <SingleBook book={FantasyBooks[0]} /> */}

      <BookList books={FantasyBooks} />
    </div>
  );
}

export default App;
