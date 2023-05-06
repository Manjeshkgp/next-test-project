"use client";

import { FC, useState } from "react";
import Header from "./Header";
import Authorize from "./Authorize";

interface ContainerProps {
  children: React.ReactNode;
}

const Container: FC<ContainerProps> = ({ children }) => {
  const [authPopup, setAuthPopup] = useState<boolean>(false);
  const [isAuthorized,setIsAuthorized] = useState<boolean>(false);
  return (
    <div className="container">
      <Header isAuthorized={isAuthorized} setAuthPopup={setAuthPopup} />
      <div className="pt-12"></div>
      {children}
      {authPopup ? <Authorize setIsAuthorized={setIsAuthorized} setAuthPopup={setAuthPopup} /> : null}
    </div>
  );
};

export default Container;
