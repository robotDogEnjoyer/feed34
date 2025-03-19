import React, { createContext, useContext, useState } from 'react';

type WebViewState = {
  cookies: string;
  setCookies: (cookies: string) => void;
};

const WebViewContext = createContext<WebViewState | undefined>(undefined);

export const WebViewProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cookies, setCookies] = useState('');

  return (
    <WebViewContext.Provider value={{ cookies, setCookies }}>
      {children}
    </WebViewContext.Provider>
  );
};

export const useWebViewContext = () => {
  const context = useContext(WebViewContext);
  if (!context) {
    throw new Error('useWebViewContext must be used within a WebViewProvider');
  }
  return context;
};
