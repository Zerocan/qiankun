import { registerMicroApps, start } from 'qiankun';

const registerMircoApp = () => {
  registerMicroApps([
    {
      name: 'micro1', // app name registered
      entry: '//localhost:9001',
      container: '#app1',
      activeRule: '/about',
    },
    {
      name: 'micro2',
      entry: '//localhost:8002',
      container: '#app2',
      activeRule: '/micro2',
    },
  ]);
  
  start({prefetch: false});
};

export default registerMircoApp;