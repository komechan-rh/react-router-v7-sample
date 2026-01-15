import type { Route } from "./+types";

export async function loader({ params }: Route.ActionArgs) {
  console.log("debug button");
}

export default function Button({ loaderData }: Route.ComponentProps) {
  return <button>hoge</button>;
}
