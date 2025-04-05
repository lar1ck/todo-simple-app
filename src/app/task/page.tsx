'use client';

import { Trash2 } from 'lucide-react';
import { Pencil } from 'lucide-react';

const Task = () => {
    return (
        <div className="p-2 font-sans flex gap-4">
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
                        <button onClick={() => alert("Editing")} className='hover:cursor-pointer hover:text-blue-500 duration-200'>
                            <Pencil />
                        </button>

                        <button onClick={() => alert("Hello")} >
                            <Trash2 className='hover:cursor-pointer hover:text-[#FF0000] duration-200' />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Task;