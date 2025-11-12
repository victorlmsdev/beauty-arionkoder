import { PropsWithChildren } from "react";

export const SubTitle = ({ children }: PropsWithChildren) => {
	return (
		<h2 className="text-3xl  font-bold  text-center bg-white text-black rounded-lg font-sans p-4 backdrop-blur-sm shadow-sm  mb-8  dark:invert">
			{children}
		</h2>
	);
};
