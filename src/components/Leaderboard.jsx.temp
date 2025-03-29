import React from "react";
import { motion } from "framer-motion";

const leaderboardData = [
    { rank: 1, name: "John Doe", score: 5000 },
    { rank: 2, name: "Jane Smith", score: 4500 },
    { rank: 3, name: "Alex Johnson", score: 4200 },
    { rank: 4, name: "Emily Davis", score: 4000 },
    { rank: 5, name: "Michael Brown", score: 3800 },
];

const Leaderboard = () => {
    return (
        <section className="relative px-4 overflow-hidden md:px-10">
            <motion.div
                className="container w-full mx-auto backdrop-blur-3xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
            >
                <div className="text-center">
                    <h2 className="mb-4 text-3xl font-bold text-transparent sm:text-4xl from-pink-600 font-Sync bg-gradient-to-r via-yellow-500 to-orange-600 bg-clip-text">
                        Leaderboard
                    </h2>
                    <p className="text-sm text-gray-400 sm:text-base">
                        Check out the top achievers who are leading in the nothingness game.
                    </p>
                </div>

                <div className="mt-10">
                    <table className="w-full table-auto text-left bg-white shadow-xl rounded-xl ring-1 ring-gray-800/70 backdrop-blur-2xl">
                        <thead>
                            <tr>
                                <th className="px-6 py-3 text-sm font-medium text-gray-700 bg-gradient-to-r from-orange-500 to-pink-500 text-white rounded-tl-lg">Rank</th>
                                <th className="px-6 py-3 text-sm font-medium text-gray-700 bg-gradient-to-r from-orange-500 to-pink-500 text-white">Name</th>
                                <th className="px-6 py-3 text-sm font-medium text-gray-700 bg-gradient-to-r from-orange-500 to-pink-500 text-white rounded-tr-lg">Score</th>
                            </tr>
                        </thead>
                        <tbody>
                            {leaderboardData.map((entry) => (
                                <tr key={entry.rank} className="border-b border-gray-300 hover:bg-gray-100">
                                    <td className="px-6 py-4 text-lg font-semibold text-center text-gray-800">{entry.rank}</td>
                                    <td className="px-6 py-4 text-lg font-semibold text-gray-800">{entry.name}</td>
                                    <td className="px-6 py-4 text-lg font-semibold text-center text-gray-800">{entry.score}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </motion.div>
        </section>
    );
};

export default Leaderboard;
