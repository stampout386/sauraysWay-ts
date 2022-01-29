import s from "./MyPosts.module.css";
import React, {ChangeEvent} from "react";
import {Post} from "./Post/Post";
import {ActionType, PostDataType} from "../../../redux/state";
import {addPostAC, onChangeNewPostAC} from "../../../redux/profileReducer";

type MyPostsType = {
    newPostText: string
    postData: Array<PostDataType>,
    dispatch: (action: ActionType) => void
}




    export function MyPosts(props: MyPostsType) {
        let postRenderArray = props.postData.map(item => {
            return (
                <Post key={item.id} id={item.id} message={item.message} like={item.like}/>
            )
        })


        const addPost = () => {
            props.dispatch(addPostAC())
        }

        const onChangeNewPostHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
            // props.changeNewPostTextCallBack(e.currentTarget.value)
            props.dispatch(onChangeNewPostAC(e.currentTarget.value))
        }

        return (
            <div>
                <h3>My posts</h3>
                <div className={s.postBlock}>
                    <div>
                        <textarea value={props.newPostText} onChange={onChangeNewPostHandler}></textarea>
                    </div>
                    <div>
                        <button onClick={addPost}>Add Post</button>
                    </div>
                </div>
                <div className={s.posts}>
                    {postRenderArray}
                </div>
            </div>
        )
    }