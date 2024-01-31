import NextAuth from "next-auth";
import GitHubProvider from "next-auth/providers/github";
//import EmailProvider from "next-auth/providers/email";

export const authOptions = {
	providers: [
		// EmailProvider({
		// 	server: process.env.EMAIL_SERVER,
		// 	from: process.env.EMAIL_FROM,
		// 	// maxAge: 24 * 60 * 60, // How long email links are valid for (default 24h)
		// }),
		GitHubProvider({
			clientId: process.env.GITHUB_ID ?? "",
			clientSecret: process.env.GITHUB_SECRET ?? "",
		}),
	],
};

export const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
