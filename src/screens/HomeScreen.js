import React, { useContext, useLayoutEffect } from "react";
import { View, Text, StyleSheet, Button, TouchableOpacity, FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Context as BlogContext } from "../../context/BlogContext";
import Feather from '@expo/vector-icons/Feather';

const HomeScreen = () => {
    const { state, deleteBlogPost } = useContext(BlogContext)
    const navigation = useNavigation();

    //botão ao lado do header
    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <TouchableOpacity 
                    onPress={() => navigation.navigate('Create')}
                    style={{ marginRight: 15 }}
                >
                    <Feather name="plus" size={25} color={"black"}/>
                </TouchableOpacity>
            ),
        });
    }, [navigation]);

    return(
        <View style={{flex: 1}}>
            <FlatList 
                data={state} 
                keyExtractor={(blogPost) => blogPost.id}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity onPress={() => navigation.navigate('Show', { id: item.id })}>
                            <View style={styles.row}>
                                <Text style={styles.title}>{item.title}</Text>
                                <TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
                                    <Feather style={styles.icon} name="trash" />
                                </TouchableOpacity>
                            </View>
                        </TouchableOpacity>
                    );
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 20,
        borderTopWidth: 1,
        borderColor: 'gray'
    },
    title: {
        fontSize: 18
    },
    icon: {
        fontSize: 24
    }
});

export default HomeScreen;
