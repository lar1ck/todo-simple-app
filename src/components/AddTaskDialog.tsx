'use client';

import { useState, useEffect } from 'react';

interface TasksProps {
    bgColor: string;
    TaskName: string;
    taskDescription: string;
    tasktype: string;
    time: string;
}

interface AddTaskDialogProps {
    onAddTask: (task: TasksProps) => void;
    initialData?: TasksProps | null;
}

export default function AddTaskDialog({ onAddTask, initialData }: AddTaskDialogProps) {
    const [formData, setFormData] = useState<TasksProps>({
        TaskName: '',
        taskDescription: '',
        bgColor: 'gray',
        tasktype: '',
        time: '',
    });

    useEffect(() => {
        if (initialData) {
            setFormData(initialData);
        }
    }, [initialData]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };
    const handleSubmit = () => {
        if (formData.TaskName.trim()) {
            onAddTask(formData);
        }
    };

    return (
        <div className="flex flex-col gap-3 py-3">
            <input
                name="TaskName"
                placeholder="Task Name"
                value={formData.TaskName}
                onChange={handleChange}
                className="p-2 border-0 border-b-1 border-gray-400 bg-gray-50 outline-none"
            />
            <textarea
                name="taskDescription"
                placeholder="Description"
                value={formData.taskDescription}
                onChange={handleChange}
                className="p-2 border-0 border-b-1 border-gray-400 bg-gray-50 outline-none"
                rows={3}
            />
            <input
                name="tasktype"
                placeholder="Type"
                value={formData.tasktype}
                onChange={handleChange}
                className="p-2 border-0 border-b-1 border-gray-400 bg-gray-50 outline-none"
            />
            <input
                type="time"
                name="time"
                value={formData.time}
                onChange={handleChange}
                className="p-2 border-0 border-b-1 border-gray-400 bg-gray-50 outline-none" />
            <select
                name="bgColor"
                value={formData.bgColor}
                onChange={handleChange}
                className="p-2 border-0 border-b-1 border-gray-400 bg-gray-50 outline-none"            >
                <option value="gray">Gray</option>
                <option value="blue">Blue</option>
                <option value="red">Red</option>
                <option value="green">Green</option>
                <option value="purple">Purple</option>
                <option value="yellow">Yellow</option>
            </select>
            <button
                onClick={handleSubmit}
                className=" text-white rounded p-1 mt-2 justify-end flex "
            >
                <p className='bg-blue-900 px-3 py-1 rounded'>
                {initialData ? 'Update Task' : 'Add Task'}
                </p>
            </button>
        </div>
    );
}
