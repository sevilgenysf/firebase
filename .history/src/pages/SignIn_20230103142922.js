import { useState, useCallback } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
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
		<div>
			<h1>Sign in</h1>
			<form onSubmit={handleSubmit}>
				<input
					type="email"
					placeholder="Enter your mail"
					value={email}
					onChange={(e) => setEmail(e.currentTarget.value)}
				/>
				<input
					type="password"
					placeholder="Enter your password"
					value={password}
					onChange={(e) => setPassword(e.currentTarget.value)}
				/>
				<input type="submit" />
			</form>
		</div>
	);
};

export default SingIn;
