// import image
import video from "../assets/newww-vmake.mp4";
import video1 from "../assets/manTest.mp4";
import video3 from "../assets/vide3.mp4";
import video4 from "../assets/vid4.mp4";
import Image3 from "../assets/img/360_F_587493762_Lkd73fwfAABqVIqojfQXNIFclIi6MZNc-Picsart-AiImageEnhancer.jpg";

const FeaturesSection3 = () => {
  return (
    <section className="py-[30px] lg:py-[120px]">
      {/* <section className="py-10 lg:py-24"> */}
      <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
        {/* Text Section */}
        <div
          className="w-full max-w-xl text-center lg:text-left"
          data-aos="fade-right"
          data-aos-offset="400"
        >
          <h3 className="text-[26px] font-bold  mb-6">
            Grow your profit and track your investments
          </h3>
          <p className=" mb-8 text-base sm:text-lg max-w-md mx-auto lg:mx-0">
            Use advanced analytical tools. Clear TradingView charts let you
            track current and historical profit investments.
          </p>
          <button className="flex items-center justify-center gap-2 px-6 sm:px-8 py-3 lg:py-4 bg-blue-950 text-white rounded-xl shadow-md hover:bg-blue-800 transition text-sm sm:text-base">
            Learn more
          </button>
        </div>

        {/* Image Section */}
        <div
          className="w-full flex justify-center lg:justify-end max-w-2xl"
          data-aos="fade-left"
          data-aos-offset="450"
        >
          <img
            src={Image3}
            alt="Investment growth illustration"
            className="w-full h-auto rounded-xl object-cover shadow-md"
          />
        </div>
      </div>

      <div className="flex justify-center items-center w-full">
        <video
          controls
          muted
          className="w-full h-84 mt-32 max-w-3xl rounded-xl border-4 border-blue-950 shadow-lg"
        >
          <source src={video} />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="flex justify-center items-center w-full">
        <video
          controls
          muted
          className="w-full h-84 mt-32 max-w-3xl rounded-xl border-4 border-blue-950 shadow-lg"
        >
          <source src={video1} />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="flex justify-center items-center w-full">
        <video
          controls
          muted
          className="w-full h-84 mt-32 max-w-3xl rounded-xl border-4 border-blue-950 shadow-lg"
        >
          <source src={video3} />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="flex justify-center items-center w-full">
        <video
          controls
          muted
          className="w-full h-84 mt-32 max-w-3xl rounded-xl border-4 border-blue-950 shadow-lg"
        >
          <source src={video4} />
          Your browser does not support the video tag.
        </video>
      </div>
      {/* <div>
        <video controls muted>
          <source src={video} />
        </video>
      </div> */}
    </section>
  );
};

export default FeaturesSection3;
