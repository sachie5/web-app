package com.nology.anime.models;

import jakarta.persistence.*;

@Entity
@Table(name = "information")
public class Information {

    @Id
    @Column(name = "anime_id")
    private long id;
    private String animeDescription;
    private String studio;

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getAnimeDescription() {
        return animeDescription;
    }

    public void setAnimeDescription(String animeDescription) {
        this.animeDescription = animeDescription;
    }

    public String getStudio() {
        return studio;
    }

    public void setStudio(String studio) {
        this.studio = studio;
    }

}
