import React, { Component, useEffect, useState } from 'react';
import styles from "./source/styles";
import Animated from "react-native-reanimated";
import {
    Dimensions,
    Image,
    SafeAreaView,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import { onScrollEvent } from "react-native-redash";
import Header from './source/Header';
import LinearGradient from 'react-native-linear-gradient';
import Svg, {
    G,
    Line,
    Polyline,
    Rect
} from 'react-native-svg';
import Modal from 'react-native-modal';

const summary_tabs = [
    {"heading":"Payments","description":"Your payment timings.","result":"Perfect","comment":"payments are on time.","statistics":"16/16"},
    {"heading":"Limits","description":"Remaining limit on your credit cards.","result":"Good","icon":"perfect.png","comment":"of your credit is available.","statistics":"86%"},
    {"heading":"Accounts","description":"Type and status of your credit accounts.","result":"Good","icon":"perfect.png","comment":"active accounts.","statistics":"2"},
    {"heading":"Age","description":"Age of your credit accounts.","result":"Good","icon":"perfect.png","comment":"since your first account.","statistics":"1y 6m"},
    {"heading":"Enquiries","description":"Your loan/credit card applications.","result":"Good","icon":"perfect.png","comment":"enquiry in last 30 days.","statistics":"0"},
    {"heading":"Profile","description":"Your personal details.","result":"Good","icon":"perfect.png","comment":"details are consistent.","statistics":"3/3"}
];

const { interpolate, Extrapolate } = Animated;
const y = new Animated.Value(0);

const HEADER_HEIGHT = 120;
const MARGIN = 44;
const PADDING = 20;
const DEVICEWIDTH = Dimensions.get('window').width;
const SCORE = 869;
const CHART = "150,138 250,120";
const CHART_MIN = 800;
const CHART_MAX = 900;

const headerOpacityIn =  interpolate(y, {
    inputRange: [0, HEADER_HEIGHT - MARGIN],
    outputRange: [0, 1],
    extrapolate: Extrapolate.CLAMP,
})
const headerOpacityOut =  interpolate(y, {
    inputRange: [0, HEADER_HEIGHT],
    outputRange: [1, 0],
    extrapolate: Extrapolate.CLAMP,
})
const headerPositionY =  interpolate(y, {
    inputRange: [0, HEADER_HEIGHT + MARGIN + PADDING],
    outputRange: [0, -HEADER_HEIGHT - MARGIN - PADDING],
    extrapolate: Extrapolate.CLAMP,
})
const headerWidth =  interpolate(y, {
    inputRange: [0, HEADER_HEIGHT],
    outputRange: [DEVICEWIDTH - 40, DEVICEWIDTH],
    extrapolate: Extrapolate.CLAMP,
})
const headerWidthLeft =  interpolate(y, {
    inputRange: [0, HEADER_HEIGHT],
    outputRange: [20, 0],
    extrapolate: Extrapolate.CLAMP,
})
const headerPositionDisplayY = interpolate(y, {
    inputRange: [0, HEADER_HEIGHT - MARGIN],
    outputRange: [-HEADER_HEIGHT - MARGIN - PADDING, 0],
    extrapolate: Extrapolate.CLAMP,
})

const containerMarginTop =  interpolate(y, {
    inputRange: [0, HEADER_HEIGHT + MARGIN + PADDING],
    outputRange: [120, 0],
    extrapolate: Extrapolate.CLAMP,
})

function render_summary(){
    var summary = [];
    summary_tabs.map(function(value,index){
        summary.push(
            <TouchableOpacity key={index} style={styles.card} activeOpacity={0.9}>
                <View style={styles.split_view}>
                    <View>
                        <Text style={[styles.color_blue,styles.font_14,styles.font_bold]}>{value.heading}</Text>
                        <Text style={[styles.color_black,styles.font_12,styles.margin_top_5]}>{value.description}</Text>
                        <View style={[styles.align_view,styles.margin_top_20]}>
                            <Text style={[styles.color_blue,styles.font_14,styles.font_bold]}>{value.statistics}</Text>
                            <Text style={[styles.color_black,styles.font_12,styles.font_bold,styles.margin_left_5]}>{value.comment}</Text>
                        </View>
                    </View>
                    <View style={styles.align_end}>
                        <Image source={require('./assets/perfect.png')} style={{width:30,height:30}}/>
                        <Text style={[styles.color_blue,styles.font_12,styles.font_bold]}>{value.result}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        )
    })
    return(
        summary
    )
}
export default () => {
    return (
        <SafeAreaView style={[styles.body,styles.flex]}>
            <View style={styles.flex}>


                <Animated.View style={[styles.header,styles.body_color_blue,{transform:[{translateY:headerPositionY}],width:headerWidth,left:headerWidthLeft,opacity:headerOpacityOut}]}>
                    <View style={styles.split_view}>
                        <View>
                            <Text style={[styles.font_36,styles.font_bold,styles.color_white]}>Hi, Mohit</Text>
                            <View style={[styles.align_view,styles.margin_top_5]}>
                                <Image source={require('./assets/update.png')} style={{width: 15,height: 15}}/>
                                <Text style={[styles.font_10,styles.color_white,styles.margin_left_5]}>15 days</Text>
                            </View>
                        </View>
                        <View style={styles.align_middle}>
                            <Text style={[styles.font_36,styles.text_align_right,styles.font_bold,styles.color_white]}>{SCORE}</Text>
                            <Text style={[styles.font_12,styles.color_white,styles.margin_top_20]}>Your <View style={{marginTop:-8}}><Image source={require('./assets/logo-experian.png')} style={{width:73,height:25}}/></View>score</Text>
                            <Text style={[styles.font_10,styles.text_align_right,styles.font_bold,styles.color_white,styles.margin_top_5]}>EXCELLENT</Text>
                        </View>
                    </View>
                    <View style={styles.margin_top_20}>
                        <View>
                            <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}} locations={[0,0.5,0.7,1]} colors={['#EB481C', '#DBA04D', '#638F21' ,'#318F47']} style={styles.key}/>
                            <View style={[styles.key_position,{left:(DEVICEWIDTH - 80 - 2)*SCORE/900}]}/>
                        </View>
                        <View style={[styles.split_view,styles.margin_top_5]}>
                            <Text style={[styles.font_10,styles.color_white]}>300</Text>
                            <Text style={[styles.font_10,styles.color_white]}>900</Text>
                        </View>
                    </View>
                </Animated.View>


                <Animated.View style={[styles.header_full,styles.body_color_blue,{transform:[{translateY:headerPositionDisplayY}],opacity:headerOpacityIn}]}>
                    <View style={styles.split_view}>
                        <Text style={[styles.font_24,styles.font_bold,styles.color_white]}>Mohit</Text>
                        <View>
                            <Text style={[styles.font_24,styles.text_align_right,styles.font_bold,styles.color_white]}>{SCORE}</Text>
                            <Text style={[styles.font_10,styles.text_align_right,styles.font_bold,styles.color_white,styles.margin_top_5]}>EXCELLENT SCORE</Text>
                        </View>
                    </View>
                </Animated.View>


                <Animated.ScrollView style={[styles.padding_20,styles.flex]} onScroll={onScrollEvent({ y })} scrollEventThrottle={1} showsVerticalScrollIndicator={false}>
                    <View style={styles.container}>
                        <Text style={[styles.font_24,styles.font_bold,styles.color_black,styles.margin_top_20]}>Credit Summary</Text>
                        <View style={styles.margin_top_20}>
                            {render_summary()}
                        </View>
                    </View>
                </Animated.ScrollView>
            </View>
        </SafeAreaView>
    );
};