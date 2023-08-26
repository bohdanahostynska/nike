import "./App.css";
import React from "react";
import Main from "./components/main/Main.jsx";
import Essence from "./components/essence/Essence";
import SportsTime from "./components/sportstime/SportsTime";
import Modern from "./components/modern/Modern";
import Favourite from "./components/favourite/Favourite";
import Best from "./components/best/Best";
import Join from "./components/join/Join";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import People from "./components/people/People";
import Visionaries from "./components/visionaries/Visionaries";
import AllItems from "./components/allitems/AllItems";

function App() {
  return (
    <div className="App">
      <AllItems />
      <Main />
      <Essence />
      <Best />
      <SportsTime />
      <Modern />
      <Favourite />
      <People />
      <Visionaries />
      <Join />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
