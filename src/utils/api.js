const streams = [
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

export const makeRequest = async () => {
  const endpoints = streams.map(user => {
    return `https://api.twitch.tv/kraken/streams/${user}/?client_id=${APP_ID}`;
  });
  try {
    const data = await Promise.all(
      endpoints.map(url =>
        fetch(url)
          .then(res => {
            return res.json();
          })
          .then(data => {
            return data;
          })
      )
    );
    return data;
  } catch (error) {
    console.error(error);
  }
};
