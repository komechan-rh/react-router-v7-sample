import {
	index,
	layout,
	prefix,
	type RouteConfig,
	route,
} from "@react-router/dev/routes";

export default [
	index("routes/home.tsx"),
	layout("layout/hoge.tsx", [route("hoge", "routes/hoge.tsx")]),
	route("dynamic/:id", "routes/dynamic.tsx"),
	route("loader-sample", "routes/loader-sample.tsx"),
	route("action-sample", "routes/action-sample.tsx"),
	...prefix("prefix", [route("hoge", "routes/child.tsx")]),
] satisfies RouteConfig;
