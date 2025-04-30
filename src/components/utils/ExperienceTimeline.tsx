import React, { useState, useEffect } from 'react';
import { FaSchool, FaBriefcase } from 'react-icons/fa'; // Reemplazo con react-icons
import SlideInPanel from '@components/ui/SlideInPanel';
import useIsMobile from 'hooks/useIsMobile';

export default function ExperienceTimeline() {
    const [activePanel, setActivePanel] = useState<string | null>(null);
    const isMobile = useIsMobile();

    const togglePanel = (id: string) => {
        setActivePanel((prev) => (prev === id ? null : id));
    };

    const closePanelOnScroll = () => {
        if (activePanel) {
            setActivePanel(null);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', closePanelOnScroll);

        return () => {
            window.removeEventListener('scroll', closePanelOnScroll);
        };
    }, [activePanel]);



    return (
        <>
            <div className="mb-2 flex flex-row">
                <FaSchool className="mr-2 mt-2 text-seagreen text-3xl" /> {/* Icono reemplazado */}
                <h2 className="font-monospace text-3xl font-semibold text-seagreen">Studies & Experience</h2>
                <FaBriefcase className="ml-2 mt-2 text-seagreen text-3xl" /> {/* Icono reemplazado */}
            </div>

            <ol className="relative ml-3 border-s border-seagreen">
                {/* Studies */}
                <li className="mb-10 ms-4">
                    <div className="absolute -start-1.5 mt-1.5 h-3 w-3 rounded-full border border-seagreen border-white" />
                    <time className="mb-1 text-sm font-normal leading-none text-seagreen">2016 - 2018</time>
                    <h3 className="font-monospace text-lg font-semibold text-seagreen">Technological Baccalaureate</h3>
                    <p className="mb-4 text-sm text-black dark:text-white">
                        Completed studies in technological fields, focusing on programming and system design.
                    </p>
                </li>

                <li className="ms-4">
                    <div className="bg-gray-200 dark:border-gray-900 dark:bg-gray-700 absolute -start-1.5 mt-1.5 h-3 w-3 rounded-full border border-white" />
                    <time className="mb-1 text-sm font-normal leading-none text-seagreen">2018 - 2020</time>
                    <h3 className="font-monospace text-lg font-semibold text-seagreen">
                        Multiplatform Application Development (DAM)
                    </h3>
                    <p className="mb-4 text-sm text-black dark:text-white">
                        Gained expertise in full-stack development, working with various frameworks and databases.
                    </p>
                </li>

                {/* First Experience */}
                <li className="mb-10 ms-4">
                    <div className="bg-gray-200 dark:border-gray-900 dark:bg-gray-700 absolute -start-1.5 mt-1.5 h-3 w-3 rounded-full border border-white" />
                    <time className="mb-1 text-sm font-normal leading-none text-seagreen">2020 - 4 months</time>
                    <h3 className="font-monospace text-lg font-semibold text-seagreen">Internship Backend Developer</h3>
                    <p className="mb-4 text-sm text-black dark:text-white">
                        Developed a web app for digital signatures using JavaScript, Canvas API, PHP, HTML, and CSS.
                    </p>
                    <button
                        onClick={() => togglePanel('panel-1')}
                        className="font-monospace text-sm px-4 py-2 bg-seagreen text-white rounded hover:bg-green-600 transition"
                    >
                        {activePanel === 'panel-1' ? 'Read less' : 'Learn more...'}
                    </button>
                </li>

                {/* Second Experience */}
                <li className="mb-10 ms-4">
                    <div className="bg-gray-200 dark:border-gray-900 dark:bg-gray-700 absolute -start-1.5 mt-1.5 h-3 w-3 rounded-full border border-white" />
                    <time className="mb-1 text-sm font-normal leading-none text-seagreen">2024 - 2025</time>
                    <h3 className="font-monospace text-lg font-semibold text-seagreen">Software Developer</h3>
                    <p className="mb-4 text-sm text-black dark:text-white">
                        Developed a complete eCommerce solution using Spring Boot and Thymeleaf, with a modular,
                        scalable, and secure architecture.
                    </p>
                    <button
                        onClick={() => togglePanel('panel-2')}
                        className="font-monospace text-sm px-4 py-2 bg-seagreen text-white rounded hover:bg-green-600 transition"
                    >
                        {activePanel === 'panel-2' ? 'Read less' : 'Learn more...'}
                    </button>
                </li>
            </ol>

            {/* Slide Panels */}
            <SlideInPanel
                id="panel-1"
                title="Internship Backend Developer"
                isOpen={activePanel === 'panel-1'}
                onClose={() => togglePanel('panel-1')}
                isMobile={isMobile}
            >
                <div className="text-black dark:text-white">
                    <p>
                        Developed a web application for signing documents online using JavaScript, PHP, HTML, and
                        CSS. The application featured an interactive canvas implemented with the Canvas API to capture
                        digital signatures and store them on the server using PHP.
                    </p>
                    <p>
                        I designed an intuitive and responsive interface, optimizing both the user experience and the
                        security of the signing process.
                    </p>
                </div>
            </SlideInPanel>

            <SlideInPanel
                id="panel-2"
                title="Software Developer"
                isOpen={activePanel === 'panel-2'}
                onClose={() => togglePanel('panel-2')}
                isMobile={isMobile}
            >
                <div className="text-black dark:text-white">
                    <p>
                        I received extensive training in the fundamentals of software development, starting with
                        algorithms and advanced database management, all the way to current frameworks used in various
                        projects.
                    </p>
                    <br />
                    <p>
                        Development of a generic eCommerce template with Spring Boot and Thymeleaf, implementing a
                        modular and scalable architecture, with integrated security and data persistence using MySQL as
                        the database. A logging system was added, and use cases for error management were also
                        considered. It was dockerized for easier deployment and implemented on AWS, optimizing its
                        performance and scalability in the cloud.
                    </p>
                    <br />
                    <p className="">Room Reservation Management System:</p>
                    <p>
                        Developed a full-stack web application focused on security, user experience, and modern
                        deployment practices.
                    </p>
                    <p>
                        Backend: Django + DRF, exposing a secure RESTful API protected by JWT
                        authentication managed through Keycloak as an identity provider (SSO replacement).
                    </p>
                    <br />
                    <p>
                        Database: PostgreSQL.
                    </p>
                    <br />
                    <p>
                        Integrated automatic confirmation email sending for reservations. Designed a centralized logging
                        system and robust error handling. Fully dockerized solution, ensuring reproducibility and
                        seamless deployment across all development stages.
                    </p>
                </div>
            </SlideInPanel>
        </>
    );
}
