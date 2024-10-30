import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { RootNavigator } from './src/routes/RootNavigator';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { SplashScreen } from './SplashScreenView';

export default function App() {
  const [isShowSplash, setIsShowSplash] = React.useState<boolean>(true);
  
  React.useEffect(() => {
    setTimeout(() => {
      setIsShowSplash(true)
    }, 2000)
  }, []);

  return (
    <SafeAreaProvider>
      {
        isShowSplash ? <SplashScreen /> : 
         <NavigationContainer>
            <RootNavigator />
          </NavigationContainer>
      }
    </SafeAreaProvider>
  );
}
