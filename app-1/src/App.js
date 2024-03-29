import React from "react";
import './styles/App.css';
import { useState } from "react";
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";

function App() {
    const [posts, setPosts] = useState([
        { id: 1, title: 'Javascript 1', body: 'Description' }, 
        { id: 2, title: 'Javascript 2', body: 'Description' }, 
        { id: 3, title: 'Javascript 3', body: 'Description' }, 
    ]);

    return (
        <div className="App">
            <form>
                <MyInput type="text" placeholder="Название поста"/>
                <MyInput type="text" placeholder="Описание поста"/>
                <MyButton disabled>Создать пост</MyButton>
            </form>
            <PostList posts={posts} title="Посты про JS"/> 
        </div>
    )
}

export default App;