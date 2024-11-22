import React, { useState, useEffect } from "react";
import AvatarDisplay from "./Components/AvatarDisplay";
import randomAvatarOptions from "./Components/RandomAvatarOptions";
import useWindowSize from "./Components/WindowsSizeHook";

const App = () => {
  const size = useWindowSize();
  const [avatarProps, setAvatarProps] = useState(randomAvatarOptions());
  const [currentAvatar, setCurrentAvatar] = useState("Mini");

  useEffect(() => {
    const screenSize = size.width;
    if (screenSize > 1000) {
      setCurrentAvatar("Mini");
    } else if (screenSize >= 700) {
      setCurrentAvatar("Midi");
    } else {
      setCurrentAvatar("Sisi");
    }
    setAvatarProps(randomAvatarOptions());
  }, [size]);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Current Avatar: {currentAvatar}</h1>
      <h2>
        Screen Size: {size.width}px x {size.height}px
      </h2>
      <AvatarDisplay avatarProps={avatarProps} />
    </div>
  );
};

export default App;
