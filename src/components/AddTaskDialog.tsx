'use client';

import { useState } from 'react';

interface AddTaskDialogProps {
  onAddTask: (task: { TaskName: string; taskDescription: string; tasktype: string; bgColor: string; time: string }) => void;
}

const AddTaskDialog = ({ onAddTask }: AddTaskDialogProps) => {
  const [taskName, setTaskName] = useState('');
  const [description, setDescription] = useState('');
  const [type, setType] = useState('');
  const [bgColor, setBgColor] = useState('blue');
  const [time, setTime] = useState('');

  const handleAddTask = () => {
    if (!taskName) return;

    const task = {
      TaskName: taskName,
      taskDescription: description,
      tasktype: type,
      bgColor,
      time,
    };

    onAddTask(task);

    setTaskName('');
    setDescription('');
    setType('');
    setBgColor('blue');
    setTime('');
  };

  return (
    <div className="p-4 bg-gray-100  border-0 rounded-md w-[500px]">
      <input
        className="border-0 border-b-2 bg-gray-50 p-1 mb-2 w-full outline-none"
        placeholder="Task Name"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
      />
      <textarea
        className="border-0 border-b-2 bg-gray-50 p-1 mb-2 w-full outline-none"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        className="border-0 border-b-2 bg-gray-50 p-1 mb-2 w-full outline-none"
        placeholder="Type"
        value={type}
        onChange={(e) => setType(e.target.value)}
      />
      <select
        className="border-0 border-b-2 bg-gray-50 p-1 mb-2 w-full outline-none"
        value={bgColor}
        onChange={(e) => setBgColor(e.target.value)}
      >
        <option value="blue">Blue</option>
        <option value="red">Red</option>
        <option value="green">Green</option>
        <option value="yellow">Yellow</option>
        <option value="purple">Purple</option>
      </select>

      <input
        type="time"
        className="border-0 border-b-2 bg-gray-50 p-1 mb-2 w-full outline-none"
        value={time}
        onChange={(e) => setTime(e.target.value)}
      />

      <button
        className="bg-blue-800 text-white mt-2 px-3 py-1 rounded-md hover:cursor-pointer "
        onClick={handleAddTask}
      >
        Add Task
      </button>
    </div>
  );
};

export default AddTaskDialog;
