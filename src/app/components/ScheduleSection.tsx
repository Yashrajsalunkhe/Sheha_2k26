import { Flower2 } from 'lucide-react';

const scheduleData = [
  {
    day: 'Day I - Friday, 27th March 2026',
    items: [
      {
        time: '9.00 AM - 11.00 AM',
        programs: [
          'Inauguration of Art Exhibition',
          'Inauguration of Funny Games and Food Stalls',
        ],
      },
      {
        time: '11.00 AM - 01.00 PM',
        programs: [
          'Inauguration of Sneha - 2026',
          'In Presence of Chief Guest: Mr. Saurabh Bhosale (Marathi Standup Comedian and Storyteller)',
          'NPTEL Award distribution ceremony',
          'Standup comedy by Mr. Saurabh Bhosale',
        ],
      },
      {
        time: '01.00 PM - 02.30 PM',
        programs: ['Lunch by Institute'],
      },
      {
        time: '02.30 PM - 03.30 PM',
        programs: ['Drama, Fish Pond and Meme Presentation'],
      },
      {
        time: '03.30 PM - 06.30 PM',
        programs: ['Variety Entertainment Program'],
      },
    ],
  },
  {
    day: 'Day II - Saturday, 28th March 2026',
    items: [
      {
        time: '09.00 AM - 10.00 AM',
        programs: ['Fishponds and Meme Presentation'],
      },
      {
        time: '10.00 AM - 01.30 PM',
        programs: [
          'Annual Prize Distribution Ceremony',
          'In Presence of Chief Guests:',
          'Hon. Shri. Dhairyasheel Sambhajirao Mane, Member of Parliament, Hatkanangale Constituency',
          'Hon. Shri. Vikas Temkar, Director, Madbull Technologies Pvt. Ltd., Pune',
          'Hon. Shri Annasaheb Dange (Appa), Founder Chairman, SDSS, Ishwarpur',
        ],
      },
      {
        time: '01.30 PM - 02.30 PM',
        programs: ['Short Recess'],
      },
      {
        time: '02.30 PM - 03.30 PM',
        programs: ['Drama, Fishponds and Meme Presentation'],
      },
      {
        time: '03.30 PM - 06.30 PM',
        programs: ['Variety Entertainment Program'],
      },
    ],
  },
];

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
            Program Schedule
          </h2>
          <p className="text-lg" style={{ color: "#666" }}>
            Sneha 2026 - Day 1 and Day 2
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {scheduleData.map((daySchedule) => (
            <div
              key={daySchedule.day}
              className="rounded-3xl p-8 border-2 shadow-lg"
              style={{
                backgroundColor: '#FFF8E7',
                borderColor: '#D4AF37',
              }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center"
                  style={{ background: 'linear-gradient(to right, #8B0000, #FF9933)' }}
                >
                  <Flower2 className="w-5 h-5 text-white" />
                </div>
                <h3
                  className="text-2xl font-bold"
                  style={{ fontFamily: 'Playfair Display, serif', color: '#8B0000' }}
                >
                  {daySchedule.day}
                </h3>
              </div>

              <div className="space-y-5">
                {daySchedule.items.map((item) => (
                  <div key={`${daySchedule.day}-${item.time}`} className="rounded-2xl border p-4" style={{ borderColor: '#EAC66B', backgroundColor: '#FFFFFF' }}>
                    <p className="font-bold mb-2" style={{ color: '#8B0000' }}>
                      {item.time}
                    </p>
                    <ul className="space-y-1" style={{ color: '#444' }}>
                      {item.programs.map((program) => (
                        <li key={program} className="leading-relaxed">• {program}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
