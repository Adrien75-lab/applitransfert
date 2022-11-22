import { StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import ContactBlock from '../components/EditScreenContacts';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import { FlatList } from 'react-native';

export default function TabOneScreen({ navigation }: RootTabScreenProps<'Contacts'>) {
  return (

    <View style={styles.container}>
      <Text style={styles.title}>Contacts</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      {/* <ContactBlock url='' username='Adrien' /> */}
      <FlatList 
        data={[
          { url: '', username: 'Adrien' },
          

        ]}
        
        renderItem={({item}) => <Text style={styles.item}>{item.username}</Text>}
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});
