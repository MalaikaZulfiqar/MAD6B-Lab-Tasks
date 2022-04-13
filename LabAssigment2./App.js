//import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, ImageBackground } from 'react-native';


export default function App() {
  return (
    <ImageBackground source={require('./back.PNG')} style={styles.container}>
      <Image source={require('./logo.PNG')}
        style={{ height: 130, width: 200, marginTop: 10, resizeMode: 'center', alignSelf: 'center' }}
      />
      <View style={{ height: 300, width: 320, backgroundColor: 'yellowgreen', marginLeft: 15,opacity:0.6 }}>

        <TextInput value='E-mail'
          style={{ height: 20, marginTop: 10, borderBottomWidth: 1, borderColor: 'white', color: 'white' }} />
        <TextInput type='password' value='Password'
          style={{ height: 20, marginTop: 40, borderBottomWidth: 1, borderColor: 'white', color:'white' }} />
        <View style={{ flexDirection: 'row' }}>
          <input type='checkbox'
            style={{ height: 20, marginTop: 40, backgroundColor: 'green' }} /><Text style={{ height: 20, marginTop: 40, color: 'white' }}>Remember</Text>

          <Text style={{ height: 20, marginTop: 40, marginLeft: 35, color: 'white' }}>Forgot username/password?</Text>
        </View>
        <button style={{ color: 'white', backgroundColor: 'green', paddingLeft: 5, paddingRight: 5, height: 20, marginTop: 40, paddingTop: 10, paddingBottom: 30, 
        marginLeft: 10, marginRight: 10, borderColor: 'green', borderBottomWidth: 0 }}>Login</button>
        <label style={{ color: 'white', marginLeft: 60,marginTop:30 }}>New here?<a href='#' style={{ color: 'white', marginLeft: 10 }}> Create an account</a></label>

      </View>
      <View style={{flexDirection:'row'}}>
        <Image source={require('./figprint.PNG')} style={{height:20,width:20,backgroundColor:'green', marginTop: 40, marginLeft: 50,opacity:0.5,borderRadius:2}}/>
        <Text style={{ height: 20, marginTop: 40, marginLeft: 30, color: 'white' }}>Login with Finger Print</Text>


      </View>

      <button style={{ color: 'white', backgroundColor: 'green', paddingLeft: 5, paddingRight: 5, height: 20, marginTop: 40, paddingTop: 10, paddingBottom: 30, 
        marginLeft: 10, marginRight: 10, borderColor: 'green', borderBottomWidth: 0,opacity: 0.6 }}>Login as guest</button>

    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 600,
    width: 350,

    opacity: .7

  },

});
