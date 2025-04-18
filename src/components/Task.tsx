'use client';

import { Trash2 } from 'lucide-react';
import { Pencil } from 'lucide-react';
import clsx from 'clsx';

interface TasksProps {
  bgColor: string;
  TaskName: string;
  taskDescription: string;
  tasktype: string;
  taskTime: string;
  onDelete: (taskName: string) => void;
  onEdit: (taskName: string) => void;
}

const Task = (Props: TasksProps) => {
  const bgColor = clsx({
    'bg-blue-200': Props.bgColor === 'blue',
    'bg-red-200': Props.bgColor === 'red',
    'bg-green-200': Props.bgColor === 'green',
    'bg-purple-300': Props.bgColor === 'purple',
    'bg-yellow-200': Props.bgColor === 'yellow',
    'bg-gray-300': Props.bgColor === 'gray',
  });

  return (
    <div className="p-2 font-sans">
      <div
        className={clsx(
          'p-1 mt-10 w-[350px] sm:w-[200px] md:w-[350px] rounded-sm hover:scale-[101%] duration-200 transform',
          bgColor
        )}
      >
        <div className="mt-4 text-center font-bold ">{Props.TaskName}</div>
        <div className="text-gray-500 px-3 pt-3 pb-1">{Props.taskDescription}</div>
        <div className="pl-3 font-semibold text-gray-700 py-2">{Props.tasktype}</div>
        <div className="flex justify-between items-center">
          <div className="ml-3 font-bold text-lg">{Props.taskTime}</div>

          <div className="flex px-3 py-1 gap-4 text-gray-600">
            <button 
            onClick={() => Props.onEdit(Props.TaskName)} 
            className="hover:cursor-pointer hover:text-blue-500 duration-200">
              <Pencil />
            </button>

            <button
              onClick={() => Props.onDelete(Props.TaskName)}
            >
              <Trash2 className="hover:cursor-pointer hover:text-[#FF0000] duration-200" />
            </button>   
          </div>
        </div>
      </div>
    </div>
  );
};

export default Task;
