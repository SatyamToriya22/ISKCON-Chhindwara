// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, SafeAreaView, ScrollView, StatusBar } from 'react-native';
import {
  useFonts,
  Roboto_100Thin,
  Roboto_100Thin_Italic,
  Roboto_300Light,
  Roboto_300Light_Italic,
  Roboto_400Regular,
  Roboto_400Regular_Italic,
  Roboto_500Medium,
  Roboto_500Medium_Italic,
  Roboto_700Bold,
  Roboto_700Bold_Italic,
  Roboto_900Black,
  Roboto_900Black_Italic
} from '@expo-google-fonts/roboto'
export default function App() {
  let [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_400Regular_Italic
  });

  if (!fontsLoaded) {
    return <Text >Loading </Text>;
  } else {
    return (
      <SafeAreaView >
        <View style={styles.statusbar}></View>
        <ScrollView >
          <View style={styles.container}>

            <View style={styles.headFontBack}>
              <Text style={{
                fontSize: 14,
                fontFamily: 'Roboto_400Regular',
                fontWeight: 'bold'
              }}>
                Hare Krishna
              </Text>
              <Text style={styles.headText}>
                Welcome To ISKCON Chhindwara
              </Text>
            </View>
            <Image
              style={styles.dashCenterImage}
              source={{
                uri:
                  'https://www.mayapur.com/wp-content/uploads/2017/01/4.jpg'
              }}
            />
            <Text style={styles.text}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet tempora recusandae aperiam quas architecto. Pariatur ea modi non velit minima aut. Veniam explicabo magni ullam possimus in non
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet tempora recusandae aperiam quas architecto. Pariatur ea modi non velit minima aut. Veniam explicabo magni ullam possimus in non
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet tempora recusandae aperiam quas architecto. Pariatur ea modi non velit minima aut. Veniam explicabo magni ullam possimus in non
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet tempora recusandae aperiam quas architecto. Pariatur ea modi non velit minima aut. Veniam explicabo magni ullam possimus in non
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet tempora recusandae aperiam quas architecto. Pariatur ea modi non velit minima aut. Veniam explicabo magni ullam possimus in non
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </Text>
            {/* <StatusBar style="auto" /> */}
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  statusbar: {
    backgroundColor: 'pink',
    height: StatusBar.currentHeight
  },
  container: {
    flex: 1,
    backgroundColor: '#000000',
    // paddingTop: StatusBar.currentHeight,
    // alignItems: 'center',
  },
  fontFam: {
    fontFamily: "Roboto_400Regular"
  },
  headFontBack: {
    backgroundColor: '#35ee92',
    alignItems: 'center',
    marginTop: 10,
    padding: 10,
    borderRadius: 5
  },
  headText: {
    fontSize: 20,
    fontFamily: 'Roboto_400Regular',
    fontWeight: 'bold'
  },
  dashCenterImage: {
    width: 310,
    height: 400,
    marginTop: 20
  },
  text: {
    color: 'white',
    fontSize: 19,
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
    textAlign: 'justify'
  }
});