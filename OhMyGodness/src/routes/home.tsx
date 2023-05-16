import '../SCSS/home.scss';
import { Card } from 'flowbite-react';
import {useEffect} from 'react';

export default function Home() {
    useEffect(() => {
        document.title = 'Systemy Informatyczne - Pliki PDF';
    }, []);
    return (
        <>
        <div className='homepage flex flex-col'>
            <div className='flex justify-center items-center h-52 mt-10'>
                <div className='text-center'>
                    <h1 className='text-4xl font-bold'>Pliki PDF do przedmiotu <b>Systemy Informatyczne</b></h1>
                </div>
            </div>
                <div className="tableNames">
                    <Card>
                        <div className="mb-4 flex items-center justify-between">
                            <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">
                                Realizacja projektu
                            </h5>
                            <h5 className="text-sm font-medium text-black">
                                PDF
                            </h5>
                        </div>
                        <div className="flow-root">
                            <ul className="divide-y divide-gray-200 dark:divide-gray-700">
                                <li className="py-3 sm:py-4">
                                    <div className="flex items-center space-x-4">
                                        <div className="min-w-0 flex-1">
                                            <p className="truncate text-sm font-medium text-gray-900 dark:text-white">
                                            Jakub Kordella
                                            </p>
                                            <p className="truncate text-sm text-gray-500 dark:text-gray-400">
                                                Lider
                                            </p>
                                        </div>
                                        <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                            Lab3, Lab10
                                        </div>
                                    </div>
                                </li>
                                <li className="py-3 sm:py-4">
                                    <div className="flex items-center space-x-4">
                                        <div className="min-w-0 flex-1">
                                            <p className="truncate text-sm font-medium text-gray-900 dark:text-white">
                                            Natalia Szeliga
                                            </p>
                                        </div>
                                        <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                            Lab2, Lab2.1, Lab2.2
                                        </div>
                                    </div>
                                </li>
                                <li className="py-3 sm:py-4">
                                    <div className="flex items-center space-x-4">
                                        <div className="min-w-0 flex-1">
                                            <p className="truncate text-sm font-medium text-gray-900 dark:text-white">
                                            Mateusz Skajewski
                                            </p>
                                        </div>
                                        <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                            Lab4, Lab6
                                        </div>
                                    </div>
                                </li>
                                <li className="py-3 sm:py-4">
                                    <div className="flex items-center space-x-4">
                                        <div className="min-w-0 flex-1">
                                            <p className="truncate text-sm font-medium text-gray-900 dark:text-white">
                                            Mateusz Wanda
                                            </p>
                                        </div>
                                        <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                            Lab1, Lab5
                                        </div>
                                    </div>
                                </li>
                                <li className="pt-3 pb-0 sm:pt-4">
                                    <div className="flex items-center space-x-4">
                                        <div className="min-w-0 flex-1">
                                            <p className="truncate text-sm font-medium text-gray-900 dark:text-white">
                                            Ulyana Sytaya
                                            </p>
                                        </div>
                                        <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                            Lab7, Lab9
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </Card>
                </div>
        </div>
        </>
    )
}