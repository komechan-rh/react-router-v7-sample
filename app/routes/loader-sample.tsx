import type { Route } from "./+types/home";

type Data = {
	name: string;
	description: string;
};

export async function loader({ params }: Route.LoaderArgs): Promise<Data> {
	console.log("debug start--------------");
	await new Promise((resolve) => setTimeout(() => resolve({}), 1000));
	console.log("debug end--------------");
	return { name: "hoge from server", description: "hoge description" };
}

export async function clientLoader({
	serverLoader,
	params,
}: Route.ClientLoaderArgs): Promise<Data> {
	await new Promise((resolve) => setTimeout(() => resolve({}), 500));
	console.log("debug--------------");
	console.log(params);
	const serverData = await serverLoader();
	console.log(serverData);
	return { name: "hoge", description: "hoge description" };
}

// HydrateFallback is rendered while the client loader is running
export function HydrateFallback() {
	return <div>Loading...</div>;
}

export default function Product({ loaderData }: Route.ComponentProps) {
	const { name, description } = loaderData as Data;
	return (
		<div>
			<h1>{name}</h1>
			<p>{description}</p>
		</div>
	);
}
