import { motion } from "framer-motion";
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
export default (Contact) => {
  return (
    <div className="border-b border-neutral-900 pb-20">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-10 text-center text-4xl"
      >
        Get In Touch
      </motion.h2>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1 }}
        className="text-center tracking-tighter"
      >
        <div className="flex items-center space-x-3 justify-center">
          <MdEmail className="my-1" />
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=rashwithkulur07@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            rashwithkulur07@gmail.com
          </a>
        </div>
      </motion.div>
    </div>
  );
};

