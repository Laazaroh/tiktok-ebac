import React, { useEffect, useState } from "react";
import "./App.css";
import Video from "./pages/Video";
import db from "./config/firebase";
import { collection, getDocs } from "firebase/firestore/lite";

function App() {
  const [videos, setVideos] = useState([]);

  async function getVideos() {
    const videosCollection = collection(db, "videos");
    const videosSnepshot = await getDocs(videosCollection);
    const videoList = videosSnepshot.docs.map((doc) => doc.data());

    setVideos(videoList);
  }

  useEffect(() => {
    getVideos();
  }, []);

  return (
    <div className="App">
      <div className="app_videos">
        {videos.map((item) => {
          return (
            <Video
              likes={item.likes}
              messenges={item.messenges}
              shares={item.shares}
              name={item.name}
              description={item.description}
              music={item.music}
              url={item.url}
            />
          );
        })}
        
      </div>
    </div>
  );
}

export default App;
