import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, Flower2 } from 'lucide-react';

export function Footer() {
  return (
    <footer className="border-t-4 py-12 px-6" style={{
      backgroundColor: '#FFF8E7',
      borderColor: '#D4AF37'
    }}>
      {/* Decorative SVG Border on Top */}
      <div className="max-w-7xl mx-auto mb-8">
        <svg className="w-full h-12" viewBox="0 0 800 50" preserveAspectRatio="xMidYMid meet">
          <path
            d="M0,25 Q100,15 200,25 T400,25 T600,25 T800,25"
            fill="none"
            stroke="#D4AF37"
            strokeWidth="2"
          />
          <circle cx="200" cy="25" r="5" fill="#FF9933" />
          <circle cx="400" cy="25" r="5" fill="#8B0000" />
          <circle cx="600" cy="25" r="5" fill="#FF9933" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Flower2 className="w-8 h-8" style={{ color: '#FF9933' }} />
              <h3 className="text-3xl font-bold" style={{ 
                fontFamily: "Playfair Display, serif",
                background: "linear-gradient(to right, #8B0000, #FF9933)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent"
              }}>
                Sneha 2K26
              </h3>
            </div>
            <p className="leading-relaxed" style={{ color: '#666' }}>
              The grand annual cultural celebration bringing together tradition, creativity, and youthful energy. Join us for an unforgettable experience!
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-lg" style={{ 
              color: '#8B0000',
              fontFamily: 'Playfair Display, serif'
            }}>
              Contact Us
            </h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3" style={{ color: '#666' }}>
                <Mail className="w-5 h-5" style={{ color: '#FF9933' }} />
                <span>sneha2k26@adcet.edu</span>
              </div>
              <div className="flex items-center gap-3" style={{ color: '#666' }}>
                <Phone className="w-5 h-5" style={{ color: '#FF9933' }} />
                <span>+91 98765 43210</span>
              </div>
              <div className="flex items-center gap-3" style={{ color: '#666' }}>
                <MapPin className="w-5 h-5" style={{ color: '#FF9933' }} />
                <span>ADCET, Ashta, Maharashtra</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-lg" style={{ 
              color: '#8B0000',
              fontFamily: 'Playfair Display, serif'
            }}>
              Follow Us
            </h4>
            <div className="flex gap-4">
              <a href="#" className="w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 border-2 shadow-md" style={{
                backgroundColor: 'white',
                borderColor: '#D4AF37'
              }}>
                <Facebook className="w-5 h-5" style={{ color: '#8B0000' }} />
              </a>
              <a href="#" className="w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 border-2 shadow-md" style={{
                backgroundColor: 'white',
                borderColor: '#D4AF37'
              }}>
                <Twitter className="w-5 h-5" style={{ color: '#8B0000' }} />
              </a>
              <a href="#" className="w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 border-2 shadow-md" style={{
                backgroundColor: 'white',
                borderColor: '#D4AF37'
              }}>
                <Instagram className="w-5 h-5" style={{ color: '#8B0000' }} />
              </a>
              <a href="#" className="w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 border-2 shadow-md" style={{
                backgroundColor: 'white',
                borderColor: '#D4AF37'
              }}>
                <Linkedin className="w-5 h-5" style={{ color: '#8B0000' }} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t-2 pt-8 text-center" style={{ borderColor: '#D4AF37' }}>
          <div className="flex items-center justify-center gap-2 mb-2">
            <Flower2 className="w-4 h-4" style={{ color: '#FF9933' }} />
            <Flower2 className="w-4 h-4" style={{ color: '#8B0000' }} />
            <Flower2 className="w-4 h-4" style={{ color: '#FF9933' }} />
          </div>
          <p style={{ color: '#666' }}>
            © 2026 Sneha 2K26 - ADCET, Ashta. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
