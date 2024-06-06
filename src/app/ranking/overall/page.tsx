import React from "react";
import type { Metadata } from "next";
import OverallList from "./_component/OverallList";
import OverallSelect from "./_component/OverallSelect";

export const metadata: Metadata = {
  title: "메소야 랭킹 | Mesoya",
  description: "메소야 통합 랭킹 페이지",
};

const page = () => {
  return (
    <div className="p-4 mobile:p-0">
      <div className="flex flex-wrap">
        <div className="w-full">
          <OverallSelect />
          <OverallList />
        </div>
      </div>
    </div>
  );
};

export default page;