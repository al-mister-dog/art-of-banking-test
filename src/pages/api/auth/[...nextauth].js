import NextAuth from "next-auth";
import nodemailer from "nodemailer";
import CredentialsProvider from "next-auth/providers/credentials";
import EmailProvider from "next-auth/providers/email";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";

import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { verifyPassword } from "../../../lib/auth";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
function html({ url, host, email }) {
  const escapedEmail = `${email.replace(/\./g, "&#8203;.")}`;
  const escapedHost = `${host.replace(/\./g, "&#8203;.")}`;
  // Your email template here
  return `
      <body>
        <h1>Your magic link! 🪄</h1>
        <h3>Your email is ${escapedEmail}</h3>
        <p>
          <a href="${url}">Sign in to ${escapedHost}</a>
      </body>
  `;
}

// Fallback for non-HTML email clients
function text({ url, host }) {
  return `Sign in to ${host}\n${url}\n\n`;
}
export const authOptions = {
  // Store provider details to database
  adapter: PrismaAdapter(prisma),
  // Configure one or more authentication providers
  providers: [
    EmailProvider({
      server: {
        host: process.env.EMAIL_SERVER_HOST,
        port: process.env.EMAIL_SERVER_PORT,
        auth: {
          user: process.env.EMAIL_SERVER_USER,
          pass: process.env.EMAIL_SERVER_PASSWORD,
        },
      },
      from: process.env.EMAIL_FROM,
      // async sendVerificationRequest({
      //   identifier: email,
      //   url,
      //   provider: { server, from },
      // }) {
      //   const { host } = new URL(url);
      //   const transport = nodemailer.createTransport(server);

      //   await transport.sendMail({
      //     to: email,
      //     from,
      //     subject: `Sign in to ${host}`,
      //     text: text({ url, host }),
      //     html: html({ url, host, email }),
      //   });
      //   console.log("AND HERE");
      // },
    }),
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },
    }),
    // CredentialsProvider({
    //   async authorize(credentials) {
    //     const user = await prisma.user.findUnique({
    //       where: {
    //         email: credentials.email,
    //       },
    //     });

    //     if (!user) {
    //       throw new Error("No user found!");
    //     }

    //     const isValid = await verifyPassword(
    //       credentials.password,
    //       user.password
    //     );

    //     if (!isValid) {
    //       throw new Error("Could not log you in!");
    //     }
    //     return { email: user.email };
    //   },
    // }),
  ],
  pages: {
    signIn: "/registration/signin",
  },
  secret: process.env.JWT_SECRET,
  session: {
    jwt: true,
  },
  debug: true,
};

export default NextAuth(authOptions);
