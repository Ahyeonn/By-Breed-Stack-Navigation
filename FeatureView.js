import React from 'react'
import { View, Text } from 'react-native'

function FeatureView({ name, value }) {
    return (
        <View style={{ 
            justifyContent: 'space-between',
            flexDirection: 'row',
            width: '100%',
            margin: 10
         }}>
            <Text>{name}</Text>
            <Text>{value}</Text>
        </View>
    )
}

export default FeatureView