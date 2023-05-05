import { FC } from "react";
import GroupBanner from "../components/GroupBanner";
import Image from "next/image";

interface pageProps {}

const page: FC<pageProps> = ({}) => {
  return (<section className="w-full min-h-screen overflow-hidden">
  <GroupBanner/>
  </section>);
};

export default page;
