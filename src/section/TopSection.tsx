import Image from "next/image";
import React from "react";

const TopSection = (): JSX.Element => {
  return (
    <>
      <section className="m-auto my-20 flex max-w-7xl flex-col items-center  md:flex-row">
        <div className="p-5 md:w-1/2">
          <h1>Your Mental Health is more important than anything else</h1>
          <br />
          <p>{" Shrikant Kulange's Psychological counselling hub "}</p>
          <p>Counselling . Education . Training </p>
          <p>Cheers to mental health</p>
          <p>One of the finest counselling in Town</p>
        </div>
        <div className="p-5 md:w-1/2">
          <Image alt="" src={"/favicon.png"} width={400} height={400} />
        </div>
      </section>
    </>
  );
};

export default TopSection;
