import { Flower2 } from 'lucide-react';

const sponsors = [
  { name: 'TechCorp', tier: 'platinum' },
  { name: 'CloudHost', tier: 'platinum' },
  { name: 'DesignHub', tier: 'gold' },
  { name: 'CodeAcademy', tier: 'gold' },
  { name: 'MusicBox', tier: 'silver' },
  { name: 'FashionWeek', tier: 'silver' },
  { name: 'GameZone', tier: 'silver' },
  { name: 'EduTech', tier: 'silver' }
];

export function SponsorsSection() {
  return (
    <section id="sponsors" className="py-24 px-6" style={{ backgroundColor: '#FFF8E7' }}>
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          {/* Decorative Gold Divider */}
          <div className="flex items-center justify-center mb-8">
            <div className="flex-1 h-0.5" style={{ 
              background: 'linear-gradient(to right, transparent, #D4AF37, transparent)'
            }}></div>
          </div>
          
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="w-16 h-1" style={{ background: "linear-gradient(to right, transparent, #D4AF37)" }}></div>
            <Flower2 className="w-6 h-6" style={{ color: "#FF9933" }} />
            <div className="w-16 h-1" style={{ background: "linear-gradient(to left, transparent, #D4AF37)" }}></div>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold mb-4" style={{
            fontFamily: "Playfair Display, serif",
            color: "#8B0000"
          }}>
            Our Sponsors
          </h2>
          <p className="text-lg" style={{ color: "#666" }}>
            Powered by amazing partners who make this celebration possible
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {sponsors.map((sponsor, index) => (
            <div
              key={index}
              className="rounded-3xl p-8 flex items-center justify-center transition-all duration-300 hover:scale-105 shadow-md hover:shadow-xl border-2"
              style={{
                backgroundColor: 'white',
                borderColor: '#D4AF37'
              }}
            >
              <div className="text-center">
                <div className="w-32 h-32 mx-auto mb-4 rounded-2xl flex items-center justify-center border-2 shadow-lg" style={{
                  background: 'linear-gradient(to bottom right, #FFF8E7, white)',
                  borderColor: '#FF9933'
                }}>
                  <span className="text-5xl font-bold" style={{
                    fontFamily: "Playfair Display, serif",
                    background: 'linear-gradient(to right, #8B0000, #FF9933)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent'
                  }}>
                    {sponsor.name[0]}
                  </span>
                </div>
                <p className="font-bold mb-1" style={{ color: '#8B0000' }}>
                  {sponsor.name}
                </p>
                <p className="text-sm capitalize font-medium" style={{ color: '#D4AF37' }}>
                  {sponsor.tier}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
