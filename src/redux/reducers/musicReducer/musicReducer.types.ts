export type MusicType = {
  id: number,
  artist: string,
  song: string,
  src: string,
};

export type MusicsType = Array<MusicType>

export type MusicStateType = {
  offset: number,
  limit: number,
  count: number,
  totalCount: number,
  musics: MusicsType,
};
