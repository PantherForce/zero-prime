// UserFlow.jsx
import { motion } from "framer-motion";
import { fadeInUp } from "../animations/varients.js";
import { Link } from "react-router-dom";
import { FaSignInAlt, FaRegFileAlt, FaCreditCard, FaEnvelope } from "react-icons/fa";

const steps = [
    {
        id: 1,
        title: "Login",
        description: "Sign in to your account securely.",
        icon: <FaSignInAlt size={24} className="text-primaryColor" />,
        delay: 0.5,
    },
    {
        id: 2,
        title: "Choose Plan & Subscribe",
        description: "Select your plan and click 'Subscribe Now.'",
        icon: <FaRegFileAlt size={24} className="text-primaryColor" />,
        delay: 1,
    },
    {
        id: 3,
        title: "Make Payment",
        description: "Complete the payment to activate your subscription.",
        icon: <FaCreditCard size={24} className="text-primaryColor" />,
        delay: 1.5,
    },
    {
        id: 4,
        title: "Receive Confirmation Email",
        description: "Get a confirmation email from No Prime.",
        icon: <FaEnvelope size={24} className="text-primaryColor" />,
        delay: 2,
    },
];

const stepAnimation = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 1.2,
            type: "spring",
            damping: 10,
            stiffness: 100,
        },
    },
};

const UserFlow = () => {
    return (
        <section id="flow" className="relative z-10 py-20 bg-gray-50">
            <div className="container mx-auto px-6 text-center">
                <motion.h2
                    {...fadeInUp}
                    className="text-3xl font-bold mt-10 text-primaryColor mb-6"
                >
                    How It Works
                </motion.h2>
                <motion.p
                    {...fadeInUp}
                    transition={{ ...fadeInUp.whileInView.transition, delay: 0.5 }}
                    className="text-gray-500 mb-12"
                >
                    Follow these simple steps to get started with No Prime.
                </motion.p>

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                    {steps.map((step) => (
                        <motion.div
                            key={step.id}
                            variants={stepAnimation}
                            initial="hidden"
                            whileInView="visible"
                            transition={{ ...stepAnimation.visible.transition, delay: step.delay }}
                            className="bg-white p-6 rounded-lg shadow-md"
                        >
                            <div className="flex justify-center mb-4">
                                {step.icon}
                            </div>
                            <h3 className="text-xl font-semibold text-gray-800">{step.title}</h3>
                            <p className="text-gray-500 mt-2">{step.description}</p>
                        </motion.div>
                    ))}
                </div>

                <Link to="/">
                    <motion.button
                        whileHover={{
                            scale: 1.05,
                            backgroundColor: "",
                            color: "#fff",
                            transition: { type: "spring", stiffness: 300 },
                        }}
                        whileTap={{ scale: 0.95 }}
                        className="mt-8 px-8 py-3 bg-primaryColor text-white font-semibold rounded-lg"
                    >
                        Get Started Now
                    </motion.button>
                </Link>
            </div>
        </section>
    );
};

export default UserFlow;
