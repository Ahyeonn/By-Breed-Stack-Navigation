import * as React from 'react';
import { View, Text, FlatList } from 'react-native';

import Cell from './Cell'

import { cats } from './breeds'


function HomeScreen({ navigation }) {
 return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <FlatList
            style={{ flex: 1, width: '100%' }}
            data={cats}
            renderItem={({ item, index }) => {
                return (
                <Cell 
                    title={item.breed}
                    showDetails={() => navigation.navigate('Details', { item })} 
                />
                )
            }}
            keyExtractor={(item) => item.breed }
        />
    </View>
 );
}

export default HomeScreen