import React from 'react';
import { WebView } from 'react-native-webview';
import { useWebViewContext } from '../context/WebViewContext';

const PreferencesPage = () => {
  const { cookies, setCookies } = useWebViewContext();

  const injectedJavaScript = `
    document.cookie = '${cookies}';
    const style = document.createElement('style');
    style.innerHTML = 'header { display: none !important; }';
    document.head.appendChild(style);
    window.ReactNativeWebView.postMessage(document.cookie);
  `;

  return (
    <WebView
      source={{ uri: 'https://kurosearch.com/preferences' }}
      injectedJavaScript={injectedJavaScript}
      onMessage={(event) => setCookies(event.nativeEvent.data)}
    />
  );
};

export default PreferencesPage;
