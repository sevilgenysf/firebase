const SignUp = () => {
	return (
		<div className="max-w-md mx-auto py-12">
			<h1 className="text-2xl">Create new account</h1>
			<form className="flex flex-col">
				<input
					type="email"
					placeholder="Enter your email"
					className="p-4 bg-gray-100 rounded-md"
				/>
				<input
					type="password"
					placeholder="Enter your password"
					className="p-4 bg-gray-100 rounded-md"
				/>
				<input type="submit" className="p-4 bg-gray-100 rounded-md" />
			</form>
		</div>
	);
};

export default SignUp;
