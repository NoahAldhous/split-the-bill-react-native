import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/Header'
import Calculator from './components/Calculator/Calculator';

export default function App() {
  return (
    <View style={styles.container}>
      <Header/>
      <Calculator/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: 'orange',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
