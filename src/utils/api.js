export const streams = [
  'Eviltoaster',
  'Cuppcaake',
  'Okpai',
  'freecodecamp',
  'just_stevo',
  'HungriCorgi',
  'electroslag',
  'tinykoalawizard',
  'bobross'
];

const APP_ID = 'y6kclh4aarn3d49fxftx9nztvp6097';

const getChannelData = async username => {
  const url = `https://api.twitch.tv/kraken/channels/${username}?client_id=${APP_ID}`;
  const request = await fetch(url);
  const response = request.json();
  return response;
};
export const getUserData = async username => {
  const url = `https://api.twitch.tv/kraken/streams/${username}?client_id=${APP_ID}`;
  const request = await fetch(url);
  const response = await request.json();
  return response;
};

export const getTwitchData = async username => {
  return await Promise.all([getChannelData(username), getUserData(username)]).then(
    ([user, stream]) => {
      if (user.error) {
        return {
          name: username,
          error: user.message
        };
      }
      return {
        name: user.display_name,
        url: user.url,
        logo: user.logo,
        game: user.game,
        status: stream.stream
      };
    }
  );
};
