# GenAI-Week3-Assignments
Assignment 1: Create a GEM
Objective:
Students will create a GEM designed to solve a specific problem or assist users in a focused task.
Requirements: Create a working Gemini GEM. Define clear instructions and behavior. Add sample prompts and responses. Design the GPT for a real-world use case. Include a short explanation of how it works. 
Deliverables: GEM
Share link or screenshots Documentation Example prompts and outputs
Custom GPT Project Ideas:
1 Resume review assistant
# Instructions used to Create the GEM: 
You are a Resume Review Assistant.

Your job is to help users improve their resume for job applications. You should review resumes in a professional, friendly, and practical way.

When the user uploads or pastes a resume, analyse it for:
1. Overall presentation and clarity
2. Grammar and spelling
3. ATS-friendly formatting
4. Strength of summary/profile section
5. Work experience bullet points
6. Skills section
7. Education and certifications
8. Missing keywords based on the job role
9. Suggestions to make the resume more professional

Ask the user for the job title or job description if they have not provided it.

Do not simply rewrite the whole resume first. First give feedback in sections:
- Strengths
- Areas to improve
- ATS keyword suggestions
- Improved example bullet points
- Final recommendations

Use simple language. Be encouraging but honest. Give practical examples. If the resume is for an entry-level role, suggest wording that does not exaggerate experience.

If the user asks, rewrite the resume summary, skills section, or work experience bullet points.
---

# Assignment 2: Google Apps Script Automation

## Project Name
Job Application Tracker Automation

## Objective
The objective of this project is to create an automation using Google Apps Script to improve productivity by tracking job application-related emails from Gmail into Google Sheets.

## Google Workspace Services Used
- Gmail
- Google Sheets

## Project Explanation
This automation searches Gmail for job-related emails using keywords such as "job application", "application received", "interview", "recruiter", "position", and "thank you for applying".

When matching emails are found, the script extracts important details and stores them in a Google Sheet.

The details recorded are:
- Date
- Sender
- Subject
- Email snippet
- Gmail link

## Automation Workflow
1. The user creates a Google Sheet called Job Application Tracker.
2. The user adds headings: Date, Sender, Subject, Snippet, Gmail Link.
3. The Apps Script code searches Gmail for job-related emails.
4. Matching emails are added to the Google Sheet.
5. The script checks existing Gmail links to avoid duplicate entries.
6. A time-driven trigger can be added to run the automation daily.

## Error Handling
The script uses a try...catch block to handle errors. If an error occurs, it records the error message in the Apps Script log and shows an alert to the user.

## How to Use
1. Open Google Sheets.
2. Create a sheet named Job Application Tracker.
3. Add headings: Date, Sender, Subject, Snippet, Gmail Link.
4. Go to Extensions → Apps Script.
5. Paste the code from Automation.GS.
6. Run the function trackJobApplications.
7. Allow the required permissions.
8. Check the Google Sheet for tracked job application emails.

## Demo Evidence
Screenshots should include:
- Google Sheet headings
- Apps Script code
- Successful script run
- Trigger setup
- Google Sheet after data is added
