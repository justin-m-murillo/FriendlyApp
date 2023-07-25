import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider, initialWindowMetrics } from 'react-native-safe-area-context';
import Navigator from './src/navigation';

import { Amplify, Auth } from 'aws-amplify';
import awsconfig from './src/aws-exports';
import { withAuthenticator } from 'aws-amplify-react-native';

Amplify.configure(awsconfig);

function App() {
  // Auth.currentAuthenticatedUser().then((data) => console.log(data));

  return (
    <SafeAreaProvider initialMetrics={initialWindowMetrics}>
      <StatusBar style="auto" />
      <Navigator />
    </SafeAreaProvider>
  )
}

export default withAuthenticator(App);
