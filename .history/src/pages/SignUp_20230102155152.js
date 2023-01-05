const SignUp = () => {
	return (
		<div className="max-w-md mx-auto">
			<h1>Create new account</h1>
			<form>
				<input type="email" placeholder="Enter your email" />
				<input type="password" placeholder="Enter your password" />
				<input type="submit" />
			</form>
		</div>
	);
};

export default SignUp;
