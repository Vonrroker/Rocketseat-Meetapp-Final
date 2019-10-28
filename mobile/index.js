/**
 * @format
 */
import { AppRegistry, YellowBox } from 'react-native';

YellowBox.ignoreWarnings(['Warning: componentWillMount has been renamed'])

import App from './src';
import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => App);
