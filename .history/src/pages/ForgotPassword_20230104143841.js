const ForgotPassword = () => {
	return (
		<div>
			<h1>Forgot Password</h1>
			<form>
				<input type="email" placeholder="Enter your email" />
				<input type="submit" value="Send reset password email" >
			</form>
		</div>
	);
};

export default ForgotPassword;
