// import { fetchUser, updateUser } from '@/backend/actions/user.actions'
// import {NextAuthOptions} from 'next-auth'
// import NextAuth from 'next-auth/next'
// import GoogleProvider from "next-auth/providers/google"





// const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID!
// const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET!

// const authOption:NextAuthOptions = {
//     session:{
//         strategy:'jwt'
//     },
//     providers:[
//         GoogleProvider({
//             clientId:GOOGLE_CLIENT_ID,
//             clientSecret:GOOGLE_CLIENT_SECRET
//         })
//     ],
//     callbacks:{
//           async signIn ({account,profile}){
//             if(!profile?.email){
//            throw new Error('No profile')
//           }

//           await updateUser({
//             userId:account?.userId,
//             name:profile?.name,
//             email:profile?.email,
//         })
//             return true
//         },
//         async jwt({token,user,account,profile,}){
//             if(account){
//                 const user = await fetchUser(account?.userId)
//             }

//             if(!user){
//                 throw new Error('No user found')
//             }
//             token.id = user.id
//             return token
//         }


//     }
// }



// const handler = NextAuth(authOption)
// export {handler as GET, handler as POST}