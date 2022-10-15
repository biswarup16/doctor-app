import React from "react";
import Complain from "./HomePage/Complain";
import PatientDetail from "./HomePage/PatientDetail";

function Home() {
  return (
    <>
      <div className="container mx-auto max-w-screen-lg h-[728px] py-10">
        <h1 className="my-10 text-4xl font-bold tracking-widest text-blue-700 ">
          Patient Prescription
        </h1>
        <PatientDetail />
        <Complain />
      </div>
    </>
  );
}

export default Home;
