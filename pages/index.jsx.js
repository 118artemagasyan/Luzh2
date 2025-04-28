import { motion } from "framer-motion";

export default function Home() {
  return (
    <motion.div
      initial="hidden"
      animate="show"
      variants={{
        hidden: {{} },
        show: {{ transition: {{ staggerChildren: 0.15 }} }},
      }}
      className="flex flex-col scroll-smooth font-sans text-[#041E42]"
    >
      {/* Hero Section */}
      <section className="relative h-screen w-full overflow-hidden">
        <div className="absolute w-full h-full">
          <img
            src="https://www.luzhniki.ru/media/images/DJI_0479.original.jpg"
            alt="Beach Overview"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Открой лето в Лужниках</h1>
          <button className="text-lg px-8 py-4 bg-[#FFD700] text-[#041E42] rounded-xl hover:scale-110 transition-transform">
            Узнать больше
          </button>
        </div>
      </section>
    </motion.div>
  );
}