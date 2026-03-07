import { useState } from "react";
import { Send, Flower2, ArrowLeft, CheckCircle } from "lucide-react";
import { useNavigate } from "react-router";

const DEPARTMENTS = [
  "Mechanical Engineering",
  "Computer Science Engineering",
  "Electrical Engineering",
  "Civil Engineering",
  "Aeronautical Engineering",
  "Food Technology",
  "Artificial Intelligence and Data Science",
  "CSE (IOT and Cyber Security Including Block Chain Technology)",
  "Robotics And Artificial Intelligence",
  "Basic Science",
  "Bachelor of Business Administration (BBA)",
  "Bachelor of Computer Application (BCA)",
];

const CLASSES = [
  "FY B.Tech",
  "SY B.Tech",
  "TY B.Tech",
  "Final Year B.Tech",
];

const EVENTS = [
  "Dance",
  "Fashion Show",
  "Singing",
  "Art Exhibition",
  "Public Speaking",
  "Drama / Skit",
  "Funny Games",
  "Food Stall",
];

// Google Apps Script Web App URL — replace with your deployed URL
const GOOGLE_SHEET_URL =
  "https://script.google.com/macros/s/AKfycbxu28p6veVDFfCeNGkhQKlyZZoajT9GdpwMuDuoGlAim8CkrI7oSwat2CV7I90Z6DP2/exec";

/* ------------------------------------------------------------------ */
/*  Reusable styled input / select / textarea                         */
/* ------------------------------------------------------------------ */
const inputStyle = {
  backgroundColor: "white",
  borderColor: "#D4AF37",
  color: "#333",
};

function StyledInput({
  label,
  id,
  type = "text",
  value,
  onChange,
  placeholder,
  required = true,
}: {
  label: string;
  id: string;
  type?: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label
        htmlFor={id}
        className="block font-bold mb-2"
        style={{ color: "#8B0000", fontFamily: "Playfair Display, serif" }}
      >
        {label}
      </label>
      <input
        type={type}
        id={id}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required={required}
        className="w-full px-5 py-3 rounded-2xl border-2 focus:outline-none transition-all"
        style={inputStyle}
        placeholder={placeholder}
        onFocus={(e) => (e.target.style.borderColor = "#FF9933")}
        onBlur={(e) => (e.target.style.borderColor = "#D4AF37")}
      />
    </div>
  );
}

