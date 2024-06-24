import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Box, Flex, IconButton, useColorMode } from "@chakra-ui/react";
import { FaSun, FaMoon } from "react-icons/fa";
import Index from "./pages/Index.jsx";
import NewPost from "./pages/NewPost.jsx";

function App() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Router>
      <Flex justify="flex-end" p={4}>
        <IconButton
          icon={colorMode === "light" ? <FaMoon /> : <FaSun />}
          isRound
          size="md"
          onClick={toggleColorMode}
          aria-label="Toggle color mode"
        />
      </Flex>
      <Box>
        <Routes>
          <Route exact path="/" element={<Index />} />
          <Route path="/new-post" element={<NewPost />} />
        </Routes>
      </Box>
    </Router>
  );
}

export default App;