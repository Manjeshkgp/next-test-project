import { FC } from "react";
import GroupBanner from "../components/GroupBanner";
import Image from "next/image";
import Articlepost from "../components/posts/Articlepost";
import Educationpost from "../components/posts/Educationpost";

interface pageProps {}

const page: FC<pageProps> = ({}) => {
  return (<section className="w-full min-h-screen h-max overflow-x-hidden">
  <GroupBanner/>
  <Articlepost/>
  <Educationpost/>
  </section>);
};

export default page;
