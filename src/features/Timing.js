import React from 'react'
import { View, StyleSheet } from 'react-native'
import { RoundedButton } from '../components'

const Timing = ({ onChangeTime }) => {
  const timingCountdown = [15, 25, 50]

  return (
   <>
    {
      timingCountdown.map((timing, id) => (
        <View style={styles.timingButton} key={id}>
          <RoundedButton size={75} title={`${timing}`} onPress={() => onChangeTime(timing)} />
        </View>
      ))
    }
   </>
  )
}

const styles = StyleSheet.create({
  timingButton: {
    flex: 1,
    alignItems: 'center'
  }
})

export default Timing