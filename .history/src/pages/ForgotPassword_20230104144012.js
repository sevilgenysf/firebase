const ForgotPassword = () => {
	return (
		<div className="max-w-md mx-auto py-12">
			<h1 className="text-2xl">Forgot Password</h1>
			<form className="flex flex-col gap-4 mt-8">
				<input
					type="email"
					placeholder="Enter your email"
					className="p-4 bg-gray-100 rounded-md"
				/>
				<input
					type="submit"
					value="Send reset password email"
					className="p-4 bg-pink-400 rounded-md"
				/>
			</form>
		</div>
	);
};

export default ForgotPassword;
