import React, { useEffect, useState } from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import axios from "axios";

const Result = ({ inputValue }) => {
  const [shortLink, SetShortLink] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  //console.log(inputValue)
  const getData = async () => {
    try {
      const result = await axios(
        `https://api.shrtco.de/v2/shorten?url=${inputValue}`
      );
      SetShortLink(result.data.result.full_short_link);
    } catch (err) {
      setError(err)
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if(inputValue.length) {
      getData();
    }
  }, [inputValue]);

  if(loading) {
    return <p className="noData">Loading...</p>
  }
  if(error) {
    return <p className="noData">Something went wrong :(</p>
  }
  return (
    <div className="results">
      <p>{shortLink}</p>
      <CopyToClipboard text={shortLink}>
        <button>Copy to Clipboard</button>
      </CopyToClipboard>
    </div>
  );
};

export default Result;
