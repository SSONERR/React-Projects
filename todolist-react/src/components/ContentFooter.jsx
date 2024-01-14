import React from 'react';
import { useTodo } from '../context/TodoContext';

// ContentFooter bileşenini oluştur
function ContentFooter() {
    // useTodo hook'u aracılığıyla todos, setTodos, filter ve setFilter değerlerini al
    const { todos, setTodos, filter, setFilter } = useTodo();

    // Tamamlanmış görevleri temizleme fonksiyonunu tanımla
    const clearCompleted = () => {
        // todos dizisinin bir kopyasını oluştur
        const cloneTodos = [...todos];

        // Tamamlanmış görevleri filtrele
        const filteredTodos = cloneTodos.filter((todo) => !todo.completed);

        // setTodos fonksiyonunu kullanarak tamamlanmış görevleri temizle
        setTodos(filteredTodos);
    };

    return (
        <footer className="footer">
            <span className="todo-count">
                <strong>{todos.length} </strong>
                item{todos.length !== 1 && "s"} left
            </span>

            <ul className="filters">
                <li>
                    <a href="#/" onClick={() => setFilter("all")} className={filter === "all" ? "selected" : ""}>
                        All
                    </a>
                </li>
                <li>
                    <a href="#/" onClick={() => setFilter("active")} className={filter === "active" ? "selected" : ""}>
                        Active
                    </a>
                </li>
                <li>
                    <a href="#/" onClick={() => setFilter("completed")} className={filter === "completed" ? "selected" : ""}>
                        Completed
                    </a>
                </li>
            </ul>

            <button className="clear-completed" onClick={clearCompleted}>
                Clear completed
            </button>
        </footer>
    );
}

export default ContentFooter;
