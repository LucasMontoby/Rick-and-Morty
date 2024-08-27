import {Routes, Route} from  "react-router-dom";

import Home from "./component/Home/Home";
import DetailCharacter from "./component/DetailCharacter/DetailCharacter";

const AppRouter =  () => {

    return(
        <Routes>
            
            <Route path='/' element={<Home/>} />
            <Route path='/character/:id' element={ <DetailCharacter/>}/>

        </Routes>

    )
}

export default AppRouter;