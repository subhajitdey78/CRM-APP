import { BrowserRouter as Router, Routes, Routes } from "react-router-dom"

const AppRouter = () => {
    return (
        <Router>
            <Routes>
                <Routes 
                exact
                path="/login"
                element={<Auth />}
                />
            </Routes>
        </Router>
    )
}


export default AppRouter