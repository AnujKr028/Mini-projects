import { useState } from 'react';

const Input = () => {
  const [inputValue, setInputValue] = useState('');
  const [tasks, setTasks] = useState([]);

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleClick = () => {
    if (inputValue.trim() === '') return;
    setTasks([...tasks, { text: inputValue, done: false }]);
    setInputValue('');
  };

  const deleteTask = (index) => {
    const newTask = tasks.filter((task, taskIndex) => taskIndex !== index);
    setTasks(newTask);
  };

  const doneBtn = (index) => {
    const newTasks = [...tasks];
    newTasks[index].done = !newTasks[index].done;
    setTasks(newTasks);
  };

  return (
    <> 

        <h1 className="title">To-Do</h1> 

      <section>
        <input
          type="text"
          name="Task"
          value={inputValue}
          onChange={handleChange}
        />
        <button className="add_task-btn" onClick={handleClick}>
          Add Task
        </button>
        <h1 className="h1-tasks">Tasks: </h1>
        <br />
        <h2>
          <ul>
            {tasks.map((item, index) => (
              <li
                key={index}
                style={{ textDecoration: item.done ? 'line-through' : 'none' }}
              >
                {item.text}
                <div>
                  <button className="donebtn" onClick={() => doneBtn(index)}>
                    ✅
                  </button>
                  <button
                    className="remove-btn"
                    onClick={() => deleteTask(index)}
                  >
                    ❌
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </h2>
      </section>
    </>
  );
};

export default Input;
