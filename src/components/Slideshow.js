import React from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

const images = [
  {
    original:
      "https://pbs.twimg.com/media/FcyM4rWakAIN0KR?format=jpg&name=4096x4096",
  },
  {
    original:
      "https://pbs.twimg.com/media/FcyM4rSacAMnJbS?format=jpg&name=4096x4096",
  },
  {
    original:
      "https://pbs.twimg.com/media/FcyM4rSaAAEMTJc?format=jpg&name=4096x4096",
  },
];

class MyGallery extends React.Component {
  render() {
    return (
      <div class="image-gallery-wrapper">
        <ImageGallery
          items={images}
          showThumbnails={false}
          showPlayButton={false}
          autoPlay={true}
          showFullscreenButton={false}
          showBullets={true}
        />
      </div>
    );
  }
}

export default MyGallery;
