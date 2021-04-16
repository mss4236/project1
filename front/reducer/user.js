import produce from 'immer';

// Store
export const initialState = {
    isSigningUp: false, // 회원가입 시도중
    signedUp: false,    // 회원가입 성공여부
    isLoggingIn: false, // 로그인 시도중
    isLoggingOut: false, // 로그아웃 시도중
    me: null, // 불러온 내 정보
    userInfo: null, // 불러온 사용자 정보
    followingList: [], // 팔로잉 목록
    followerList: [], // 팔로워 목록
    isEditingNickname: false,   // 닉네임 변경 시도중
    hasMoreFollowers: false,    // 더보기 버튼을 눌렀을 때 표시할 팔로워가 더 있는지
    hasMoreFollowings: false,    // 더보기 버튼을 눌렀을 때 표시할 팔로잉이 더 있는지
};

// action
// 회원가입
export const SIGN_UP_REQUEST = "SIGN_UP_REQUEST";
export const SIGN_UP_SUCCESS = "SIGN_UP_SUCCESS";
export const SIGN_UP_FAILURE = "SIGN_UP_FAILURE";

// 로그인
export const LOG_IN_REQUEST = "LOG_IN_REQUEST";
export const LOG_IN_SUCCESS = "LOG_IN_SUCCESS";
export const LOG_IN_FAILURE = "LOG_IN_FAILURE";

// 로그아웃
export const LOG_OUT_REQUEST = "LOG_OUT_REQUEST";
export const LOG_OUT_SUCCESS = "LOG_OUT_SUCCESS";
export const LOG_OUT_FAILURE = "LOG_OUT_FAILURE";

// 사용자 정보 불러오기
export const LOAD_USER_REQUEST = "LOAD_USER_REQUEST";
export const LOAD_USER_SUCCESS = "LOAD_USER_SUCCESS";
export const LOAD_USER_FAILURE = "LOAD_USER_FAILURE";

// 닉네임 수정
export const EDIT_NICKNAME_REQUEST = "EDIT_NICKNAME_REQUEST";
export const EDIT_NICKNAME_SUCCESS = "EDIT_NICKNAME_SUCCESS";
export const EDIT_NICKNAME_FAILURE = "EDIT_NICKNAME_FAILURE";

// reducer
export default (state = initialState, action) => {
    return produce(state, (draft) => {
        switch (action.type) {
            // 회원가입 -- start
            case SIGN_UP_REQUEST: {
                draft.isSigningUp = true;
                draft.signedUp = false;
                break;
            }
            case SIGN_UP_SUCCESS: {
                draft.isSigningUp = false;
                draft.signedUp = true;
                break;
            }
            case SIGN_UP_FAILURE: {
                draft.isSigningUp = false;
                draft.signedUp = false;
                break;
            }
            // 회원가입 -- end

            // 로그인 -- start
            case LOG_IN_REQUEST: {
                draft.isLoggingIn = true;
                break;
            }
            case LOG_IN_SUCCESS: {
                draft.isLoggingIn = false;
                draft.me = action.data;
                break;
            }
            case LOG_IN_FAILURE: {
                draft.isLoggingIn = false;
                draft.me = null;
                break;
            }
            // 로그인 -- end

            // 로그아웃 -- start
            case LOG_OUT_REQUEST: {
                draft.isLoggingOut = true;
                break;
            }
            case LOG_OUT_SUCCESS: {
                draft.isLoggingOut = false;
                draft.me = null;
                break;
            }
            case LOG_OUT_FAILURE: {
                draft.isLoggingOut = false;
                break;
            }
            // 로그아웃 -- end

            // 사용자 정보 불러오기 -- start
            case LOAD_USER_REQUEST: {
                break;
            }
            case LOAD_USER_SUCCESS: {
                if (action.me) {    // 내 정보 받아온거면 me에
                    draft.me = action.data;
                } else {    // 다른 사람 정보 받아온거면 userInfo에
                    draft.userInfo = action.data;
                }
                break;
            }
            case LOAD_USER_FAILURE: {
                break;
            }
            // 사용자 정보 불러오기 -- end

            // 닉네임 수정 -- start
            case EDIT_NICKNAME_REQUEST: {
                draft.isEditingNickname = true;
                break;
            }
            case EDIT_NICKNAME_SUCCESS: {
                draft.isEditingNickname = false;
                draft.me.nickname = action.data;
                break;
            }
            case EDIT_NICKNAME_FAILURE: {
                draft.isEditingNickname = false;
                break;
            }
            // 닉네임 수정 -- end

            default: {
                break;
            }
        }
    });
};
