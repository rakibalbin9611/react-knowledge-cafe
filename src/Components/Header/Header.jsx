import React from "react";
import profile from "../../assets/images/profile.png";

const Header = () => {
  return (
    <div className="flex container mx-auto justify-between items-center p-4 border-b-2">
      <h1 className="text-4xl font-bold">Knowledge Cafe</h1>
      <img className="cover" src={profile} alt="" srcset="" />
    </div>
  );
};

export default Header;
