import { useState } from "react";
import { likePost, unlikePost } from "../services/postService";

export function useLike(post, userId){
    const [likes, setLikes] = useState(post.likes);
    const [liked, setLiked] = useState(() => {
        return post.likes.includes(userId);
    });

    const onLikeClick = async () => {
        if(liked){
            await unlikePost(post._id);
            setLikes(likes => likes.filter(id => id !== userId));
        }else{
            await likePost(post._id);
            setLikes(likes => [...likes, userId]);
        }
        setLiked(!liked);
    };

    return { likes, liked, onLikeClick };
}
