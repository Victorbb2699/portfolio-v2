import React, { useState } from 'react';

export default function SlideInPanel({ id, title, content }) {
	const [isVisible, setIsVisible] = useState(false);

	return (
		<div className='flex items-center justify-center'>
			<div
				id={id}
				className={`bg-white dark:bg-black items-center justify-center fixed top-0 right-0 h-full w-1/2 bg-white shadow-lg transform transition-transform duration-300 ${isVisible ? 'translate-x-0' : 'translate-x-full'
					}`}
			>
				<div className="flex flex-col items-center justify-center px-4 py-12 h-full">
					<h2 className="text-3xl font-monospace text-lightgreen dark:text-lightgreen mb-4">{title}</h2>
					<p className="text-l text-black dark:text-white leading-relaxed mb-6 text-center max-w-md ">
						{content}
					</p>
				</div>
			</div>
		</div>
	);
}