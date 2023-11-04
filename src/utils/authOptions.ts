import { NextAuthOptions } from "next-auth";
import Credentials from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
  providers: [
    Credentials({
      name: "Credentials",
      credentials: {
        email: { label: "Email" },
        password: { label: "Password" },
      },
      authorize(credentials, req) {
        // Perform database operations

        if (
          credentials?.email === "info@aplusstudio.in" &&
          credentials.password === "apstudio@2023"
        ) {
          return {
            id: "1",
            email: "info@aplusstudio.in",
          };
        }

        return null;
      },
    }),
  ],
};
