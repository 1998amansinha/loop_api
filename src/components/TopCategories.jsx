import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router";

const TopCategories = () => {
  const [topCategories, setTopCategories] = useState([]);

  useEffect(() => {
    const fetchTopCategories = async () => {
      try {
        const response = await fetch(
          "https://firestore.googleapis.com/v1/projects/loopapi-b679e/databases/(default)/documents/CategoryCard"
        );
        const data = await response.json();

        if (data.documents) {
          const categories = data.documents.map((category) => {
            const fields = category.fields || {};

            return {
              id: fields?.id?.stringValue,
              name: fields.categoryName?.stringValue || "Unknown",
              description:
                fields.categoryDescription?.stringValue ||
                "Explore amazing APIs in this category.",
              image:
                fields.categoryPhotoUrl?.stringValue ||
                "https://via.placeholder.com/400x200",
            };
          });

          setTopCategories(categories.slice(0, 9));
        }
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchTopCategories();
  }, []);
  console.log(topCategories);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6 md:px-12">
      {topCategories.map((category) => (
        <motion.div
          key={category.name}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          className="bg-gray-900 rounded-lg shadow-lg overflow-hidden transition duration-300 group hover:bg-gray-800 cursor-pointer"
        >
          {/* Top - Image */}
          <div className="relative w-full h-48 p-1">
            <img
              src={category.image}
              alt={category.name}
              className="w-full h-full object-cover rounded-md group-hover:brightness-90 transition"
            />
          </div>

          {/* Bottom - Content */}
          <div className="py-2 px-6 text-neutral">
            <h2 className="text-2xl text-base-100 font-semibold transition">
              {category.name}
            </h2>
            <p className="text-gray-400 text-sm mt-2">{category.description}</p>
          </div>

          {/* Button */}
          <div className="my-5 flex justify-end">
            <Link to={`/category/${category.name}`}>
              <button className="bg-blue-600 text-white mr-5 px-4 py-3 rounded-lg text-sm font-semibold shadow-md hover:bg-gray-900 transition">
                Explore Now
              </button>
            </Link>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default TopCategories;
