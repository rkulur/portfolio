import profile1 from "../assets/profile2.png";
import { motion } from "framer-motion";
const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});

export default function Hero() {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="pb-12 text-6xl font-thin tracking-light lg:mt-8 lg:text-7xl lg:mx-8"
            >
              RASHWITH K
            </motion.h1>
            <motion.span
              whileHover={{ scale: 1.1 }}
              onHoverStart={(e) => {}}
              onHoverEnd={(e) => {}}
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl-tracking-tight text-transparent lg:mx-8 lg:text-3xl sm:text-2xl"
            >
              Full Stack Developer
            </motion.span>
            <motion.p
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className="my-2 max-w-xl py-6 font-light tracking-tighter lg:mx-8"
            >
              I am a passionate full stack developer with a knack for crafting
              robust and scalable web applications. I have honed my skills in
              front-end technologies like React, as well as back-end
              technologies like Node.js, MySQL and MongoDB. My goal is to
              leverage my expertise to create innovative solutions that drive
              business growth and deliver exceptional user experiences.
            </motion.p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center">
            <motion.img
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
              className="rounded-3xl"
              width={300}
              height={300}
              src={profile1}
              alt=""
              srcset=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}
