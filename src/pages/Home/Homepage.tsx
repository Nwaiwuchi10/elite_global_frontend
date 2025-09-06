// import { useState } from "react";

// import Hero from "../../components/Hero";
// import Header from "../../components/Header";
// import NavMobile from "../../components/NavMobile";
// import Stats from "../../components/Stats";
// import Why from "../../components/Why";
// import Trade from "../../components/Trade";
// import Features from "../../components/Features";
// import Newsletter from "../../components/Newsletter";
// import Footer from "../../components/Footer";
// import TradingTicker from "../../components/TradingTicker";
// import ParticlesBackground from "../../components/Particles";

// const Homepage = () => {
//   const [navMobile, setNavMobile] = useState(false);

//   return (
//     <div className="relative min-h-screen  overflow-hidden">
//       {/* ✅ Particles in the background */}
//       <ParticlesBackground />

//       {/* ✅ Main Content above particles */}
//       <div className="relative z-10">
//         <Header setNavMobile={setNavMobile} />
//         <Hero />

//         {/* Mobile Nav */}
//         <div
//           className={`${
//             navMobile ? "right-0" : "-right-full"
//           } fixed z-20 top-0 h-full transition-all duration-200`}
//         >
//           <NavMobile setNavMobile={setNavMobile} />
//         </div>

//         <Stats />
//         <Why />
//         <TradingTicker />
//         <Trade />
//         <Features />
//         <Newsletter />
//         <Footer />
//       </div>
//     </div>
//   );
// };

// export default Homepage;

import Header from "../../components/Header";
import Hero from "../../components/Hero";
import NavMobile from "../../components/NavMobile";
import Stats from "../../components/Stats";
import Footer from "../../components/Footer";
import Newsletter from "../../components/Newsletter";
import Features from "../../components/Features";
import Trade from "../../components/Trade";
import TradingTicker from "../../components/TradingTicker";
import Why from "../../components/Why";
import { useState } from "react";

const Homepage = () => {
  const [navMobile, setNavMobile] = useState(false);

  return (
    <div className="relative min-h-screen bg-darkblue text-white overflow-hidden">
      {/* Particles Background */}
      {/* <Particles
        id="tsparticles"
        className="absolute top-0 left-0 w-full h-full -z-10"
        options={{
          background: { color: { value: "black" } }, // black bg to see clearly
          particles: {
            number: { value: 100 },
            size: { value: 3 },
            move: { enable: true, speed: 1 },
            color: { value: "#ffffff" },
          },
        }}
      /> */}

      {/* Homepage Content */}
      <div className="relative z-10 ">
        <Header setNavMobile={setNavMobile} />
        <Hero />

        {/* Mobile Nav */}
        <div
          className={`${
            navMobile ? "right-0" : "-right-full"
          } fixed z-20 top-0 h-full transition-all duration-200`}
        >
          <NavMobile setNavMobile={setNavMobile} />
        </div>

        <Stats />
        <Why />
        <TradingTicker />
        <Trade />
        <Features />
        <Newsletter />
        <Footer />
      </div>
    </div>
  );
};

export default Homepage;
