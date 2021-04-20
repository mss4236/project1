import produce from 'immer';

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



export default (state = initialState, action) => {
    return produce(state, (draft) => {
        switch (action.type) {
            // 메인게시글 불러오기 -- start
            case LOAD_MAIN_POSTS_REQUEST: {
                break;
            }
            case LOAD_MAIN_POSTS_SUCCESS: {
                break;
            }
            case LOAD_MAIN_POSTS_FAILURE: {
                break;
            }
            // 메인게시글 불러오기 -- end

            default: {
                break;
            }
        }
    });
};