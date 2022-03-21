import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { TextInput } from 'react-native-paper'
import { colors, spacing } from '../utils'
import { RoundedButton } from '../components'

const Focus = ({addSubject}) => {
  const [text, setText] = React.useState('')

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput 
          label={"Focus Item"} 
          value={text} 
          onChangeText={value => setText(value)}
          style={styles.textInput}
        />
        <View style={styles.button}>
          <RoundedButton title="+"  size={50} onPress={() => addSubject(text)}/>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  
  inputContainer: {
    padding: spacing.lg,
    justifyContent: 'flex-start',
    flexDirection: 'row'
  },
  text: {
    color: colors.white
  },
  textInput: {
    flex: 1,
    marginRight: spacing.sm
  },
  button: {
    justifyContent: 'center'
  }
})

export default Focus