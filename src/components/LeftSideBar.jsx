import React, { useEffect, useState } from "react";
import { Link } from "react-router";

const LeftSideBar = () => {
  const [categories, setCategories] = useState([]);

  const fetchCategories = async () => {
    try {
      const response = await fetch(
        "https://firestore.googleapis.com/v1/projects/loopapi-b679e/databases/(default)/documents/CategoryCard"
      );
      const data = await response.json();

      if (data.documents) {
        const categoryList = data.documents
          .map((doc) => doc?.fields?.categoryName?.stringValue)
          .sort();
        setCategories(categoryList);
      }
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <aside className="w-full pl-6 pt-4 pb-28 text-white">
      <h2 className="text-lg pb-2 font-bold mb-2 font-helvetica">Categories</h2>
      <ul>
        {categories.length > 0 ? (
          categories.map((category, index) => (
            <li
              key={index}
              className="py-2 px-4 cursor-pointer font-semibold text-gray-400 
             hover:text-gray-900 rounded-md text-sm font-segoe 
             transition-all duration-300 ease-in-out transform-gpu 
             hover:scale-105 hover:bg-gray-100"
            >
              <Link
                to={`/category/${category}`}
                className="w-full h-full block"
              >
                {category}
              </Link>
            </li>
          ))
        ) : (
          <p className="text-gray-500">Loading...</p>
        )}
      </ul>
    </aside>
  );
};

export default LeftSideBar;
