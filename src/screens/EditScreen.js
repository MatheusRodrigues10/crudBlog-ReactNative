import React, { useContext } from "react";
import { StyleSheet } from 'react-native';
import { useRoute, useNavigation } from "@react-navigation/native";
import { Context } from "../../context/BlogContext";
import BlogPostForm from "../components/BlogPostForm";

const EditScreen = () => {
    const { state, editBlogPost } = useContext(Context);
    const navigation = useNavigation();
    const route = useRoute();
    const { id } = route.params;

    const blogPost = state.find((blogPost) => blogPost.id === id)


    return <BlogPostForm 
        initialValues={{ title: blogPost.title, content: blogPost.content }}
        onSubmit={(title, content) => { 
            editBlogPost(id, title, content, () => navigation.goBack());
        }}

    />;

};

const styles = StyleSheet.create({

});

export default EditScreen;