import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const TopCategories = () => {
  const [topCategories, setTopCategories] = useState([]);

  const fetchTopCategories = async () => {
    try {
      const response = await fetch(
        "https://firestore.googleapis.com/v1/projects/loopapi-b679e/databases/(default)/documents/CategoryCard"
      );
      const data = await response.json();

      if (data.documents) {
        const categories = data.documents.map((category) => ({
          id: category.name.split("/").pop(),
          name: category.fields.categoryName?.stringValue || "Unknown",
          description:
            category.fields.categoryDescription?.stringValue ||
            "Explore amazing APIs in this category.",
          image:
            category.fields.categoryPhotoUrl?.stringValue ||
            "https://via.placeholder.com/400x200",
          tags:
            category.fields.tags?.arrayValue?.values?.map(
              (v) => v.stringValue
            ) || [],
        }));

        setTopCategories(categories.slice(20, 32));
      }
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  useEffect(() => {
    fetchTopCategories();
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6 md:px-12 ">
      {topCategories.map((category) => (
        <motion.div
          key={category.id}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          className="bg-gray-900  rounded-lg shadow-lg overflow-hidden transition duration-300 group  hover:bg-gray-800"
        >
          {/* Top - Image */}
          <div className="relative w-full h-48 p-1">
            <img
              src={category.image}
              alt={category.name}
              className="w-full h-full object-cover rounded-md group-hover:brightness-90 transition "
            />
          </div>

          {/* Bottom - Content */}
          <div className="py-2 px-6 text-base-100">
            <h2 className="text-2xl font-semibold group-hover:text-blue-400 transition">
              {category.name}
            </h2>
            <p className="text-gray-400 text-sm mt-2">{category.description}</p>

            {/* Button */}
            <div className="my-5 flex justify-end">
              <button className="bg-blue-600 text-white px-5 py-2 rounded-lg text-sm font-semibold shadow-md hover:bg-gray-900 cursor-pointer transition">
                Explore Now
              </button>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default TopCategories;
