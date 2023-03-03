import { Dimensions, StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingTop: 10,
    paddingHorizontal: 16,
    backgroundColor:'#FFFFFF',
  },
  title:{
    marginTop:90
  },
  loginTitle:{
    color:'#343965',
    fontFamily: 'Montserrat-Bold',
    fontSize:32
  },
  welcome:{
    marginTop:10,
    color:'#979AB2',
    fontSize:16
  },
  form:{
    marginTop:50,
    height:180,
    flexDirection:'column',
    justifyContent:'space-between'
  },
  input: {
    height: 60,
    paddingHorizontal: 25,
    backgroundColor:'#ECF2FF',
    borderRadius:50,
    fontSize:18
  },
  forgotPassword:{
    alignSelf:'flex-end',
    color:'#979AB2'
  },
  login:{
    marginTop:30
  }

});
