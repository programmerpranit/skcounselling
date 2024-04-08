import React from "react";

const OurServices = (): JSX.Element => {
  return (
    <>
      <div className="bg-primary p-5 md:p-10">
        <h2 className=" text-center text-white">Our Services</h2>
        <div className="mx-auto flex max-w-7xl flex-wrap justify-center pt-10 ">
          <Service
            title="Counselling"
            desc="our counsellors and psychologists work with individuals, children, adolescents, couples and families to address a variety of mental health issues "
          />
          <Service
            title="Counselling Supervision"
            desc="Counselors, psychotherapists and psychologists are encouraged to have ongoing supervision as long as they are practicing in the field of mental health."
          />
          <Service
            title="School & Educational Institutions"
            desc="Our team have long standing relationships with schools and other educational institutions to support students, parents, faculty and staff."
          />
          <Service
            title="Online / Virtual Counselling"
            desc="Online counselling, the digital-age version of counselling services is a more accessible, convenient and discrete method of receiving therapy."
          />
          <Service
            title="Psychological Testing and Analysis"
            desc="We do various types of Psychometric testing for an individuals, families, school students, teachers, industrial workers and supervisors."
          />
          <Service
            title="Workshops & Employee Assistance Program"
            desc="Come join us for one of our talks, workshops and be life long learners with us."
          />
        </div>
      </div>
    </>
  );
};

export default OurServices;

const Service = ({
  title,
  desc,
}: {
  title: string;
  desc: string;
}): JSX.Element => {
  return (
    <div className="h-80 p-5 md:w-1/3">
      <div className="rounded-xl bg-white bg-opacity-60 p-10  ">
        <h4 className=" overflow-ellipsis pb-5 text-2xl leading-tight">
          {title}
        </h4>
        <p>{desc}</p>
      </div>
    </div>
  );
};
