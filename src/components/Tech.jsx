import { RiReactjsLine } from "react-icons/ri";
import { SiMongodb } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { TbBrandMysql } from "react-icons/tb";
import { RiTailwindCssFill } from "react-icons/ri";
import { BiLogoJavascript } from "react-icons/bi";
import { BiLogoTypescript } from "react-icons/bi";
import { motion } from "framer-motion";

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

export default () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-24 text-center text-2xl"
      >
        Technologies
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1.5 }}
          className="flex flex-wrap items-center justify-center gap-4 py-10"
        >
          <motion.div
            whileHover={{ scale: 1.1 }}
            onHoverStart={(e) => {}}
            onHoverEnd={(e) => {}}
            variants={iconVariants(6)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4"
            title="HTML"
          >
            <FaHtml5 className="text-7xl text-orange-600" />
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.1 }}
            onHoverStart={(e) => {}}
            onHoverEnd={(e) => {}}
            variants={iconVariants(6)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4"
            title="CSS"
          >
            <FaCss3Alt className="text-7xl text-blue-400" />
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.1 }}
            onHoverStart={(e) => {}}
            onHoverEnd={(e) => {}}
            variants={iconVariants(6)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4"
            title="JavaScript"
          >
            <BiLogoJavascript className="text-7xl text-yellow-400" />
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.1 }}
            onHoverStart={(e) => {}}
            onHoverEnd={(e) => {}}
            variants={iconVariants(4)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4"
            title="Tailwind CSS"
          >
            <RiTailwindCssFill className="text-7xl text-blue-400" />
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.1 }}
            onHoverStart={(e) => {}}
            onHoverEnd={(e) => {}}
            variants={iconVariants(6)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4"
            title="TypeScript"
          >
            <BiLogoTypescript className="text-7xl text-blue-600" />
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.1 }}
            onHoverStart={(e) => {}}
            onHoverEnd={(e) => {}}
            variants={iconVariants(4)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4"
            title="React"
          >
            <RiReactjsLine className="text-7xl text-cyan-400" />
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.1 }}
            onHoverStart={(e) => {}}
            onHoverEnd={(e) => {}}
            variants={iconVariants(3)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4"
            title="Nodejs"
          >
            <FaNodeJs className="text-7xl text-green-500" />
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.1 }}
            onHoverStart={(e) => {}}
            onHoverEnd={(e) => {}}
            variants={iconVariants(6)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4"
            title="Express"
          >
            <SiExpress className="text-7xl text-green-300" />
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.1 }}
            onHoverStart={(e) => {}}
            onHoverEnd={(e) => {}}
            variants={iconVariants(2)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4"
            title="MongoDB"
          >
            <SiMongodb className="text-7xl text-green-500" />
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.1 }}
            onHoverStart={(e) => {}}
            onHoverEnd={(e) => {}}
            variants={iconVariants(5)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4"
            title="MySQL"
          >
            <TbBrandMysql className="text-7xl text-blue-400" />
          </motion.div>
        </motion.div>
      </motion.h2>
    </div>
  );
};
