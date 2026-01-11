import {
  type RouteConfig,
  index,
  route,
  prefix,
  layout,
} from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  layout("layout/hoge.tsx", [route("hoge", "routes/hoge.tsx")]),
  route("dynamic/:id", "routes/dynamic.tsx"),
  ...prefix("prefix", [route("hoge", "routes/child.tsx")]),
] satisfies RouteConfig;
