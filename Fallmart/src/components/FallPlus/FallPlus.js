export default function FallPlus() {
	return (
		<form action="/api/membership" method="POST">
			<input name="phone" placeholder="Enter Your phone number" />
			<button type="submit">Sign Up</button>
		</form>
	);
}
