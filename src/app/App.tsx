import {
  Calendar,
  MapPin,
  Sparkles,
  ArrowRight,
  Menu,
  X,
  Flower2,
} from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router";
import { EventsSection } from "./components/EventsSection";
import { ScheduleSection } from "./components/ScheduleSection";
import { SpeakersSection } from "./components/SpeakersSection";
import { GallerySection } from "./components/GallerySection";
import { SponsorsSection } from "./components/SponsorsSection";
import { Footer } from "./components/Footer";
import { ImageWithFallback } from "./components/figma/ImageWithFallback";

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
    setMobileMenuOpen(false);
  };

  return (
    <div
      className="min-h-screen"
      style={{
        fontFamily: "Poppins, sans-serif",
        backgroundColor: "#FFF8E7",
      }}
    >
      {/* ---------------- NAVIGATION ---------------- */}
      <nav
        className="fixed top-0 w-full z-50 backdrop-blur-md border-b"
        style={{
          backgroundColor: "rgba(255,248,231,0.95)",
          borderColor: "#D4AF37",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <Flower2
              className="w-7 h-7"
              style={{ color: "#8B0000" }}
            />
            <h1
              className="text-3xl font-bold"
              style={{
                fontFamily: "Playfair Display, serif",
                background:
                  "linear-gradient(to right,#8B0000,#FF9933,#D4AF37)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Sneha 2K26
            </h1>
          </div>

          <div className="hidden md:flex gap-8 font-medium">
            {["home", "about", "events", "schedule"].map(
              (item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  style={{ color: "#8B0000" }}
                  className="hover:opacity-70"
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </button>
              ),
            )}
            <button
              onClick={() => navigate("/registration")}
              className="px-6 py-2 rounded-full text-white font-semibold"
              style={{
                background:
                  "linear-gradient(to right,#8B0000,#FF9933)",
              }}
            >
              Register
            </button>
          </div>

          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* ---------------- HERO SECTION ---------------- */}
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center px-6 pt-24 overflow-hidden"
      >
        {/* Decorative Mandala Background */}
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <svg viewBox="0 0 500 500" className="w-full h-full">
            <circle
              cx="250"
              cy="250"
              r="180"
              stroke="#8B0000"
              strokeWidth="2"
              fill="none"
            />
            <circle
              cx="250"
              cy="250"
              r="140"
              stroke="#FF9933"
              strokeWidth="2"
              fill="none"
            />
            <circle
              cx="250"
              cy="250"
              r="100"
              stroke="#D4AF37"
              strokeWidth="2"
              fill="none"
            />
          </svg>
        </div>

        {/* LEFT CULTURAL IMAGE */}
        <div className="hidden xl:flex absolute left-16 top-1/2 -translate-y-1/2 flex-col gap-8 z-10">
          <div
            className="w-64 h-80 rounded-[40px] overflow-hidden shadow-2xl border-4"
            style={{ borderColor: "#D4AF37" }}
          >
            <ImageWithFallback
              src="https://www.happiesthealth.com/wp-content/uploads/2022/11/Dancing-1-to-a-classical-fitness-mantra-Article.jpg"
              alt="Indian Classical Dance"
              className="w-full h-full object-cover hover:scale-110 transition duration-700"
            />
          </div>

          <div
            className="w-52 h-64 rounded-[30px] overflow-hidden shadow-xl border-4 ml-16"
            style={{ borderColor: "#FF9933" }}
          >
            <ImageWithFallback
              src="https://www.shutterstock.com/shutterstock/photos/293436335/display_1500/stock-photo-tabla-drums-and-bells-for-indian-dancing-on-wooden-background-293436335.jpg"
              alt="Rangoli Art"
              className="w-full h-full object-cover hover:scale-110 transition duration-700"
            />
          </div>
        </div>

        {/* RIGHT CULTURAL IMAGE */}
        <div className="hidden xl:flex absolute right-16 top-1/2 -translate-y-1/2 flex-col gap-8 z-10">
          <div
            className="w-64 h-80 rounded-[40px] overflow-hidden shadow-2xl border-4"
            style={{ borderColor: "#8B0000" }}
          >
            <ImageWithFallback
              src="https://static.vecteezy.com/system/resources/thumbnails/069/179/363/small/vintage-mic-on-stage-nightclub-live-music-photo.jpg"
              alt="Indian Cultural Performance"
              className="w-full h-full object-cover hover:scale-110 transition duration-700"
            />
          </div>

          <div
            className="w-52 h-64 rounded-[30px] overflow-hidden shadow-xl border-4 mr-16"
            style={{ borderColor: "#D4AF37" }}
          >
            <ImageWithFallback
              src="https://images.stockcake.com/public/1/3/7/13743f2d-d324-4974-9eb4-7b76296876c2_large/dancing-through-light-stockcake.jpg"
              alt="Traditional Celebration"
              className="w-full h-full object-cover hover:scale-110 transition duration-700"
            />
          </div>
        </div>

        {/* CENTER CONTENT */}
        <div className="relative z-20 text-center max-w-4xl">
          <div
            className="inline-flex items-center gap-2 px-6 py-2 rounded-full border mb-8"
            style={{
              borderColor: "#D4AF37",
              backgroundColor: "white",
            }}
          >
            <Flower2 style={{ color: "#FF9933" }} />
            <span style={{ color: "#8B0000" }}>
              A Celebration of Culture & Talent
            </span>
          </div>

          <h1
            className="text-7xl md:text-9xl font-bold mb-6"
            style={{
              fontFamily: "Playfair Display, serif",
              background:
                "linear-gradient(to right,#8B0000,#FF9933,#D4AF37)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Sneha 2K26
          </h1>

          <p
            className="text-2xl md:text-3xl mb-12"
            style={{ color: "#8B0000" }}
          >
            The Grand College Cultural Fest
          </p>

          <div className="flex flex-wrap justify-center gap-6 mb-12">
            <div
              className="px-6 py-4 rounded-2xl shadow-lg border-2 bg-white"
              style={{ borderColor: "#D4AF37" }}
            >
              <Calendar style={{ color: "#8B0000" }} />
              <div className="font-semibold mt-1">
                March 20–22, 2026
              </div>
            </div>

            <div
              className="px-6 py-4 rounded-2xl shadow-lg border-2 bg-white"
              style={{ borderColor: "#FF9933" }}
            >
              <MapPin style={{ color: "#FF9933" }} />
              <div className="font-semibold mt-1">
                ADCET, Ashta
              </div>
            </div>
          </div>

          <button
            onClick={() => navigate("/registration")}
            className="px-10 py-4 rounded-2xl text-white font-bold shadow-lg hover:scale-105 transition"
            style={{
              background:
                "linear-gradient(to right,#8B0000,#FF9933)",
            }}
          >
            Register Now →
          </button>
        </div>
      </section>

      {/* Remaining Sections */}
      <EventsSection />
      <ScheduleSection />
      <SpeakersSection />
      <GallerySection />
      <SponsorsSection />
      <Footer />
    </div>
  );
}