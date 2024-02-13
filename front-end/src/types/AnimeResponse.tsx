export type Anime = {
    id: number,
    title: string,
    author: string,
    image: string,
    episodes: number,
    year_of_release: number,
    informationId: number,
    information: {
        id: number,
        author: string,
        episodes: number,
        animeDescription: string,
        studio: string
    }
}
