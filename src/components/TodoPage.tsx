import React, { FC } from "react";
import { ITodo } from "../models/ITodo";
import TodoBody from "./TodoBody.tsx";

interface TodoProps {
    todosProps: ITodo[] 
}

const TodoPage: FC<TodoProps>=(props: TodoProps)=>{
    return(<div>
        {props.todosProps.map(el=>{return(<div>
            <TodoBody element={el} />
        </div>)})}
    </div>)
}

export default TodoPage