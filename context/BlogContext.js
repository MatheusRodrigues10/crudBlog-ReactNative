import createDataContext from "./createDataContext";

const blogReducer = (state, action) => {
    // state: []
    // action: { type: 'add_blogpost', 'delete_blogpost', 'edit_blogpost' }
    switch(action.type) {
        case 'add_blogpost':
            return [
                ...state, 
                {
                    id: Date.now(),
                    title: action.payload.title,
                    content: action.payload.content
                }
            ];
        case 'delete_blogpost':
                return state.filter((blogPost) => blogPost.id !== action.payload); 
        case 'edit_blogpost':
                return state.map((blogPost) => {
                    return blogPost.id === action.payload.id
                    ? action.payload
                    : blogPost;
                });
        default: 
            return state;
    }
};

const addBlogPost = dispatch => {
    return (title, content, callback) => {
        dispatch({ type: 'add_blogpost', payload: { title: title, content: content } });
        if(callback){
            callback();
        }
    };    
};

const editBlogPost = dispatch => {
    return (id, title, content, callback) => {
        dispatch({ 
            type: 'edit_blogpost', 
            // id : id, title: title, content: content
            payload: { id, title, content } 
        });
        if(callback){
            callback();
        }
   };
};


const deleteBlogPost = dispatch => {
    return (id) => {
        dispatch({ type: 'delete_blogpost', payload: id })
    };
};

export const { Context, Provider } = createDataContext(
    blogReducer, 
    { addBlogPost, deleteBlogPost, editBlogPost },
    [{ title: 'Jornal', content: 'Jornal da cidade', id: '01' }]
);
