// // auth.ts
// import { google } from 'googleapis';

// const oauth2Client = new google.auth.OAuth2(
//   process.env.GOOGLE_CLIENT_ID!,
//   process.env.GOOGLE_CLIENT_SECRET!,
//   'http://localhost:3000'
// );

// export const getAuthUrl = () => {
//   const url = oauth2Client.generateAuthUrl({
//     access_type: 'offline',
//     scope: ['https://www.googleapis.com/auth/calendar','https://www.googleapis.com/auth/calendar.events'], 
//     approval_prompt: 'force',
//   });
//   return url;
// };

// export const getTokens = async (code: string) => {
//   const { tokens } = await oauth2Client.getToken(code);
//   oauth2Client.setCredentials(tokens);
//   return tokens;
// };
