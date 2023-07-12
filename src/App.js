import "./App.css";
import React from "react";
import Nav from "./components/Nav";
import Footer from "./components/footer";
import Main from "./components/main";

const App = () => {
  return (
    <div className="App">
      <Nav page1="C'est" page2="la" page3="Nav"></Nav>
      <Main></Main>
      <Footer></Footer>
    </div>
  );
};

export default App;
