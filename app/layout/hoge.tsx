import { Outlet } from "react-router";

export default function HogeLayout() {
  return (
    <div>
      <h1>hello layout!</h1>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
