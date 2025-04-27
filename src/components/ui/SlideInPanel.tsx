import React, { useState } from 'react';

export default function SlideInPanel({ id, title, content }) {
	const [isVisible, setIsVisible] = useState(false);

	return (
		<div
			id={id}
			className={`bg-white dark:bg-black items-center justify-center fixed top-0 right-0 h-full w-1/2 bg-white shadow-lg transform transition-transform duration-300 ${isVisible ? 'translate-x-0' : 'translate-x-full'
				}`}
		>
			<div className="mb-16 items-center justify-center px-4 py-12 lg:h-screen lg:gap-16">
				<h2 className="text-xl font-monospace text-lightgreen dark:text-lightgreen mb-4">{title}</h2>
				<p className="text-sm text-black dark:text-white leading-relaxed mb-6">
					{content}
				</p>
				<button
					className="px-4 py-2 bg-lightgreen text-white rounded hover:bg-green-600 transition"
					onClick={() => setIsVisible(false)}
				>
					Close
				</button>
			</div>
		</div>
	);
}