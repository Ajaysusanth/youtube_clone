import { BrowserRouter,Routes,Route } from "react-router-dom"
import { Box } from "@mui/material"

import {Navbar,VideoDetail,SearchFeed,ChannelDetail,Feed  } from "./components"


const App = () => {
  return (
    <div>
        <BrowserRouter>
            <Box sx={{backgroundColor : '#000'}}>
                <Navbar/>
                <Routes>
                    <Route path="/" exact element={<Feed/>} />
                    <Route path="/video/:id" exact element={<VideoDetail/>} />
                    <Route path="/channel/:id" exact element={<ChannelDetail/> }/>
                    <Route path="/:search/searchItem" exact element={<SearchFeed/> }/>
                </Routes>
            </Box>
        </BrowserRouter>

    </div>
  )
}
export default App