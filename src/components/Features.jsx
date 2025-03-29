import { motion } from "framer-motion";
import SectionVariants, {
  CardHoverVariantsTwo,
} from "../animations/varients.js";

import SectionText from "../components/SectionText";

// icons
import { BsCurrencyDollar } from "react-icons/bs";
import { GoBook } from "react-icons/go";
import { LuZap } from "react-icons/lu";
import { FaNetworkWired } from "react-icons/fa";
import { LuAward } from "react-icons/lu";
import { RiCodeSSlashFill } from "react-icons/ri";
import CtaButton from "./CtaButton";

const benefitsList = [
  {
    id: 1,
    title: "The Most Exclusive Club",
    description:
      "No perks, no benefits—just an exclusive membership proving you're on another level.",
    icon: <BsCurrencyDollar className="text-4xl text-yellow-500" />,
    backgroundColor: "bg-gradient-to-r from-yellow-400/20 to-yellow-600/20",
  },
  {
    id: 2,
    title: "The Anti-Subscription Movement",
    description:
      "Every service demands your money in exchange for content. We offer you nothing. True rebellion.",
    icon: <LuZap className="text-4xl text-green-500" />,
    backgroundColor: "bg-gradient-to-r from-green-400/20 to-green-600/20",
  },
  {
    id: 3,
    title: "A Philosophical Challenge",
    description: "Would you dare pay for something with no return? Is ownership itself just a construct?",
    icon: <GoBook className="text-4xl text-blue-500" />,
    backgroundColor: "bg-gradient-to-r from-blue-400/20 to-blue-600/20",
  },
  {
    id: 4,
    title: "Be a Pioneer",
    description:
      "People laughed at crypto and NFTs—until they didn’t. Join the first wave of nothing subscribers.",
    icon: <FaNetworkWired className="text-4xl text-purple-500" />,
    backgroundColor: "bg-gradient-to-r from-purple-400/20 to-purple-600/20",
  },
  {
    id: 5,
    title: " Get Noticed",
    description:
      "In a world of status-driven spending, only the boldest can flex nothing.",
    icon: <LuAward className="text-4xl text-red-500" />,
    backgroundColor: "bg-gradient-to-r from-red-400/20 to-red-600/20",
  },
  {
    id: 6,
    title: "Escape the Rat Race",
    description: "Prove you're beyond materialism—true wealth is spending without needing a reason.",
    icon: <RiCodeSSlashFill className="text-4xl text-teal-500" />,
    backgroundColor: "bg-gradient-to-r from-teal-400/20 to-teal-600/20",
  },
];

const Features = () => {
  return (
    <section id="features" className="px-4 py-20">
      <motion.div
        variants={SectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="container mx-auto"
      >
        <SectionText
          title=" Why Take This "
          primaryText="Product"
          description="If you truly have disposable income, why not put it to the ultimate test?"
        />
        <div className="grid grid-cols-1 gap-5 mt-10 lg:px-16 md:grid-cols-3">
          {benefitsList?.map((benefit) => (
            <motion.div
              variants={CardHoverVariantsTwo}
              initial="hidden"
              whileHover="hover"
              whileTap={{ scale: 0.95 }}
              key={benefit.id}
              className={` p-6 sm:p-10 rounded-xl gap-3 border-2 border-gray-300  `}
            >
              <div
                className={`${benefit.backgroundColor} h-14  justify-center aspect-square rounded flex items-center mb-4`}
              >
                {benefit.icon}
              </div>
              <div>
                <h3 className="mb-3 text-lg font-bold text-black font-Sync">
                  {benefit.title}
                </h3>
                <p className="text-gray-400">{benefit.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
        <CtaButton name="Join Now" />
      </motion.div>
    </section>
  );
};

export default Features;
