import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="bg-white text-[#041E42] font-sans scroll-smooth overflow-x-hidden">

      {/* Header */}
      <header className="fixed w-full z-50 bg-white/80 backdrop-blur-md py-4 px-8 flex justify-between items-center shadow-sm">
        <div className="text-2xl font-bold">Luzhniki Beach</div>
        <nav className="hidden md:flex gap-8 text-lg font-medium">
          <a href="#home" className="hover:underline transition">Главная</a>
          <a href="#gallery" className="hover:underline transition">Галерея</a>
          <a href="#contact" className="hover:underline transition">Контакты</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative h-screen w-full flex items-center justify-center">
        <div
          className="absolute w-full h-full bg-cover bg-center bg-fixed"
          style={{ backgroundImage: `url('https://www.luzhniki.ru/media/images/DJI_0479.original.jpg')` }}
        />
        <div className="absolute inset-0 bg-[#041E42]/50" />
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative text-center px-6"
        >
          <h1 className="text-5xl md:text-8xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
            Открой Лето <br /> в Лужниках
          </h1>
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="mt-6 px-8 py-4 bg-[#FFD700] text-[#041E42] text-lg font-semibold rounded-full transition"
          >
            Узнать больше
          </motion.button>
        </motion.div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="grid grid-cols-1 md:grid-cols-2 gap-6 p-8 md:p-16 bg-[#F8F8F8]">
        {[
          "https://www.luzhniki.ru/media/images/Frame_2.original.jpg",
          "https://www.luzhniki.ru/media/images/Frame_3.original.jpg",
          "https://www.luzhniki.ru/media/images/Frame_4.original.jpg",
          "https://www.luzhniki.ru/media/images/Frame_5.original.jpg",
          "https://www.luzhniki.ru/media/images/Frame_6.original.jpg",
          "https://www.luzhniki.ru/media/images/Frame_7.original.jpg",
          "https://www.luzhniki.ru/media/images/IMG_9279-2.original.jpg",
          "https://www.luzhniki.ru/media/images/P21A5400_GefowJm.original.jpg",
        ].map((src, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.05 }}
            className="overflow-hidden rounded-2xl shadow-lg"
          >
            <img
              src={src}
              alt="Gallery"
              className="w-full h-80 object-cover hover:brightness-90 transition-all duration-300"
            />
          </motion.div>
        ))}
      </section>

      {/* About Section */}
      <section className="text-center py-24 px-8 md:px-32 bg-white">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-bold mb-8 leading-tight"
        >
          Пляжный отдых в самом сердце Москвы
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
          viewport={{ once: true }}
          className="text-lg md:text-2xl text-[#555] max-w-3xl mx-auto"
        >
          50-метровый бассейн, бары, кафе, спортивные тренировки и летняя атмосфера под открытым небом.
        </motion.p>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-[#041E42] text-white py-24 px-8 md:px-32 text-center">
        <motion.h3
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-bold mb-8"
        >
          Присоединяйтесь к нам
        </motion.h3>
        <div className="flex justify-center gap-8 flex-wrap">
          <motion.a
            href="https://instagram.com"
            target="_blank"
            className="hover:underline"
            whileHover={{ scale: 1.1 }}
          >
            Instagram
          </motion.a>
          <motion.a
            href="https://vk.com"
            target="_blank"
            className="hover:underline"
            whileHover={{ scale: 1.1 }}
          >
            VK
          </motion.a>
          <motion.a
            href="https://t.me"
            target="_blank"
            className="hover:underline"
            whileHover={{ scale: 1.1 }}
          >
            Telegram
          </motion.a>
        </div>
        <p className="text-sm mt-8 text-[#bbb]">5 минут от метро Спортивная. Часы работы: 08:00 - 22:00</p>
      </section>

      {/* Floating Button */}
      <a
        href="#contact"
        className="fixed bottom-8 right-8 bg-[#FFD700] text-[#041E42] px-6 py-3 rounded-full font-semibold shadow-lg hover:scale-110 transition-all z-50"
      >
        Забронировать визит
      </a>
    </main>
  );
}