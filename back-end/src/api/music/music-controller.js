const musicService = require('./music-service');
const setResponseData = require('../../libs/set-response-date');
const getRequestData = require('../../libs/get-request-data');

class MusicController {
  getMusics(request, response) {
    const data = getRequestData(request);

    return setResponseData(response, musicService.getMusics(data));  }
}

module.exports = new MusicController();