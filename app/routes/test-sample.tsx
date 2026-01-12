import { Form, useActionData } from "react-router";

export function LoginForm() {
	const actionData = useActionData();
	const errors = actionData?.errors;
	return (
		<Form method="post">
			<label>
				<input type="text" name="username" />
				{errors?.username && <div>{errors.username}</div>}
			</label>

			<label>
				<input type="password" name="password" />
				{errors?.password && <div>{errors.password}</div>}
			</label>

			<button type="submit">Login</button>
		</Form>
	);
}
