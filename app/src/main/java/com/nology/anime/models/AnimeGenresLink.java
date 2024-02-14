package com.nology.anime.models;

import jakarta.persistence.*;

@Entity
@Table(name = "anime_genres_link")
public class AnimeGenresLink {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "anime_id")
    private Anime anime;

    @ManyToOne
    @JoinColumn(name = "genres_id")
    private Genres genres;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Anime getAnime() {
        return anime;
    }

    public void setAnime(Anime anime) {
        this.anime = anime;
    }

    public Genres getGenres() {
        return genres;
    }

    public void setGenres(Genres genres) {
        this.genres = genres;
    }
}
