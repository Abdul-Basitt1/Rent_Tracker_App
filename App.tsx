import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Navigation from './src/Navigation';

function App() {

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Navigation />
    </GestureHandlerRootView>
  )
}

export default App;
