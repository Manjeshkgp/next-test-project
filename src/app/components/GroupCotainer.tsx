"use client"

import { useState } from "react";
import GroupBanner from "../components/GroupBanner";
import Articlepost from "../components/posts/Articlepost";
import Educationpost from "../components/posts/Educationpost";
import Meetuppost from "../components/posts/Meetuppost";
import Jobpost from "../components/posts/Jobpost";
import Filterposts from "../components/Filterposts";
import LocationAndrecommended from "../components/Location&recommended";

const GroupCotainer = () => {
    const [groupJoin,setGroupJoin] = useState<boolean>(false);
    return (
        <section className="w-full min-w-[100vw] min-h-screen flex flex-col items-center relative">
          <GroupBanner groupJoin={groupJoin} setGroupJoin={setGroupJoin} />
          <div className="flex flex-col items-center w-full max-w-[1024px] gap-y-4 mt-4">
            <Filterposts groupJoin={groupJoin} setGroupJoin={setGroupJoin} />
            <div className="flex justify-center lg:justify-between w-full h-full">
              <div className="flex flex-col items-center w-full h-full max-w-[728px] gap-y-4 mt-4">
                <Articlepost />
                <Educationpost />
                <Meetuppost />
                <Jobpost />
              </div>
              <LocationAndrecommended/>
            </div>
          </div>
        </section>
      );
}

export default GroupCotainer