function StyledSelect({
  label,
  id,
  value,
  onChange,
  options,
  placeholder = "Select...",
  required = true,
}: {
  label: string;
  id: string;
  value: string;
  onChange: (v: string) => void;
  options: string[];
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label
        htmlFor={id}
        className="block font-bold mb-2"
        style={{ color: "#8B0000", fontFamily: "Playfair Display, serif" }}
      >
        {label}
      </label>
      <select
        id={id}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required={required}
        className="w-full px-5 py-3 rounded-2xl border-2 focus:outline-none transition-all appearance-none cursor-pointer"
        style={inputStyle}
        onFocus={(e) => (e.target.style.borderColor = "#FF9933")}
        onBlur={(e) => (e.target.style.borderColor = "#D4AF37")}
      >
        <option value="">{placeholder}</option>
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Main Page                                                          */
/* ------------------------------------------------------------------ */
export default function RegistrationPage() {
  const navigate = useNavigate();

  // ---- Section 1 state ----
  const [fullName, setFullName] = useState("");
  const [rollNumber, setRollNumber] = useState("");
  const [department, setDepartment] = useState("");
  const [studentClass, setStudentClass] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");

  // ---- Section 2 state ----
  const [selectedEvent, setSelectedEvent] = useState("");

  // ---- Section 3: Dance / Fashion Show ----
  const [participationType, setParticipationType] = useState("");
  const [teamName, setTeamName] = useState("");
  const [numParticipants, setNumParticipants] = useState("");
  const [teamLeaderName, setTeamLeaderName] = useState("");
  const [teamLeaderContact, setTeamLeaderContact] = useState("");
  const [songTheme, setSongTheme] = useState("");

  // ---- Section 4: Singing ----
  const [singParticipationType, setSingParticipationType] = useState("");
  const [songName, setSongName] = useState("");
  const [singerArtistName, setSingerArtistName] = useState("");
  const [musicTrackRequired, setMusicTrackRequired] = useState("");

  // ---- Section 7: Funny Games ----
  const [funnyGamesType, setFunnyGamesType] = useState("");

  // ---- Section 8: Food Stall ----
  const [stallName, setStallName] = useState("");
  const [foodItems, setFoodItems] = useState("");
  const [stallStudents, setStallStudents] = useState("");
  const [specialRequirements, setSpecialRequirements] = useState("");

  // ---- Declaration ----
  const [agreed, setAgreed] = useState(false);

  // ---- UI state ----
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const isDanceOrFashion =
    selectedEvent === "Dance" || selectedEvent === "Fashion Show";
  const isSinging = selectedEvent === "Singing";
  const isFunnyGames = selectedEvent === "Funny Games";
  const isFoodStall = selectedEvent === "Food Stall";

  /* ---- Submit handler ---- */
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!agreed) {
      alert("Please accept the declaration before submitting.");
      return;
    }

    setSubmitting(true);

    const payload: Record<string, string> = {
      fullName,
      rollNumber,
      department,
      class: studentClass,
      mobile,
      email,
      event: selectedEvent,
      // conditional fields
      participationType: isDanceOrFashion
        ? participationType
        : isSinging
        ? singParticipationType
        : isFunnyGames
        ? funnyGamesType
        : "",
      teamName: isDanceOrFashion ? teamName : "",
      numParticipants: isDanceOrFashion ? numParticipants : "",
      teamLeaderName: isDanceOrFashion ? teamLeaderName : "",
      teamLeaderContact: isDanceOrFashion ? teamLeaderContact : "",
      songTheme: isDanceOrFashion ? songTheme : "",
      songName: isSinging ? songName : "",
      singerArtistName: isSinging ? singerArtistName : "",
      musicTrackRequired: isSinging ? musicTrackRequired : "",
      funnyGamesType: isFunnyGames ? funnyGamesType : "",
      stallName: isFoodStall ? stallName : "",
      foodItems: isFoodStall ? foodItems : "",
      stallStudents: isFoodStall ? stallStudents : "",
      specialRequirements: isFoodStall ? specialRequirements : "",
    };

    try {
      // Must use text/plain — it's the only Content-Type that passes through
      // the browser's no-cors restriction to Google Apps Script.
      await fetch(GOOGLE_SHEET_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "text/plain" },
        body: JSON.stringify(payload),
      });
      setSubmitted(true);
    } catch {
      alert("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  /* ---- Success screen ---- */
  if (submitted) {
    return (
      <div
        className="min-h-screen flex items-center justify-center px-6"
        style={{ backgroundColor: "#FFF8E7", fontFamily: "Poppins, sans-serif" }}
      >
        <div className="text-center max-w-lg">
          <CheckCircle className="w-20 h-20 mx-auto mb-6" style={{ color: "#22c55e" }} />
          <h2
            className="text-4xl font-bold mb-4"
            style={{ fontFamily: "Playfair Display, serif", color: "#8B0000" }}
          >
            Registration Successful!
          </h2>
          <p className="text-lg mb-8" style={{ color: "#666" }}>
            Thank you, <strong>{fullName}</strong>. Your registration for{" "}
            <strong>{selectedEvent}</strong> at Sneha 2K26 has been submitted. We'll
            contact you at <strong>{email}</strong> with further details.
          </p>
          <button
            onClick={() => navigate("/")}
            className="px-8 py-3 rounded-full text-white font-semibold"
            style={{ background: "linear-gradient(to right,#8B0000,#FF9933)" }}
          >
            ← Back to Home
          </button>
        </div>
      </div>
    );
  }

  /* ---- Main form ---- */
  return (
    <div
      className="min-h-screen py-12 px-4"
      style={{ backgroundColor: "#FFF8E7", fontFamily: "Poppins, sans-serif" }}
    >
      {/* Back button */}
      <div className="max-w-3xl mx-auto mb-6">
        <button
          onClick={() => navigate("/")}
          className="flex items-center gap-2 font-medium hover:opacity-70 transition"
          style={{ color: "#8B0000" }}
        >
          <ArrowLeft className="w-5 h-5" /> Back to Home
        </button>
      </div>

      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div
              className="w-16 h-1"
              style={{ background: "linear-gradient(to right, transparent, #D4AF37)" }}
            />
            <Flower2 className="w-6 h-6" style={{ color: "#FF9933" }} />
            <div
              className="w-16 h-1"
              style={{ background: "linear-gradient(to left, transparent, #D4AF37)" }}
            />
          </div>
          <h2
            className="text-5xl md:text-6xl font-bold mb-4"
            style={{ fontFamily: "Playfair Display, serif", color: "#8B0000" }}
          >
            Registration Form
          </h2>
          <p className="text-lg" style={{ color: "#666" }}>
            Sneha 2K26 — A Celebration of Culture & Talent
          </p>
        </div>

        {/* Form card */}
        <div
          className="rounded-3xl p-8 md:p-10 shadow-2xl"
          style={{
            background: "linear-gradient(to bottom right, #FFF8E7, white)",
            border: "3px solid #D4AF37",
          }}
        >
          <form onSubmit={handleSubmit} className="space-y-10">
            {/* ============ SECTION 1 – Student Information ============ */}
            <fieldset className="space-y-5">
              <legend
                className="text-2xl font-bold mb-2"
                style={{ fontFamily: "Playfair Display, serif", color: "#D4AF37" }}
              >
                Section 1 — Student Information
              </legend>

              <StyledInput label="Full Name" id="fullName" value={fullName} onChange={setFullName} placeholder="Enter your full name" />
              <StyledInput label="Roll Number" id="rollNumber" value={rollNumber} onChange={setRollNumber} placeholder="Enter your roll number" />
              <StyledSelect label="Department" id="department" value={department} onChange={setDepartment} options={DEPARTMENTS} placeholder="Choose your department" />
              <StyledSelect label="Class" id="studentClass" value={studentClass} onChange={setStudentClass} options={CLASSES} placeholder="Choose your class" />
              <StyledInput label="Mobile Number" id="mobile" type="tel" value={mobile} onChange={setMobile} placeholder="Enter your mobile number" />
              <StyledInput label="Email ID" id="email" type="email" value={email} onChange={setEmail} placeholder="your.email@example.com" />
            </fieldset>

            {/* ============ SECTION 2 – Event Selection ============ */}
            <fieldset className="space-y-5">
              <legend
                className="text-2xl font-bold mb-2"
                style={{ fontFamily: "Playfair Display, serif", color: "#D4AF37" }}
              >
                Section 2 — Event Selection
              </legend>

              <StyledSelect
                label="Select Event for Participation"
                id="selectedEvent"
                value={selectedEvent}
                onChange={(v) => {
                  setSelectedEvent(v);
                  // reset conditional fields
                  setParticipationType("");
                  setTeamName("");
                  setNumParticipants("");
                  setTeamLeaderName("");
                  setTeamLeaderContact("");
                  setSongTheme("");
                  setSingParticipationType("");
                  setSongName("");
                  setSingerArtistName("");
                  setMusicTrackRequired("");
                  setFunnyGamesType("");
                  setStallName("");
                  setFoodItems("");
                  setStallStudents("");
                  setSpecialRequirements("");
                }}
                options={EVENTS}
                placeholder="Choose an event..."
              />
            </fieldset>

            {/* ============ SECTION 3 – Dance / Fashion Show ============ */}
            {isDanceOrFashion && (
              <fieldset className="space-y-5 animate-in fade-in">
                <legend
                  className="text-2xl font-bold mb-2"
                  style={{ fontFamily: "Playfair Display, serif", color: "#D4AF37" }}
                >
                  {selectedEvent} Details
                </legend>

                <StyledSelect label="Participation Type" id="participationType" value={participationType} onChange={setParticipationType} options={["Solo", "Group"]} placeholder="Solo or Group?" />
                {participationType === "Group" && (
                  <>
                    <StyledInput label="Team Name" id="teamName" value={teamName} onChange={setTeamName} placeholder="Enter team name" />
                    <StyledInput label="Number of Participants" id="numParticipants" type="number" value={numParticipants} onChange={setNumParticipants} placeholder="e.g. 5" />
                    <StyledInput label="Team Leader Name" id="teamLeaderName" value={teamLeaderName} onChange={setTeamLeaderName} placeholder="Leader's full name" />
                    <StyledInput label="Team Leader Contact" id="teamLeaderContact" type="tel" value={teamLeaderContact} onChange={setTeamLeaderContact} placeholder="Leader's mobile number" />
                  </>
                )}
                <StyledInput label="Song / Theme of Performance" id="songTheme" value={songTheme} onChange={setSongTheme} placeholder="e.g. Bollywood medley" />
              </fieldset>
            )}

            {/* ============ SECTION 4 – Singing ============ */}
            {isSinging && (
              <fieldset className="space-y-5 animate-in fade-in">
                <legend
                  className="text-2xl font-bold mb-2"
                  style={{ fontFamily: "Playfair Display, serif", color: "#D4AF37" }}
                >
                  Singing Details
                </legend>

                <StyledSelect label="Participation Type" id="singParticipationType" value={singParticipationType} onChange={setSingParticipationType} options={["Solo", "Group"]} placeholder="Solo or Group?" />
                <StyledInput label="Song Name" id="songName" value={songName} onChange={setSongName} placeholder="Name of the song" />
                <StyledInput label="Singer / Artist Name" id="singerArtistName" value={singerArtistName} onChange={setSingerArtistName} placeholder="Performer's name" />
                <StyledSelect label="Music Track Required?" id="musicTrackRequired" value={musicTrackRequired} onChange={setMusicTrackRequired} options={["Yes", "No"]} placeholder="Select..." />
              </fieldset>
            )}

            {/* ============ SECTION 7 – Funny Games ============ */}
            {isFunnyGames && (
              <fieldset className="space-y-5 animate-in fade-in">
                <legend
                  className="text-2xl font-bold mb-2"
                  style={{ fontFamily: "Playfair Display, serif", color: "#D4AF37" }}
                >
                  Funny Games Details
                </legend>

                <StyledSelect label="Type of Participation" id="funnyGamesType" value={funnyGamesType} onChange={setFunnyGamesType} options={["Individual", "Team"]} placeholder="Individual or Team?" />
              </fieldset>
            )}

            {/* ============ SECTION 8 – Food Stall ============ */}
            {isFoodStall && (
              <fieldset className="space-y-5 animate-in fade-in">
                <legend
                  className="text-2xl font-bold mb-2"
                  style={{ fontFamily: "Playfair Display, serif", color: "#D4AF37" }}
                >
                  Food Stall Details
                </legend>

                <StyledInput label="Stall Name" id="stallName" value={stallName} onChange={setStallName} placeholder="Name of your stall" />
                <StyledInput label="Food Items to be Sold" id="foodItems" value={foodItems} onChange={setFoodItems} placeholder="e.g. Samosa, Chai, Vada pav" />
                <StyledInput label="Number of Students Managing Stall" id="stallStudents" type="number" value={stallStudents} onChange={setStallStudents} placeholder="e.g. 4" />
                <StyledSelect label="Special Requirements" id="specialRequirements" value={specialRequirements} onChange={setSpecialRequirements} options={["Table", "Electricity", "Stall Space", "Other"]} placeholder="Select if any..." required={false} />
              </fieldset>
            )}

            {/* ============ SECTION 9 – Declaration ============ */}
            <fieldset className="space-y-4">
              <legend
                className="text-2xl font-bold mb-2"
                style={{ fontFamily: "Playfair Display, serif", color: "#D4AF37" }}
              >
                Declaration
              </legend>

              <label className="flex items-start gap-3 cursor-pointer select-none">
                <input
                  type="checkbox"
                  checked={agreed}
                  onChange={(e) => setAgreed(e.target.checked)}
                  className="mt-1 w-5 h-5 accent-[#8B0000] rounded cursor-pointer"
                />
                <span style={{ color: "#333" }}>
                  I confirm that the information provided is correct and I will
                  follow all rules and regulations of Sneha 2026 Annual Gathering.
                </span>
              </label>
            </fieldset>

            {/* ============ Submit ============ */}
            <button
              type="submit"
              disabled={submitting}
              className="w-full text-white font-bold py-4 px-8 rounded-2xl transition-all duration-300 flex items-center justify-center gap-3 group shadow-lg hover:shadow-2xl disabled:opacity-60"
              style={{
                background: "linear-gradient(to right, #8B0000, #FF9933)",
                fontFamily: "Playfair Display, serif",
                fontSize: "1.125rem",
              }}
            >
              <span>{submitting ? "Submitting..." : "Submit Registration"}</span>
              {!submitting && (
                <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
