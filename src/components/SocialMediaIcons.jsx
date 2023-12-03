import React from "react";
import "../styles/socialMediaIcons.css"; // Import your styling for the social media icons
import facebook from "../images/social media icons/facebook.svg";
import instagram from "../images/social media icons/instagram.svg";
import youtube from "../images/social media icons/youtube.svg";
import twitter from "../images/social media icons/twitter.svg";
import skype from "../images/social media icons/skype.svg";

const SocialMediaIcons = () => {
  return (
    <div className="social-media-icons">
      <img src={facebook} alt="Facebook" />
      <img src={instagram} alt="instagram" />
      <img src={youtube} alt="youtube" />
      <img src={twitter} alt="twitter" />
      <img src={skype} alt="skype" />
    </div>
  );
};

export default SocialMediaIcons;
