import { motion } from "framer-motion";
import SectionVariants, { CardHoverVariants } from "../animations/varients.js";

import SectionText from "./SectionText";
import { RiCodeSSlashFill } from "react-icons/ri";
import { FaUserGroup } from "react-icons/fa6";
import { IoShareSocialOutline } from "react-icons/io5";
import CtaButton from "./CtaButton";
import { Link } from "react-router-dom";

const goalsLists = [
  {
    id: 1,
    title: "The Ultimate Flex",
    description:
      "Want to prove you have money to waste? This is your chance to show you can afford nothing and still be proud.",
    icon: <RiCodeSSlashFill className="text-4xl text-white" />,
    backgroundColor: "bg-gradient-to-br from-blue-600 to-purple-600",
  },
  {
    id: 2,
    title: "A Thought Experiment",
    description:
      "Subscription fatigue is real. What if you paid for something that didn’t even try to entertain, educate, or reward you?",
    icon: <FaUserGroup className="text-4xl text-white" />,
    backgroundColor: "bg-gradient-to-br from-green-600 to-teal-600",
  },
  {
    id: 3,
    title: "A Status Symbol Like No Other",
    description:
      "Luxury is about exclusivity. Owning nothing is the rarest form of flex. Only those who get it, get it.",
    icon: <IoShareSocialOutline className="text-4xl text-white " />,
    backgroundColor: "bg-gradient-to-br from-red-600 to-pink-600",
  },
];

const Goals = () => {
  return (
    <motion.section
      variants={SectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      id="our-goals"
      className="px-4 py-10 md:px-10 "
    >
      <div className="container mx-auto">
        <SectionText
          title="Our"
          primaryText="Goal"
          description="To challenge the very idea of consumerism. We exist to test if you can truly afford to spend money on absolutely nothing. No perks, no benefits—just a statement."
        />
        <div className="grid grid-cols-1 gap-6 mt-16 md:grid-cols-3">
          {goalsLists.map((goal) => (
            <motion.div
              variants={CardHoverVariants}
              initial="hidden"
              whileHover="hover"
              whileTap={{ scale: 0.98 }}
              key={goal.id}
              className={`${goal.backgroundColor} flex flex-col p-6 py-8 sm:p-8 rounded-lg shadow-lg`}
            >
              <div className="grid w-16 h-16 mb-4 rounded-lg shadow-lg ring-gray-50/30 ring-1 bg-white/20 place-items-center ">
                {goal.icon}
              </div>
              <h3 className="text-xl font-semibold text-white font-Sync">
                {goal.title}
              </h3>
              <p className="mt-2 text-gray-300">{goal.description}</p>
            </motion.div>
          ))}
        </div>
        <a href="https://www.reddit.com/r/Zeroprime/" target="_blank" rel="noopener noreferrer">
          <CtaButton name="Join Our Community" />
        </a>

      </div>
    </motion.section>
  );
};

export default Goals;
