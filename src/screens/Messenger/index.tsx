import React from 'react'
import { FlatList, StatusBar, View } from 'react-native'
import ConversationItem from '../../components/ConversationItem/ConversationItem'

export default function Messenger() {
  const conversations = [
    {
      avatar: 'https://www.figma.com/file/7qNE2N4uIh8fItspmOPB3G/image/18575371238c53cf993f305d39a8612bd0baa3f3',
      name: 'tai pv',
      message: 'Xin chào tôi có thể giúp gì cho bạn?',
      time: '10:44'
    },
    {
      avatar: 'https://www.figma.com/file/7qNE2N4uIh8fItspmOPB3G/image/7ac4d1a308c32d3b362bbe5e9f5edb6f294986ce?fuid=1020358144287845998',
      name: 'Dr. Malek Khan',
      message: 'Lorem ipsum dolor sit amet. Eum perferendis commodi est deleniti nobis',
      time: '10:44'
    },
    {
      avatar: 'https://www.figma.com/file/7qNE2N4uIh8fItspmOPB3G/image/aebf2d0ffc1187f4d9218dcf79bb0b1238c319e7',
      name: 'Dr. Nurjahan Khan',
      message: 'Lorem ipsum dolor sit amet. Eum perferendis commodi est deleniti nobis',
      time: '10:44'
    },
    {
      avatar: 'https://www.figma.com/file/7qNE2N4uIh8fItspmOPB3G/image/6a48de599fb27017515b5759d20bf55eefa5c2c3',
      name: 'Dr. Raisa Rashid',
      message: 'Lorem ipsum dolor sit amet. Eum perferendis commodi est deleniti nobis',
      time: '10:44'
    },
    {
      avatar: 'https://www.figma.com/file/7qNE2N4uIh8fItspmOPB3G/image/92b7ef9e8b1c0d589515cbdca3c9998dad06a593',
      name: 'Dr. Salim Polash',
      message: 'Lorem ipsum dolor sit amet. Eum perferendis commodi est deleniti nobis',
      time: '10:44'
    },
    {
      avatar: 'https://www.figma.com/file/7qNE2N4uIh8fItspmOPB3G/image/ae6e972861f07b1afcdbd37f604069cf170e87da',
      name: 'Dr. Farid Raihan',
      message: 'Lorem ipsum dolor sit amet. Eum perferendis commodi est deleniti nobis',
      time: '10:44'
    },
    {
      avatar: 'https://www.figma.com/file/7qNE2N4uIh8fItspmOPB3G/image/29937373f992e8c2028313cc91981a67b0f1a58a',
      name: 'Dr. Istiaka Hasan',
      message: 'Lorem ipsum dolor sit amet. Eum perferendis commodi est deleniti nobis',
      time: '10:44'
    }
  ]

  return (
    <View>
      <StatusBar
        animated={true}
        backgroundColor="#FFFFFF"
      />
      <FlatList
        data={conversations}
        renderItem={({item})=> <ConversationItem {...item} />}
      />
    

    </View>
  )
}

