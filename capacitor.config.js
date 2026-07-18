export default {
  appId: 'cn.zhinenti.toolbox',
  appName: '万能工具箱',
  webDir: 'dist',
  server: { androidScheme: 'https' },
  android: {
    allowMixedContent: false,
    captureInput: true,
    webContentsDebuggingEnabled: false
  },
  plugins: {
    SplashScreen: {
      launchShowDuration: 2000,
      backgroundColor: '#2563eb',
      showSpinner: false
    }
  }
};
