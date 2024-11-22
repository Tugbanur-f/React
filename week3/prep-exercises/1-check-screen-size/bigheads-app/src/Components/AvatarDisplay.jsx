import React from "react";
import { BigHead } from "@bigheads/core";

const AvatarDisplay = ({ avatarProps }) => {
  return (
    <div>
      <BigHead {...avatarProps} />
    </div>
  );
};

export default AvatarDisplay;
