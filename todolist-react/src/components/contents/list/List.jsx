import React from 'react';
import { useTodo } from '../../../context/TodoContext';
import Item from './Item';

// Filtreleme için kullanılacak değişkeni tanımla
let filtered = null;

// List bileşeni oluştur
function List() {
    const { todos, filter } = useTodo();

    // filtered değişkenini todos ile başlat
    filtered = todos;

    // Eğer filter "all" değilse, todos'u filtrele
    if (filter !== "all") {
        filtered = todos.filter((todo) =>
            filter === "active" ? todo.completed === false : todo.completed === true
        );
    }

    return (
        <ul className="todo-list">
            {
                // Filtrelenmiş todos üzerinde map fonksiyonunu kullanarak Item bileşenlerini oluştur
                filtered.map((todo) =>
                    <Item key={todo.id} todo={todo}></Item>
                )
            }
        </ul>
    );
}

export default List;
