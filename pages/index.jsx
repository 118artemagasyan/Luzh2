import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="font-sans text-[#041E42] bg-white">
      {/* Навигация */}
      <header className="absolute w-full top-0 flex justify-between items-center p-6 z-20">
        <h1 className="text-white text-2xl font-bold">Luzhniki Beach</h1>
        <nav className="space-x-8">
          <a href="#" className="text-white hover:underline">Главная</a>
          <a href="#gallery" className="text-white hover:underline">Галерея</a>
          <a href="#contacts" className="text-white hover:underline">Контакты</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative h-screen w-full overflow-hidden">
        <img
          src="https://www.luzhniki.ru/media/images/DJI_0479.original.jpg"
          alt="Beach Overview"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />

        <div className="absolute inset-0 flex flex-col justify-center items-center z-10 text-white text-center px-4">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">Открой Лето в Лужниках</h2>
          <button className="bg-[#FFD700] text-[#041E42] px-8 py-4 rounded-full font-semibold text-lg hover:scale-110 transition-transform">
            Узнать больше
          </button>
        </div>
      </section>

      {/* Галерея */}
      <section id="gallery" className="py-20 px-6 md:px-12 bg-gray-100">
        <h3 className="text-3xl md:text-5xl text-center mb-12 font-bold">Галерея</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            "https://www.luzhniki.ru/media/images/Frame_2.original.jpg",
            "https://www.luzhniki.ru/media/images/Frame_3.original.jpg",
            "https://www.luzhniki.ru/media/images/Frame_4.original.jpg",
            "https://www.luzhniki.ru/media/images/Frame_5.original.jpg",
            "https://www.luzhniki.ru/media/images/Frame_6.original.jpg",
            "https://www.luzhniki.ru/media/images/Frame_7.original.jpg",
            "https://www.luzhniki.ru/media/images/IMG_9279-2.original.jpg",
            "https://www.luzhniki.ru/media/images/P21A5400_GefowJm.original.jpg",
            "https://www.luzhniki.ru/media/images/P21A5356.original.jpg",
          ].map((src, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="overflow-hidden rounded-2xl shadow-lg"
            >
              <img src={src} alt={`Gallery ${index}`} className="w-full h-64 object-cover" />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Контакты */}
      <section id="contacts" className="py-20 px-6 md:px-12 bg-[#041E42] text-white text-center">
        <h3 className="text-3xl md:text-5xl mb-8 font-bold">Контакты</h3>
        <p className="mb-4">5 минут от метро "Спортивная"</p>
        <p className="mb-4">Парковка на территории</p>
        <div className="flex justify-center space-x-6 mb-6">
          <a href="#" className="underline">Instagram</a>
          <a href="#" className="underline">VK</a>
          <a href="#" className="underline">Telegram</a>
        </div>
        <p className="text-sm">Часы работы: 08:00 - 22:00</p>
      </section>
    </div>
  );
}
