import { Link } from "react-router-dom";
import freematch from "../../assets/game/freematch.png";
import solomatch from "../../assets/game/solomatch.jpg";
import squad from "../../assets/game/squad.jpg";
import game1 from "../../assets/game/freefire.jpg";
import Ludo from "../../assets/game/Ludu.png";
import TopUp from "../../assets/game/TopUp.jpg";

const Game = () => {
  return (
    <div className="max-w-screen-xl mx-auto mb-14 px-2">
      <h1 className="text-3xl text-white font-semibold mb-10">
        Tournament & Sheduel
      </h1>
      <div className="md:grid grid-cols-3 gap-5 p-4 md:p-0 justify-center">
        <Link>
          <div className="card card-compact w-full bg-base-100 shadow-xl">
            <figure>
              <img src={freematch} alt="Shoes" />
            </figure>
            <div className="flex justify-between px-4 py-3">
              <h2 className="card-title">Every Firday</h2>
              <h2 className="card-title">Free Match</h2>
            </div>
          </div>
        </Link>
        <Link>
          <div className="card card-compact w-full bg-base-100 shadow-xl mt-8 md:mt-0">
            <figure>
              <img className="h-96" src={solomatch} alt="Shoes" />
            </figure>
            <div className="flex justify-between px-4 py-3">
              <h2 className="card-title">Free Fire Solo</h2>
              <h2 className="card-title">Fee 20Tk</h2>
            </div>
          </div>
        </Link>
        <Link>
          <div className="card card-compact w-full bg-base-100 shadow-xl mt-8 md:mt-0">
            <figure>
              <img src={game1} alt="Shoes" />
            </figure>
            <div className="flex justify-between px-4 py-3">
              <h2 className="card-title">Free Fire Due</h2>
              <h2 className="card-title">Fee 40Tk</h2>
            </div>
          </div>
        </Link>
      </div>
      <div className="md:grid grid-cols-3 gap-5 p-4 md:p-0 justify-center mt-10">
        <Link>
          <div className="card card-compact w-full bg-base-100 shadow-xl">
            <figure>
              <img className="h-96" src={squad} alt="Shoes" />
            </figure>
            <div className="flex justify-between px-4 py-3">
              <h2 className="card-title">Free Fire Squad</h2>
              <h2 className="card-title">Fee 60Tk</h2>
            </div>
          </div>
        </Link>
        <Link>
          <div className="card card-compact w-full bg-base-100 shadow-xl mt-8 md:mt-0">
            <figure>
              <img src={Ludo} alt="Shoes" />
            </figure>
            <div className="flex justify-between px-4 py-3">
              <h2 className="card-title">Ludo</h2>
              <h2 className="card-title">Fee 40Tk</h2>
            </div>
          </div>
        </Link>
        <Link>
          <div className="card card-compact w-full bg-base-100 shadow-xl mt-8 md:mt-0">
            <figure>
              <img className="h-96" src={TopUp} alt="Shoes" />
            </figure>
            <div className="flex justify-between px-4 py-3">
              <h2 className="card-title">TopUp</h2>
              <h2 className="card-title">Comming Soon</h2>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Game;
