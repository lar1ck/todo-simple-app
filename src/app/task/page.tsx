'use client';

import { Trash2 } from 'lucide-react';
import { Pencil } from 'lucide-react';
import { useState } from 'react';

const Task = () => {
    const [isOpen,setIsOpen] = useState(false);

    return (
        <div className="p-2 font-sans flex ">
            <div className="p-1 bg-blue-200 mt-10 w-[350px] rounded-sm hover:scale-[101%] duration-200 transform ">
                <div className="mt-4 text-center font-bold ">
                    Doing my homework
                </div>
                <div className="text-gray-500 px-3 pt-3 pb-1">
                    I am going to do my homework of mathematics with the aid of my notebook and exercises we did. I am going to do my homework of mathematics with the aid of my notebook and exercises we did
                </div>
                <div className='pl-3 font-semibold text-gray-700 py-2'>
                    Type : Fun
                </div>
                <div className='flex justify-between items-center'>
                    <div className='ml-3 font-bold text-lg'>
                        9:30 am
                    </div>

                    <div className='flex  px-3 py-1 gap-4 text-gray-600'>
                        <button onClick={() => setIsOpen(prev => !prev)} className='hover:cursor-pointer hover:text-blue-500 duration-200'>
                            <Pencil />
                        </button>

                        <button onClick={() => alert("Hello")} >
                            <Trash2 className='hover:cursor-pointer hover:text-[#FF0000] duration-200' />
                        </button>
                    </div>
                </div>
            </div>
            {isOpen && (
                <div className='fixed shadow-xl top-1/3 left-1/2 bg-white w-[300px] px-5 py-2 -translate-x-1/2 border border-gray-600 rounded-sm z-50'>
                </div>
            )}
        </div>
    )
}

export default Task;