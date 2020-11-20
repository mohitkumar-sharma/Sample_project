import colors from './colors';
import localConfig from './localConfig';
import strings from './strings';
import routes from './routes';
import fontWeights from './fontWeights';
import accessibilityStrings from './accessibilityStrings';
import { store } from './store';

const config = {
  colors,
  ...localConfig,
  store,
  strings,
  routes,
  fontWeights,
  accessibilityStrings,
};

export default config;
