import { createContext, useContext, useState } from 'react';

const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
    const [todos, setTodos] = useState([
        {
            id: 1,
            text: "Learn React",
            completed: true
        }
    ]);

    const onChange = (id) => {
        // todos dizisinin bir kopyasını oluştur
        const cloneTodos = [...todos];

        // İlgili todo'nun dizideki index'ini bul
        const itemIndex = cloneTodos.findIndex(todo => todo.id === id);

        // İlgili todo'yu al
        const item = todos[itemIndex];

        // Tamamlanma durumunu tersine çevir
        item.completed = !item.completed;

        // setTodos fonksiyonunu kullanarak güncellenmiş todos dizisini ayarla
        setTodos(cloneTodos);
    }

    const deleteTodo = (id) => {
        // todos dizisinin bir kopyasını oluştur
        const cloneTodos = [...todos];

        // İlgili todo'nun dizideki index'ini bul
        const itemIndex = cloneTodos.findIndex(todo => todo.id === id);

        // İlgili todo'yu diziden çıkar
        cloneTodos.splice(itemIndex, 1);

        // setTodos fonksiyonunu kullanarak güncellenmiş todos dizisini ayarla
        setTodos(cloneTodos);
    }

    const [filter, setFilter] = useState("all");

    const values = {
        todos,
        setTodos,
        deleteTodo,
        onChange,
        filter,
        setFilter
    };

    // TodoContext.Provider bileşenini kullanarak bağlamı değerlerle sarmala
    return <TodoContext.Provider value={values}>{children}</TodoContext.Provider>;
}

// useTodo adında bir özel kancayı oluştur
export const useTodo = () => {
    // useContext hook'u ile TodoContext bağlamını al
    const context = useContext(TodoContext);

    // Eğer bağlam tanımsızsa hata göster
    if (context === undefined) {
        throw new Error("useTodo hook must be called inside TodoProvider component");
    }

    return context;
}
