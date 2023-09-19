import { useState } from "react";

const Todo = ({ task }) => {
    const [state, setState] = useState(false)

    const stateComplete = () => {
        setState(!state);
    }
    return (
        <div className="todo">
            <input type="checkbox" checked={state} onChange={stateComplete} />
            <span style={{ textDecoration: state ? 'line-through' : 'none' }}>
                {task}
            </span>
        </div>
    );
}
export default Todo
