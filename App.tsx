import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Navigation from './src/Navigation';
import { useEffect } from 'react';
import BootSplash from "react-native-bootsplash";

function App() {
  useEffect(() => {
    const init = async () => {
      // …do multiple sync or async tasks
    };

    init().finally(async () => {
      await BootSplash.hide({ fade: true });
      console.log("BootSplash has been hidden successfully");
    });
  }, []);
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Navigation />
    </GestureHandlerRootView>
  )
}

export default App;
