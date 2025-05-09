'use client';

import { useEffect, useState, useRef } from 'react';
import Task from '@/components/Task';
import { Plus, OctagonMinus } from 'lucide-react';
import AddTaskDialog from '@/components/AddTaskDialog';

interface TasksProps {
  bgColor: string;
  TaskName: string;
  taskDescription: string;
  tasktype: string;
  time: string;
}

export default function Home() {
  const [tasks, setTasks] = useState<TasksProps[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [editTaskData, setEditTaskData] = useState<TasksProps | null>(null);
  const dialogRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedTasks = localStorage.getItem('tasks');
      if (storedTasks) {
        try {
          setTasks(JSON.parse(storedTasks));
        } catch (error) {
          console.error('Error parsing tasks from localStorage:', error);
        }
      }
    }
  }, []);

  const saveTasksToStorage = (tasksToSave: TasksProps[]) => {
    setTasks(tasksToSave);
    localStorage.setItem('tasks', JSON.stringify(tasksToSave));
  };

  const handleAddTask = (task: TasksProps) => {
    const updatedTasks = [...tasks, task];
    saveTasksToStorage(updatedTasks);
    setIsOpen(false);
  };

  const handleDeleteTask = (taskName: string) => {
    const updatedTasks = tasks.filter(task => task.TaskName !== taskName);
    saveTasksToStorage(updatedTasks);
  };

  const handleEditTask = (task: TasksProps) => {
    setEditTaskData(task);
    setIsOpen(true);
  };

  const handleUpdateTask = (updatedTask: TasksProps) => {
    const updatedTasks = tasks.map(task =>
      task.TaskName === updatedTask.TaskName ? updatedTask : task
    );
    saveTasksToStorage(updatedTasks);
    setIsOpen(false);
    setEditTaskData(null);
  };

  const handleClearAllTasks = () => {
    localStorage.removeItem('tasks');
    setTasks([]);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dialogRef.current && !dialogRef.current.contains(event.target as Node)) {
        setIsOpen(false);
        setEditTaskData(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="bg-gray-100 p-1 h-screen">
      <div className="flex justify-between mt-2 pr-4 items-center h-[50px]">
        <button
          className="bg-red-700 rounded-md p-1 items-center text-gray-100 flex hover:scale-105 hover:cursor-pointer transform duration-200 ml-4"
          onClick={handleClearAllTasks}
        >
          <OctagonMinus size={20} strokeWidth={4} />
        </button>

        <button
          className="bg-blue-800 rounded-md px-2 items-center text-gray-100 flex hover:scale-105 hover:cursor-pointer transform duration-200"
          onClick={() => {
            setIsOpen(true);
            setEditTaskData(null);
          }}
        >
          <Plus size={28} strokeWidth={3} />
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 pl-16">
        {tasks.length === 0 ? (
          <div className="col-span-full text-center text-gray-500">
            No tasks available
          </div>
        ) : (
          tasks.map((task, index) => (
            <Task
              key={index}
              TaskName={task.TaskName}
              taskDescription={task.taskDescription}
              bgColor={task.bgColor}
              tasktype={task.tasktype}
              taskTime={task.time}
              onDelete={handleDeleteTask}
              onEdit={() => handleEditTask(task)}
            />
          ))
        )}
      </div>

      {isOpen && (
        <div
          className="fixed shadow-2xl top-1/5 left-1/2 bg-gray-100 w-[550px] px-5 py-2 -translate-x-1/2 border rounded-sm z-50"
          ref={dialogRef}
        >
          <AddTaskDialog
            onAddTask={editTaskData ? handleUpdateTask : handleAddTask}
            initialData={editTaskData}
          />
        </div>
      )}
    </div>
  );
}
