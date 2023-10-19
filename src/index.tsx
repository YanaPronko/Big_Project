import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'app/providers/Theme';
import { StoreProvider } from 'app/providers/StoreProvider';
import { App } from './app/App';

const container = document.getElementById('root');

if (!container) {
  throw new Error("Container root not found. Can't mount react app");
}
const root = createRoot(container);
root.render(
  <BrowserRouter>
    <StoreProvider>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </StoreProvider>
  </BrowserRouter>,
);
