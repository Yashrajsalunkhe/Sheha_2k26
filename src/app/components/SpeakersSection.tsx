import { ImageWithFallback } from './figma/ImageWithFallback';
import { Flower2 } from 'lucide-react';

const speakers = [
  {
    name: 'Arjun Mehta',
    role: 'Tech Entrepreneur & Speaker',
    image: 'https://images.unsplash.com/photo-1738750908048-14200459c3c9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMG1hbGUlMjBzcGVha2VyJTIwcG9ydHJhaXQlMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzcxNDc5MTcwfDA&ixlib=rb-4.1.0&q=80&w=1080'
  },
  {
    name: 'Priya Sharma',
    role: 'Creative Director & Designer',
    image: 'https://images.unsplash.com/photo-1600783486418-d366cce3ccbd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMGZlbWFsZSUyMGVudHJlcHJlbmV1ciUyMHBvcnRyYWl0fGVufDF8fHx8MTc3MTQ3OTE3MXww&ixlib=rb-4.1.0&q=80&w=1080'
  },
  {
    name: 'Ravi Kumar',
    role: 'Classical Musician & Composer',
    image: 'https://images.unsplash.com/photo-1693835777292-cf103dcd2324?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMG1hbGUlMjBtdXNpY2lhbiUyMGFydGlzdCUyMHBvcnRyYWl0fGVufDF8fHx8MTc3MTQ3OTE3MXww&ixlib=rb-4.1.0&q=80&w=1080'
  }
];

export function SpeakersSection() {
  return (
    <section id="speakers" className="py-24 px-6" style={{ backgroundColor: '#FFF8E7' }}>
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="w-16 h-1" style={{ background: "linear-gradient(to right, transparent, #D4AF37)" }}></div>
            <Flower2 className="w-6 h-6" style={{ color: "#FF9933" }} />
            <div className="w-16 h-1" style={{ background: "linear-gradient(to left, transparent, #D4AF37)" }}></div>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-4" style={{
            fontFamily: "Playfair Display, serif",
            color: "#8B0000"
          }}>
            Guest Performers
          </h2>
          <p className="text-lg" style={{ color: "#666" }}>
            Meet the inspiring personalities joining us at Sneha 2K26
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {speakers.map((speaker, index) => (
            <div
              key={index}
              className="group relative rounded-3xl overflow-hidden transition-all duration-300 hover:shadow-2xl"
              style={{
                border: '4px solid #D4AF37'
              }}
            >
              <div className="relative h-80 overflow-hidden">
                <ImageWithFallback
                  src={speaker.image}
                  alt={speaker.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0" style={{
                  background: 'linear-gradient(to top, rgba(139, 0, 0, 0.9), rgba(139, 0, 0, 0.3), transparent)'
                }}></div>
                
                {/* Decorative Corner */}
                <div className="absolute top-4 right-4">
                  <Flower2 className="w-8 h-8 text-white opacity-80" />
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <h3 className="text-2xl font-bold text-white mb-2" style={{
                  fontFamily: "Playfair Display, serif"
                }}>
                  {speaker.name}
                </h3>
                <p className="font-medium" style={{ color: '#FFD700' }}>
                  {speaker.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
