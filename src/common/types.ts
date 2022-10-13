import { AppStateType } from '../redux/app/app.types';
import { AuthStateType } from '../redux/auth/auth.types';
import { DialogStateType } from '../redux/dialog/dialog.types';
import { HeaderStateType } from '../redux/header/header.types';
import { MusicStateType } from '../redux/music/music.types';
import { PreloaderStateType } from '../redux/preloader/preloader.types';
import { ProfileStateType } from '../redux/profile/profile.types';
import { SideBareStateType } from '../redux/side-bar/side-bar.types';
import { UsersStateType } from '../redux/user/user.types';

export type OffsetType = number;
export type LimitType = number;
export type CountType = number;
export type TotalCountType = number;

export type MetaDataType = {
  offset: OffsetType,
  limit: LimitType,
}

export type StateType = {
  app: AppStateType,
  auth: AuthStateType,
  messagesPage: DialogStateType,
  header: HeaderStateType,
  musicPage: MusicStateType,
  preloader: PreloaderStateType,
  profilePage: ProfileStateType,
  sideBar: SideBareStateType,
  usersPage: UsersStateType,
}
