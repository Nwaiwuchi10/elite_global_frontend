import Particles from "@tsparticles/react";

const ParticlesBackground = () => {
  return (
    <Particles
      id="tsparticles"
      className="absolute top-0 left-0 w-full h-full -z-10"
      options={{
        background: { color: { value: "transparent" } },
        fpsLimit: 60,
        particles: {
          number: {
            value: 150,
            density: { enable: true, width: 800 },
          },
          color: { value: "#ffffff" },
          shape: { type: "circle" },
          opacity: {
            value: { min: 0.3, max: 1 }, // ✅ instead of random/minimumValue
            animation: {
              enable: true,
              speed: 1,
              sync: false,
            },
          },
          size: {
            value: { min: 1, max: 2 }, // ✅ no "random" needed
            animation: {
              enable: false,
            },
          },
          move: {
            enable: true,
            speed: 0.3,
            direction: "none",
            outModes: { default: "out" },
          },
        },
        detectRetina: true,
      }}
    />
  );
};

export default ParticlesBackground;
