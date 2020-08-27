import React from "react";
import "./App.css";
import { Route, BrowserRouter, Switch, Router } from "react-router-dom";
import Route1 from "./Route1";
import Route2 from "./Route2";
import history from "./history";

function App() {
  const [switchPage, setSwitchPage] = React.useState("/");

  const func = (routeStr) => setSwitchPage(routeStr);

  // const ChangePage = () => {
  //   switch (switchPage) {
  //     case "/":
  //       return <Route1 switchPage={() => func("/route2")} />;
  //     case "/route2":
  //       return <Route2 switchPage={() => func("/")} />;
  //     default:
  //       return <Route1 switchPage={() => func("/")} />;
  //   }
  // };

  return (
    <div className="App">
      {/* <ChangePage /> */}
      {/* {
        switchPage ? <Route1 switchPage={c/> : <Route2 switchPage={() => func()}/>
      } */}
      <Router history={history}>
        <Route exact path="/app1" component={Route1} /> // the path here needs to be exactly same as path on container app router
        {/* <Route exact path="/app1/route1" component={Route1} /> */}
        <Route exact path="/app1/route2" component={Route2} />
      </Router>
      {/* <BrowserRouter>
        <h1>I am here</h1>
          <Route exact path="/" render = {() => <Route1 />} />
          <Route exact path="/route1" component={Route1} />
          <Route exact path="/route2" component={Route2} />
      </BrowserRouter> */}
    </div>
  );
}

export default App;
