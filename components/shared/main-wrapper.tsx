import { PropsWithChildren } from "react";

const MainWrapper = ({ children }: PropsWithChildren) => {
  return <div className={"mx-auto max-w-4xl px-2.5"}>{children}</div>;
};

export default MainWrapper;
