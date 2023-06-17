import React from "react";
import "./VideoFooter.css";
import MusicNoteIcon from '@mui/icons-material/MusicNote';


function VideoFooter() {
  return (
    <div className="videoFooter">
      <div className="videoFooter_text">
        <h3>@laazaroh </h3>
        <p>descrição do video</p>

        <div className="videoMusicFooter_text">
            <p>titulo da musica</p>
        </div>
        <div className="videoMusicFooter_music">
            <MusicNoteIcon className="videoFooter_icon" />
           
        </div>
      </div>


      <img className="videoFooter_record"
        alt="imagem de um vinil girando"
        src="https://poqlymuephttfsljdabn.supabase.co/storage/v1/object/public/jornadadev/vinil.png?t=2023-05-22T19%3A39%3A28.772Z"
      
      
      
      
      />


    </div>
  );
}

export default VideoFooter;
