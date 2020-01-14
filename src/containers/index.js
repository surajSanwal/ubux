import React, {Component} from 'react';
import {View, FlatList, Image, ScrollView, Text} from 'react-native';
import constants from '../constants';
import Scale from '../helpers/Scale';
import Card from '../components/common/Card';
import TextView from '../components/common/TextView';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import TextInput from '../components/common/TextInput';
import Button from '../components/common/Button';
import moment from 'moment';
import DropdownView from '../components/common/DropdownView';
import Checkbox from '../components/common/Checkbox';
export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      keyword: '',
      budget: 0,
      message: '',
      checkbox: false,
    };
  }
  render() {
    return (
      <ScrollView
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        keyboardDismissMode="interactive"
        keyboardShouldPersistTaps="handled"
        style={{backgroundColor: constants.Colors.Background, flex: 1}}>
        <Card style={{top: Scale.moderateScale(10)}}>
          <View
            style={{
              paddingBottom: Scale.moderateScale(20),
              marginLeft: Scale.moderateScale(10),
            }}>
            <TextView value="Location" fontSize={18} />
            <View
              style={{
                marginLeft: Scale.moderateScale(5),
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Entypo
                name="location-pin"
                size={Scale.moderateScale(20)}
                color={constants.Colors.Primary}
              />
              <TextView
                value="No. 72, Third Cross Street, Ayanavaram, Chennai - 600023 T.."
                fontSize={12}
              />
            </View>
            <View
              style={{
                height: Scale.moderateScale(30),
                top: Scale.moderateScale(10),
                width: '90%',
                alignSelf: 'center',
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <TextView value="Radius" fontSize={18} />
              <View style={{width: '60%'}} />
              <TextView value="5km" fontSize={18} />
              <View
                style={{
                  height: Scale.moderateScale(20),
                  width: '5%',
                  alignSelf: 'center',
                  alignItems: 'center',
                }}>
                <Entypo
                  name="triangle-down"
                  size={Scale.moderateScale(20)}
                  color={constants.Colors.Dark}
                />
              </View>
            </View>
          </View>
        </Card>
        <Card style={{top: Scale.moderateScale(10)}}>
          <View style={{marginLeft: Scale.moderateScale(10)}}>
            <View
              style={{
                height: Scale.moderateScale(30),
                width: '100%',
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <TextView value={'I need a..'} fontSize={18} />
              <Entypo
                name="lab-flask"
                size={Scale.moderateScale(20)}
                color={constants.Colors.Dark}
              />
            </View>
            <TextInput
              icon="search"
              placeholder={'Search Profession / Keyword'}
              example={
                'Astrologer, Dentist, Lawyer, Mechanic, Plumber, Tailor, Tarot Reader etc.'
              }
              value={this.state.keyword}
              onChangeText={keyword => this.setState({keyword})}
              onClear={() => this.setState({keyword: ''})}
            />
          </View>
          <View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'flex-end',
                right: Scale.moderateScale(30),
                top: Scale.moderateScale(10),
              }}>
              <TextView value={20} />
              <TextView
                fontSize={14}
                style={{marginLeft: 5}}
                value={'Android Developers available in 5 km..'}
              />
            </View>
            <View
              style={{
                top: Scale.moderateScale(10),
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginLeft: Scale.moderateScale(15),
                marginHorizontal: Scale.moderateScale(15),
              }}>
              <FlatList
                style={{maxWidth: '75%'}}
                keyExtractor={() => Math.random().toString()}
                data={new Array(20)}
                horizontal
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
                renderItem={({item, index}) => (
                  <View
                    key={index}
                    style={{
                      height: Scale.moderateScale(40),
                      width: Scale.moderateScale(40),
                      justifyContent: 'center',
                    }}>
                    <Image
                      style={{
                        height: Scale.moderateScale(38),
                        width: Scale.moderateScale(38),
                      }}
                      resizeMethod="resize"
                      source={require('../assets/images/lady.png')}
                    />
                  </View>
                )}
              />
              <Button
                style={{
                  width: Scale.moderateScale(80),
                  marginLeft: Scale.moderateScale(5),
                }}
                title={'View All'}
              />
            </View>
          </View>
          <View
            style={{
              height: 30,
              width: '100%',
              backgroundColor: 'White',
            }}></View>
        </Card>
        <Card>
          <View>
            <TextView value="When?" fontSize={18} />
            <View
              style={{
                height: Scale.moderateScale(30),
                width: '75%',
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <TextView value="Now.." fontSize={13} />
              <TextView
                value={moment().format('MMM DD, HH:MM A')}
                fontSize={13}
              />
              <TextView value=" " fontSize={13} />
              <TextView value="Oct 5, 11:30 P.M." fontSize={13} />
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                width: '95%',
              }}>
              <Button
                style={{
                  width: Scale.moderateScale(120),
                  marginLeft: Scale.moderateScale(5),
                }}
                title={'Now'}
                icon={'clock-o'}
              />
              <Button
                style={{
                  width: Scale.moderateScale(170),
                  marginLeft: Scale.moderateScale(5),
                }}
                title={'Set date & Time'}
                icon={'clock-o'}
              />
            </View>
          </View>
        </Card>
        <Card>
          <TextView value="What's your budget?" fontSize={18} />
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
              alignItems: 'center',
            }}>
            <View
              style={{
                width: '70%',
                flexDirection: 'row',
                justifyContent: 'space-evenly',
                alignItems: 'center',
                top: 5,
                height: Scale.moderateScale(50),
              }}>
              <TextInput
                style={{
                  width: '80%',
                  right: 4,
                  height: Scale.moderateScale(39),
                  borderBottomWidth: Scale.moderateScale(1),
                  borderLeftWidth: Scale.moderateScale(1),
                  borderColor: constants.Colors.Dark,
                  borderRadius: Scale.moderateScale(5),
                  top: -4,
                }}
                placeholder={'Enter a budget'}
                value={this.state.budget}
                onChangeText={budget => this.setState({budget})}
                onClear={() => this.setState({keyword: ''})}
              />
              <View
                style={{
                  top: -3,
                  right: 47,
                  height: Scale.moderateScale(38),
                  width: Scale.moderateScale(53),
                  borderWidth: Scale.moderateScale(1),
                  alignSelf: 'center',
                  alignItems: 'center',
                  borderBottomWidth: Scale.moderateScale(2),
                  borderColor: constants.Colors.Dark,
                  borderTopRightRadius: Scale.moderateScale(5),
                  borderBottomRightRadius: Scale.moderateScale(5),
                }}>
                <DropdownView
                  label="INR"
                  data={[{key: 'IN', value: 'INR'}]}
                  style={{left: 3, alignSelf: 'center', width: 50, top: -12}}
                />
              </View>
            </View>
            <Button
              title={'No Idea'}
              textStyle={{color: constants.Colors.White}}
              style={{
                backgroundColor: constants.Colors.Primary,
                width: Scale.moderateScale(100),
              }}
            />
          </View>
        </Card>
        <Card>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <TextView value="Briefly explain requirement" fontSize={18} />
            <FontAwesome
              name="microphone"
              size={Scale.moderateScale(20)}
              color={constants.Colors.Primary}
            />
          </View>
          <TextInput
            placeholder={'Enter a message'}
            multiline
            value={this.state.message}
            onChangeText={budget => this.setState({budget})}
            onClear={() => this.setState({message: ''})}
          />
        </Card>
        <Card>
          <TextView value="How many buddies to connect?" fontSize={18} />
          <FlatList
            style={{top: 10}}
            scrollEnabled={false}
            horizontal
            data={[
              {id: 0, value: '0-12', cost: 'free'},
              {id: 1, value: '12-20', cost: '$50'},
              {id: 2, value: '20-30', cost: '$1'},
            ]}
            renderItem={({item}) => {
              return (
                <View style={{marginHorizontal: Scale.moderateScale(5)}}>
                  <Button
                    title={item.value}
                    style={{width: Scale.moderateScale(100), backgroundColor: item.id === 0 ? constants.Colors.Primary : "white"}}
                    textStyle={{color: item.id === 0 ? "white" : constants.Colors.Primary}}
                  />
                  <View
                    style={{
                      position: 'absolute',
                      right: Scale.moderateScale(10),
                    }}>
                    <Text
                      style={{
                        ...constants.Fonts.HeeboRegular,
                        fontSize: Scale.moderateScale(10),
                        color: item.id === 0 ? "white" : constants.Colors.Primary,
                      }}>
                      {item.cost}
                    </Text>
                  </View>
                </View>
              );
            }}
          />
          <Button
            style={{
              margin: Scale.moderateScale(20),
              marginHorizontal: Scale.moderateScale(80),
            }}
            title="Choose Buddies"
            icon={'hand-o-up'}
          />
          <Checkbox
            title={'Share Mobile Number with Buddies'}
            isChecked={this.state.checkbox}
            onClick={() => this.setState({checkbox: !this.state.checkbox})}
            tintColor={constants.Colors.Primary}
          />
           <TextView value="Note:All contacted buddies may not respond to your post" fontSize={12} textStyle={{alignSelf: "center", color: constants.Colors.Dark }}/>
          <Button
            title={'Post'}
            style={{
              backgroundColor: constants.Colors.Primary,
              borderRadius: 10,
            }}
            textStyle={{
              color: constants.Colors.White,
              fontSize: Scale.moderateScale(22),
              fontWeight: 'bold',
              bottom: 5,
            }}
          />
          <View style={{height: 20, width: '100%'}}></View>
        </Card>
      </ScrollView>
    );
  }
}
