"use client";
import Breadcrumb from "@/components/shared/Breadcrumbs/Breadcrumb";
import ChartOne from "@/components/complex/Charts/ChartOne";
import ChartTwo from "@/components/complex/Charts/ChartTwo";
import ChartThree from "@/components/complex/Charts/ChartThree";
import React from "react";

const Chart: React.FC = () => {
  return (
    <>
      <Breadcrumb pageName="Chart" />
      <div className="grid grid-cols-12 gap-4 md:gap-6 2xl:gap-7.5">
        <ChartOne />
        <ChartTwo />
        <ChartThree />
      </div>
    </>
  );
};

export default Chart;
