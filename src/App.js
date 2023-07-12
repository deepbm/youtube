import './App.css';
import { Outlet } from 'react-router-dom';
import SearchHeader from './components/SearchHeader';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { YoutubeApiProvider } from './contexts/YoutubeApiContext';
import { DarkModeProvider } from './contexts/DarkMode';

const queryClient = new QueryClient();

function App() {
  return (
    <DarkModeProvider>
      <SearchHeader />
      <YoutubeApiProvider>
        <QueryClientProvider client={queryClient}>
          <Outlet />
        </QueryClientProvider>
      </YoutubeApiProvider>
    </DarkModeProvider>
  );
}

export default App;
