import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Index from './pages/Index';
import Pokemon from './pages/Pokemon';
import NotFound from './pages/404';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Routes>
          <Route path="*" element={<NotFound />} />
          <Route path="/" element={<Index />} />
          <Route path="/:pokemonName" element={<Pokemon />} />
        </Routes>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
