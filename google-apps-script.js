// =======================================================
// Google Apps Script — paste this into script.google.com
// =======================================================
//
// STEPS TO SET UP:
//
// 1. Open https://sheets.google.com and create a new Google Sheet.
//    Name it "Sneha 2026 Registrations".
//
// 2. In row 1 the script will auto-create headers on the first
//    submission — no need to add them manually. If you want to
//    pre-populate, the columns (A–AF) are:
//    Timestamp | Full Name | Roll Number | Department | Class |
//    Mobile | Email | Event | Participation Type | Team Name |
//    No. of Participants | Team Leader Name | Team Leader Contact |
//    Song / Theme | Drama Type (Other) | Song Name |
//    Singer / Artist Name | Music Track Required |
//    Public Speaking Topic | Art Type | Art Type (Other) |
//    Funny Games Type | Game / Activity Name | Funny Games Team Name |
//    Funny Games No. of Participants | Funny Games Special Reqs |
//    Funny Games Special Reqs (Other) | Stall Name | Food Items |
//    No. of Stall Students | Special Requirements |
//    Special Requirements (Other)
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
        dramaOther: "",
        songName: "",
        singerArtistName: "",
        musicTrackRequired: "",
        topicName: "",
        artType: "",
        artTypeOther: "",
        funnyGamesType: "",
        gameName: "",
        funnyTeamName: "",
        funnyNumParticipants: "",
        funnySpecialReqs: "",
        funnySpecialReqsOther: "",
        stallName: "",
        foodItems: "",
        stallStudents: "",
        specialRequirements: "",
        specialRequirementsOther: "",
      })
    }
  };
  doPost(fakeEvent);
  Logger.log("Test row added to sheet!");
}

// Column headers — keep in sync with appendRow below
var HEADERS = [
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
  "Drama Type (Other)",
  "Song Name",
  "Singer / Artist Name",
  "Music Track Required",
  "Public Speaking Topic",
  "Art Type",
  "Art Type (Other)",
  "Funny Games Type",
  "Game / Activity Name",
  "Funny Games Team Name",
  "Funny Games No. of Participants",
  "Funny Games Special Reqs",
  "Funny Games Special Reqs (Other)",
  "Stall Name",
  "Food Items",
  "No. of Stall Students",
  "Special Requirements",
  "Special Requirements (Other)",
];

function doPost(e) {
  var lock = LockService.getScriptLock();
  try {
    lock.waitLock(10000); // wait up to 10 s for concurrent requests
  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ status: "error", message: "Server busy, try again." }))
      .setMimeType(ContentService.MimeType.JSON);
  }

  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();

    // Add headers in row 1 if the sheet is empty OR if the first row
    // doesn't already have the expected header in column A ("Timestamp").
    var firstCell = sheet.getLastRow() === 0 ? "" : sheet.getRange(1, 1).getValue();
    if (String(firstCell).trim() !== "Timestamp") {
      sheet.insertRowBefore(1);
      sheet.getRange(1, 1, 1, HEADERS.length).setValues([HEADERS]);
    }

    // Body is sent as text/plain containing a JSON string
    var data = JSON.parse(e.postData.contents);

    // Helper: safely read a key (returns "" if missing/undefined)
    function val(key) {
      var v = data[key];
      return (v === undefined || v === null) ? "" : String(v);
    }

    sheet.appendRow([
      new Date(),                       // Timestamp
      val("fullName"),
      val("rollNumber"),
      val("department"),
      val("class"),
      val("mobile"),
      val("email"),
      val("event"),
      val("participationType"),
      val("teamName"),
      val("numParticipants"),
      val("teamLeaderName"),
      val("teamLeaderContact"),
      val("songTheme"),
      val("dramaOther"),
      val("songName"),
      val("singerArtistName"),
      val("musicTrackRequired"),
      val("topicName"),
      val("artType"),
      val("artTypeOther"),
      val("funnyGamesType"),
      val("gameName"),
      val("funnyTeamName"),
      val("funnyNumParticipants"),
      val("funnySpecialReqs"),
      val("funnySpecialReqsOther"),
      val("stallName"),
      val("foodItems"),
      val("stallStudents"),
      val("specialRequirements"),
      val("specialRequirementsOther"),
    ]);

    return ContentService
      .createTextOutput(JSON.stringify({ status: "success" }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ status: "error", message: err.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  } finally {
    lock.releaseLock();
  }
}

function doGet() {
  return ContentService
    .createTextOutput("Sneha 2026 Registration API is running.")
    .setMimeType(ContentService.MimeType.TEXT);
}
