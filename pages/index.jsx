import { motion } from "framer-motion";

export default function Home() {
  return (
    <motion.div
      initial="hidden"
      animate="show"
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: 0.2 } },
      }}
      className="flex flex-col font-sans text-[#041E42]"
    >
      {/* Hero Section */}
      <section className="relative h-screen w-full overflow-hidden">
        <div className="absolute w-full h-full">
          <img
            src="https://www.luzhniki.ru/media/images/Frame_2.original.jpg"
            alt="Hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 drop-shadow-lg">Открой лето в Лужниках</h1>
          <button className="mt-4 text-lg px-8 py-3 bg-[#FFD700] text-[#041E42] rounded-xl hover:scale-110 transition-transform shadow-lg">
            Узнать больше
          </button>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-8">
        {[
          "https://www.luzhniki.ru/media/images/Frame_8.original.jpg",
          "https://www.luzhniki.ru/media/images/Frame_3.original.jpg",
          "https://www.luzhniki.ru/media/images/Frame_4.original.jpg",
          "https://www.luzhniki.ru/media/images/Frame_5.original.jpg",
          "https://www.luzhniki.ru/media/images/Frame_6.original.jpg",
          "https://www.luzhniki.ru/media/images/Frame_7.original.jpg",
        ].map((src, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.05 }}
            className="overflow-hidden rounded-2xl shadow-lg"
          >
            <img
              src={src}
              alt={`Gallery ${idx}`}
              className="w-full h-64 object-cover"
            />
          </motion.div>
        ))}
      </section>

      {/* Footer */}
      <footer className="text-center py-6 text-gray-600">
        © {new Date().getFullYear()} Luzhniki Beach
      </footer>
    </motion.div>
  );
}
