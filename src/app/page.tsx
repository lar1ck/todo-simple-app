
import Task from "@/components/Task";

export default function Home() {
  return (
    <div className="grid grid-cols-3 px-1 bg-gray-100">
      <Task
        TaskName="Task Number 1"
        taskDescription="Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure aut nisi totam. Minus nobis magnam, saepe ex eligendi facilis sint sequi?"
        bgColor="red"
        tasktype="Urgent"
      />
      <Task
        TaskName="Task Number 2"
        taskDescription="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur, quod. Id quos veritatis perferendis alias molestias deleniti praesentium architecto vel amet beatae, sequi laborum possimus commodi sunt maxime esse nisi reiciendis libero ratione accusamus!"
        bgColor="green"
        tasktype="Leisure"
      />
      <Task
        TaskName="Task Number 3"
        taskDescription="Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus officiis sunt officia."
        bgColor="yellow"
        tasktype="Social"
      />
      <Task
        TaskName="Task Number 4"
        taskDescription="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius non porro delectus quod quo tenetur adipisci expedita cupiditate corrupti! Sapiente natus voluptatum aut architecto molestias repudiandae est."
        bgColor="purple"
        tasktype="Technical"
      />
      <Task
        TaskName="Task Number 5"
        taskDescription="Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus officiis sunt officia."
        bgColor="blue"
        tasktype="Capitol"
      />
    </div>
  );
}
