import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'app/providers/Theme';
import { StoreProvider } from 'app/providers/StoreProvider';
import { App } from './app/App';

render(
  <BrowserRouter>
    <StoreProvider>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </StoreProvider>
  </BrowserRouter>,
  document.getElementById('root'),
);
