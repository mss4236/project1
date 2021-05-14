import produce from 'immer';
import { HYDRATE } from 'next-redux-wrapper';

export const dummyDataPost = {
    mainPosts: [],  // 받아온 게시글들
    hasMorePost: false, // 불러올 게시글이 더 있는지(인피니트 스크롤링)
    isAddingPost: false,    // 게시글 업로드 중
    postAdded: false,   // 게시글 업로드 성공여부
    isAddingComment: false, // 댓글 업로드 중
    commentAdded: false,    // 댓글 업로드 성공여부
    imagePaths: [], // 이미지 경로
};


// Store
export const initialState = {
    mainPosts: [],  // 받아온 게시글들
    hasMorePost: false, // 불러올 게시글이 더 있는지(인피니트 스크롤링)
    isAddingPost: false,    // 게시글 업로드 중
    postAdded: false,   // 게시글 업로드 성공여부
    isAddingComment: false, // 댓글 업로드 중
    commentAdded: false,    // 댓글 업로드 성공여부
};

// 메인게시글 불러오기
export const LOAD_MAIN_POSTS_REQUEST = "LOAD_MAIN_POSTS_REQUEST";
export const LOAD_MAIN_POSTS_SUCCESS = "LOAD_MAIN_POSTS_SUCCESS";
export const LOAD_MAIN_POSTS_FAILURE = "LOAD_MAIN_POSTS_FAILURE";

// 게시글 등록
export const ADD_POST_REQUEST = "ADD_POST_REQUEST";
export const ADD_POST_SUCCESS = "ADD_POST_SUCCESS";
export const ADD_POST_FAILURE = "ADD_POST_FAILURE";



// export default function postReducer(state = initialState, action) {
//     return produce(state, (draft) => {
//         switch (action.type) {
//             // 메인게시글 불러오기 -- start
//             case LOAD_MAIN_POSTS_REQUEST: {
//                 break;
//             }
//             case LOAD_MAIN_POSTS_SUCCESS: {
//                 break;
//             }
//             case LOAD_MAIN_POSTS_FAILURE: {
//                 break;
//             }
//             // 메인게시글 불러오기 -- end

//             default: {
//                 break;
//             }
//         }
//     });
// };

export default function postReducer(state = initialState, action) {
    switch (action.type) {
        case HYDRATE:
            return { ...state, ...action.payload };

        case 'TICK':
            return { ...state, tick: action.payload };
        // 메인게시글 불러오기 -- start
        case LOAD_MAIN_POSTS_REQUEST: {
            return {
                ...state,
            };
        }
        case LOAD_MAIN_POSTS_SUCCESS: {
            return {
                ...state,
            };
        }
        case LOAD_MAIN_POSTS_FAILURE: {
            return {
                ...state,
            };
        }
        // 메인게시글 불러오기 -- end

        default: {
            return {
                ...state,
            };
        }
    }
};