import React from 'react';
import { useCallback, useState } from 'react';
import { useAsyncError } from 'react-router-dom';

const SignUp = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const handleSubmit = useCallback(() => {
		console.log('email', email, 'pass', password);
	}, [email, password]);

	return (
		<div className="max-w-md mx-auto py-12">
			<h1 className="text-2xl">Create new account</h1>
			<form className="flex flex-col gap-4 mt-8">
				<input
					type="email"
					placeholder="Enter your email"
					className="p-4 bg-gray-100 rounded-md"
					value={email}
					onChange={(e) => setEmail(e.currentTarget.value)}
				/>
				<input
					type="password"
					placeholder="Enter your password"
					className="p-4 bg-gray-100 rounded-md"
					value={password}
					onChange={(e) => setPassword(e.currentTarget.value)}
				/>
				<input type="submit" className="p-4 bg-green-400 rounded-md" />
			</form>
		</div>
	);
};

export default SignUp;
