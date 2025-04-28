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
      <section className="relative h-[80vh] md:h-screen w-full overflow-hidden">
        <div className="absolute w-full h-full">
          <img
            src="https://www.luzhniki.ru/media/images/DJI_0479.original.jpg"
            alt="Beach Overview"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6">
            Открой лето в Лужниках
          </h1>
          <button className="text-base md:text-lg px-6 py-3 md:px-8 md:py-4 bg-[#FFD700] text-[#041E42] rounded-xl hover:scale-110 transition-transform">
            Узнать больше
          </button>
        </div>
      </section>

      {/* About Beach Section */}
      <section className="max-w-screen-xl mx-auto py-12 md:py-16 px-4 md:px-6 grid grid-cols-1 md:grid-cols-2 gap-8">
        {[
          {
            src: "https://www.luzhniki.ru/media/images/Frame_2.original.jpg",
            text: "50-метровый бассейн на открытом воздухе",
          },
          {
            src: "https://www.luzhniki.ru/media/images/Frame_8.original.jpg",
            text: "Шезлонги, бары, летняя атмосфера",
          },
        ].map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center hover:scale-105 transition-transform"
          >
            <img
              src={item.src}
              alt="Beach Area"
              className="rounded-2xl w-full h-64 md:h-80 object-cover mb-4"
            />
            <p className="text-center text-lg md:text-xl">{item.text}</p>
          </motion.div>
        ))}
      </section>

      {/* Footer Section */}
      <footer className="bg-[#041E42] text-white py-8 text-center">
        <div className="flex flex-col md:flex-row justify-center items-center space-y-2 md:space-y-0 md:space-x-4">
          <a href="#" className="hover:underline">
            Instagram
          </a>
          <a href="#" className="hover:underline">
            VK
          </a>
          <a href="#" className="hover:underline">
            Telegram
          </a>
        </div>
        <p className="mt-4 text-sm md:text-base">
          Часы работы: 08:00 - 22:00
        </p>
        <a href="#" className="underline block mt-2 text-sm">
          Правила посещения
        </a>
        <div className="mt-4">
          <button className="px-4 py-2 md:px-6 md:py-3 bg-[#FFD700] text-[#041E42] rounded-xl hover:scale-110 transition">
            Забронировать визит
          </button>
        </div>
      </footer>
    </motion.div>
  );
}