import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {
  public lukeFilms: any[];
  public vaderFilms: any[];
  public kenobiFilms: any[];
  public R2D2Films: any[];

  constructor(private http: HttpClient) { }

  getCharacters() {
    return this.http.get<{message: string, input: any}>('../assets/characters.json');
  }

  getLukeInfo() {
    this.getCharacters().subscribe((data: any) => {
      console.log(data.characters);
      this.http.get(data.characters[0].url).subscribe((luke: any) => {
        console.log(luke);
        let filmArr = [];
        for (let i=0; i<luke.films.length; i++) {
          this.http.get(luke.films[i]).subscribe((lukeMovie: any) => {
            console.log(lukeMovie);
            filmArr.push({
              film: lukeMovie.title,
              director: lukeMovie.director,
              release: lukeMovie.release_date
            });
            this.lukeFilms = filmArr;
            console.log(this.lukeFilms);
          })
        }
      })
    })
  }

  getVaderInfo() {
    this.getCharacters().subscribe((data: any) => {
      console.log(data.characters);
      this.http.get(data.characters[1].url).subscribe((vader: any) => {
        console.log(vader);
        let filmArr = [];
        for (let i=0; i<vader.films.length; i++) {
          this.http.get(vader.films[i]).subscribe((vaderMovie: any) => {
            console.log(vaderMovie);
            filmArr.push({
              film: vaderMovie.title,
              director: vaderMovie.director,
              release: vaderMovie.release_date
            });
            this.vaderFilms = filmArr;
            console.log(this.vaderFilms);
          })
        }
      })
    })
  }

  getKenobiInfo() {
    this.getCharacters().subscribe((data: any) => {
      console.log(data.characters);
      this.http.get(data.characters[2].url).subscribe((kenobi: any) => {
        console.log(kenobi);
        let filmArr = [];
        for (let i=0; i<kenobi.films.length; i++) {
          this.http.get(kenobi.films[i]).subscribe((kenobiMovie: any) => {
            console.log(kenobi);
            filmArr.push({
              film: kenobiMovie.title,
              director: kenobiMovie.director,
              release: kenobiMovie.release_date
            });
            this.kenobiFilms = filmArr;
            console.log(this.kenobiFilms);
          })
        }
      }, error => {
        console.log(error.status + ": Obi-Wan Kenobi Doesn't want to be found!");
        this.kenobiFilms = [{error: "Obi-Wan Kenobi Doesn't want to be found!"}];
      })
    })
  }

  getR2D2Info() {
    this.getCharacters().subscribe((data: any) => {
      console.log(data.characters);
      this.http.get(data.characters[3].url).subscribe((r2d2: any) => {
        console.log(r2d2);
        let filmArr = [];
        for (let i=0; i<r2d2.films.length; i++) {
          this.http.get(r2d2.films[i]).subscribe((r2d2Movie: any) => {
            console.log(r2d2);
            filmArr.push({
              film: r2d2Movie.title,
              director: r2d2Movie.director,
              release: r2d2Movie.release_date
            });
            this.R2D2Films = filmArr;
            console.log(this.R2D2Films);
          })
        }
      })
    })
  }
}
