import { Link } from 'react-router-dom';

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
					className="p-4 bg-green-400 rounded-md"
				/>
			</form>
			<Link to="/sign-up">Donnt have a account? Sign Up</Link>
		</div>
	);
};

export default ForgotPassword;
