import React, { useState } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView,
} from 'react-native';
import styles from './Home.style';
import { fetchUser, selectAll } from '../../stores/user.reducer';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { IconSearch, IconStar, IconDatePicker, IconOClock } from '../../assets/theme/icons';
import Search from '../../components/Search';
import Button from '../../components/Button';
import SwitchButton from '../../components/SwitchButton';
import PostCard from '../../components/PostCard';
const Home = ({ navigation }: any) => {
  const dispatch = useAppDispatch();
  const users = useAppSelector(selectAll);
  const [currentActive, setCurrentActive] = useState();
  function ListUser() {
    return (
      <>
        {users.map((data: any) => {
          return (
            <View key={data?.id} style={styleUser as any}>
              <Text style={{ fontSize: 15 }}>
                {data?.id}. {data?.name}
              </Text>
            </View>
          );
        })}
      </>
    );
  }

  const handlePress=(e)=>{
    setCurrentActive(e);
    console.log({e})
  }

  return (
    <ScrollView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#E5E5E5" />
      <SafeAreaView style={styles.SafeAreaView2}>
        <Search />
        <View style={styles.session2}>
          <Text style={styles.titleRecent}>Gần đây</Text>
          <View style={styles.wapper}>
            <View style={styles.card}>
              <View style={styles.userInfo}>
                <View style={styles.info}>
                  <Text style={styles.name}>Dr. Charollette Baker</Text>
                  <Text style={styles.role}>Pediatrician</Text>
                  <View style={styles.rate}>
                    <IconStar />
                    <View style={styles.rateDetail}>
                      <Text>Rating</Text>
                      <Text style={styles.rating}>4.78 out of 5</Text>
                    </View>
                  </View>
                </View>
              </View>
              <View>
                <Image style={styles.avatar} source={{ uri: 'https://s3-alpha-sig.figma.com/img/88fa/8649/d4e3625eb67f1ed918cafa01599a6efe?Expires=1676851200&Signature=dqznD25OOQ~ULn6UdhjCyTbPakfB296BeZm489u4hk4oYCRwu3aBemHQWDYMeFPpEnT824vahGxhEhBKyjzRCA3skwr7TwTQp7xulS-eXjsv6fSrXHrMcCKf83kRc~uIXBFOVOz0Y~gH3k97Qj8P92zOACN~vqdjyk4av~u6UQF6TjNRmr50A-y9YGWnn5plnQSp2VDGE494hgHK0KGHSQPa1WYFJMfsA68vlyJznGTHe6yIRRpeHJjNW5Q7YmM2a5tADi~gasU6NbGhZWIAWLQxcLh7PFwFQDuTZ8PUuPaugfFt56y4FhO8pFELLGFu6XjkjLUDQ6uNKCYZGtBXmw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4' }} />
              </View>

            </View>

            <View style={styles.schedule}>
              <View style={styles.date}>
                <IconDatePicker />
                <Text style={styles.txt}>Monday, Dec 23</Text>
              </View>
              <View style={styles.time}>
                <IconOClock />
                <Text style={styles.txt}>12:00-13:00</Text>
              </View>
            </View>
            <View style={styles.actions}>
              <View style={styles.btn}>
                <Button title={'Reshedule'} type={'background'} onPress={()=>{}}/>
              </View>
                <Button title={'Cancel'} type={'border'} onPress={()=>{}}/>
            </View>
          </View>

        </View>
        <View style={styles.switchBtn}>
            <SwitchButton title1='Post' title2='Articles' currentActive={currentActive} onPress={handlePress}/>
        </View>
        <View>
          <View style={{marginTop:10}}>
            <PostCard/>
          </View>
          <View style={{marginTop:10}}>
            <PostCard/>
          </View>
          <View style={{marginTop:10}}>
            <PostCard/>
          </View>
          <View style={{marginTop:10}}>
            <PostCard/>
          </View>
        </View>
        
        {/* <View style={styles.outerWrapper}>
          <View>
            <TouchableOpacity
              style={styles.buttonStyle}
              onPress={() => dispatch(fetchUser())}>
              <IconSearch />
              <Text style={styles.text}>Click here to show User data:</Text>
            </TouchableOpacity>
            <ListUser />
          </View>
        </View> */}
      </SafeAreaView>
    </ScrollView>
  );
};

const styleUser = StyleSheet.create<any>({
  borderBottomWidth: 1,
  borderColor: '#eee',
  padding: 1,
  marginTop: 10,
});

export default Home;
