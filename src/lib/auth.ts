import { prismaAdapter } from "better-auth/adapters/prisma";
import { betterAuth } from "better-auth";
import { nextCookies } from "better-auth/next-js";
import { admin } from "better-auth/plugins";
import { prisma } from "@/lib/db";
import { adminAccessControl, adminRole } from "@/lib/auth-permissions";

export const auth = betterAuth({
  appName: "MUGZ Admin",
  baseURL: process.env.BETTER_AUTH_URL,
  secret: process.env.BETTER_AUTH_SECRET,
  database: prismaAdapter(prisma, {
    provider: "postgresql",
  }),
  emailAndPassword: {
    enabled: true,
    disableSignUp: true,
    minPasswordLength: 12,
  },
  plugins: [
    admin({
      ac: adminAccessControl,
      roles: { ADMIN: adminRole },
      adminRoles: ["ADMIN"],
    }),
    nextCookies(),
  ],
});
