const setMetaData = require('../../libs/set-meta-data');

let { musics } = require('../../db');

class MusicService {
  getMusics({ offset = 0, limit = 10, authUser = {} }) {
    const data = musics.slice(offset, limit);

    return setMetaData({ data, totalCount: musics.length });
  }
}

module.exports = new MusicService();