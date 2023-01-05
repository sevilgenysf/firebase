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
		},
		[email, password]
	);

	return (
		<div>
			<h1>Sign in</h1>
			<form onSubmit={handleSubmit}>
				<input type="email" placeholder="Enter your mail" />
				<input type="password" placeholder="Enter your password" />
				<input type="submit" />
			</form>
		</div>
	);
};

export default SingIn;
