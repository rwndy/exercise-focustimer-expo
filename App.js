import React from 'react'
import { StyleSheet, SafeAreaView, Platform, StatusBar, View, Text } from 'react-native';
import { colors } from './src/utils/colors';
import { Focus, Timer, FocusHistory } from './src/features';

export default function App() {
   const [currentSubject, setCurrentSubject] = React.useState(null)
    const [history, setHistory] = React.useState([])

  return (
    <SafeAreaView style={styles.container} >
      <StatusBar barStyle='light-content' />
      { !currentSubject ?
        <>
          <Focus addSubject={setCurrentSubject}/>
          <FocusHistory history={history} />
        </> :
        <Timer 
          focusSubject={currentSubject} 
          clearSubject={() => setCurrentSubject(null)}
          onTimerEnd={(subject) => {
            setHistory([...history, subject])
          } }
        />
      }
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.darkBlue,
    paddingHorizontal: 16,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
  },
  textTimer: {
    color: colors.white
  }
});
