import ActionInterface from '../../../common/interface';
import { MetaDataType } from '../../../common/types';
import { MusicsType } from './musicReducer.types';

export interface MusicActionInterface extends ActionInterface {
  musics?: MusicsType
  metaData?: MetaDataType
}
