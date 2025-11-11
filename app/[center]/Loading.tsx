export default function Loading() {
	return (
		<div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-50">
			<div className="animate-spin rounded-full h-12 w-12 border-b-4 border-indigo-600 border-t-4"></div>
			<p className="mt-4 text-lg text-gray-700 font-medium">
				Loading Center Data and Services...
			</p>
		</div>
	);
}
