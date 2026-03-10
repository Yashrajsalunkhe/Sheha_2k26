import { ImageWithFallback } from './figma/ImageWithFallback';
import { Flower2, ExternalLink, Users } from 'lucide-react';

const guests = [
  {
    name: 'Hon. Shri. Dhairyasheel Sambhajirao Mane',
    dedication: 'Member of Parliament, Lok Sabha',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOkUWv8PrJ2ujJNIIYjV_Bsb-sxLL_sZQ1Yw&s',
  },
];

const leadershipTeam = [
  {
    name: 'Shri. Annasaheb Dange',
    role: 'Founder',
    description:
      'Visionary founder of Sant Dnyaneshwar Shikshan Sanstha, dedicated to bringing quality technical education to rural Maharashtra.',
    image: 'https://www.adcet.ac.in/images/desk/Hon-Shri-Annasaheb-Dange.jpg',
    badgeColor: '#FF9933',
    borderColor: '#FF9933',
    link: 'https://adcet.in',
  },
  {
    name: 'Adv. Rajendra R. Dange',
    role: 'Secretary',
    description:
      'Committed to student-centric policies and creating a nurturing academic environment for all students.',
    image: 'https://www.adcet.ac.in/images/desk/Adv-Rajendra-R-Dange.jpg',
    badgeColor: '#2563EB',
    borderColor: '#3B82F6',
    link: 'https://adcet.in',
  },
  {
    name: 'Shri. Vishwanath R. Dange',
    role: 'Joint Secretary',
    description:
      'Focused on academic excellence and fostering innovation in engineering education and research.',
    image: 'https://www.adcet.ac.in/images/desk/Shri-Vishwanath-R-Dange.jpg',
    badgeColor: '#16A34A',
    borderColor: '#22C55E',
    link: 'https://adcet.in',
  },
  {
    name: 'Dr. Laxman Y Waghmode',
    role: 'Director',
    description:
      'Leading the institute towards global excellence in technical education and industry collaboration.',
    image: 'https://www.adcet.ac.in/images/desk/Laxman-Y-Waghmode.jpg',
    badgeColor: '#7C3AED',
    borderColor: '#A855F7',
    link: 'https://adcet.in',
  },
];

