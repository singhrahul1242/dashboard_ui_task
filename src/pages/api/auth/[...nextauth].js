import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import { GOOGLE_CLIENT_SECRET,GOOGLE_CLIENT_ID } from '../../../config';

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
    }),
  ],
});
