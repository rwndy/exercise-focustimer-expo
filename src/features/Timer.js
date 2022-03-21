import React from 'react'
import { View, StyleSheet, Text, Vibration } from 'react-native'
import { ProgressBar } from 'react-native-paper'
import { useKeepAwake } from 'expo-keep-awake'

import { colors, spacing } from '../utils'
import { Countdown, RoundedButton } from '../components'
import Timing from './Timing'

const Timer = ({focusSubject, onTimerEnd, clearSubject}) => {
    const [isStarted, setStarted] = React.useState(false)
    const [progress, setProgress] = React.useState(1)
    const [minutes, setMinutes] = React.useState(0.1)
    useKeepAwake()
    
  const ONE_SECOND_IN_MS = 1000;

  const PATTERN = [
    1 * ONE_SECOND_IN_MS,
    1 * ONE_SECOND_IN_MS,
    1 * ONE_SECOND_IN_MS,
    1 * ONE_SECOND_IN_MS,
    1 * ONE_SECOND_IN_MS,
  ]

  const onEndTimer = reset => {
    Vibration.vibrate(PATTERN)
    setStarted(false)
    setProgress(1)
    reset()
    onTimerEnd(focusSubject)
  }
  

  return (
    <View style={styles.container}>
      <View style={styles.countdown}>
        <Countdown 
          onProgress={setProgress} 
          isPaused={!isStarted}
          onEnd={onEndTimer}
          minutes={minutes}
        />
        <View style={styles.taskWrapper}>
          <Text style={styles.title}>Focusing on:</Text>
          <Text style={styles.task}>{focusSubject}</Text>
        </View>
      </View>
      <View style={styles.progressBarWrapper}>
        <ProgressBar
          progress={progress}
          color={colors.progressBar}
          style={styles.progressBar}
        />
      </View>
      <View style={styles.timingWrapper}>
        <Timing onChangeTime={setMinutes} />
      </View>
      <View style={styles.buttonWrapper}>
        {
          !isStarted && <RoundedButton title="start" onPress={() => setStarted(true)}/>
        }
        {
          isStarted && <RoundedButton title="pause" onPress={() => setStarted(false)}/>
        }
      </View>
      <View style={styles.clearTimeWrapper}>
        <RoundedButton size={50} title="-" onPress={clearSubject}/>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  countdown: {
    flex: 0.5,
    alignItems: 'center',
    justifyContent: 'center'                
  },
  buttonWrapper: {
    flex: 0.3,
    flexDirection: 'row',
    padding: 15,
    justifyContent: 'center',
    alignItems: 'center'
  },
  taskWrapper: {
    paddingTop: spacing.xxl
  },
  title: {
    color: colors.white,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  task: {
    color: colors.white,
    textAlign: 'center'
  },
  progressBarWrapper: {
    paddingTop: spacing.sm
  },
  progressBar: {
    height: spacing.sm
  },
  timingWrapper: {
    flex: 0.1,
    flexDirection: 'row',
    paddingTop: spacing.xxl,
  },
  clearTimeWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
  }
})


export default Timer