//app/libs/authOptions.js
import CredentialsProvider from "next-auth/providers/credentials";
import GitHubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";

import { PrismaAdapter } from "@auth/prisma-adapter";
import { compare } from "bcrypt";
import db from "./db";


const authOptions = {
  //   adapter: PrismaAdapter(db),
    secret: process.env.NEXTAUTH_SECRET,
    session: {
      strategy: "jwt",
    },
    pages: {
    signIn: "/login", // You may also need to add 'callbackUrl' in case it helps
  },
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET
    }),
    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        try {

          if (!credentials?.email || !credentials?.password) {
            return "Please Fill the the fields"
          }

          const existingUser = await db.User.findUnique({
            where: { email: credentials.email },
          });

          if (!existingUser) {
            return false
          }

          const passwordMatch = await compare(credentials.password, existingUser.password);

          if (!passwordMatch) return "Incorrect Password"

          const user = {
            id: existingUser.id,
            name: existingUser.name,
            email: existingUser.email,
          };
          return user;
        } catch (error) {
          console.log(error);
        }
      },
    }),

  ],
  callbacks: {
    async session({ session, user, token }) {
      return session;
    },
    async signIn({ account, user }) {
      if (account.provider === "google" || account.provider === "github") {
        try {
          const existingUser = await db.User.findUnique({
            where: { email: user.email },
          });
  
          if (!existingUser) {
            await db.User.create({
              data: {
                name: user.name,
                email: user.email,
                image: user.image
              }
            })
          }
          return true;
        } catch (error) {
          console.log(error)
        }
      }
      return false;
    },
    async jwt({ token, user, account, profile, isNewUser }) {
      return token;
    },
  },
};

export { authOptions };

