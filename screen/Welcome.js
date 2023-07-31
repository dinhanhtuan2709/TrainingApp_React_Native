import React from 'react';
import {
  Text,
  Image,
  View,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import {images, icon} from '../Constant';

function Welcome(props) {
  return (
    <View style={{flex: 100}}>
      <ImageBackground
        source={images.background}
        resizeMod="cover"
        style={{
          flex: 100,
        }}>
        <View
          style={{
            marginTop: 10,
            marginLeft: 5,
            flexDirection: 'row',
            justifyContent: 'flex-start',
            height: 50,
            flex: 20,
          }}>
          <Image
            style={{
              marginLeft: 5,
              height: 30,
              width: 30,
            }}
            source={icon.health}
          />

          <Text
            style={{
              fontSize: 15,
              marginStart: 10,
              paddingTop: 5,
              color: 'white',
            }}>
            Chăm sóc sức khỏe - Chia sẽ niềm vui
          </Text>

          <View style={{flex: 1}} />

          <Image
            style={{
              marginRight: 10,
              height: 25,
              width: 25,
            }}
            source={icon.question}
          />
        </View>
        <View
          style={{
            flex: 20,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text
            style={{
              fontSize: 15,
              color: 'white',
              marginBottom: 7,
            }}>
            Chào mừng bạn đến với
          </Text>
          <Text
            style={{
              fontSize: 20,
              marginBottom: 7,
              color: 'white',
            }}>
            CareWell
          </Text>
          <Text
            style={{
              fontSize: 15,
              color: 'white',
              marginBottom: 7,
            }}>
            Chọn vào chức năng bên dưới nhé ^.^
          </Text>
        </View>
        <View
          style={{
            flex: 40,
          }}>
          <TouchableOpacity
            style={{
              borderColor: 'white',
              borderWidth: 1,
              height: 45,
              borderRadius: 10,
              marginHorizontal: 85,
              marginVertical: 20,
              justifyContent: 'center',
              alignItems: 'center',
              color: 'white',
            }}>
            <Text
              style={{
                color: 'white',
              }}>
              Influcer
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flex: 20,
          }}
        />
      </ImageBackground>
    </View>
  );
}

export default Welcome;
