import React from "react";
import Bars from "./Bars";
import Pie from "./Pie";
const Charts = () => {
  return (
    <section className="mt-6 md:flex  items-center justify-center gap-6">
        <Bars></Bars>
        <Pie></Pie>
    </section>
  );
};

export default Charts;
