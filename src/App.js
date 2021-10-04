import './App.css';
import axios from "axios";
import { useState } from "react";
import Gifs from './Gifs';
import Form from './Form';

function App() {
  const [gif, setGif] = useState("");
  const [result, setResult] = useState([]);

  const handlechange = (e) => {
    const value = e.target.value;
    setGif(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const url = `https://api.giphy.com/v1/gifs/search?api_key=NkKRCDFtG2j565E9h4ynHrOHP1AUMfc1&q=${gif}&limit=25&offset=0&rating=g&lang=en`;
    axios.get(url).then((res) => {
      const Element = res.data.data;
      console.log(Element);
      setResult(Element);
    });
  };

  return (
    <div className="App">
    <h1 className="title">GIFFO</h1>

    <Form
      submit={handleSubmit}
      change={handlechange}
    />

    <div className="containerGif">
      {result.map((el) => {
        return (
          <Gifs gif={el.images.original.mp4} />
        );
      })}
    </div>
  </div>
  );
}

export default App;
