import React from "react";
import Navv from "@/components/helpers/Navv";
import CreatePost from "@/components/helpers/CreatePost";
import Feed from "@/components/helpers/Feed";
import UserProfile from "@/components/helpers/UserProfile";

function Home() {
  return (
    <div className="overflow-hidden w-full font-mono h-screen">
      <Navv />
      <div className="w-full h-screen flex " id="main">
        <CreatePost />
        <Feed />
        <UserProfile />
      </div>
    </div>
  );
}

export default Home;
