const SignUp = () => {
	return (
		<div className="max-w-md mx-auto py-12">
			<h1 className="text-2xl">Create new account</h1>
			<form className="flex flex-col">
				<input type="email" placeholder="Enter your email" />
				<input type="password" placeholder="Enter your password" />
				<input type="submit" />
			</form>
		</div>
	);
};

export default SignUp;
