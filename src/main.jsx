import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import GlobalStyle from "./styles/GlobalStyle.js";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./app/store.js";
import { SupabaseProvider } from "./supabase/index.js";
import { AuthProvider } from "./context/AuthContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <SupabaseProvider>
        <AuthProvider>
          <BrowserRouter>
            <GlobalStyle />
            <App />
          </BrowserRouter>
        </AuthProvider>
      </SupabaseProvider>
    </Provider>
  </StrictMode>
);
