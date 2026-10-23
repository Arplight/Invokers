"use client";

import { BounceLoader } from "react-spinners";

const Loading = () => {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <BounceLoader color="#14b8a6" size={50} aria-label="Loading" />
    </div>
  );
};

export default Loading;
