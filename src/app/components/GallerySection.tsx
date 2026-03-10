import { ImageWithFallback } from './figma/ImageWithFallback';
import { Flower2, Images } from 'lucide-react';
import { useNavigate } from 'react-router';

const galleryImages = [
  {
    url: 'https://images.unsplash.com/photo-1585346230722-6b9df46d0d54?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xsZWdlJTIwZmVzdCUyMGNvbmNlcnQlMjBjcm93ZCUyMGVuZXJneXxlbnwxfHx8fDE3NzE0NzkxNjl8MA&ixlib=rb-4.1.0&q=80&w=1080',
    title: 'Cultural Concert'
  },
  {
    url: 'https://images.unsplash.com/photo-1768053917161-34fc3365c9b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdXNpYyUyMGZlc3RpdmFsJTIwZGFuY2UlMjBsaWdodHN8ZW58MXx8fHwxNzcxNDc5MTY4fDA&ixlib=rb-4.1.0&q=80&w=1080',
    title: 'Dance Festival'
  },
  {
    url: 'https://images.unsplash.com/photo-1760098571181-705c0f9925fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xsZWdlJTIwc3R1ZGVudHMlMjBjZWxlYnJhdGlvbiUyMGV2ZW50fGVufDF8fHx8MTc3MTQ3OTE2OXww&ixlib=rb-4.1.0&q=80&w=1080',
    title: 'Student Celebration'
  },
  {
    url: 'https://images.unsplash.com/photo-1624703307604-744ec383cbf4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxESiUyMHBlcmZvcm1hbmNlJTIwZWxlY3Ryb25pYyUyMG11c2ljfGVufDF8fHx8MTc3MTQ3OTE2OXww&ixlib=rb-4.1.0&q=80&w=1080',
    title: 'Musical Performance'
  },
  {
    url: 'https://images.unsplash.com/photo-1724285828991-e996e9cb8503?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25jZXJ0JTIwc3RhZ2UlMjBjb2xvcmZ1bCUyMGxpZ2h0c3xlbnwxfHx8fDE3NzE0NzkxNzB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    title: 'Main Stage'
  },
  {
    url: 'https://images.unsplash.com/photo-1762430815620-fcca603c240c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwc2hvdyUyMHJ1bndheSUyMG1vZGVsfGVufDF8fHx8MTc3MTQ3OTE3MHww&ixlib=rb-4.1.0&q=80&w=1080',
    title: 'Fashion Runway'
  }
];

export function GallerySection() {
  const navigate = useNavigate();
  return (
    <section id="gallery" className="py-24 px-6" style={{ backgroundColor: 'white' }}>
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
            Highlights & Memories
          </h2>
          <p className="text-lg" style={{ color: "#666" }}>
            Relive the magic from our previous celebrations
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-3xl h-80 transition-all duration-300 hover:shadow-2xl border-4"
              style={{
                borderColor: '#D4AF37'
              }}
            >
              <ImageWithFallback
                src={image.url}
                alt={image.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              {/* Warm tone overlay */}
              <div className="absolute inset-0" style={{
                background: 'linear-gradient(to bottom, transparent, rgba(139, 0, 0, 0.3))'
              }}></div>
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{
                background: 'linear-gradient(to top, rgba(139, 0, 0, 0.9), transparent)'
              }}>
                <div className="absolute bottom-6 left-6 right-6">
                  <p className="text-white font-bold text-xl" style={{
                    fontFamily: "Playfair Display, serif"
                  }}>
                    {image.title}
                  </p>
                  <div className="w-12 h-1 mt-2" style={{
                    background: 'linear-gradient(to right, #FFD700, transparent)'
                  }}></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-14">
          <button
            onClick={() => navigate('/gallery')}
            className="inline-flex items-center gap-3 px-10 py-4 rounded-2xl text-white font-bold text-lg shadow-lg hover:scale-105 transition-transform duration-200"
            style={{ background: 'linear-gradient(to right, #8B0000, #FF9933)' }}
          >
            <Images className="w-5 h-5" />
            View Full Gallery
          </button>
        </div>
      </div>
    </section>
  );
}
