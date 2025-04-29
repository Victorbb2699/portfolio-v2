import { string } from 'astro:schema';
import React, { useState } from 'react';

export default function SlideInPanel({
	id, title, children,
}: {
	id: string;
	title: string;
	children: React.ReactNode;
}) {
	return (
		<div className='flex items-center justify-center'>
			<div
				id={id}
				className={`bg-white dark:bg-darkgray items-center justify-center fixed top-0 right-0 h-full w-1/2 bg-white shadow-lg 
							transform transition-transform duration-300 text-justify text-lg leading-relaxed translate-x-0 translate-x-full
					}`}
			>
				<div className="flex flex-col items-center justify-center px-8 py-12 h-full text-justify">
					<h2 className="text-3xl font-monospace text-seagreen dark:text-seagreen mb-4">{title}</h2>
					<p className="text-l text-black dark:text-white leading-relaxed mb-6 text-center max-w-md ">
						{children}
					</p>
				</div>
			</div>
		</div>
	);
}