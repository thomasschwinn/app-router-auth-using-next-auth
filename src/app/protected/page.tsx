import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";

export default async function ProtectedRoute() {
	const session = await getServerSession();
	if (!session || !session.user) {
		redirect("/api/auth/signin");
	}
	console.log(session.user);

	const allowedUserStr = process.env.allowed_user_list;
	const allowedUser = JSON.parse(allowedUserStr);

	if (!allowedUser.includes(session.user.name)) {
		return (
			<div>
				This is a protected route.
				<br />
				but the user is unknown, thats why you see this message
			</div>
		);
	}

	console.log(allowedUser);
	return (
		<div>
			This is a protected route.
			<br />
			You will only see this if you are authenticated.
		</div>
	);
}
