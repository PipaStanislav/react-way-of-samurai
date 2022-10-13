import { MusicsType } from '../../redux/music/music.types';
import { MetaDataType } from '../../common/types';

export type GetMusicsType = Promise<{ data: MusicsType, metaData: MetaDataType }>;