type DISPATCH_CONSTANTS_TYPE_MODEL = {
  APP: {
    INITIALIZE_SUCCESS: string,
  },

  PRELOADER: {
    SET_IS_FETCHING: string,
  },

  AUTH: {
    SET_AUTH_DATA: string,
    IS_REMEMBER_ME: string,
    LOG_OUT: string,
  },

  SIDE_BAR:{
    SET_FRIENDS: string,
  },

  PROFILE_PAGE: {
    SET_PROFILE: string,
    SET_PROFILE_POSTS: string,
    SET_META_DATA: string,
  },

  DIALOG_PAGE: {
    SEND_MESSAGE: string,
    SET_DIALOGS: string,
    SET_DIALOG: string,
    SET_DIALOGS_META_DATA: string,
  },

  USERS_PAGE: {
    SET_USERS: string,
    SET_META_DATA: string,
    FOLLOW: string,
    UNFOLLOW: string,
    CHANGE_DISPLAY_USERS: string,
    SET_ACTIVE_PAGE: string,
    FOLLOWING_IN_PROGRESS: string,
  },

  MUSIC_PAGE: {
    SET_MUSICS: string,
    SET_MUSICS_META_DATA: string,
  },
}

export default DISPATCH_CONSTANTS_TYPE_MODEL;