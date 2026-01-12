import type { Route } from "./+types/home";

// // provides `loaderData` to the component
// export async function loader({ params }: Route.LoaderArgs) {
//   let team = await fetchTeam(params.teamId);
//   return { name: team.name };
// }

type Params = {
	id: string;
};

// renders after the loader is done
export default function Component({ params }: Route.ComponentProps) {
	return <h1>{params.id}</h1>;
}
