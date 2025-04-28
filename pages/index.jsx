import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="relative font-sans text-[#041E42]">
      {/* Навигация */}
      <nav className="absolute top-0 left-0 w-full z-50 flex justify-between items-center p-6 text-white">
        <div className="text-2xl font-bold">Luzhniki Beach</div>
        <div className="space-x-6 hidden md:flex">
          <a href="#" className="hover:underline">Главная</a>
          <a href="#" className="hover:underline">Галерея</a>
          <a href="#" className="hover:underline">Контакты</a>
        </div>
      </nav>

      {/* Hero-секция */}
      <section className="relative h-screen w-full overflow-hidden">
        <img
          src="https://www.luzhniki.ru/media/images/DJI_0479.original.jpg"
          alt="Лужники"
          className="absolute w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 flex flex-col justify-center items-center h-full text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Открой Лето в Лужниках</h1>
          <button className="px-8 py-4 bg-yellow-400 text-[#041E42] font-semibold rounded-xl hover:scale-105 transition-transform">
            Узнать больше
          </button>
        </div>
      </section>

      {/* Галерея */}
      <section className="max-w-6xl mx-auto py-20 px-4 space-y-16">
        {galleryImages.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="rounded-3xl overflow-hidden shadow-lg"
          >
            <img
              src={item.src}
              alt={item.title}
              className="w-full max-h-[500px] object-cover rounded-3xl"
            />
            {item.title && (
              <h2 className="mt-6 text-2xl font-bold text-center">{item.title}</h2>
            )}
          </motion.div>
        ))}
      </section>

      {/* Футер */}
      <footer className="bg-[#041E42] text-white text-center py-6 text-sm">
        © 2025 Luzhniki Beach. Все права защищены.
      </footer>
    </div>
  );
}

// Список изображений галереи
const galleryImages = [
  {
    src: "https://www.luzhniki.ru/media/images/Frame_2.original.jpg",
    title: "Пляжная зона",
  },
  {
    src: "https://www.luzhniki.ru/media/images/Frame_8.original.jpg",
    title: "Бассейн под открытым небом",
  },
  {
    src: "https://www.luzhniki.ru/media/images/Frame_3.original.jpg",
    title: "Территория отдыха",
  },
  {
    src: "https://www.luzhniki.ru/media/images/Frame_4.original.jpg",
    title: "Летний бар",
  },
  {
    src: "https://www.luzhniki.ru/media/images/Frame_5.original.jpg",
    title: "Детская зона",
  },
  {
    src: "https://www.luzhniki.ru/media/images/Frame_6.original.jpg",
    title: "Школа плавания",
  },
  {
    src: "https://www.luzhniki.ru/media/images/Frame_7.original.jpg",
    title: "Зона для спортивных тренировок",
  },
];