import { Form } from "react-router";
import type { Route } from "./+types/action-sample";

type FormData = {
	name: string;
};

export async function action({ request }: Route.ClientActionArgs) {
	const formData = await request.formData();
	const name = formData.get("name");

	await new Promise((resolve) => setTimeout(() => resolve({}), 5000));
	console.log("server action");
	return { name };
}

// export async function clientAction({ request }: Route.ClientActionArgs) {
//   const formData = await request.formData();
//   const name = formData.get("name");

//   await new Promise((resolve) => setTimeout(() => resolve({}), 5000));
//   console.log("client action");
//   return { name };
// }

export default function Project({ actionData }: Route.ComponentProps) {
	return (
		<div>
			<h1>Project</h1>
			<Form method="post">
				<input type="text" name="title" />
				<button type="submit">Submit</button>
			</Form>
			{actionData ? <p>{actionData.name} updated</p> : null}
		</div>
	);
}
