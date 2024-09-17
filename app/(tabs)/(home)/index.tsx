import {Dimensions, Text, View} from 'react-native'
import React from 'react'


const HomeScreen: React.FC = () => {
    const {height: HEIGHT, width: WIDTH} = Dimensions.get("window")
    const MAIN_IMAGE_HEIGHT = HEIGHT / 1.7

    return (
        <View>
            <Text>Home Screen</Text>
        </View>
    )
}

export default HomeScreen
