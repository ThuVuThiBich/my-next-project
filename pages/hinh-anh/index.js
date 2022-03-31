import React from "react";
import CompImg from "../../components/common/CompImg";
import Title from "../../components/common/Title";
import { MainLayout } from "../../components/layout/MainLayout";

export default function Images() {
  return (
    <MainLayout>
      {" "}
      <Title title={"HÌNH ẢNH CÔNG TY"} />
      <section className="mt-10 mb-5 text-white md:mt-16">
        <div className="grid grid-cols-1 gap-0 md:gap-2 md:grid-cols-2">
          <CompImg />
          <CompImg />
        </div>
      </section>
    </MainLayout>
  );
}
