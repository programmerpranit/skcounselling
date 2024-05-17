import Image from "next/image";
import React from "react";

const Footer = (): JSX.Element => {
  return (
    <>
      <div className="mt-5 border-t bg-primary">
        <div className="mx-auto flex max-w-7xl flex-col  py-10 md:flex-row">
          <div className="w-1/3 p-5">
            <Image src={"/images/logo.png"} alt="" width={200} height={100} />
            <p>Shrikant Kulange&apos;s Psychological counselling hub</p>
          </div>
          <div className="w-1/3 p-5">
            <h4>Contact Us</h4>

            <p className="py-3">
              <strong>Address:</strong> Learning Hub, C51,Link Road, Bhushan
              Nagar, Behind Rangoli Hotel, Kedgaon, Ahmednagar, Maharashtra
              414005
            </p>
            <p>+91 98904 20209</p>
            <p>+91 93566 25013</p>
            <p>shrikant@skcounselling.in</p>
          </div>
          <div className="w-1/3 p-5">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d30166.998130973003!2d74.711691!3d19.069243!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdcb0e094ebb217%3A0xcce3312efdb4e283!2sLearning%20Hub%20(coaching%20and%20counseling)!5e0!3m2!1sen!2sus!4v1715981454424!5m2!1sen!2sus"
              width="300"
              height="200"
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
