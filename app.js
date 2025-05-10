import { useState } from "react";

export default function App() {
  const [activeSection, setActiveSection] = useState("home");

  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-blue-600">Habit Of Words</h1>
          <nav className="space-x-6 hidden md:flex">
            <a href="#home" className="text-gray-600 hover:text-blue-600 transition-colors" onClick={() => setActiveSection("home")}>
              Home
            </a>
            <a href="#about" className="text-gray-600 hover:text-blue-600 transition-colors" onClick={() => setActiveSection("about")}>
              About
            </a>
            <a href="#features" className="text-gray-600 hover:text-blue-600 transition-colors" onClick={() => setActiveSection("features")}>
              Features
            </a>
            <a href="#join" className="text-gray-600 hover:text-blue-600 transition-colors" onClick={() => setActiveSection("join")}>
              Join
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="bg-gradient-to-br from-blue-50 to-indigo-100 py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
            Membaca, Menulis, dan Berkumpul dalam Kebiasaan Kata-Kata
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Komunitas kecil untuk pecinta buku dan penulis jurnal harian.
          </p>
          <a
            href="#join"
            className="inline-block bg-blue-600 text-white font-medium py-3 px-8 rounded-full shadow-md hover:bg-blue-700 transition-transform transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Bergabung Sekarang
          </a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <h3 className="text-3xl font-bold text-center text-gray-800 mb-8">Tentang Kami</h3>
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-gray-600 text-lg mb-4">
                Di <strong>Habit Of Words</strong>, kami percaya bahwa membaca buku dan menjurnal adalah cara terbaik untuk tumbuh secara pribadi dan berbagi makna dengan orang lain.
              </p>
              <p className="text-gray-600 text-lg">
                Setiap bulan kita membahas satu buku bersama, membuat catatan perjalanan batin, dan saling memberikan dukungan lewat tulisan.
              </p>
            </div>
            <div className="rounded-xl overflow-hidden shadow-md">
              <img
                src="https://picsum.photos/seed/books/600/400 "
                alt="Buku dan jurnal"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h3 className="text-3xl font-bold text-center text-gray-800 mb-12">Apa Yang Akan Kamu Dapatkan?</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow hover:shadow-xl transition-shadow duration-300">
              <div className="text-blue-600 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold text-gray-800 mb-2">Buku Bulanan</h4>
              <p className="text-gray-600">
                Setiap bulan kita memilih satu buku untuk dibaca dan didiskusikan bersama.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow hover:shadow-xl transition-shadow duration-300">
              <div className="text-blue-600 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold text-gray-800 mb-2">Jurnal Harian</h4>
              <p className="text-gray-600">
                Catat pikiranmu setiap hari dan bagikan refleksi mingguan bersama komunitas.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow hover:shadow-xl transition-shadow duration-300">
              <div className="text-blue-600 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold text-gray-800 mb-2">Komunitas Hangat</h4>
              <p className="text-gray-600">
                Terhubung dengan orang-orang yang memiliki minat sama dalam membaca dan menulis.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Join Section */}
      <section id="join" className="py-16 bg-blue-600 text-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold mb-4">Siap Mulai Perjalanan Membaca dan Menulis?</h3>
          <p className="text-lg opacity-90 mb-8">
            Bergabunglah dengan komunitas kami di Telegram dan mulailah membaca bersama.
          </p>
          <a
            href="https://t.me/HabitOfWords "
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-blue-600 font-medium py-3 px-8 rounded-full shadow-md hover:bg-blue-50 transition-transform transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-white"
          >
            Bergabung ke Grup Telegram
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-10">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-8">
          <div>
            <h4 className="text-xl font-bold text-blue-400 mb-4">Habit Of Words</h4>
            <p className="text-gray-400">
              Membaca untuk menjadi, bukan hanya untuk tahu.
            </p>
          </div>
          <div>
            <h5 className="font-semibold text-lg mb-4">Navigasi</h5>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#home" className="hover:text-blue-400 transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-blue-400 transition-colors">About</a></li>
              <li><a href="#features" className="hover:text-blue-400 transition-colors">Features</a></li>
              <li><a href="#join" className="hover:text-blue-400 transition-colors">Join</a></li>
            </ul>
          </div>
          <div>
            <h5 className="font-semibold text-lg mb-4">Kontak</h5>
            <p className="text-gray-400 mb-2">Email: admin@habitofwords.id</p>
            <p className="text-gray-400">Telegram: <a href="https://t.me/HabitOfWords " target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">@HabitOfWords</a></p>
          </div>
        </div>
        <div className="text-center mt-8 text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} Habit Of Words. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
