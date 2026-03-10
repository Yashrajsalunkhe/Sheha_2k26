import { Music, Code, Shirt, Gamepad2, Drama, Flower2 } from 'lucide-react';

const events = [
  {
    icon: Music,
    title: 'Dance',
    description: 'Experience the vibrant rhythms of traditional and contemporary dance forms.',
    borderColor: '#8B0000',
    bgColor: '#FFF8E7'
  },
  {
    icon: Shirt,
    title: 'Fashion Show',
    description: 'Showcase fusion of traditional and modern fashion on the grand runway.',
    borderColor: '#1E3A8A',
    bgColor: '#FFF8E7'
  },
  {
    icon: Music,
    title: 'Singing & Instrumental',
    description: 'Mesmerizing performances of classical vocal and instrumental music traditions.',
    borderColor: '#FF9933',
    bgColor: 'white'
  },
  
  {
    icon: Code,
    title: 'Art Exhibition',
    description: 'Experience a vibrant display of visual arts, including paintings, sculptures, and installations.',
    borderColor: '#D4AF37',
    bgColor: 'white'
  },
  {
    icon: Drama,
    title: 'Drama & Theatre',
    description: 'Experience compelling storytelling through powerful theatrical performances.',
    borderColor: '#8B0000',
    bgColor: '#FFF8E7'
  },
  {
    icon: Gamepad2,
    title: 'Public Speaking',
    description: 'Engage in thought-provoking discussions and eloquent speeches on cultural topics.',
    borderColor: '#FF9933',
    bgColor: 'white'
  }
];

export function EventsSection() {
  return (
    <section id="events" className="py-24 px-6" style={{ backgroundColor: '#FFF8E7' }}>
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
            Events & Competitions
          </h2>
          <p className="text-lg" style={{ color: "#666" }}>
            Celebrate talent through diverse cultural and technical events
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, index) => {
            const Icon = event.icon;
            return (
              <div
                key={index}
                className="group relative rounded-3xl p-8 transition-all duration-300 hover:scale-105 hover:shadow-2xl border-3"
                style={{
                  backgroundColor: event.bgColor,
                  border: `3px solid ${event.borderColor}`,
                }}
              >
                {/* Decorative Corner Element */}
                <div className="absolute top-4 right-4 opacity-20">
                  <Flower2 className="w-12 h-12" style={{ color: event.borderColor }} />
                </div>

                <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg" style={{
                  background: `linear-gradient(to bottom right, ${event.borderColor}, #D4AF37)`
                }}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-3" style={{
                  color: "#8B0000",
                  fontFamily: "Playfair Display, serif"
                }}>
                  {event.title}
                </h3>
                <p className="leading-relaxed" style={{ color: "#333" }}>
                  {event.description}
                </p>

                {/* Decorative Bottom Border */}
                <div className="absolute bottom-0 left-0 right-0 h-1 rounded-b-3xl" style={{
                  background: `linear-gradient(to right, transparent, ${event.borderColor}, transparent)`
                }}></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
