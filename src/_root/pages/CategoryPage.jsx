import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router";
import { motion } from "framer-motion";
import LeftSideBar from "../../components/LeftSideBar";
import WelcomeHeader from "../../components/WelcomeHeader";

const CategoryPage = () => {
  const { id } = useParams();
  const [categoryData, setCategoryData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCategoryPage = async () => {
      try {
        const formattedId = id.replace(/\s/g, "");
        const encodedId = encodeURIComponent(formattedId);

        const response = await fetch(
          `https://firestore.googleapis.com/v1/projects/loopapi-b679e/databases/(default)/documents/${encodedId}`
        );

        const data = await response.json();

        if (data) {
          const categories = data.documents.map((category) => {
            const fields = category.fields;
            const tags = category.fields.public_api_fields.mapValue.fields;

            return {
              id: fields.id.stringValue,
              name: fields.name.stringValue,
              description: fields.description.stringValue,
              url: fields.url.stringValue,
              fts: fields.fts.stringValue,
              auth: tags.auth.stringValue,
              cors: tags.cors.stringValue,
              https: tags.https.stringValue,
            };
          });

          setCategoryData(categories);
        }
      } catch (error) {
        console.error("Error fetching category:", error);
      } finally {
        setLoading(false);
      }
    };

    if (id) fetchCategoryPage();
  }, [id]);

  return (
    <div className="flex bg-black min-h-screen text-white">
      {/* Left Sidebar */}
      <div className="w-64 h-screen fixed left-0 top-20 overflow-y-auto scrollbar-hide bg-black">
        <LeftSideBar />
      </div>

      {/* Main Content */}
      <div className="flex-1 ml-64 p-6">
        <WelcomeHeader />

        <h2 className="text-4xl font-bold p-12">{id} APIs</h2>

        {loading ? (
          <p className="text-gray-500 mt-4">Loading...</p>
        ) : categoryData.length === 0 ? (
          <p className="text-gray-500 mt-4">
            No APIs available for this category.
          </p>
        ) : (
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6 md:px-12">
            {categoryData.map((category) => (
              <li key={category.id} className="h-full">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  className="bg-gray-900 rounded-lg shadow-lg overflow-hidden transition duration-300 group hover:bg-gray-800 cursor-pointer h-[320px] flex flex-col justify-between"
                >
                  {/* Card Content */}
                  <div className="py-7 px-4 text-neutral flex-grow">
                    <h2 className="text-3xl text-base-100 font-semibold transition">
                      {category.name}
                    </h2>
                    <p className="text-gray-400 text-lg mt-2 line-clamp-3">
                      {category.description}
                    </p>
                  </div>

                  {/* Auth, CORS & HTTPS Info */}
                  <div className="p-4 flex flex-wrap justify-around">
                    <span className="text-sm font-bold">
                      {category.auth === "" || !category.auth ? (
                        <span className="opacity-50">🗝️ NO AUTH</span>
                      ) : category.auth === "apiKey" ? (
                        "🗝️ API Key"
                      ) : category.auth === "OAuth" ? (
                        "🗝️ OAuth"
                      ) : (
                        `🗝️ ${category.auth}`
                      )}
                    </span>
                    <span className="text-sm font-bold">
                      {category.cors === "no" || !category.cors ? (
                        <span className="opacity-50">? CORS</span>
                      ) : (
                        <span className="">✔️ CORS</span>
                      )}
                    </span>
                    <span className="text-sm font-bold">
                      {category.https === false || !category.https ? (
                        <span className="opacity-50">✖️ HTTPS</span>
                      ) : (
                        <span className="">✔️ HTTPS</span>
                      )}
                    </span>
                  </div>

                  {/* Explore Now Button */}
                  <div className="p-4">
                    <Link to={category.url} target="_blank">
                      <button className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg text-sm font-semibold shadow-md hover:bg-gray-900 transition">
                        Explore Now
                      </button>
                    </Link>
                  </div>
                </motion.div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default CategoryPage;
