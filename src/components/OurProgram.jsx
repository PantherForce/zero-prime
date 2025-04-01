import { motion } from "framer-motion";
import SectionVariants, { CardHoverVariants } from "../animations/varients.js";

import SectionText from "../components/SectionText";

// icons
import { BiGroup } from "react-icons/bi";
import { LuSofa, LuTicket } from "react-icons/lu";
import { AiOutlineLike } from "react-icons/ai";
const ourProgramData = [
  {
    id: 1,
    title: "Attend and learn any topic",
    description: "Expand your knowledge with diverse coding subjects",
    icon: <BiGroup size={30} />,
  },
  {
    id: 2,
    title: "Meet like-minded individuals",
    description: "Connect with peers from the comfort of your sofa.",
    icon: <LuSofa size={30} />,
  },
  {
    id: 3,
    title: "All events are free to join",
    description: "No cost barriers to your learning journey",
    icon: <LuTicket size={30} />,
  },
  {
    id: 4,
    title: "Use your VOTE as super power",
    description: "Appreciate the best event creators with vote",
    icon: <AiOutlineLike size={30} />,
  },
];

const OurProgram = () => {
  return (
    <section
      id="our-program "
      className="px-4 py-20 m-0 md:px-10 bg-black"
    >
      <motion.div
        variants={SectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="container mx-auto "
      >


        {/* cta  */}
        <div className="w-full py-5  text-center">
          <h2 className="mb-4 text-2xl font-bold sm:text-3xl md:text-4xl text-white">
            Dare to Subscribe?
          </h2>
          <p className="w-full text-sm sm:text-base sm:w-[80%] mx-auto text-white">
            No perks. No benefits. Just the ultimate test of your spending power. Are you in?
          </p>
          <motion.button
            whileHover={{ scale: 1.05, backgroundColor: "#c85d00" }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-2 mt-6 text-base font-medium text-white  sm:px-8 bg-primaryColor"
          >
            Subscribe to Nothing
          </motion.button>
        </div>
      </motion.div>
    </section>
  );
};

export default OurProgram;
