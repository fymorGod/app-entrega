import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { RootNavigator } from './src/routes/RootNavigator';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { SplashScreen } from './src/pages/SplashScreen';

export default function App() {
  const [isShowSplash, setIsShowSplash] = React.useState<boolean>(true);
  
  React.useEffect(() => {
    setTimeout(() => {
      setIsShowSplash(false)
    }, 2300)
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
