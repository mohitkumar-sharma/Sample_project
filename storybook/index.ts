import { getStorybookUI, configure } from '@storybook/react-native';
import './rn-addons';

// import the stories directory
configure(() => {
  require('./stories');
}, module);

const StorybookUIRoot = getStorybookUI({ port: 7007, onDeviceUI: true, asyncStorage: null }); // This configuration can be changed based upon personal wants

export default StorybookUIRoot;