export function GuestsSection() {
  return (
    <section
      id="guests"
      className="py-24 px-6"
      style={{
        background: 'linear-gradient(135deg, #FFF8E7 0%, #FFF0D0 50%, #FFF8E7 100%)',
      }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div
              className="w-16 h-1"
              style={{ background: 'linear-gradient(to right, transparent, #D4AF37)' }}
            />
            <Flower2 className="w-6 h-6" style={{ color: '#FF9933' }} />
            <div
              className="w-16 h-1"
              style={{ background: 'linear-gradient(to left, transparent, #D4AF37)' }}
            />
          </div>
          <h2
            className="text-5xl md:text-6xl font-bold mb-4"
            style={{ fontFamily: 'Playfair Display, serif', color: '#8B0000' }}
          >
            Our Honoured Guests
          </h2>
          <p className="text-lg max-w-xl mx-auto" style={{ color: '#666' }}>
            Distinguished personalities who grace Sneha 2K26 with their presence and blessings
          </p>
        </div>

        {/* Guest Cards */}
        <div className="flex flex-wrap justify-center gap-8">
          {guests.map((guest, index) => (
            <div
              key={index}
              className="group flex flex-col rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-white w-72"
              style={{ border: '3px solid #D4AF37' }}
            >
              {/* Photo */}
              <div className="relative h-64 overflow-hidden">
                <ImageWithFallback
                  src={guest.image}
                  alt={guest.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {/* Gradient overlay */}
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      'linear-gradient(to top, rgba(139,0,0,0.5) 0%, transparent 60%)',
                  }}
                />
                {/* Decorative flower */}
                <div className="absolute top-3 right-3">
                  <Flower2 className="w-6 h-6 text-white opacity-80" />
                </div>
                {/* Gold bottom bar */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-1"
                  style={{ background: 'linear-gradient(to right, #D4AF37, #FF9933, #D4AF37)' }}
                />
              </div>

              {/* Info */}
              <div className="flex flex-col flex-1 p-6">
                <h3
                  className="text-xl font-bold mb-1"
                  style={{ fontFamily: 'Playfair Display, serif', color: '#8B0000' }}
                >
                  {guest.name}
                </h3>
                <p
                  className="text-sm font-semibold mb-4"
                  style={{ color: '#FF9933' }}
                >
                  {guest.dedication}
                </p>

                {/* Quote
                <div
                  className="mt-auto rounded-2xl p-4 relative"
                  style={{ backgroundColor: '#FFF8E7', border: '1px solid #D4AF3755' }}
                >
                  <Quote
                    className="w-4 h-4 mb-2 opacity-60"
                    style={{ color: '#D4AF37' }}
                  />
                  <p className="text-sm italic leading-relaxed" style={{ color: '#555' }}>
                    "{guest.quote}"
                  </p>
                </div> */}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom decorative divider */}
        <div className="flex items-center justify-center gap-4 mt-16">
          <div className="flex-1 h-px" style={{ background: 'linear-gradient(to right, transparent, #D4AF37)' }} />
          <Flower2 className="w-6 h-6" style={{ color: '#FF9933' }} />
          <div className="flex-1 h-px" style={{ background: 'linear-gradient(to left, transparent, #D4AF37)' }} />
        </div>

        {/* ---- Leadership Team / Our Desk ---- */}
        <div className="mt-24">
          {/* Sub-header */}
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border mb-6"
              style={{ borderColor: '#FF9933', backgroundColor: '#FFF8E7' }}>
              <Users className="w-4 h-4" style={{ color: '#FF9933' }} />
              <span className="text-sm font-semibold" style={{ color: '#FF9933' }}>Leadership Team</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold mb-4"
              style={{ fontFamily: 'Playfair Display, serif', color: '#1a1a1a' }}>
              Our <span style={{ color: '#FF9933' }}>Desk</span>
            </h2>
            <p className="text-lg max-w-xl mx-auto" style={{ color: '#666' }}>
              Visionary leaders driving excellence in technical education and rural development
            </p>
          </div>

          {/* Leadership Cards */}
          <div className="flex flex-wrap justify-center gap-8">
            {leadershipTeam.map((member, index) => (
              <div
                key={index}
                className="group flex flex-col bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 w-72 overflow-hidden"
                style={{ border: '1px solid #e5e7eb' }}
              >
                {/* Colored top border */}
                <div className="h-1.5 w-full" style={{ backgroundColor: member.borderColor }} />

                {/* Photo */}
                <div className="flex flex-col items-center pt-8 pb-4 px-6">
                  <div
                    className="w-24 h-24 rounded-full overflow-hidden border-4 shadow-md mb-4"
                    style={{ borderColor: member.borderColor }}
                  >
                    <ImageWithFallback
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>

                  {/* Name badge */}
                  <span
                    className="text-sm font-bold text-white px-4 py-1 rounded-full mb-4"
                    style={{ backgroundColor: member.badgeColor }}
                  >
                    {member.name}
                  </span>

                  {/* Role */}
                  <h3 className="text-xl font-bold mb-3 text-center" style={{ color: '#111' }}>
                    {member.role}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-center leading-relaxed mb-5" style={{ color: '#555' }}>
                    {member.description}
                  </p>

                  {/* Read More */}
                  {/* <a
                    href={member.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm font-semibold mb-4 hover:opacity-75 transition-opacity"
                    style={{ color: member.badgeColor }}
                  >
                    Read More <ExternalLink className="w-3.5 h-3.5" />
                  </a> */}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Final bottom decorative divider */}
        <div className="flex items-center justify-center gap-4 mt-16">
          <div className="flex-1 h-px" style={{ background: 'linear-gradient(to right, transparent, #D4AF37)' }} />
          <Flower2 className="w-6 h-6" style={{ color: '#FF9933' }} />
          <div className="flex-1 h-px" style={{ background: 'linear-gradient(to left, transparent, #D4AF37)' }} />
        </div>
      </div>
    </section>
  );
}
