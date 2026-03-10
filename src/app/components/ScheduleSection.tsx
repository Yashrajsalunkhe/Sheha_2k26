import { Flower2 } from 'lucide-react';

export function ScheduleSection() {
  return (
    <section id="schedule" className="py-24 px-6" style={{ backgroundColor: 'white' }}>
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
            Event Schedule
          </h2>
          <p className="text-lg" style={{ color: "#666" }}>
            Three days of cultural celebration and festive joy
          </p>
        </div>

        {/* Coming Soon Message */}
        <div className="text-center">
          <div className="rounded-3xl p-16 mx-auto max-w-2xl transition-all duration-300 hover:shadow-2xl border-2" style={{
            backgroundColor: '#FFF8E7',
            borderColor: '#D4AF37'
          }}>
            <div className="mb-8">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full flex items-center justify-center shadow-lg" style={{
                background: 'linear-gradient(to right, #8B0000, #FF9933)'
              }}>
                <Flower2 className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-3xl font-bold mb-4" style={{
                fontFamily: "Playfair Display, serif",
                color: "#8B0000"
              }}>
                Schedule Will Be Announced Soon
              </h3>
              <p className="text-lg" style={{ color: "#666" }}>
                Stay tuned for the complete event schedule. We're putting together an amazing lineup of cultural events, competitions, and celebrations for you!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
