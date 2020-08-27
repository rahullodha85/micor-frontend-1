import React from "react";
import axios from "axios";
import logo from "./logo.svg";
import { Link } from "react-router-dom";

const MyComponent = ({switchPage}) => {
  const [counter, setCounter] = React.useState(0);
  const [apiData, setApiData] = React.useState("");

  const counterHandler = () => {
    setCounter(counter + 1);
  };

  React.useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      url: `${process.env.REACT_APP_BACKEND_API}/api1/home`,
    };
    const response = await axios(options);
    const data = response.data;
    setApiData(data);
  };

  return (
    <div>
      This is micro-frontend application-1!
      <p>{apiData.Home}</p>
      <p>{counter}</p>
      <div>
        <button onClick={() => counterHandler()}>Increase</button>
      </div>
      <div>
        {/* <button onClick={switchPage}>Route-2 */}
        <button><Link to="/app1/route2">Route-2</Link>
        </button>
      </div>
    </div>
  );
};

const Route1 = ({switchPage}) => {
  return (
    <div>
      <header className="App-header">
        <img
          src={`${process.env.REACT_APP_CONTENT_HOST}${logo}`}
          className="App-logo"
          alt="logo"
        />
        <MyComponent switchPage={switchPage}/>
        {/*<p>
            I am Micro Frontend 3.
            </p>*/}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
};

export default Route1;
