import React from 'react';
import {Todo} from "../types";

const TodoItem = ({ item, index, remove }: { item: Todo; index: number; remove: (item: Todo) => void}) => {

    return (
        <div className="item-content">
            <p>
                <b>{index}. </b> {item.text}
            </p>
            <button onClick={() => remove(item)}>Удалить</button>
        </div>
    );
};

export default TodoItem ;