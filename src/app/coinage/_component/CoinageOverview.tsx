"use client";

import React from "react";
import { useCoinageQuery } from "@/hooks/queries/useCoinageQuery";
import TableComponent from "./TableComponent";
import ChartComponent from "./ChartComponent";
import Loading from "./Loading";
import dayjs from "dayjs";

const CoinageOverview = () => {
  const day = dayjs().format("YYYY년 MM월 DD일");
  const { data, isLoading, isError } = useCoinageQuery();

  if (isLoading) return <Loading />;
  if (isError) return <div>에러</div>;

  return (
    <div className="mx-auto max-w-1200">
      <div className="mb-3 mt-1 text-center text-lg font-bold">
        메이플 주화 {day} 시세
      </div>
      <ChartComponent data={data} />
      <TableComponent data={data} />
    </div>
  );
};

export default CoinageOverview;
