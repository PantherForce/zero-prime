import { motion } from "framer-motion";

const rulesData = [
    { id: 1, text: "You need to talk about Zero Prime.", color: "#fa580117", ringColor: "#fa580140" },
    { id: 2, text: "You NEED to talk about Zero Prime.", color: "#01ccfa17", ringColor: "#01ccfa34" },
    { id: 3, text: "If someone asks, 'Why pay for nothing?', just smile they don’t get it.", color: "#faa70117", ringColor: "#faa70132" },
    { id: 4, text: "Only true believers can subscribe.", color: "#01d0fa17", ringColor: "#01d0fa41" },
    { id: 5, text: "One subscription at a time no refunds, no regrets.", color: "#fa580117", ringColor: "#fa580140" },
    { id: 6, text: "No perks, no benefits just pure commitment.", color: "#01ccfa17", ringColor: "#01ccfa34" },
    { id: 7, text: "Your subscription lasts as long as you can handle the truth.", color: "#faa70117", ringColor: "#faa70132" },
    { id: 8, text: "If this is your first time at Zero Prime, you have to subscribe.", color: "#01d0fa17", ringColor: "#01d0fa41" },
];

const timelineAnimation = {
    hidden: { opacity: 0, x: -50 },
    visible: (i) => ({
        opacity: 1,
        x: 0,
        transition: { delay: i * 0.2, type: "spring", stiffness: 100 },
    }),
};

const Timeline = () => {
    return (
        <section className="relative z-10 py-16 px-4 md:px-8">
            <div className="container mx-auto text-center">
                <h2 className="text-[26px] lg:text-5xl text-yellow-50 font-bold mt-10 mb-6">
                    <span className="text-transparent  bg-gradient-to-r bg-clip-text from-primaryColor via-primaryColor to-yellow-100">
                        The 8 Rules of Zero Prime
                    </span>
                </h2>

                <div className="relative w-full max-w-2xl mx-auto">
                    <div className="absolute top-0 " />

                    {rulesData.map((rule, index) => (
                        <motion.div
                            key={rule.id}
                            custom={index}
                            variants={timelineAnimation}
                            initial="hidden"
                            whileInView="visible"
                            className={`relative flex text-center flex-col sm:flex-row items-center justify-between w-full mb-8 last:mb-0 p-4 rounded-lg shadow-lg bg-opacity-50 text-white`}
                            style={{
                                backgroundColor: rule.color,
                                boxShadow: `inset 0 0 0 1px ${rule.ringColor}`,
                            }}
                        >

                            <p className={`text-lg font-semibold text-black ml-6 text-center`}>
                                {rule.text}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Timeline;
