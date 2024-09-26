import { getByPlaceholderText } from "@testing-library/react";
import { useState } from "react";

const Home = () => {
        const [tasks, setTasks] = useState([])
        const [newtask, setNewTask] = useState('')
        const handleAddTask = () => {
                if (newtask.trim() == ('')) return;
                const newTaskObject = {
                        id: Date.now(),
                        description: newtask,
                        completed: false
                };
                setTasks([...tasks, newTaskObject]);
                setNewTask('');
        };

        const handleToggleTask = (id) => {
                setTasks(tasks.map(task => 
                        task.id == id ? {...task,completed: !task.completed}: task
                ))
        };

        const handleDeleteTask = (id) => {
                setTasks(tasks.filter(task => task.id !== id));
            };

        return ( 
                <div className="home">
                        <h1>Task Management App</h1>
                        <div className="task-input">
                        <input 
                        type="text" 
                        value={newtask}
                        onChange={(e)=>setNewTask(e.target.value)}
                        placeholder="Add new task"
                        />
                        <button onClick={handleAddTask}>Add Task</button>
                        </div>
                        <ul className="task-list">
                        {tasks.map(task => (
                        <li key={task.id} className={`task-item ${task.completed ? 'completed' : ''}`}>
                        <input
                            type="checkbox"
                            checked={task.completed}
                            onChange={() => handleToggleTask(task.id)}
                        />
                        {task.description}   
                        <button onClick={() => handleDeleteTask(task.id)}>Delete</button>
                    </li>
                ))}
            </ul>
                </div>
         );
}
 
export default Home;