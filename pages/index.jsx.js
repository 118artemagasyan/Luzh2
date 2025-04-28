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

      {/* Про пляж — карточки */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 md:px-12">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-12 text-[#041E42]">
            Летний отдых на любой вкус
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                src: "https://www.luzhniki.ru/media/images/Frame_2.original.jpg",
                title: "Бассейн",
                description: "50-метровый бассейн на свежем воздухе для взрослых и детей."
              },
              {
                src: "https://www.luzhniki.ru/media/images/Frame_3.original.jpg",
                title: "Шезлонги и бары",
                description: "Зона отдыха с шезлонгами, барами и летней атмосферой на пляже."
              },
              {
                src: "https://www.luzhniki.ru/media/images/Frame_4.original.jpg",
                title: "Детская зона",
                description: "Игровая зона и мелкий бассейн для самых маленьких гостей."
              }
            ].map((item, idx) => (
              <div key={idx} className="overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
                <img src={item.src} alt={item.title} className="w-full h-60 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-[#041E42]">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Галерея Атмосферы */}
      <section className="py-16 bg-[#F9FAFB]">
        <div className="container mx-auto px-6 md:px-12">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-12 text-[#041E42]">
            Атмосфера пляжа
          </h2>
          <div className="flex space-x-6 overflow-x-scroll no-scrollbar py-4">
            {[
              "https://www.luzhniki.ru/media/images/Frame_5.original.jpg",
              "https://www.luzhniki.ru/media/images/Frame_6.original.jpg",
              "https://www.luzhniki.ru/media/images/Frame_7.original.jpg",
              "https://www.luzhniki.ru/media/images/P21A5400_GefowJm.original.jpg",
              "https://www.luzhniki.ru/media/images/P21A5359.original.jpg",
            ].map((src, idx) => (
              <motion.div key={idx} whileHover={{ scale: 1.05 }} className="min-w-[300px] md:min-w-[400px] flex-shrink-0 rounded-2xl overflow-hidden shadow-lg">
                <img src={src} alt={`Галерея ${idx}`} className="w-full h-64 object-cover" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Что есть на пляже */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 md:px-12">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-12 text-[#041E42]">
            Что вас ждет на пляже
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 text-center">
            {[
              { icon: "🏊‍♂️", label: "Бассейн" },
              { icon: "🧒", label: "Детская зона" },
              { icon: "🏄‍♂️", label: "Школа плавания" },
              { icon: "🍹", label: "Бары и кафе" },
              { icon: "🛋️", label: "Шезлонги" },
              { icon: "🏋️‍♂️", label: "Тренировки" },
            ].map((item, idx) => (
              <motion.div key={idx} whileHover={{ scale: 1.1 }} className="bg-[#F9FAFB] rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all">
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold text-[#041E42]">{item.label}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </motion.div>
  );
}