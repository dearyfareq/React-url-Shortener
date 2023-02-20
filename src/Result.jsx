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
