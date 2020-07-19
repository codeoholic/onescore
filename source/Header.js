import React, { Component, useEffect, useState } from 'react'
import { Text, View } from 'react-native';
import styles from "./styles";

const Header = () => {
    
    let init = async () => {
        console.log('load');
    };
    useEffect(()=>{  
        init().finally(() => {
            console.log('loaded');
        });
        return () => {
            console.log('distroyed')
        };
    }, [])
    return(
        <View style={styles.header}>
            <Text>hi</Text>
        </View>
    )
}
export default Header;