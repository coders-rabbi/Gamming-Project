import Game from "../Game/Game";
import Banner from "./Banner";
import Experience from "./Experience";
import MiddleBanner from "./MiddleBanner/MiddleBanner";
import NewsLetter from "./NewsLetter/NewsLetter";

const Home = () => {
  return (
    <div>
      <Banner />
      <Experience />
      <Game />
      <MiddleBanner />
      <NewsLetter />
    </div>
  );
};

export default Home;
