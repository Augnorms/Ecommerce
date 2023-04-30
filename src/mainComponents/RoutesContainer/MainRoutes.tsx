import { Box } from '@chakra-ui/react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../A_HomeContainer/HomeComponent/Home';

export default function MainRoutes() {
  return (
    <Box>
      <BrowserRouter>
        <Routes>

          <Route path={'/'} element={<Home />}/>
            
        </Routes>
      </BrowserRouter>
    </Box>
  );
}
