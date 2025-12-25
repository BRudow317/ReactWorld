import { Link } from 'react-router-dom';
import * as React from 'react';

const AccountPage = () => {
  return (
    <div>
      <h1>Account Page</h1>
      <iframe
        title="Facebook video"
        src="https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F837399041969401%2F&show_text=false&width=267&t=0"
        width="267"
        height="476"
        style={{ border: "none", overflow: "hidden" }}
        scrolling="no"
        frameBorder="0"
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
        allowFullScreen
      />
    </div>
  );
};

export default AccountPage;
