import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import {
  Flower2,
  ArrowLeft,
  X,
  ChevronLeft,
  ChevronRight,
  Images,
  Sparkles,
} from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

/* ------------------------------------------------------------------ */
/*  DATA – organised by year                                           */
/* ------------------------------------------------------------------ */

interface GalleryItem {
  url: string;
  title: string;
  category: string;
  span?: "wide" | "tall" | "normal"; // controls grid span
}

interface YearData {
  year: string;
  label: string;
  tagline: string;
  accentColor: string;
  accentColor2: string;
  photos: GalleryItem[];
}

const galleryData: YearData[] = [
  {
    year: "2025",
    label: "Sneha 2K25",
    tagline: "Where every beat told a story",
    accentColor: "#8B0000",
    accentColor2: "#FF9933",
    photos: [
      {
        url: "https://images.unsplash.com/photo-1585346230722-6b9df46d0d54?w=1080",
        title: "Opening Night Concert",
        category: "Music",
        span: "wide",
      },
      {
        url: "https://images.unsplash.com/photo-1768053917161-34fc3365c9b2?w=1080",
        title: "Classical Dance Finale",
        category: "Dance",
        span: "tall",
      },
      {
        url: "https://images.unsplash.com/photo-1760098571181-705c0f9925fd?w=1080",
        title: "Student Celebration",
        category: "Celebration",
      },
      {
        url: "https://images.unsplash.com/photo-1624703307604-744ec383cbf4?w=1080",
        title: "DJ Night",
        category: "Music",
      },
      {
        url: "https://images.unsplash.com/photo-1724285828991-e996e9cb8503?w=1080",
        title: "Main Stage Lights",
        category: "Stage",
        span: "wide",
      },
      {
        url: "https://images.unsplash.com/photo-1762430815620-fcca603c240c?w=1080",
        title: "Fashion Show",
        category: "Fashion",
      },
      {
        url: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=1080",
        title: "Crowd Energy",
        category: "Crowd",
      },
      {
        url: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=1080",
        title: "Singing Competition",
        category: "Music",
        span: "tall",
      },
      {
        url: "https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=1080",
        title: "Traditional Art",
        category: "Art",
      },
      {
        url: "https://images.unsplash.com/photo-1531058020387-3be344556be6?w=1080",
        title: "Prize Distribution",
        category: "Awards",
      },
    ],
  },
  {
    year: "2024",
    label: "Sneha 2K24",
    tagline: "A symphony of colours and dreams",
    accentColor: "#1a3a6b",
    accentColor2: "#0ea5e9",
    photos: [
      {
        url: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=1080",
        title: "Music Fest Night",
        category: "Music",
        span: "wide",
      },
      {
        url: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1080",
        title: "Cultural Parade",
        category: "Culture",
        span: "tall",
      },
      {
        url: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?w=1080",
        title: "Group Performance",
        category: "Dance",
      },
      {
        url: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=1080",
        title: "DJ Set",
        category: "Music",
      },
      {
        url: "https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?w=1080",
        title: "Night Concert",
        category: "Stage",
        span: "wide",
      },
      {
        url: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1080",
        title: "Audience Cheer",
        category: "Crowd",
      },
      {
        url: "https://images.unsplash.com/photo-1563841930606-67e2bce48b78?w=1080",
        title: "Stage Decoration",
        category: "Stage",
        span: "tall",
      },
      {
        url: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=1080",
        title: "Band Performance",
        category: "Music",
      },
      {
        url: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=1080",
        title: "Drama Night",
        category: "Drama",
      },
    ],
  },
  {
    year: "2023",
    label: "Sneha 2K23",
    tagline: "Echoes of joy that last forever",
    accentColor: "#166534",
    accentColor2: "#22c55e",
    photos: [
      {
        url: "https://images.unsplash.com/photo-1464375117522-1311d6a5b81f?w=1080",
        title: "Inauguration",
        category: "Event",
        span: "wide",
      },
      {
        url: "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?w=1080",
        title: "Dance Showcase",
        category: "Dance",
        span: "tall",
      },
      {
        url: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=1080",
        title: "Student Flash Mob",
        category: "Dance",
      },
      {
        url: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=1080",
        title: "Festival Lights",
        category: "Stage",
      },
      {
        url: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1080",
        title: "Guest Speech",
        category: "Awards",
        span: "wide",
      },
      {
        url: "https://images.unsplash.com/photo-1598387993441-a364f854cfbd?w=1080",
        title: "Acoustic Night",
        category: "Music",
      },
      {
        url: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=1080",
        title: "Rock Concert",
        category: "Music",
        span: "tall",
      },
      {
        url: "https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?w=1080",
        title: "Closing Ceremony",
        category: "Award",
      },
    ],
  },
];

/* ------------------------------------------------------------------ */
/*  CATEGORY badge colours                                             */
/* ------------------------------------------------------------------ */
const categoryColor: Record<string, string> = {
  Music: "#8B0000",
  Dance: "#FF9933",
  Fashion: "#7C3AED",
  Art: "#16A34A",
  Drama: "#0ea5e9",
  Stage: "#D4AF37",
  Crowd: "#475569",
  Awards: "#FF9933",
  Award: "#FF9933",
  Celebration: "#8B0000",
  Culture: "#16A34A",
  Event: "#1a3a6b",
  Default: "#555",
};

