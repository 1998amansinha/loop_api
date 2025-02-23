import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router"; // Ensure you import from react-router
import { CategoryCard } from "./CategoryCard"; // If this is a component, use it correctly.

const integrationMethods = [
  { id: 1, title: "Fetch API (Native JavaScript)", path: "/fetch" },
  {
    id: 2,
    title: "Axios (Third-Party Library)",
    path: "https://axios-http.com/docs/intro",
  },
  {
    id: 3,
    title: "React Query (TanStack Query)",
    path: "https://tanstack.com/query/latest/docs/framework/react/overview",
  },
  { id: 4, title: "Bonus - Promises & Async/Await", path: "/promise" },
];

const Docs = () => {
  return (
    <div className="flex flex-col items-center bg-[url('https://res.cloudinary.com/do5xzpecm/image/upload/v1738683674/Animated_Shape_2_onond5.svg')] bg-cover min-h-screen">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="py-20 text-center"
      >
        <h1 className="text-6xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent animate-pulse brightness-150">
          Discover and integrate free APIs effortlessly_
        </h1>
        <p className="py-6 text-2xl opacity-80 max-w-4xl mx-auto text-base-100">
          LoopAPI connects you to a world of free APIs, making it easier than
          ever to explore, fetch, and build. Stop searching—start creating with
          LoopAPI.
        </p>
      </motion.div>

      {/* Integration Methods Section */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="text-center"
      >
        <h2 className="text-4xl font-semibold mb-6 text-base-100">
          Explore ways to integrate
        </h2>

        <div className="grid gap-6 grid-cols-2">
          {integrationMethods.map((method) =>
            method.path.startsWith("http") ? ( // Fix for external links
              <a
                key={method.id}
                href={method.path}
                target="_blank"
                rel="noopener noreferrer"
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 * method.id }}
                  className="relative py-10 px-20 rounded-lg text-lg font-medium cursor-pointer text-white transition-all 
                           bg-gray-700 bg-opacity-80 border border-transparent hover:border-purple-500 hover:shadow-lg 
                           hover:shadow-purple-500/50 hover:scale-105 transform duration-300"
                >
                  {method.title}
                  <div
                    className="absolute inset-0 w-full h-full bg-gradient-to-r from-purple-500 to-blue-500 opacity-0 
                                hover:opacity-10 transition-opacity duration-300 rounded-lg"
                  ></div>
                </motion.div>
              </a>
            ) : (
              <Link key={method.id} to={method.path}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 * method.id }}
                  className="relative py-10 px-20 rounded-lg text-lg font-medium cursor-pointer text-white transition-all 
                           bg-gray-700 bg-opacity-80 border border-transparent hover:border-purple-500 hover:shadow-lg 
                           hover:shadow-purple-500/50 hover:scale-105 transform duration-300"
                >
                  {method.title}
                  <div
                    className="absolute inset-0 w-full h-full bg-gradient-to-r from-purple-500 to-blue-500 opacity-0 
                                hover:opacity-10 transition-opacity duration-300 rounded-lg"
                  ></div>
                </motion.div>
              </Link>
            )
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default Docs;
