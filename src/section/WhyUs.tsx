import Image from "next/image";
import React from "react";

const WhyUs = (): JSX.Element => {
  return (
    <>
      <section className="bg-primary p-5 py-10">
        <div className="m-auto my-10 flex max-w-7xl flex-col items-center ">
          <h2 className="w-full text-center text-white">Why SK Counselling?</h2>
          <br />
          <p className="text-center text-white">
            Your mental health is more important than anything else
          </p>
          <div className="mt-10 flex flex-col justify-center md:flex-row">
            <div className="flex flex-col items-center p-2 text-white md:w-1/3">
              <Image
                alt=""
                src={"/images/expert.png"}
                width={100}
                height={100}
              />

              <h4 className="py-3">Certified Experts</h4>

              <p className="text-center">
                We have certified experts who can guide you.
              </p>
            </div>
            <div className="flex flex-col items-center p-2 text-white md:w-1/3">
              <Image
                alt=""
                src={"/images/heart.png"}
                width={100}
                height={100}
              />

              <h4 className="py-3">Quality Services</h4>

              <p className="text-center">
                We are known for quality service in town.
              </p>
            </div>
            <div className="flex flex-col items-center p-2 text-white md:w-1/3">
              <Image
                alt=""
                src={"/images/price.png"}
                width={100}
                height={100}
              />

              <h4 className="py-3">Affordable Pricing</h4>

              <p className="text-center">
                We have very affordable pricing that all can get prompt and
                quality service.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WhyUs;
