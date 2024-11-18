import logo from "../assets/asset/dp.png";
import { FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <div>
      <nav className="mb-20 flex justify-between items-center py-6 px-6">
        <div className="flex flex-shrink-0 items-center">
          <motion.img
            animate={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1 }}
            className="rounded-full"
            src={logo}
            width={80}
            height={80}
            alt="Logo"
            srcset=""
          />
        </div>
        <motion.div
          animate={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1 }}
          className="m-6 items-center justify-center flex gap-8 text-2xl"
        >
          <motion.div
            whileHover={{ scale: 1.5, transition: { duration: 0.4 } }}
            onHoverStart={(e) => {}}
            onHoverEnd={(e) => {}}
          >
            <button>
              <a href="https://www.linkedin.com/in/rkulur/" target="_blank">
                <FaLinkedin />
              </a>
            </button>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.5, transition: { duration: 0.4 } }}
            onHoverStart={(e) => {}}
            onHoverEnd={(e) => {}}
          >
            <button>
              <a href="https://leetcode.com/rkulur07" target="_blank">
                <SiLeetcode />
              </a>
            </button>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.5, transition: { duration: 0.4 } }}
            onHoverStart={(e) => {}}
            onHoverEnd={(e) => {}}
          >
            <button>
              <a href="https://github.com/rkulur" target="_blank">
                <FaGithub />
              </a>
            </button>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.5, transition: { duration: 0.4 } }}
          >
            <button>
              <a href="https://www.instagram.com/rashwithkulur" target="_blank">
                <FaInstagram />
              </a>
            </button>
          </motion.div>
        </motion.div>
      </nav>
    </div>
  );
}
