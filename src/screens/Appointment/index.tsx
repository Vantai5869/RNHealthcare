import React from 'react'
import { StyleSheet, Text, ScrollView, View } from 'react-native'
import ApointmentCard from '../../components/ApointmentCard'
import DocterCard from '../../components/DocterCard'
import HorizontalList from '../../components/FlasListHori'
import Search from '../../components/Search'
import Title from '../../components/TitleSection'

export default function Appointment() {
  return (
    <ScrollView style={styles.container}>
      <Title title={'Tìm kiếm Bác sỹ'} />
      <Search />
      <View style={styles.doctorList}>
        <HorizontalList renderItem={DocterCard} data={[
          { id: 1, text: 'Pronitol Edrocin', bg: "#4E52D1" },
          { id: 2, text: 'Pronitol Edrocin', bg: "#EC7756" },
          { id: 3, text: 'Pronitol Edrocin', bg: "#189E86" },
        ]} />
      </View>
      <View style={styles.apointApointment}>
        <Title title={'Cuộc hẹn của bạn'} />
        <ApointmentCard />
        <ApointmentCard />
        <ApointmentCard />

      </View>

    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingTop: 10,
    paddingHorizontal: 16,
    backgroundColor: '#FFFFFF',
  },
  doctorList: {
    marginTop: 20
  },
  apointApointment:{
    marginBottom:30
  }
})