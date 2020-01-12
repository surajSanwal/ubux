import React, {Component} from 'react';
import {View, FlatList, Image, ScrollView, Text} from 'react-native';
import constants from '../constants';
import Scale from '../helpers/Scale';
import Card from '../components/common/Card';
import TextView from '../components/common/TextView';
import Entypo from 'react-native-vector-icons/Entypo';
import TextInput from '../components/common/TextInput';
import Button from '../components/common/Button';
import moment from 'moment';
import DropdownView from '../components/common/DropdownView';
export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      keyword: '',
      budget: 0,
      message: '',
    };
  }
  render() {
    return (
      <ScrollView
        keyboardDismissMode="interactive"
        keyboardShouldPersistTaps="handled"
        style={{backgroundColor: constants.Colors.Background, flex: 1}}>
        <Card style={{top: Scale.moderateScale(10)}}>
          <View style={{paddingBottom: Scale.moderateScale(20)}}>
            <TextView value="Location" />
            <View
              style={{
                marginLeft: Scale.moderateScale(15),
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
          </View>
        </Card>
        <Card style={{paddingVertical: Scale.moderateScale(30)}}>
          <View>
            <TextView value={'I need a..'} />
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
                right: Scale.moderateScale(20),
              }}>
              <TextView value={20} />
              <TextView
                style={{marginLeft: 5}}
                value={'Android Developers available in 5 km..'}
              />
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
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
              <Button title={'View All'} />
            </View>
          </View>
        </Card>
        <Card>
          <View>
            <TextView value="When?" />
            <TextView
              value={moment().format('MMM DD, HH:MM A')}
              fontSize={12}
            />
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-evenly',
                alignItems: 'center',
              }}>
              <Button title={'Now'} icon={'clock-o'} />
              <Button title={'Select & Time'} icon={'clock-o'} />
            </View>
          </View>
        </Card>
        <Card>
          <TextView value="What's your budget?" />
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
              alignItems: 'center',
            }}>
            <View
              style={{
                width: '75%',
                flexDirection: 'row',
                justifyContent: 'space-evenly',
                alignItems: 'center',
              }}>
              <TextInput
                style={{width: '70%'}}
                placeholder={'Enter a budget'}
                value={this.state.budget}
                onChangeText={budget => this.setState({budget})}
                onClear={() => this.setState({keyword: ''})}
              />
              <DropdownView label="INR" data={[{key: 'IN', value: 'INR'}]} />
            </View>
            <Button
              title={'No Idea'}
              textStyle={{color: constants.Colors.White}}
              style={{backgroundColor: constants.Colors.Primary}}
            />
          </View>
        </Card>
        <Card>
          <TextView value="Briefly explain requirement" />
          <TextInput
            placeholder={'Enter a message'}
            multiline
            value={this.state.message}
            onChangeText={budget => this.setState({budget})}
            onClear={() => this.setState({message: ''})}
          />
        </Card>
        <Card>
          <TextView value="How many buddies to connect?" />
          <FlatList
            scrollEnabled={false}
            horizontal
            data={[
              {id: 0, value: '0-12', cost: 'free'},
              {id: 1, value: '12-20', cost: '$50'},
              {id: 2, value: '20-30', cost: '$1'},
            ]}
            renderItem={({item}) => {
              return (
                <View style={{marginHorizontal: Scale.moderateScale(20)}}>
                  <Button
                    title={item.value}
                    style={{width: Scale.moderateScale(80)}}
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
                        color: constants.Colors.Primary,
                      }}>
                      {item.cost}
                    </Text>
                  </View>
                </View>
              );
            }}
          />
        </Card>
      </ScrollView>
    );
  }
}
