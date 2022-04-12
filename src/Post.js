import { Avatar } from "@mui/material";
import React from "react";
import "./Post.css";

function Post() {
  return (
    <div className="post">
      <div className="post__header"> 
        <Avatar 
          className="post__avatar"
          alt="mauriciogamarra"
          src="/static/images/avatar/1.jpg"
        />
        <h3>Username</h3>
      </div>
      {/* header -> avatar + username */}
      <img 
        className="post__image"
        src="https://reactjs.org/logo-og.png"
      />
      <h4 className="post__text"><strong>Mauritius</strong> WOW day three of live sessions</h4>
    </div>
  )
}

export default Post;