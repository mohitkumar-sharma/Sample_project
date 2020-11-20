import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserInfoProps {
  /* as a string of user name */
  userName?: string;
}

interface UserInfoSelectorProps {
  /* as a type of UserInfoProps for selector*/
  userInfo?: UserInfoProps;
}

const initialState: UserInfoProps = {
  /* name of user provided */
  userName: '',
};

/**
 * This function will save the userInfo data to redux
 * @param state : state having UserInfoProps
 * @param action : action called from app with UserInfoProps
 */
const saveUserData = (state: UserInfoProps, action: PayloadAction<UserInfoProps>): void => {
  state.userName = action.payload.userName;
};

// Create slice having sliceName, reducer and initialState
const UserInfoSlice = createSlice({
  name: 'userInfo',
  initialState: initialState,
  reducers: {
    saveUser: saveUserData,
  },
});

// Get actions from created UserInfoSlice
const { saveUser } = UserInfoSlice.actions;

/**
 * Selector for selecting data from redux
 * @param userInfo : userInfo consists of UserInfoSelectorProps like userName
 */
const selectUser = ({ userInfo }: UserInfoSelectorProps): string => userInfo?.userName ?? '';

const userInfoReducer = UserInfoSlice.reducer;

export { userInfoReducer, saveUser, selectUser };
