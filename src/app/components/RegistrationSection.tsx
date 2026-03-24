import { useState } from 'react';
import { Send, Flower2 } from 'lucide-react';
import { toast } from 'sonner';

export function RegistrationSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    event: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.error('Registration is closed');
  };

  return (
    <section id="register" className="py-24 px-6" style={{ backgroundColor: 'white' }}>
      <div className="max-w-4xl mx-auto">
        {/* Registration Closed Notice */}
        <div className="mb-8 rounded-2xl p-6 border-2" style={{
          backgroundColor: '#FFE5E5',
          borderColor: '#8B0000'
        }}>
          <div className="flex items-start gap-4">
            <div className="mt-1 text-2xl" style={{ color: '#8B0000' }}>⚠️</div>
            <div className="flex-1">
              <h3 className="font-bold text-lg mb-2" style={{ color: '#8B0000' }}>
                Registration Closed
              </h3>
              <p style={{ color: '#555' }}>
                We regret to inform you that registration for Sneha 2K26 is now closed. Thank you for your interest!
              </p>
            </div>
          </div>
        </div>

        {/* Decorative Top Border - Indian Style */}
        <div className="mb-16" style={{ display: 'none' }}>
          <svg className="w-full h-16" viewBox="0 0 800 60" preserveAspectRatio="xMidYMid meet">
            {/* Decorative pattern */}
            <path
              d="M0,30 Q50,20 100,30 T200,30 T300,30 T400,30 T500,30 T600,30 T700,30 T800,30"
              fill="none"
              stroke="#D4AF37"
              strokeWidth="3"
            />
            <circle cx="100" cy="30" r="6" fill="#FF9933" />
            <circle cx="200" cy="30" r="6" fill="#8B0000" />
            <circle cx="300" cy="30" r="6" fill="#D4AF37" />
            <circle cx="400" cy="30" r="6" fill="#FF9933" />
            <circle cx="500" cy="30" r="6" fill="#8B0000" />
            <circle cx="600" cy="30" r="6" fill="#D4AF37" />
            <circle cx="700" cy="30" r="6" fill="#FF9933" />
          </svg>
        </div>

        <div className="text-center mb-16" style={{ display: 'none' }}>
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="w-16 h-1" style={{ background: "linear-gradient(to right, transparent, #D4AF37)" }}></div>
            <Flower2 className="w-6 h-6" style={{ color: "#FF9933" }} />
            <div className="w-16 h-1" style={{ background: "linear-gradient(to left, transparent, #D4AF37)" }}></div>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold mb-4" style={{
            fontFamily: "Playfair Display, serif",
            color: "#8B0000"
          }}>
            Register Now
          </h2>
          <p className="text-lg" style={{ color: "#666" }}>
            Secure your spot at the most exciting cultural celebration of 2026
          </p>
        </div>

        <div className="rounded-3xl p-10 shadow-2xl border-3" style={{
          background: 'linear-gradient(to bottom right, #FFF8E7, white)',
          border: '3px solid #D4AF37',
          display: 'none'
        }}>
          {/* Decorative corners */}
          <div className="absolute top-8 right-8">
            <Flower2 className="w-10 h-10 opacity-20" style={{ color: '#FF9933' }} />
          </div>
          <div className="absolute bottom-8 left-8">
            <Flower2 className="w-10 h-10 opacity-20" style={{ color: '#8B0000' }} />
          </div>

          <form onSubmit={handleSubmit} className="space-y-6 relative">
            <div>
              <label htmlFor="name" className="block font-bold mb-3" style={{ 
                color: '#8B0000',
                fontFamily: 'Playfair Display, serif'
              }}>
                Full Name
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                className="w-full px-6 py-4 rounded-2xl border-2 focus:outline-none transition-all"
                style={{
                  backgroundColor: 'white',
                  borderColor: '#D4AF37',
                  color: '#333'
                }}
                placeholder="Enter your full name"
                onFocus={(e) => e.target.style.borderColor = '#FF9933'}
                onBlur={(e) => e.target.style.borderColor = '#D4AF37'}
              />
            </div>

            <div>
              <label htmlFor="email" className="block font-bold mb-3" style={{ 
                color: '#8B0000',
                fontFamily: 'Playfair Display, serif'
              }}>
                Email Address
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                className="w-full px-6 py-4 rounded-2xl border-2 focus:outline-none transition-all"
                style={{
                  backgroundColor: 'white',
                  borderColor: '#D4AF37',
                  color: '#333'
                }}
                placeholder="your.email@example.com"
                onFocus={(e) => e.target.style.borderColor = '#FF9933'}
                onBlur={(e) => e.target.style.borderColor = '#D4AF37'}
              />
            </div>

            <div>
              <label htmlFor="event" className="block font-bold mb-3" style={{ 
                color: '#8B0000',
                fontFamily: 'Playfair Display, serif'
              }}>
                Select Event
              </label>
              <select
                id="event"
                value={formData.event}
                onChange={(e) => setFormData({ ...formData, event: e.target.value })}
                required
                className="w-full px-6 py-4 rounded-2xl border-2 focus:outline-none transition-all appearance-none cursor-pointer"
                style={{
                  backgroundColor: 'white',
                  borderColor: '#D4AF37',
                  color: '#333'
                }}
                onFocus={(e) => e.target.style.borderColor = '#FF9933'}
                onBlur={(e) => e.target.style.borderColor = '#D4AF37'}
              >
                <option value="">Choose an event...</option>
                <option value="classical-dance">Classical Dance</option>
                <option value="classical-music">Classical Music</option>
                <option value="fashion">Fashion Show</option>
                <option value="coding">Coding Contest</option>
                <option value="drama">Drama & Theatre</option>
                <option value="gaming">Gaming Tournament</option>
              </select>
            </div>

            <button
              type="submit"
              className="w-full text-white font-bold py-4 px-8 rounded-2xl transition-all duration-300 flex items-center justify-center gap-3 group shadow-lg hover:shadow-2xl"
              style={{
                background: 'linear-gradient(to right, #8B0000, #FF9933)',
                fontFamily: 'Playfair Display, serif',
                fontSize: '1.125rem'
              }}
            >
              <span>Submit Registration</span>
              <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
