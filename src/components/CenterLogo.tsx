import Image from "next/image";

type Props = {
	name: string;
	logoUrl: string;
};

export const CenterLogo = ({ name, logoUrl }: Props) => {
	return (
		<Image
			alt={`${name}-logo`}
			width={100}
			height={100}
			src={`${logoUrl}`}
			className="w-20 h-20 rounded-full"
		/>
	);
};
