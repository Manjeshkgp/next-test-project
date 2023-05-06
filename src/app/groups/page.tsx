import { FC } from "react";
import GroupBanner from "../components/GroupBanner";
import Articlepost from "../components/posts/Articlepost";
import Educationpost from "../components/posts/Educationpost";
import Meetuppost from "../components/posts/Meetuppost";
import Jobpost from "../components/posts/Jobpost";

interface pageProps {}

const page: FC<pageProps> = ({}) => {
  return (<section className="w-full min-w-[100vw] min-h-screen h-max overflow-x-hidden flex flex-col items-center">
  <GroupBanner/>
  <div className="flex flex-col items-center w-full h-full gap-y-4 mt-4">
  <Articlepost/>
  <Educationpost/>
  <Meetuppost/>
  <Jobpost/>
  </div>
  </section>);
};

export default page;
