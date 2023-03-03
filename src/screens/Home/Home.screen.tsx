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
import { IconSearch, IconStar, IconDatePicker, IconOClock, IconNoti, IconPenEdit } from '../../assets/theme/icons';
import Search from '../../components/Search';
import Button from '../../components/Button';
import SwitchButton from '../../components/SwitchButton';
import PostCard from '../../components/PostCard';
import ProductCard from '../../components/ProductCard';
import Avatar from '../../components/Avatar';
import Title from '../../components/TitleSection';
import TreatMentCard from '../../components/TreatMentCard';
import HorizontalList from '../../components/FlasListHori';
import ProductHoriCard from '../../components/ProductHoriCard';
import ApointmentCard from '../../components/ApointmentCard';
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

  const handlePress = (e) => {
    setCurrentActive(e);
    console.log({ e })
  }

  return (
    <ScrollView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#E5E5E5" />

      <SafeAreaView style={styles.SafeAreaView2}>
        <View style={styles.headerWelcome}>
          <Avatar />
          <View style={styles.iconUser}>
            <Text style={styles.nameWelcome}>Hi, JayPahm </Text>
            <Text>Hà Nội </Text>
          </View>
          <View style={styles.icon}>
            <IconNoti />
          </View>
        </View>
        <View style={styles.search}>
          <Search />
        </View>
        <View>
          <Title title={'Triệu chứng'} />
          <View>
            <HorizontalList renderItem={TreatMentCard} data={[
               { id: 1, text: 'Sốt', bg:"#4E52D1" },
               { id: 2, text: 'Cảm cúm', bg:"#EC7756"},
               { id: 3, text: 'Tiêu chảy', bg:"#189E86" },
            ]}/>
            
          </View>
        </View>
        <View>
          <Title title={'Phổ biến'} />
          <View>
          <HorizontalList renderItem={ProductHoriCard} data={[
             { id: 1, text: 'Pronitol Edrocin', bg:"#4E52D1" },
             { id: 2, text: 'Pronitol Edrocin', bg:"#EC7756"},
             { id: 3, text: 'Pronitol Edrocin', bg:"#189E86" },
            ]}/>
          </View>
          <View style={styles.productList}>
            {/* <ProductCard />
            <ProductCard />
            <ProductCard /> */}
          </View>
        </View>
        <View>
          <Title title={'Mới nhất'} />
          <View style={styles.productList}>
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </View>
        </View>

        <View style={styles.session2}>
          <Text style={styles.titleRecent}>Gần đây</Text>
          <ApointmentCard/>
        </View>
        <View style={styles.switchBtn}>
          <SwitchButton title1='Post' title2='Articles' currentActive={currentActive} onPress={handlePress} />
        </View>
        <View>
          <View style={{ marginTop: 10 }}>
            <PostCard />
          </View>
          <View style={{ marginTop: 10 }}>
            <PostCard />
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
