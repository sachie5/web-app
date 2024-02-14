package com.nology.anime.models;

import jakarta.persistence.*;

@Entity
@Table(name = "anime_genres_link")
public class AnimeGenresLink {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private long anime_id;

    private long genres_id;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public long getAnime_id() {
        return anime_id;
    }

    public void setAnime_id(long anime_id) {
        this.anime_id = anime_id;
    }

    public long getGenres_id() {
        return genres_id;
    }

    public void setGenres_id(long genres_id) {
        this.genres_id = genres_id;
    }
}
