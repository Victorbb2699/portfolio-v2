import React from 'react';

export default function ModalMobile({
    id,
    title,
    children,
    onClose,
}: {
    id: string;
    title: string;
    children: React.ReactNode;
    onClose: () => void;
}) {
    return (
        <div
            id={id}
            className="fixed inset-0 z-50 flex flex-col bg-white dark:bg-darkgray transform transition-transform duration-300 translate-y-0"
        >
            <div className="sticky top-0 bg-white dark:bg-darkgray p-4 shadow-md flex justify-between items-center">
                <h2 className="text-2xl font-monospace text-seagreen dark:text-seagreen">
                    {title}
                </h2>
                <button
                    className="px-4 py-2 bg-seagreen text-white rounded hover:bg-green-600 transition"
                    onClick={onClose}
                >
                    Close
                </button>
            </div>
            <div className="flex-1 p-6 text-l text-black dark:text-white leading-relaxed space-y-4 overflow-y-auto">
                {children}
            </div>
        </div>
    );
}