/* ------------------------------------------------------------------ */
/*  MAIN PAGE                                                          */
/* ------------------------------------------------------------------ */
export default function GalleryPage() {
  const navigate = useNavigate();
  const [activeYear, setActiveYear] = useState("2025");
  const [lightbox, setLightbox] = useState<{
    open: boolean;
    index: number;
  }>({ open: false, index: 0 });

  const activeData = galleryData.find((d) => d.year === activeYear)!;
  const photos = activeData.photos;

  // keyboard navigation in lightbox
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (!lightbox.open) return;
      if (e.key === "ArrowRight")
        setLightbox((l) => ({ ...l, index: (l.index + 1) % photos.length }));
      if (e.key === "ArrowLeft")
        setLightbox((l) => ({
          ...l,
          index: (l.index - 1 + photos.length) % photos.length,
        }));
      if (e.key === "Escape") setLightbox({ open: false, index: 0 });
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [lightbox.open, photos.length]);

  // lock body scroll when lightbox is open
  useEffect(() => {
    document.body.style.overflow = lightbox.open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [lightbox.open]);

  return (
    <div
      className="min-h-screen"
      style={{ fontFamily: "Poppins, sans-serif", backgroundColor: "#FFF8E7" }}
    >
      {/* -------- HERO HEADER -------- */}
      <div
        className="relative overflow-hidden py-20 px-6 text-center"
        style={{
          background: `linear-gradient(135deg, #1a0000 0%, #8B0000 40%, #FF9933 100%)`,
        }}
      >
        {/* Mandala rings */}
        {[220, 170, 120].map((r, i) => (
          <svg
            key={i}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-10 pointer-events-none"
            width={r * 2}
            height={r * 2}
            style={{ zIndex: 0 }}
          >
            <circle cx={r} cy={r} r={r - 2} stroke="white" strokeWidth="1.5" fill="none" />
          </svg>
        ))}

        {/* Back button */}
        <button
          onClick={() => navigate("/")}
          className="absolute top-6 left-6 flex items-center gap-2 text-white/80 hover:text-white transition-colors text-sm font-medium z-10"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </button>

        <div className="relative z-10">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Images className="w-8 h-8 text-white/80" />
            <span
              className="text-sm font-semibold uppercase tracking-widest px-4 py-1 rounded-full"
              style={{ backgroundColor: "rgba(255,255,255,0.15)", color: "white" }}
            >
              Highlights & Memories
            </span>
          </div>
          <h1
            className="text-5xl md:text-7xl font-bold text-white mb-4"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            Our Gallery
          </h1>
          <p className="text-white/70 text-lg max-w-lg mx-auto">
            Relive the magic — every moment, every emotion, every memory of Sneha
          </p>
        </div>
      </div>

      {/* -------- YEAR TABS -------- */}
      <div
        className="sticky top-0 z-30 py-5 px-6 flex flex-wrap justify-center gap-3 shadow-sm"
        style={{
          backgroundColor: "rgba(255,248,231,0.97)",
          backdropFilter: "blur(10px)",
          borderBottom: "2px solid #D4AF3755",
        }}
      >
        {galleryData.map((yd) => {
          const active = yd.year === activeYear;
          return (
            <button
              key={yd.year}
              onClick={() => setActiveYear(yd.year)}
              className="flex items-center gap-2 px-6 py-2.5 rounded-full font-semibold text-sm transition-all duration-300 shadow-sm"
              style={
                active
                  ? {
                      background: `linear-gradient(to right, ${yd.accentColor}, ${yd.accentColor2})`,
                      color: "white",
                      transform: "scale(1.06)",
                      boxShadow: `0 4px 20px ${yd.accentColor}55`,
                    }
                  : {
                      backgroundColor: "white",
                      color: "#555",
                      border: "2px solid #D4AF3755",
                    }
              }
            >
              <Sparkles className="w-4 h-4" />
              {yd.label}
            </button>
          );
        })}
      </div>

      {/* -------- YEAR SUB-HEADER -------- */}
      <div
        className="text-center py-12 px-6"
        style={{ borderBottom: "1px solid #D4AF3730" }}
      >
        <h2
          className="text-4xl md:text-5xl font-bold mb-2"
          style={{
            fontFamily: "Playfair Display, serif",
            background: `linear-gradient(to right, ${activeData.accentColor}, ${activeData.accentColor2})`,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          {activeData.label}
        </h2>
        <p className="text-base" style={{ color: "#888" }}>
          {activeData.tagline}
        </p>
        <div className="flex items-center justify-center gap-3 mt-5">
          <div className="w-16 h-0.5" style={{ background: `linear-gradient(to right, transparent, ${activeData.accentColor})` }} />
          <Flower2 className="w-5 h-5" style={{ color: activeData.accentColor2 }} />
          <div className="w-16 h-0.5" style={{ background: `linear-gradient(to left, transparent, ${activeData.accentColor})` }} />
        </div>
      </div>

      {/* -------- MASONRY GRID -------- */}
      <div className="max-w-7xl mx-auto px-6 py-14">
        <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-5 space-y-5">
          {photos.map((photo, index) => {
            const color = categoryColor[photo.category] ?? categoryColor.Default;
            return (
              <div
                key={`${activeYear}-${index}`}
                className="break-inside-avoid group relative overflow-hidden rounded-2xl cursor-pointer shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
                style={{ border: `2px solid ${activeData.accentColor}33` }}
                onClick={() => setLightbox({ open: true, index })}
              >
                {/* Image */}
                <ImageWithFallback
                  src={photo.url}
                  alt={photo.title}
                  className={`w-full object-cover transition-transform duration-500 group-hover:scale-105 ${
                    photo.span === "wide"
                      ? "h-64"
                      : photo.span === "tall"
                      ? "h-96"
                      : "h-56"
                  }`}
                />

                {/* Dark gradient overlay on hover */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.1) 60%, transparent 100%)",
                  }}
                />

                {/* Category pill */}
                <span
                  className="absolute top-3 left-3 text-xs font-bold text-white px-3 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ backgroundColor: color }}
                >
                  {photo.category}
                </span>

                {/* Title */}
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-2 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                  <p
                    className="text-white font-bold text-base"
                    style={{ fontFamily: "Playfair Display, serif" }}
                  >
                    {photo.title}
                  </p>
                </div>

                {/* Zoom hint icon */}
                <div className="absolute top-3 right-3 w-8 h-8 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ backgroundColor: "rgba(255,255,255,0.2)", backdropFilter: "blur(4px)" }}>
                  <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z" />
                  </svg>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* -------- BOTTOM DIVIDER -------- */}
      <div className="flex items-center justify-center gap-4 pb-16 px-6">
        <div className="flex-1 h-px" style={{ background: "linear-gradient(to right, transparent, #D4AF37)" }} />
        <Flower2 className="w-6 h-6" style={{ color: "#FF9933" }} />
        <div className="flex-1 h-px" style={{ background: "linear-gradient(to left, transparent, #D4AF37)" }} />
      </div>

      {/* -------- LIGHTBOX -------- */}
      {lightbox.open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center"
          style={{ backgroundColor: "rgba(0,0,0,0.92)" }}
          onClick={() => setLightbox({ open: false, index: 0 })}
        >
          {/* Close */}
          <button
            className="absolute top-5 right-5 w-10 h-10 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition"
            onClick={() => setLightbox({ open: false, index: 0 })}
          >
            <X className="w-6 h-6" />
          </button>

          {/* Prev */}
          <button
            className="absolute left-4 md:left-8 w-12 h-12 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition"
            onClick={(e) => {
              e.stopPropagation();
              setLightbox((l) => ({
                ...l,
                index: (l.index - 1 + photos.length) % photos.length,
              }));
            }}
          >
            <ChevronLeft className="w-7 h-7" />
          </button>

          {/* Image */}
          <div
            className="relative max-w-5xl max-h-[85vh] w-full mx-16 rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={photos[lightbox.index].url}
              alt={photos[lightbox.index].title}
              className="w-full h-full object-contain max-h-[80vh]"
            />
            {/* Caption bar */}
            <div
              className="absolute bottom-0 left-0 right-0 px-6 py-4 flex items-center justify-between"
              style={{ background: "linear-gradient(to top, rgba(0,0,0,0.85), transparent)" }}
            >
              <div>
                <p className="text-white font-bold text-lg" style={{ fontFamily: "Playfair Display, serif" }}>
                  {photos[lightbox.index].title}
                </p>
                <span
                  className="text-xs text-white/70 font-medium px-2 py-0.5 rounded-full mt-1 inline-block"
                  style={{ backgroundColor: categoryColor[photos[lightbox.index].category] ?? "#555" }}
                >
                  {photos[lightbox.index].category}
                </span>
              </div>
              <span className="text-white/50 text-sm">
                {lightbox.index + 1} / {photos.length}
              </span>
            </div>
          </div>

          {/* Next */}
          <button
            className="absolute right-4 md:right-8 w-12 h-12 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition"
            onClick={(e) => {
              e.stopPropagation();
              setLightbox((l) => ({
                ...l,
                index: (l.index + 1) % photos.length,
              }));
            }}
          >
            <ChevronRight className="w-7 h-7" />
          </button>

          {/* Dot indicators */}
          <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2">
            {photos.map((_, i) => (
              <button
                key={i}
                className="w-2 h-2 rounded-full transition-all duration-200"
                style={{
                  backgroundColor: i === lightbox.index ? "white" : "rgba(255,255,255,0.3)",
                  transform: i === lightbox.index ? "scale(1.4)" : "scale(1)",
                }}
                onClick={(e) => {
                  e.stopPropagation();
                  setLightbox((l) => ({ ...l, index: i }));
                }}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
