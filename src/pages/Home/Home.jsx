import Services from "./Shared/Services/Services";
import Slider from "./Shared/Slider/Slider";

const Home = () => {
  return (
    <div>
      {/* slider */}
      <div className="">
        <Slider />
      </div>
      {/* services */}
      <div>
        <Services />
      </div>
    </div>
  );
};

export default Home;
