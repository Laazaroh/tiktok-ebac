import React, {useState} from 'react'
import './videoSidebar.css'
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ChatIcon from '@mui/icons-material/Chat';
import ShareIcon from '@mui/icons-material/Share';



function VideoSidebar({likes, messenges, shares}) {

    const [liked, setLiked] = useState(false)    

    function handdleLike(){
        setLiked(!liked)
    }


  return (
    <div className='videosidebar'>
        
        <div 
            className='videoSidebar_options'
            onClick={handdleLike}
        >
            {liked? <FavoriteIcon fontSize='large' /> : <FavoriteBorderIcon fontSize='large'/>}

        
            <p>{liked ? likes + 1 : likes}</p>
        </div>

        <div className='videoSidebar_options'>
            <ChatIcon fontSize='large' />
            <p>{messenges}</p>
        </div>

        <div className='videoSidebar_options'>
            <ShareIcon fontSize='large' />
            <p>{shares}</p>
        </div>

    </div>
  )
}

export default VideoSidebar