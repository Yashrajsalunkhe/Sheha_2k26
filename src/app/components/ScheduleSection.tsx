import { Flower2 } from 'lucide-react';

const schedule = [
  {
    day: 'Day 1',
    date: 'March 20, 2026',
    events: [
      { time: '09:00 AM', title: 'Registration & Welcome', venue: 'Main Auditorium' },
      { time: '11:00 AM', title: 'Opening Ceremony', venue: 'Main Auditorium' },
      { time: '02:00 PM', title: 'Classical Dance Auditions', venue: 'Cultural Hall' },
      { time: '04:00 PM', title: 'Coding Contest Begins', venue: 'Lab Block A' },
      { time: '07:00 PM', title: 'Classical Music Evening', venue: 'Main Stage' }
    ]
  },
  {
    day: 'Day 2',
    date: 'March 21, 2026',
    events: [
      { time: '10:00 AM', title: 'Fashion Show Rehearsal', venue: 'Central Hall' },
      { time: '12:00 PM', title: 'Gaming Tournament', venue: 'Sports Complex' },
      { time: '03:00 PM', title: 'Drama & Theatre', venue: 'Main Auditorium' },
      { time: '06:00 PM', title: 'Guest Speaker Session', venue: 'Conference Hall' },
      { time: '08:00 PM', title: 'Fashion Show Grand Finale', venue: 'Main Stage' }
    ]
  },
  {
    day: 'Day 3',
    date: 'March 22, 2026',
    events: [
      { time: '11:00 AM', title: 'Dance Battle Finals', venue: 'Main Stage' },
      { time: '02:00 PM', title: 'Prize Distribution', venue: 'Main Auditorium' },
      { time: '04:00 PM', title: 'Celebrity Performance', venue: 'Main Stage' },
      { time: '07:00 PM', title: 'Grand Closing Ceremony', venue: 'Main Stage' },
      { time: '09:00 PM', title: 'Cultural Night Celebration', venue: 'Open Ground' }
    ]
  }
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
            Event Schedule
          </h2>
          <p className="text-lg" style={{ color: "#666" }}>
            Three days of cultural celebration and festive joy
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {schedule.map((day, dayIndex) => (
            <div
              key={dayIndex}
              className="rounded-3xl p-8 transition-all duration-300 hover:shadow-2xl border-2"
              style={{
                backgroundColor: '#FFF8E7',
                borderColor: '#D4AF37'
              }}
            >
              <div className="mb-8">
                <div className="inline-block px-6 py-2 rounded-full mb-3 shadow-md" style={{
                  background: 'linear-gradient(to right, #8B0000, #FF9933)'
                }}>
                  <h3 className="text-xl font-bold text-white" style={{
                    fontFamily: "Playfair Display, serif"
                  }}>
                    {day.day}
                  </h3>
                </div>
                <p className="font-medium" style={{ color: "#8B0000" }}>{day.date}</p>
              </div>

              <div className="space-y-6">
                {day.events.map((event, eventIndex) => (
                  <div key={eventIndex} className="relative pl-8 pb-6 border-l-2 last:pb-0" style={{
                    borderColor: '#D4AF37'
                  }}>
                    {/* Diya/Lamp style dot */}
                    <div className="absolute -left-2.5 top-0 w-5 h-5 rounded-full shadow-md" style={{
                      background: 'radial-gradient(circle, #FFD700, #FF9933)'
                    }}>
                      <div className="absolute inset-0 rounded-full" style={{
                        background: 'radial-gradient(circle at 30% 30%, rgba(255,255,255,0.8), transparent)'
                      }}></div>
                    </div>
                    <div className="text-sm font-bold mb-1" style={{ color: '#FF9933' }}>
                      {event.time}
                    </div>
                    <div className="font-bold mb-1" style={{ color: '#8B0000' }}>
                      {event.title}
                    </div>
                    <div className="text-sm" style={{ color: '#666' }}>
                      {event.venue}
                    </div>
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
