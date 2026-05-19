function trackJobApplications() {
  try {
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();

    // Gmail search query for job-related emails
    const searchQuery = '("job application" OR "application received" OR "interview" OR "recruiter" OR "position" OR "thank you for applying") newer_than:30d';

    const threads = GmailApp.search(searchQuery, 0, 20);

    if (threads.length === 0) {
      Logger.log("No job application emails found.");
      return;
    }

    // Get existing Gmail links to avoid duplicates
    const lastRow = sheet.getLastRow();
    let existingLinks = [];

    if (lastRow > 1) {
      existingLinks = sheet.getRange(2, 5, lastRow - 1, 1).getValues().flat();
    }

    threads.forEach(thread => {
      const messages = thread.getMessages();
      const latestMessage = messages[messages.length - 1];

      const date = latestMessage.getDate();
      const sender = latestMessage.getFrom();
      const subject = latestMessage.getSubject();
      const snippet = latestMessage.getPlainBody().substring(0, 150);
      const gmailLink = "https://mail.google.com/mail/u/0/#inbox/" + thread.getId();

      // Avoid duplicate entries
      if (!existingLinks.includes(gmailLink)) {
        sheet.appendRow([
          date,
          sender,
          subject,
          snippet,
          gmailLink
        ]);
      }
    });

    Logger.log("Job application emails tracked successfully.");

  } catch (error) {
    Logger.log("Error occurred: " + error.message);
    SpreadsheetApp.getUi().alert("An error occurred: " + error.message);
  }
}
