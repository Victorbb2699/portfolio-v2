import React, { useRef } from 'react';
import { useState, useEffect } from 'react';

interface SlideInPanelProps {
	id: string;
	title: string;
	isOpen: boolean;
	onClose: () => void;
	children: React.ReactNode;
	isMobile: boolean;
}



const SlideInPanel: React.FC<SlideInPanelProps> = ({ id, title, isOpen, onClose, children, isMobile }) => {

	const [isMounted, setIsMounted] = useState(false);
	const [isVisible, setIsVisible] = useState(false);
	const closeTimeoutRef = useRef<NodeJS.Timeout | null>(null);

	useEffect(() => {
		if (isOpen) {
			if (closeTimeoutRef.current) {
				clearTimeout(closeTimeoutRef.current);
			}
			setIsMounted(true);
			requestAnimationFrame(() => setIsVisible(true));
		} else {
			setIsVisible(false);
			closeTimeoutRef.current = setTimeout(() => {
				setIsMounted(false);
			}, 500);
		}
		return () => {
			if (closeTimeoutRef.current) {
				clearTimeout(closeTimeoutRef.current);
			}
		};
	}, [isOpen]);

	if (isMobile) {
		// Modal para móviles (baja desde arriba)
		return (
			<div
				className={`w-full h-full fixed inset-0 z-50 flex flex-col bg-white dark:bg-darkgray transform transition-transform duration-300 ${isVisible ? 'translate-y-0 opacity-100 visible' : '-translate-y-full opacity-0 invisible'
					}`}
			>
				<div className="sticky top-0 bg-white dark:bg-darkgray p-4 shadow-md flex justify-between items-center">
					<h2 className="text-2xl font-monospace text-seagreen dark:text-seagreen">{title}</h2>
					<button
						className="px-4 py-2 bg-seagreen text-white rounded hover:bg-green-600 transition"
						onClick={onClose}
					>
						Close
					</button>
				</div>
				<div className="flex-1 p-6 text-black dark:text-white leading-relaxed overflow-y-auto">{children}</div>
			</div>
		);
	}


	// Panel lateral para escritorio (se desliza desde la derecha)

	return (

		<div
			id={id}
			className={`fixed top-0 right-0 h-full sm:w-1/2 bg-white shadow-lg dark:bg-darkgray 
				transform transition-transform duration-300 
				${isVisible ? 'translate-x-0' : 'translate-x-full'}`}
		>
			<div className="flex flex-col items-center justify-center px4 sm:px-8 py-6 sm:py-12 h-full text-justify overflow-y-auto">
				<h2 className="text-2xl sm:text-3xl font-monospace text-seagreen dark:text-seagreen mb-4">{title}</h2>
				<div className="text-base sm:text-lg text-black dark:text-white leading-relaxed">{children}</div>
				<button className="mt-4 px-4 py-2 bg-seagreen text-white rounded transition" onClick={onClose}>
					Close
				</button>
			</div>
		</div>
	);
};

export default SlideInPanel;