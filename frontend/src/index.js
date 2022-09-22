import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom'
import 'antd/dist/antd.min.css'
import { Provider } from 'react-redux'
import store from './app/store'
import { NewsContextProvider } from './context/NewsContext'
import { FitnessContextProvider } from './context/FitnessContext'
import { TopicContextProvider } from './context/TopicContext'
import { MapContextProvider } from './context/MapContext'
import { VideoContextProvider } from "./context/VideoContext"
import { AuthContextProvider } from './context/AuthContext'
import { AppContextProvider } from './context/AppContext'
import "./i18n"

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  // <React.StrictMode>
  <BrowserRouter>
    <Provider store={store}>
      <AppContextProvider>
        <AuthContextProvider>
          <VideoContextProvider>
            <MapContextProvider>
              <TopicContextProvider>
                <FitnessContextProvider>
                  <NewsContextProvider>
                    <App />
                  </NewsContextProvider>
                </FitnessContextProvider>
              </TopicContextProvider>
            </MapContextProvider>
          </VideoContextProvider>
        </AuthContextProvider>
      </AppContextProvider>
    </Provider>
  </BrowserRouter>
  // </React.StrictMode>
);
