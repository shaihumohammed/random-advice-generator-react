import React from "react";
import axios from "axios";

export default function App() {
  const [advice, setAdvice] = React.useState("");
  React.useEffect(() => {
    fetchAdice();
  }, []);

  function fetchAdice() {
    axios.get("https://api.adviceslip.com/advice").then(function (response) {
      const { advice } = response.data.slip;
      setAdvice(advice);
      console.log({ advice });
    });
  }
  return (
    <>
      <div className="app">
        <p className="advice">{advice}</p>

        <button className="bt" type="button" onClick={() => fetchAdice()}>
          Next Advice
        </button>
      </div>
    </>
  );
}
