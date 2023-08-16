import React from 'react'
import {
  SafeAreaView,
  Text,
  StyleSheet,
  ImageBackground,
  StatusBar,
  View
} from 'react-native'
import moment from 'moment'
import IconText from '../components/IconText'

const City = ({ weatherData }) => {
  const { name, country, population, sunrise, sunset } = weatherData
  const {
    container,
    cityName,
    cityText,
    countryName,
    imageLayout,
    populationWrapper,
    populationText,
    riseSetWrapper,
    riseSetText,
    rowLayout
  } = styles
  return (
    <SafeAreaView style={container}>
      <ImageBackground
        source={{ uri: 'https://images.unsplash.com/photo-1554050857-c84a8abdb5e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmxhY2t8ZW58MHx8MHx8fDA%3D&w=1000&q=80' }}
        style={imageLayout}
      >
        <Text style={[cityName, cityText]}>{name}</Text>
        <Text style={[countryName, cityText]}>{country}</Text>
        <View style={[populationWrapper, rowLayout]}>
          <IconText
            iconName={'user'}
            iconColor={'red'}
            bodyText={`Population: ${population}`}
            bodyTextStyles={populationText}
          />
        </View>
        <View style={[riseSetWrapper, rowLayout]}>
          <IconText
            iconName={'sunrise'}
            iconColor={'white'}
            bodyText={moment(sunrise).format('h:mm:ss a')}
            bodyTextStyles={riseSetText}
          />
          <IconText
            iconName={'sunset'}
            iconColor={'white'}
            bodyText={moment(sunset).format('h:mm:ss a')}
            bodyTextStyles={riseSetText}
          />
        </View>
      </ImageBackground>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: 'center',
  },
  imageLayout: {
    flex: 1
  },
  cityName: {
    marginTop: 10,
    fontSize: 40,
    paddingTop: 82,
  },
  countryName: {
    fontSize: 30
  },
  cityText: {
    justifyContent: 'center',
    alignSelf: 'center',
    color: 'white',
    fontWeight: 'bold'
  },
  populationWrapper: {
    justifyContent: 'center',
    marginTop: 30
  },
  populationText: {
    fontSize: 25,
    marginLeft: 7.5,
    color: 'red'
  },
  riseSetWrapper: {
    justifyContent: 'space-around',
    marginTop: 30
  },
  rowLayout: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  riseSetText: {
    fontSize: 20,
    color: 'white'
  }
})

export default City