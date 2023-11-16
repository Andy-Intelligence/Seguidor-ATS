
// // meetApi.ts
import axios from 'axios';

import { getAuthUrl, getTokens } from "./auth";


export const createMeeting = async (accessToken: any) => {
   

    // const tokens = await getTokens(authorizationCode);
//   try {
//     const response = await axios.post(
//       'https://www.googleapis.com/calendar/v3/calendars/primary/events',
//       {
//         summary: 'Meeting Title',
//         start: { dateTime: '2023-01-01T10:00:00Z' }, // Adjust start time
//         end: { dateTime: '2023-01-01T11:00:00Z' },   // Adjust end time
//         conferenceData: {
//           createRequest: { requestId: '1234' },
//         },
//       },
//       {
//         headers: {
//           Authorization: `Bearer ${accessToken}`,
//           'Content-Type': 'application/json',
//         },
//       }
//     );
// console.log(response.data)
//     return response.data;
//   } catch (error:any) {
//     console.error('Error creating meeting:', error);
//     throw error;
//   }
};


// import { google } from 'googleapis';

// const auth = new google.auth.GoogleAuth({
//   // Scopes required to create Google Meet events
//   scopes: ['https://www.googleapis.com/auth/calendar','https://www.googleapis.com/auth/calendar.events'],
// });

// const calendar = google.calendar('v3');

// export async function createGoogleMeetLink(meetingDetails:any) {
//   const { title, description, startTime, endTime } = meetingDetails;

//   // Create the event object
//   const event = {
//     summary: title,
//     description: description,
//     start: {
//       dateTime: startTime,
//       timeZone: 'Africa/Lagos', // Adjust the time zone as needed
//     },
//     end: {
//       dateTime: endTime,
//       timeZone: 'Africa/Lagos', // Adjust the time zone as needed
//     },
//     conferenceData: {
//       conferenceSolution: {
//         type: 'hangoutsMeet',
//       },
//       conferenceId: '', // Placeholder for the conference ID
//     },
//   };

//   try {
//     // Authenticate with the service account credentials
//     await auth.getClient();

//     // Create the event and retrieve the conference ID
//     const response = await calendar.events.insert({
//       calendarId: 'primary',// Replace with your calendar ID if needed
//     resource:event,
      
//     });

//     const conferenceId = response.data.conferenceData?.conferenceId;

//     // Construct the Google Meet link
//     const googleMeetLink = `https://meet.google.com/${conferenceId}`;

//     return googleMeetLink;
//   } catch (error) {
//     console.error('Error creating Google Meet link:', error);
//   }
// }

const path = require('path')
const fs = require('fs');

const { google } = require('googleapis');

const keyFilePath = 'C:\\Users\\user\\Desktop\\ats\\applicant-tracking-system\\cs.json';

const keyFileContent = fs.readFileSync(keyFilePath, 'utf8');
const keyFileObject = JSON.parse(keyFileContent);

//  const authurl = getAuthUrl()
//       console.log(authurl)
     const accessToken = getTokens("4/0AfJohXnNnOIC8ctQO3srciioZMMl1-zwIbZJzLTKrqT_v1ZZ9di4O89yeHBoi7MU_VzF8g")
    //   const options = {
    //     headers: {
    //       Authorization: `Bearer ${accessToken}`,
    //     },
    //   };
      
    //   const a = await createMeeting(authurl)

const auth = new google.auth.GoogleAuth({
    // Scopes required to create Google Meet events
    keyFile: keyFilePath,
    scopes: ['https://www.googleapis.com/auth/calendar','https://www.googleapis.com/auth/calendar.events'],
    clientOptions: {
        subject: 'usoroandidiong@gmail.com', // Replace with the user's email you want to impersonate
    },
});


export async function createGoogleMeetLink(meetingDetails:any) {
    const { title, description, startTime, endTime } = meetingDetails;
    const accessToken = getTokens("4/0AfJohXnNnOIC8ctQO3srciioZMMl1-zwIbZJzLTKrqT_v1ZZ9di4O89yeHBoi7MU_VzF8g")
    const calendar = google.calendar({ version: 'v3', auth: accessToken });
    // Create the event object
    const event = {
        summary: title,
        description: description,
        start: {
            dateTime: startTime,
            timeZone: 'America/Los_Angeles', // Adjust the time zone as needed
        },
        end: {
            dateTime: endTime,
            timeZone: 'America/Los_Angeles', // Adjust the time zone as needed
        },
        conferenceData: {
            conferenceSolution: {
                type: 'hangoutsMeet',
            },
            conferenceId: '1234', // Placeholder for the conference ID
        },
    };

    try {
        // Authenticate with the service account credentials
        await auth.getClient();

        // Create the event and retrieve the conference ID
        const response = await calendar.events.insert({
            auth:auth,
            calendarId: 'primary', // Replace with your calendar ID if needed
            resource: event,
            // options
        });

        const conferenceId = response.data.conferenceData.conferenceId;

        // Construct the Google Meet link
        const googleMeetLink = `https://meet.google.com/${conferenceId}`;

        return googleMeetLink;
    } catch (error) {
        console.error('Error creating Google Meet link:', error);
    }
}


// const createeventrequest = await axios({
//     url: `https://www.googleapis.com/calendar/v3/calendars/${calendarid}/events?conferencedataversion=1`,
//     method: 'post',
//     headers: {
//       authorization: `bearer ${accesstoken}`,
//     },
//     data: event,
//   });