import { NativeBaseProvider } from 'native-base';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import Main from './screens/Main';

const queryClient = new QueryClient();

export default function App() {
  return (
    <SafeAreaProvider>
      <NativeBaseProvider>
        <SafeAreaView>
          <QueryClientProvider client={queryClient}>
            <Main />
          </QueryClientProvider>
        </SafeAreaView>
      </NativeBaseProvider>
    </SafeAreaProvider>
  );
}
