import * as WebBrowser from 'expo-web-browser';
import { StyleSheet, TouchableOpacity, Image, Alert } from 'react-native';

import Colors from '../constants/Colors';
import Contacts from '../screens/Contacts';
import { MonoText } from './StyledText';
import { Text, View } from './Themed';
import { Contact } from '../types';
import { FontAwesome } from '@expo/vector-icons';

export default function EditScreenContacts(contact: Contact) {
  return (
    <View>
      <View style={styles.container}>
        {(contact.url != null && contact.url != "") && <Image source={{ uri: contact.url }} />}
        {(contact.url != null && contact.url == "") && <Image style={{ width: 40, height: 40 }} source={require("../assets/images/icon.png")} />}
        <Text>{contact.username}</Text>
        <TouchableOpacity onPress={() => Alert.alert('Send')}>
          <FontAwesome name="arrow-circle-right"
            size={25}
            color={"red"}
            style={{ marginRight: 15 }}>

          </FontAwesome>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Alert.alert('Request')}>
          <FontAwesome name="arrow-circle-left"
            size={25}
            color={"red"}
            style={{ marginRight: 15 }}>

          </FontAwesome>
        </TouchableOpacity>
      </View>


    </View>
  );
}

function handleHelpPress() {
  WebBrowser.openBrowserAsync(
    'https://docs.expo.io/get-started/create-a-new-app/#opening-the-app-on-your-phonetablet'
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  }
})
