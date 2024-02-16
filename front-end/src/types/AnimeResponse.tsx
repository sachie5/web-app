export type Anime = {
    id: number,
    title: string,
    author: string,
    image: string,
    episodes: number,
    year_of_release: number,
    information: {
        id: number,
        animeDescription: string,
        studio: string
    },
    genres: Genres[];
}


export type Genres = {
    id: number,
    name: string
}