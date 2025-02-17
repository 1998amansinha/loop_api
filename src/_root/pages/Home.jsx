import LeftSideBar from "../../components/LeftSideBar";
import SearchBar from "../../components/SearchBar";
import TopCategories from "../../components/TopCategories";
import Recomended from "../../components/Recomended";
import WelcomeHeader from "../../components/WelcomeHeader";

const Home = () => {
  return (
    <div className="flex bg-black">
      {/* Left Sidebar - Fixed */}
      <div className="w-64 h-screen fixed left-0 top-20 overflow-y-auto scrollbar-hide">
        <LeftSideBar />
      </div>

      {/* Main Content - Uses Window Scroll */}
      <div className="ml-64 w-full p-6  bg-black">
        {/* Top Section - Welcome Header */}
        <WelcomeHeader />

        {/* Search Bar - Centered Below Header */}
        <div className="w-full flex justify-center my-6">
          <SearchBar />
        </div>

        {/* Bottom Section - Popular API Cards */}
        <div className="my-20">
          <h2 className="text-3xl font-bold mb-10 text-base-100 pl-12">
            Top Categories
          </h2>
          <TopCategories />
        </div>

        <div className="my-20">
          <h2 className="text-3xl font-bold mb-10 text-base-100 pl-12">
            Recomended
          </h2>
          <Recomended />
        </div>
      </div>
    </div>
  );
};

export default Home;
