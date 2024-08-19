import React, { useState, useEffect, act } from "react";
import axios from 'axios';
import SearchForm from './Components/SearchForm';
import GifList from "./Components/GifList";

function App() {
  const [gifs, setGifs] = useState([]);
  const [query, setQuery] = useState("candy");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // fetch('https://api.giphy.com/v1/gifs/trending?api_key=CfBMSPDz7FwGLC5c2WdvBnCv47CtdkSl&limit=25&offset=0&rating=g&bundle=messaging_non_clips')
    //   .then(response => response.json())
    //   .then(responseData => setGifs(responseData.data))
    //   .catch(error => console.log('Error fetching and parsing data.', error));
    let activeFetch = true;
    axios.get(`https://api.giphy.com/v1/gifs/search?q=${query}&api_key=CfBMSPDz7FwGLC5c2WdvBnCv47CtdkSl&limit=25&offset=0&rating=g&bundle=messaging_non_clips`)
      .then(response => {
        // handle success
        if (activeFetch) {
          setGifs(response.data.data);
          setLoading(false);
        }
      })
      .catch(error => {
        // handle error
        console.log("Error fetching and parsing data", error);
      })
    return () => { activeFetch = false }
  }, [query]);

  const handleQueryChange = searchText => {
    setQuery(searchText);
  }

  return (
    <div>
      <div className="main-header">
        <div className="inner">
          <h1 className="main-title">GifSearch</h1>
          <SearchForm changeQuery={handleQueryChange} />
        </div>
      </div>
      <div className="main-content">
        {
          (loading)
            ? <p>Loading...</p>
            : <GifList data={gifs} />
        }
      </div>
    </div>
  );
};

export default App;
