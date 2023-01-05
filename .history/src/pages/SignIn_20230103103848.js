import { useState } from 'react';

const SingIn = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	return (
		<div>
			<h1>Sign in</h1>
			<form>
				<input type="email" placeholder="Enter your mail" />
				<input type="password" placeholder="Enter your password" />
				<input type="submit" />
			</form>
		</div>
	);
};

export default SingIn;
