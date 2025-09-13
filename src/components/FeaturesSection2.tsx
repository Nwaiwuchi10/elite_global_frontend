// import image
import Image2 from "../assets/img/istockphoto-1304093999-612x612-Picsart-AiImageEnhancer.jpg";

const FeaturesSection2 = () => {
  return (
    <section className="py-[30px] lg:py-[120px]">
      <div className="container mx-auto">
        <div className="flex flex-col justify-end items-center lg:flex-row">
          {/* image */}
          <div
            className="flex-1 w-full max-w-xl relative lg:absolute  lg:left-10 order-2 lg:order-1"
            data-aos="fade-right"
            data-aos-offset="400"
          >
            <img
              src={Image2}
              alt=""
              className="w-full h-auto rounded-xl object-cover shadow-md"
            />
          </div>
          {/* text */}
          <div
            className="flex-1 max-w-[456px]"
            data-aos="fade-left"
            data-aos-offset="400"
          >
            <h3 className="h3 mb-6 text-[26px] font-bold">
              Detailed Statistics
            </h3>
            <p className="text-gray mb-8 text-[20px]">
              View all investment related information in realtime, at any point
              at any location and decide which polls you want to mine in.
            </p>
            <button className='  className="flex items-center gap-x-2 px-6 py-3 bg-blue-950 text-white rounded-xl shadow-md hover:bg-blue-700 transition lg:h-16 lg:text-base" btn px-8 mb-6 lg:mb-0'>
              Learn more
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection2;
