import {useState} from 'react'
import { View, Text, TextInput,TouchableOpacity,Image,FlatList } from 'react-native'
import { icons,SIZES } from '../../../constants'
import { useRouter } from 'expo-router'

import styles from './welcome.style'
const jobTypes = ['Fultime', 'Part-time', 'Contractor']

const Welcome = ({searchTerm,setSearchTerm,handleClick}) => {
const [activeJobType, setactiveJobType] = useState('Full-time');

  const router = useRouter()
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.userName}> Hello Anthony</Text>
        <Text style={styles.welcomeMessage}> Find your perfect job</Text>
      </View>

      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput
            style={styles.searchInput}
            value={searchTerm}
            onChangeText={(text) => setSearchTerm(text)}
            placeholder="what are you looking for"
          />
        </View>

        <TouchableOpacity style={styles.searchBtn} onPress={handleClick}>
          <Image
            source={icons.search}
            resizeMode="contain"
            style={styles.searchBtnImage}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.tabsContainer}>
        <FlatList
          
          data={jobTypes}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.tab(activeJobType, item)}
            onPress={()=>{
              setactiveJobType(item);
              router.push(`/search/${item}`)
            }}>
              <Text style={styles.tabText(activeJobType,item)}>{item}</Text>
            </TouchableOpacity>
          )}
            contentContainerStyle={{columnGap: SIZES.small}}
          keyExtractor={item => item}
          horizontal
        />
      </View>
    </View>
  );
}

export default Welcome