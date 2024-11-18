import profile from "../assets/profile.png";
import { motion } from "framer-motion";

export default (About) => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h1
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.0 }}
        className="my-20 text-center text-4xl"
      >
        {" "}
        About
        <span className="text-neutral-500"> Me</span>
      </motion.h1>
      <div className="flex flex-wrap">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.8 }}
          className="w-full lg:w-1/2 lg:p-4"
        >
          <div className="flex items-center justify-center lg:p-3">
            <img
              className="rounded-2xl"
              width={250}
              height={250}
              src={profile}
              alt=""
              srcset=""
            />
          </div>
        </motion.div>
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.8 }}
          className="w-full lg:w-1/2"
        >
          <div className="flex justify-center lg:justify-start sm:my-8">
            I am a dedicated and versatile full stack developer with a passion
            for creating efficient and user-friendly web applications. I have
            worked with a variety of technologies, including React, Node.js,
            MySQL and MongoDB. My journey in web development began with a deep
            curiosity for how things work, I continuously strive to learn and
            adapt to new challenges. I thrive in collaborative environments and
            enjoy solving complex problems to deliver high-quality solutions.
            Outside of coding, I enjoy staying active, exploring new
            technologies.
          </div>{" "}
        </motion.div>
      </div>
    </div>
  );
};

