import Image from "next/image";
import React from "react";

const AboutFounders = (): JSX.Element => {
  return (
    <>
      <section className="m-auto my-20 flex max-w-7xl flex-col   md:flex-row">
        <div className="p-5 md:w-1/2">
          <Image
            alt=""
            className="rounded-lg"
            src={"/images/sk-founders.jpg"}
            width={600}
            height={600}
          />
        </div>
        <div className="p-5 md:w-1/2">
          <h1>A Few Words About Us</h1>
          <br />
          <p>
            <strong>we are the best counselors over the Maharashtra</strong>
          </p>
          <br />
          <p>
            An experience of more than 14 years in delivering in counselling
            sector overseas as well as on a domestic level, the founder has
            developed a new method of imparting knowledge to young minds with a
            simple technique that has reaped success in the sector.
          </p>
          <br />
          <button>Read More</button>
        </div>
      </section>
    </>
  );
};

export default AboutFounders;
