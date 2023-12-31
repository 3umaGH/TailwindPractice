import axios from "axios";
import { FetchQuery } from "../constants";

const API_BASE_URL = import.meta.env.VITE_APP_API;
const API_KEY = import.meta.env.VITE_APP_API_KEY;

export const fetchGenres = async () => {
  return await axios.get(`${API_BASE_URL}/genre/movie/list?api_key=${API_KEY}`);
};

export const fetchUpcomingMovies = async ({ page }: FetchQuery) => {
  let query = "";

  if (page) query += `&page=${page}`;

  return await axios.get(
    `${API_BASE_URL}/movie/upcoming?api_key=${API_KEY}${query}`
  );
};

export const fetchMoviesSortBy = async ({
  sort_by,
  with_genres,
  page,
  origin_country,
}: FetchQuery) => {
  let query = "";
  if (with_genres && with_genres.length > 0)
    query += `&with_genres=${with_genres}`;

  if (sort_by)
    if (sort_by === "vote_average.desc&vote_count.desc")
      query += `&sort_by=desc&sort_by=vote_count.desc`;
    else query += `&sort_by=${sort_by}`;

  if (page) query += `&page=${page}`;

  if (origin_country) query += `&with_origin_country=${origin_country}`;

  console.log(
    `${API_BASE_URL}/discover/movie?api_key=${API_KEY}${query}`
  );

  return await axios.get(
    `${API_BASE_URL}/discover/movie?api_key=${API_KEY}${query}`
  );
};

export const fetchMovieDetails = async (id: String) => {
  return await axios.get(
    `${API_BASE_URL}/movie/${id}?api_key=${API_KEY}&append_to_response=release_dates,videos`
  );
};
