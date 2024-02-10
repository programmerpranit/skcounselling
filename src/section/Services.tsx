import Image from "next/image";
import React from "react";
import Link from "next/link";

const Services = (): JSX.Element => {
  return (
    <>
      <div className="m-auto my-20 max-w-6xl text-center">
        <div className="p-5">
          <h2 className="mb-5">Our Mental Healthcare Offerings</h2>
          <p>
            We are a mental health ecosystem that brings together multiple
            treatment options to create an experience that makes getting help
            easy and seamless. From assessment to treatment, we’re with you
            every step of the way.
          </p>
        </div>
        <ServicesCard
          heading="Counselling"
          desc="our counsellors and psychologists work with individuals, children, adolescents, couples and families to address a variety of mental health issues that may interfere with satisfying interpersonal relationships in the home and the workplace"
          image="/images/square-placeholder.jpg"
          reverse={false}
          link="services/counselling"
        />
        <ServicesCard
          heading="Counselling Supervision"
          desc="Counselors, psychotherapists and psychologists are encouraged to have ongoing supervision as long as they are practicing in the field of mental health."
          image="/images/square-placeholder.jpg"
          reverse={true}
          link="services/counselling-supervision"
        />
        <ServicesCard
          heading="School & Educational Institutions
          "
          desc="Our team have long standing relationships with schools and other educational institutions to support students, parents, faculty and staff."
          image="/images/square-placeholder.jpg"
          reverse={false}
          link="services/counselling"
        />
        <ServicesCard
          heading="Online / Virtual Counselling"
          desc="Online counselling, the digital-age version of counselling services is a more accessible, convenient and discrete method of receiving therapy. In order to attend online counselling sessions, clients and the therapist need access to fast internet connections and webcams."
          image="/images/square-placeholder.jpg"
          reverse={true}
          link="services/counselling"
        />
        <ServicesCard
          heading="Psychological Testing and Analysis"
          desc="We do various types of Psychometric testing for an individuals, families, school students, teachers, industrial workers and supervisors.Separate counselling is also provided to all sectors in educational and industrial field. "
          image="/images/square-placeholder.jpg"
          reverse={false}
          link="services/counselling"
        />
        <ServicesCard
          heading="Workshops & Employee Assistance Program"
          desc="Come join us for one of our talks, workshops
          and be life long learners with us. Our team have been affiliated with multi-national corporations in Singapore and in the region."
          image="/images/square-placeholder.jpg"
          reverse={true}
          link="services/counselling"
        />
      </div>
    </>
  );
};

export default Services;

interface ServicesCardProps {
  image: string;
  heading: string;
  link: string;
  desc: string;
  reverse: boolean;
}

const ServicesCard = ({
  image,
  heading,
  link,
  desc,
  reverse,
}: ServicesCardProps): JSX.Element => {
  return (
    <>
      <div
        className={`my-10 flex justify-center ${reverse ? "md:flex-row-reverse" : "md:flex-row"} flex-col`}
      >
        <div className="p-5 md:w-2/5 md:p-10">
          <Image alt="" src={image} width={400} height={400} />
        </div>
        <div
          className={`p-5 md:w-2/5 md:p-10 ${reverse ? "md:text-right" : "md:text-left"}`}
        >
          <h3 className="pb-4">{heading}</h3>

          <p>{desc}</p>
          <br />
          <Link href={link}>
            <button>Read More</button>
          </Link>
        </div>
      </div>
    </>
  );
};
