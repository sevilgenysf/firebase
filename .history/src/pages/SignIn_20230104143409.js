import { useState, useCallback } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { Link } from 'react-router-dom';
import { auth } from '../firebase';

const SingIn = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const handleSubmit = useCallback(
		(e) => {
			e.preventDefault();
			if (!email || !password) {
				return;
			}

			signInWithEmailAndPassword(auth, email, password)
				.then(() => {
					alert('hey, you have signed in');
				})
				.catch((e) => {
					console.log(e);
				});
		},
		[email, password]
	);

	return (
		<div className="max-w-md mx-auto py-12">
			<h1 className="text-2xl">Sign in</h1>
			<form onSubmit={handleSubmit} className="flex flex-col gap-4 mt-8">
				<input
					type="email"
					placeholder="Enter your mail"
					value={email}
					onChange={(e) => setEmail(e.currentTarget.value)}
					className="p-4 bg-gray-100 rounded-md"
				/>
				<input
					type="password"
					placeholder="Enter your password"
					value={password}
					onChange={(e) => setPassword(e.currentTarget.value)}
					className="p-4 bg-gray-100 rounded-md"
				/>
				<Link>Forgot Password</Link>
				<input
					type="submit"
					className="p-4 bg-pink-400 rounded-md"
					value="Sing-in"
				/>
				<Link to="/sign-up">Donnt have a account? Sign Up</Link>
			</form>
		</div>
	);
};

export default SingIn;
