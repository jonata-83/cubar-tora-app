import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.jonata.cubartora',
  appName: 'Cubar Tora',
  webDir: 'www',
  android: {
    allowMixedContent: true
  },
  server: {
    url: 'https://jonata-83.github.io/cubar-tora-app/www/index.html',
    cleartext: true
  }
};

export default config;
