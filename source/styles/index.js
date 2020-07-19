import { StyleSheet, Dimensions, Platform } from 'react-native';
import DeviceInfo from 'react-native-device-info';
// const fontScale = DeviceInfo.getFontScale();
var deviceWidth = Dimensions.get('window').width;
var deviceHeight = Dimensions.get('window').height;
const BLACK = "#222226";
const BLUE = '#262A81';
const WHITE = '#FFF';

export default StyleSheet.create({
    align_middle:{
        justifyContent:'center',
    },
    align_end:{
        alignItems:'flex-end',
    },
    align_view:{
        flexDirection:'row',
        alignItems:'center'
    },

    body:{
        backgroundColor: '#F3F1ED'
    },
    body_color_blue:{
        backgroundColor: BLUE
    },

    card:{
        width: deviceWidth - 40,
        borderRadius: 8,
        backgroundColor: '#fff',
        marginBottom: 20,
        padding: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.4,
        shadowRadius: 2,
        elevation: 1,
        borderWidth: 0.3,
        borderColor: '#eee'
    },
    color_black:{
        color: BLACK
    },
    color_blue:{
        color: BLUE
    },
    color_white:{
        color: WHITE
    },
    container:{
        marginTop: 200
    },

    flex:{
        flex: 1
    },
    font_bold:{
        fontWeight: '700'
    },
    font_10:{
        fontSize: 10
    },
    font_12:{
        fontSize: 12
    },
    font_14:{
        fontSize: 14
    },
    font_16:{
        fontSize: 16
    },
    font_24:{
        fontSize: 24
    },
    font_36:{
        fontSize: 36
    },

    header:{
        height: 200,
        backgroundColor: '#dedede',
        borderRadius: 8,
        padding: 20,
        position: 'absolute',
        top: 0,
        left: 20
    },
    header_full:{
        width: deviceWidth,
        height: 80,
        backgroundColor: '#dedede',
        padding: 20,
        position: 'absolute',
        top: 0,
        left: 0,
        zIndex: 2
    },
    
    key:{
        width: deviceWidth - 80,
        height: 10,
        borderRadius: 5,
        marginTop: 20
    },
    key_position:{
        width: 2,
        height: 14,
        backgroundColor:'#fff',
        position:'absolute',
        top:18,
        borderRadius:2
    },

    margin_left_5:{
        marginLeft: 5
    },
    margin_top_5:{
        marginTop: 5
    },
    margin_top_20:{
        marginTop: 20
    },

    padding_20:{
        padding: 20
    },

    split_view:{
        flexDirection:'row',
        justifyContent: 'space-between'
    },

    text_align_right:{
        textAlign: 'right'
    }
})