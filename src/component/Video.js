import React, { useRef, useState, useEffect } from "react";
import "./Video.css";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import CommentIcon from '@mui/icons-material/Comment';
import ShareIcon from '@mui/icons-material/Share';
import { Avatar } from "@mui/material";
import Button from "@mui/material/Button";

const Video = ({ videoSource }) => {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef(null);
  const [like, setLike] = useState(97);
  const [dislike, setDislike] = useState(12);
  const [liked, setLiked] = useState(false);
  const [disliked, setDisliked] = useState(false);
  const [subs, setSubs] = useState(false);
  const shortsContainerRef = useRef(null);

  const handleVideo = () => {
    setPlaying((play) => !play);
    if (playing) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
  };

  const handleLikeInc = () => {
    if (!liked) {
      setLike((prevLike) => prevLike + 1);
      setLiked(true);
    }
  };

  const handleDislikeInc = () => {
    if (!disliked) {
      setDislike((prevDisLike) => prevDisLike + 1);
      setDisliked(true);
    }
  };

  const handleSubscribe = () => {
    setSubs((sub) => !sub);
  };

  const handleShortsClick = (e) => {
    e.stopPropagation();
    setPlaying((play) => !play);
    if (playing) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
  };

  const handleScrollToNextShort = () => {
    if (shortsContainerRef.current) {
      shortsContainerRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setPlaying(true);
          videoRef.current.play();
        } else {
          setPlaying(false);
          videoRef.current.pause();
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, options);
    observer.observe(videoRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    
    <>
    
    <div className="video">
       
      <video
        onClick={handleVideo}
        ref={videoRef}
        controls
        loop
        muted
        width="100%"
        height="auto"
      >
        <source src={videoSource} type="video/mp4" />
      </video>

      <div className="shortsContainer" ref={shortsContainerRef} onClick={handleShortsClick}>
        <div className="shortsVideoTop">
          <div className="shortsVideoTopIcon">
            <ArrowBackIcon />
          </div>
          <div className="searchBar">
            <input type="text" placeholder="Search" />
          </div>
          <div className="shortsVideoTopIcon">
            <MoreVertIcon />
          </div>
        </div>
        <div className="shortsVideoSideIcons">
          <div className="shortsVideoSideIcon">
            <ThumbUpIcon onClick={handleLikeInc} />
            <p>{like}</p>
          </div>
          <div className="shortsVideoSideIcon">
            <ThumbDownIcon onClick={handleDislikeInc} />
            <p>{dislike}</p>
          </div>
          <div className="shortsVideoSideIcon">
            <CommentIcon />
            <p>600</p>
          </div>
          <div className="shortsVideoSideIcon">
            <ShareIcon onClick={handleScrollToNextShort} />
            <p>40</p>
          </div>
        </div>
      </div>

      <div className="reelBackground">
        <div className="shortDetails">
          <Avatar />
          <div className="channelInfo">
            <h3>youtube Shorts</h3>
            <Button
              variant="contained"
              style={{
                background: subs ? "red" : "hsla(0,0%,69.4%,.609)",
              }}
              onClick={handleSubscribe}
            >
              {subs ? "SUBSCRIBED" : "SUBSCRIBE"}
            </Button>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Video;
