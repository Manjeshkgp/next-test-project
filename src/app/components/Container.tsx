"use client";

import { FC, useState } from "react";
import Header from "./Header";
import Authorize from "./Authorize";
import GroupCotainer from "./GroupCotainer";

interface ContainerProps {}

const Container: FC<ContainerProps> = () => {
  const [authPopup, setAuthPopup] = useState<boolean>(false);
  const [isAuthorized,setIsAuthorized] = useState<boolean>(false);
  return (
    <div className="container">
      <Header isAuthorized={isAuthorized} setAuthPopup={setAuthPopup} />
      <div className="pt-12"></div>
      <GroupCotainer isAuthorized={isAuthorized} setAuthPopup={setAuthPopup}/>
      {authPopup ? <Authorize setIsAuthorized={setIsAuthorized} setAuthPopup={setAuthPopup} /> : null}
    </div>
  );
};

export default Container;
