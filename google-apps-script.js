// =======================================================
// Google Apps Script — paste this into script.google.com
// =======================================================
//
// STEPS TO SET UP:
//
// 1. Open https://sheets.google.com and create a new Google Sheet.
//    Name it "Sneha 2026 Registrations".
//
// 2. In row 1 add these headers (columns A–S):
//    Timestamp | Full Name | Roll Number | Department | Class | Mobile |
//    Email | Event | Participation Type | Team Name | Num Participants |
//    Team Leader Name | Team Leader Contact | Song/Theme |
//    Song Name | Singer/Artist | Music Track Required |
//    Funny Games Type | Stall Name | Food Items |
//    Stall Students | Special Requirements
//
// 3. Go to Extensions → Apps Script.
//
// 4. Paste the code below and save.
//
// 5. Click Deploy → New deployment → Web app
//    - Execute as: Me
//    - Who has access: Anyone
//    Click Deploy and copy the URL.
//
// 6. Paste the URL into RegistrationPage.tsx where it says
//    YOUR_DEPLOYMENT_ID.
//
// =======================================================

// -------------------------------------------------------
// To test from the editor, run testDoPost() — NOT doPost()
// -------------------------------------------------------
function testDoPost() {
  var fakeEvent = {
    postData: {
      contents: JSON.stringify({
        fullName: "Test Student",
        rollNumber: "CS001",
        department: "Computer Science Engineering",
        "class": "SY B.Tech",
        mobile: "9999999999",
        email: "test@adcet.in",
        event: "Dance",
        participationType: "Solo",
        teamName: "",
        numParticipants: "",
        teamLeaderName: "",
        teamLeaderContact: "",
        songTheme: "Bollywood",
        songName: "",
        singerArtistName: "",
        musicTrackRequired: "",
        funnyGamesType: "",
        stallName: "",
        foodItems: "",
        stallStudents: "",
        specialRequirements: "",
      })
    }
  };
  doPost(fakeEvent);
  Logger.log("Test row added to sheet!");
}

function doPost(e) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();

  // Add headers in row 1 if the sheet is empty
  if (sheet.getLastRow() === 0) {
    sheet.appendRow([
      "Timestamp",
      "Full Name",
      "Roll Number",
      "Department",
      "Class",
      "Mobile",
      "Email",
      "Event",
      "Participation Type",
      "Team Name",
      "No. of Participants",
      "Team Leader Name",
      "Team Leader Contact",
      "Song / Theme",
      "Song Name",
      "Singer / Artist Name",
      "Music Track Required",
      "Funny Games Type",
      "Stall Name",
      "Food Items",
      "No. of Stall Students",
      "Special Requirements",
    ]);
  }

  // Body is sent as text/plain containing a JSON string
  var data = JSON.parse(e.postData.contents);

  sheet.appendRow([
    new Date(),                    // Timestamp
    data.fullName,
    data.rollNumber,
    data.department,
    data["class"],
    data.mobile,
    data.email,
    data.event,
    data.participationType,
    data.teamName,
    data.numParticipants,
    data.teamLeaderName,
    data.teamLeaderContact,
    data.songTheme,
    data.songName,
    data.singerArtistName,
    data.musicTrackRequired,
    data.funnyGamesType,
    data.stallName,
    data.foodItems,
    data.stallStudents,
    data.specialRequirements,
  ]);

  return ContentService
    .createTextOutput(JSON.stringify({ status: "success" }))
    .setMimeType(ContentService.MimeType.JSON);
}

function doGet() {
  return ContentService
    .createTextOutput("Sneha 2026 Registration API is running.")
    .setMimeType(ContentService.MimeType.TEXT);
}
