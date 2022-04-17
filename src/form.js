import React, { useState } from "react";
import axios from "axios";

function DemoForm() {
  const [track, setTrack] = useState(null);
  const [coverArt, setCoverArt] = useState(null);
  const [title, setTitle] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    axios
      .post("http://localhost:5000/songs", { track, coverArt, title })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function onImageChange(event) {
    if (event.target.files && event.target.files[0]) {
      setCoverArt(event.target.files[0]);
    }
  }

  function onTrackChange(event) {
    if (event.target.files && event.target.files[0]) {
      setTrack(event.target.files[0]);
    }
  }

  return (
    <div>
      <div>
        <h5 className="track">Track Upload</h5>
        <div className="dotted-container">
          <input
            type="file"
            name="myTrack"
            onChange={onTrackChange}
            id="picture"
          />
        </div>
      </div>
      <div>
        <p className="first-label">
          <span className="upload-info">&#8505;</span>Cover Art
        </p>
        <div className="dotted-container dc2">
          <input
            type="file"
            name="myImage"
            onChange={onImageChange}
            id="picture"
          />
        </div>
      </div>
      <div>
        <p className="label">
          <span className="upload-info">&#8505;</span>Track Title
        </p>
        <input
          type="text"
          className="upload-input"
          placeholder="Song Name"
          onChange={(event) => setTitle(event.target.value)}
        />
      </div>
      <div>
        <button
          type="button"
          name="button"
          class="btn-primary upload-btn-new page2-btn-new"
          onClick={handleSubmit}
        >
          Confirm
        </button>
      </div>
    </div>
  );
}

export default DemoForm;
