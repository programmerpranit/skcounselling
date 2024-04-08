import Image from "next/image";
import React from "react";

const AboutPage = (): JSX.Element => {
  return (
    <>
      <div className="m-auto my-10 max-w-6xl p-5 text-center">
        <h1>About Us</h1>
        <br />
        <p>
          We, as the provider of Mental Health Services, with its proficiency in
          providing counselling, psychologists can guide you resolve your issues
          in all spheres of life. Our Mission is to make professional counseling
          accessible, affordable, convenient - so anyone who struggles with
          life’s challenges can get help, anytime, anywhere.
        </p>
        <br />
        <br />
        <div className="flex flex-col items-center justify-center md:flex-row">
          <div className="p-5 md:w-1/2">
            <Image src={"/images/sk11.jpg"} width={400} height={400} alt="" />
          </div>
          <div className="p-5 text-left md:w-1/2 ">
            <h2>Modern Equipment & Tests</h2>
            <br />
            <p>
              Your modern problems require modern treatments, so we are offering
              services, both online and offline.
            </p>
            <p>
              With extensive experience in the field of mental care, and several
              tie-ups with leading corporates, our only focus is to make our
              services more accessible. Our therapies are result-driven, as we
              offer deep-rooted solutions, and treatments through our best
              approach possible.
            </p>
          </div>
        </div>

        <br />
        <br />
        <br />
        <br />

        <h2>We’ve made your mental health our priority</h2>
        <br />
        <br />
        <div className="flex flex-col justify-between md:flex-row">
          <div className="p-5">
            <h3 className="text-8xl text-primary">98%</h3>
            <h4>MADE SIGNIFICANT PROGRESS</h4>
          </div>
          <div className="p-5">
            <h3 className="text-8xl text-primary">94%</h3>
            <h4>PREFER LEARNING HUB OVER FACE‑TO‑FACE THERAPY</h4>
          </div>
          <div className="p-5">
            <h3 className="text-8xl text-primary">75%</h3>
            <h4>REDUCED DEPRESSION SYMPTOMS</h4>
          </div>
        </div>

        <div className="py-10">
          <h2 className="mb-10 ">Our Team</h2>
          <div className="flex flex-col md:flex-row">
            <div className="p-4 md:w-1/4">
              <Image
                src={"/images/square-placeholder.jpg"}
                width={400}
                height={400}
                alt=""
                className="mx-auto mb-5 w-2/3"
              />
              <h4>Shrikant Kulange</h4>
              <p>Industrial and Educational Counselling Psychologist</p>
            </div>
            <div className="p-4 md:w-1/4">
              <Image
                src={"/images/square-placeholder.jpg"}
                width={400}
                height={400}
                alt=""
                className="mx-auto mb-5 w-2/3"
              />
              <h4>Sanika Kulange</h4>
              <p>Clinical Psychologist. Youth and children</p>
            </div>
            <div className="p-4 md:w-1/4">
              <Image
                src={"/images/square-placeholder.jpg"}
                width={400}
                height={400}
                alt=""
                className="mx-auto mb-5 w-2/3"
              />
              <h4>Dr. Yogita Khedkar-Chaudhar</h4>
              <p>Psychologist,Psychotherapist & Life Coach.</p>
            </div>
            <div className="p-4 md:w-1/4">
              <Image
                src={"/images/square-placeholder.jpg"}
                width={400}
                height={400}
                alt=""
                className="mx-auto mb-5 w-2/3"
              />
              <h4>Ms. Veena Kurhade</h4>
              <p>
                Psychoanalysis, Spiritual Intelligence, Psychology of Learning
                and Development.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutPage;
