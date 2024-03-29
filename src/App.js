import './categories.styles.scss'
import Home from "./routes/home/home.component";

import {Route, Routes} from "react-router-dom";
import Navigation from "./routes/navigation/navigation.component";
import SignIn from "./routes/authentication/authentication.component";

const App = () => {
    return (
        <Routes>
            <Route path='/' element={<Navigation/>}>
                <Route index element={<Home/>}/>
                <Route path='/signin' element={<SignIn/>}/>
            </Route>
        </Routes>
    )
}

export default App;
