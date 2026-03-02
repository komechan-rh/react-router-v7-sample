import { Button } from "~/components/ui/button";
import type { Route } from "./+types";

type Data = {
  name: string;
  description: string;
};

export default function ShadcnSample({ loaderData }: Route.ComponentProps) {
  return (
    <div>
      <Button>Shadcn button</Button>
    </div>
  );
}
