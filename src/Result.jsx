import React, { useEffect, useState } from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import axios from "axios";

const Result = ({ inputValue }) => {
  const [shortLink, SetShortLink] = useState("");
  //console.log(inputValue)
  const getData = async () => {
    try {
      const result = await axios(
        `https://api.shrtco.de/v2/shorten?url=${inputValue}`
      );
      SetShortLink(result.data.result.full_short_link);
    } catch (err) {
    } finally{
    }
  };

  //whenever the input value is changed, and there is length to the input( it exists ), play the function getData
  //getData is an async function that awaits a returned value from the axios api, and then try to set the short link to the result 
  useEffect(() => {
    if (inputValue.length) {
      getData();
    }
  }, [inputValue]);

  return (
    <>
      {shortLink && (
        <div className="results">
          <p>{shortLink}</p>
          <CopyToClipboard text={shortLink}>
            <button>Copy to Clipboard</button>
          </CopyToClipboard>
        </div>
      )}
    </>
  );
};

export default Result;
