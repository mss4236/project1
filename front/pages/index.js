// 메인페이지
import React, { useCallback, useEffect } from "react";
import PostCard from '../components/PostCard';
import PostForm from '../components/PostForm';
import {useDispatch, useSelector} from 'react-redux';
import {LOAD_MAIN_POSTS_REQUEST} from '../reducer/post';

const Home = () => {
    const {mainPosts, hasMorePost} = useSelector(state => state.post);
    const {me} = useSelector(state => state.user);
    const dispatch = useDispatch();
    const countRef = useRef([]);

    // Infinite Scroll -- start
    const onScroll = useCallback(() => {
        if(hasMorePost) {
            if(window.scrollY + document.documentElement.clientHeight > document.documentElement.scrollHeight - 300) { // 스크롤 다 내리기 전까지 300남았을 경우
                const lastId = mainPosts[mainPosts.length - 1].id;  // 마지막 게시글의 id
                if(!countRef.current.includes(lastId)){
                    dispatch({
                        type: LOAD_MAIN_POSTS_REQUEST,
                        lastId,
                    });
                }
                countRef.current.push(lastId);
            }
        }
    }, [mainPosts.length, hasMorePost]);

    useEffect(() => {
        window.addEventListener('scroll', onScroll);
        return () => {
            window.removeEventListener('scroll', onScroll);
        };
    }, [mainPosts]);
    // Infinite Scroll -- end

    return (
        <>
            {me && <PostForm />}
            {mainPosts.map((content, index) => {
                return <PostCard key={content + index} post={content} />
            })} {/* mainPost(게시글 모음), PostCard(게시글 하나) */}
        </>
    );
};

Home.getInitialProps = async (context) => {
    context.store.dispatch({
        type: LOAD_MAIN_POSTS_REQUEST,
    });
};

export default Home;