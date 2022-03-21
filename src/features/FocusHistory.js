import React from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'
import { colors, fontSizes, spacing } from '../utils'

const FocusHistory = ({ history }) => {
  if (!history || !history.length) return <Text style={styles.title}>{`We haven't focused on anything yet!`}</Text>
  const renderItem = ({item}) => <Text style={styles.historyItem}>- {item}</Text>
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{`Things we've focused on: `}</Text>
      <FlatList 
        data={history}
        renderItem={renderItem}
        keyExtractor={(item) => item}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  title: {
    color: colors.white,
    fontSize: fontSizes.md, 
    paddingHorizontal: 16,
    fontWeight: 'bold'
  },
  historyItem: {
    fontSize: fontSizes.md,
    color: colors.white,
    paddingTop: spacing.sm,
    paddingHorizontal: 16,
  },
  container: {
    padding: spacing.md
  }
})


export default FocusHistory