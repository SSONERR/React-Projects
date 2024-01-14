import Header from "./components/Header"
import Content from "./components/contents/Content"
import './index.css';
import Footer from "./components/Footer";
import { TodoProvider } from "./context/TodoContext";
function App() {
  return (
    <TodoProvider>
    <section className="todoapp">
      <Header></Header>
      <Content></Content>
      </section>
      <Footer></Footer>
    </TodoProvider>

  );
}

export default App;
