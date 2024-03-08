import { FaArrowAltCircleRight, FaTv, FaVideo } from "react-icons/fa";
import game_image01 from "../../assets/Experience/game_img01.png";

const Experience = () => {
  return (
    <div className="max-w-screen-xl mx-auto lg:grid grid-cols-2 justify-items-center-center items-center gap-x-2 mt-20 mb-20 px-2">
      <div className="bg-[#1F2029] m-4 md:m-0 p-5 md:p-10 shadow-xl">
        <div className="flex items-center gap-4">
          <h3 className="text-[#FF8503] text-xl font-semibold">
            FIND TEAM MEMBER
          </h3>
          <div className="w-4 h-2 bg-gray-600"></div>
          <h3 className="text-white text-xl font-semibold">ENJOY THE METCH</h3>
        </div>
        {/* This is the vertical line */}
        <div className="w-full h-1.5 rounded mt-10 bg-[#ff8503]"></div>

        <h1 className="text-2xl md:text-3xl font-extrabold text-white mt-5">
          EXPERIENCE JUST FOR <br />
          <span className="text-[#ff8503]">GAMERS OFFER</span>
        </h1>

        <p className="text-gray-400 mt-4">
          Nullam quis ante. Maecenas ullamcorper, dui et placerat feugiat, eros
          pede varius nisi, condimentum viverra felis nunc et lorem. In auctor
          lobortis lacus. Phasellus gravida semper nisi. Aliquam lobortis.
        </p>
        <p className="flex items-center gap-5 text-white mt-10">
          <FaArrowAltCircleRight className="text-[#ff8503]" />
          <span className="text-gray-400">
            Will sharpen your brain and focus
          </span>
        </p>
      </div>
      <div>
        <img className="p-4 md:p-0 md:pl-5" src={game_image01} alt="" />
      </div>
    </div>
  );
};

export default Experience;
