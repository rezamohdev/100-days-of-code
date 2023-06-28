import React from "react";
function VideoPlayer() {
    const videoRef = React.useRef(); // assigning the object returned by a hook to a variable

    function handleClick() {
        videoRef.current.play(); // calling the required method on the current property of the object
    }

    return (
        <div>
            <video ref={videoRef} src="./clip.mp4" /> // pointed a ref attribute to
      the element => got direct access to the DOM element
            <button onClick={handleClick}>▶️</button>
        </div>
    );
}
export default VideoPlayer;
