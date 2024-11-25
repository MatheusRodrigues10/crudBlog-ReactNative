import React, { useContext, useLayoutEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useRoute, useNavigation } from "@react-navigation/native";
import { Context as blogContext } from "../../context/BlogContext";
import Feather from '@expo/vector-icons/Feather';


const ShowScreen = () => {
    const { state } = useContext(blogContext);

    const route = useRoute();
    const { id } = route.params;

    const navigation = useNavigation();
    
    //procura o item equivalente ao id.
    const blogPost = state.find((blogPost) => blogPost.id === id );

    //botão ao lado do header
    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <TouchableOpacity 
                    onPress={() => navigation.navigate('Edit', { id: id })}
                    style={{ marginRight: 15 }}
                >
                    <Feather name="edit" size={25} color={"black"}/>
                </TouchableOpacity>
            ),
        });
    }, [navigation]); 
    

    return (
        <View>
            <Text>{blogPost.title}</Text>
            <Text>{blogPost.content}</Text>
        </View>
    );
};

const styles = StyleSheet.create({

});

export default ShowScreen;