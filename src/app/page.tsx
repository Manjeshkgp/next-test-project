import Link from "next/link";
import { FC } from "react";

interface pageProps {}

const page: FC<pageProps> = ({}) => {
  return (
    <div className="flex justify-center items-center h-[calc(100vh-4rem)] w-full">
      <Link href={"/groups"} className="text-3xl underline">
        Check Groups Component
      </Link>
    </div>
  );
};

export default page;
