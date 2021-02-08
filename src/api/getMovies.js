const apiKey = 'e8f0b8eb';
const url = `https://www.omdbapi.com/?apikey=${apiKey}&t=`;

export const getMovie = title => fetch(`${url}${title}`)
  .then(result => result.json());
