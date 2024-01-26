import Card from "./components/Card"
import { WeatherProvider } from "./components/context/WeatherContext";

function App() {

  return (
<WeatherProvider>
<Card></Card>
</WeatherProvider>

    )
}

export default App