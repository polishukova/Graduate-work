
const ADDFAVORITES = 'https://api.themoviedb.org/3/account/19830313/favorite';
const FAVORITESTATE = 'https://api.themoviedb.org/3/movie/'

type Film = {
  media_type: string,
  media_id: number,
  favorite: boolean,
}

export const addFavorites = async (film: Film) => {
  const url = new URL(ADDFAVORITES);
  const response = await fetch(url,
    {
      method: 'POST',
      headers: {
        accept: 'application/json',
        'content-type': 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhYzc1ZDIyMDYyMDY2NGFkZjM5MGZjYTU1NjIwMDA0ZiIsInN1YiI6IjY0N2M3NjVlMGUyOWEyMDExNmFkNDU2YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ihZhctfHnZABpjMVWFHZMMvNEZG6rMdJ5plj0SAbsag'
      },
      body: JSON.stringify(film)
    });
  const result = await response.json();
  return result;
};

type State = {
  id: number,
  favorite: boolean,
  rated: boolean,
  watchlist: boolean,
}

export const isFavorite = async (id: number) => {
  const url = new URL(FAVORITESTATE + String(id) + '/account_states');
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhYzc1ZDIyMDYyMDY2NGFkZjM5MGZjYTU1NjIwMDA0ZiIsInN1YiI6IjY0N2M3NjVlMGUyOWEyMDExNmFkNDU2YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ihZhctfHnZABpjMVWFHZMMvNEZG6rMdJ5plj0SAbsag'
    }
  };

  const response = await fetch(url, options);
  const result: State = await response.json();
  return result.favorite
};