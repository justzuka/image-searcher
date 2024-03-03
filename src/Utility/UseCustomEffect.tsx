import { useRef, useEffect } from "react";

const useCustomEffect = (callback: () => void, dependencies: any[]) => {
	const firstRenderRef = useRef(true);

	useEffect(() => {
		if (firstRenderRef.current) {
			firstRenderRef.current = false;
			return;
		}

		return callback();
	}, dependencies);
};

export default useCustomEffect;
