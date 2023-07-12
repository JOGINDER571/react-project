import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./components/Home";
import { SuperHero } from "./components/SuperHero";
import { Nav } from "./components/Nav";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

const queryClient = new QueryClient();
function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Nav />
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route exact path="/super" element={<SuperHero />} />
          </Routes>
        </BrowserRouter>
        <ReactQueryDevtools initialIsOpem={false} position="bottom-right" />
      </QueryClientProvider>
    </>
  );
}

export default App;
