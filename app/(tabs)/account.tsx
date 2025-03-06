import React from 'react';
import { WebView } from 'react-native-webview';

const AccountPage = () => {
  const injectedJavaScript = `
    const style = document.createElement('style');
    style.innerHTML = 'header { display: none !important; }';
    document.head.appendChild(style);
  `;

  return (
    <WebView 
      source={{ uri: 'https://kurosearch.com/account' }} 
      injectedJavaScript={injectedJavaScript}
    />
  );
};

export default AccountPage;
