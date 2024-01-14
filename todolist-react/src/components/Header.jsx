import { useRef } from 'react'
import { useTodo } from '../context/TodoContext';
import {v4 as uuidv4} from "uuid"
function Header() {
    const todoİnput = useRef()
    const { todos, setTodos } = useTodo()

    function yazdır(e) {
        //todo ekle(enter tuşuna basınca) çalıştırır todolar gösterilir
        if(todoİnput.current.value!==""){
            setTodos([...todos, {
                id: uuidv4(),
                text: todoİnput.current.value,
                completed: false
            }])
            todoİnput.current.value = ""
        }
        e.preventDefault()
    }
    return (
        <div>
            <header className="header">
                <h1>todos</h1>
                <form onSubmit={yazdır}>
                    <input className="new-todo" ref={todoİnput} placeholder="What needs to be done?" autoFocus />
                </form>
            </header>
        </div>
    )

}

export default Header