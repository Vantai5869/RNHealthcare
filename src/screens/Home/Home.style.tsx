import { Dimensions, StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingTop: 10,
    paddingHorizontal: 16,
    backgroundColor:'#E5E5E5',
    

  },
  SafeAreaView2: { flex: 1, backgroundColor: '#E5E5E5' },
  outerWrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#E5E5E5',
  },
  buttonStyle: {
    backgroundColor: '#EEE',
    paddingHorizontal: 40,
    paddingVertical: 30,
    borderWidth: 0.5,
    borderColor: '#F0F0F0',
    borderRadius: 10,
  },
  text: { fontSize: 18, color: '#808080', fontWeight: 'bold' },

  session2:{
    marginTop:24,
  },
  card:{
    flexDirection:'row',
    justifyContent:'space-between'
    
  },
  titleRecent:{
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 16,
    lineHeight: 20,
    color: '#6A788E',
  },
  userInfo:{

  },
  info:{

  },
  name:{
    color:'#091F44',
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 16,
  },
  role:{
    marginTop:4,
    color:'#091F44',
    fontFamily: 'Montserrat-Regular',
    fontSize: 12,
  },
  rate:{
    marginTop:12,
    flexDirection:'row'
  },
  rateDetail:{
    marginLeft:10
  },
  ratingTxt:{
    fontSize: 12,
    fontFamily: 'Montserrat-Regular',
    color:'#394D6D'
  },
  rating:{
    fontSize: 12,
    fontFamily: 'Montserrat-SemiBold',
    color:'#091F44'
  },
  avatar:{
    width: 80,
    height: 80,
    borderRadius:16
  },

  schedule:{
    backgroundColor:'#F5FAFF',
    borderRadius:16,
    flexDirection:'row',
    paddingHorizontal:16,
    paddingVertical:18,
    justifyContent:'space-between',
    marginTop:24
  },
  date:{
    flexDirection:'row'
  },
  time:{
    flexDirection:'row'
  },
  txt:{
    marginLeft:8,
    fontSize:12,
    fontFamily: 'Montserrat-SemiBold',
    color:'#091F44',
  },
  wapper:{
    marginTop:8,
    backgroundColor:'#fff',
    padding:16,
    borderRadius:16,
  },
  actions:{
    marginTop:16,
    flexDirection:'row',
    justifyContent:'space-between'
  },
  btn:{
    width:  Dimensions.get('window').width/2-16*3,
    marginRight:16
  },
  switchBtn:{
    marginTop:24
  }
});
