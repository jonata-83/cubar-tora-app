import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.jonata.cubartora',
  appName: 'Cubar Tora',
  webDir: 'www',
  android: {
    allowMixedContent: true
  }
};

export default config;
