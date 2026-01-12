declare global {
	interface Window {
		__vite_plugin_react_preamble_installed__?: boolean;
	}
}

if (typeof window !== "undefined") {
	window.__vite_plugin_react_preamble_installed__ = true;
}
