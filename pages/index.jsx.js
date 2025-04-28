import { motion } from "framer-motion";

export default function Home() {
  return (
    <motion.div
      initial="hidden"
      animate="show"
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: 0.15 } },
      }}
      className="flex flex-col scroll-smooth font-sans text-[#041E42]"
    >
      {/* Hero Section */}
      <section className="relative h-screen w-full overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://www.luzhniki.ru/media/images/DJI_0479.original.jpg"
            alt="Пляж Лужники"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight drop-shadow-lg">
            Открой лето <br /> в Лужниках
          </h1>
          <button className="mt-4 bg-[#FFD700] hover:bg-yellow-400 text-[#041E42] font-semibold py-3 px-8 rounded-full shadow-lg transition-all duration-300 hover:scale-105">
            Узнать больше
          </button>
        </div>
      </section>
    </motion.div>
  );
}