import { IMovieResponse, IMoviesResponse } from "../common/interfaces";
import { http } from "./http.service";

class MovieApi {
  private http = http;
  private BASE = process.env.REACT_APP_API_URL;
  private API_KEY = process.env.REACT_APP_API_KEY;

  public async getMovies(page = 1): Promise<IMoviesResponse> {
    return this.http.load(
      `${this.BASE}/popular?api_key=${this.API_KEY}&language=en-US&page=${page}`,
      {}
    );
  }

  public async getMovie(id: string): Promise<IMovieResponse> {
    return this.http.load(
      `${this.BASE}/${id}?api_key=${this.API_KEY}&language=en-US`,
      {}
    );
  }
}

export const moviesApi = new MovieApi();
