import { BrowserRouter } from "react-router-dom";
import { AppThemeProvider } from "./contexts";

function App() {
    return (
        <AppThemeProvider>
            <BrowserRouter>Teste</BrowserRouter>
        </AppThemeProvider>
    );
}

export default App;
