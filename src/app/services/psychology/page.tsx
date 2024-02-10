import React from "react";
import Image from "next/image";

const CounsellingPage = (): JSX.Element => {
  return (
    <>
      <div className="mx-auto my-10 max-w-6xl p-5">
        <h1 className="text-center">Psychological Services</h1>
        <div className="flex flex-col justify-center py-5 md:flex-row">
          <div className="p-5 md:w-1/2">
            <Image
              alt=""
              src={"/images/square-placeholder.jpg"}
              width={400}
              height={400}
            />
          </div>
          <div className="p-5 md:w-1/2">
            <p>
              Counseling psychology is a general practice and health service
              provider specialty in professional psychology. It focuses on how
              people function both personally and in their relationships at all
              ages. Counseling psychology addresses the emotional, social, work,
              school and physical health concerns people may have at different
              stages in their lives, focusing on typical life stresses and more
              severe issues with which people may struggle as individuals and as
              a part of families, groups and organizations.
            </p>
            <br />
            <p>
              Counseling psychologists help people with physical, emotional and
              mental health issues improve their sense of well‐being, alleviate
              feelings of distress and resolve crises. They also provide
              assessment, diagnosis, and treatment of more severe psychological
              symptoms.
            </p>
          </div>
        </div>

        <h2 className="mt-20 pb-5 text-center">
          Counselling - Problems Addressed
        </h2>
        <div className=" flex flex-col justify-center py-5 md:flex-row ">
          <div className="w-1/2">
            <Image
              alt=""
              src={"/images/square-placeholder.jpg"}
              width={400}
              height={400}
            />
          </div>

          <div className="md:w-1/2">
            <ul className="list-disc pl-8">
              <li>School and career/work adjustment concerns.</li>
              <li>
                Making decisions about career and work, and dealing with
                school‐work‐retirement transitions.
              </li>
              <li>
                Relationship difficulties‐including marital and family
                difficulties
              </li>
              <li>Learning and skill deficits.</li>
              <li>Stress management and coping with negative life events.</li>
              <li>Organizational problems.</li>
              <li>
                Dealing with and adjusting to physical disabilities, disease or
                injury.
              </li>
              <li>Personal/social adjustment.</li>
              <li>Mental disorders.</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default CounsellingPage;
