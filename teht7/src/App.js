import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";

const URL = "https://api.jokes.one/jod";

function App() {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");

  useEffect(() => {
    axios
      .get(URL)
      .then((response) => {
        const joke = response.data.contents.jokes[0].joke;
        setTitle(joke.title);
        setText(joke.text);
      })
      .catch((error) => {
        alert(error);
      });
  }, []);

  return (
    <div style={{ margin: 50 }}>
      <h1>Joke of the day</h1>
      <h2>{title}</h2>
      <p>{text}</p>
    </div>
  );
}

export default App;