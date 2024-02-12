package com.nology.anime;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

import java.time.Year;
import java.util.List;
import java.util.Random;
@Entity
public class Anime {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private String title;
    private String author;
    private String image;
    private List<String> genres;
    private long episodes;
    private long yearOfRelease;

    public Anime(){
    }

    public Anime(long id, String title, String author, String image, List<String> genres, long episodes, long yearOfRelease) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.image = image;
        this.genres = genres;
        this.episodes = episodes;
        this.yearOfRelease = yearOfRelease;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getAuthor() {
        return author;
    }

    public void setAuthor(String author) {
        this.author = author;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public List<String> getGenres() {
        return genres;
    }

    public void setGenres(List<String> genres) {
        this.genres = genres;
    }

    public long getEpisodes() {
        return episodes;
    }

    public void setEpisodes(long episodes) {
        this.episodes = episodes;
    }

    public long getYearOfRelease() {
        return yearOfRelease;
    }

    public void setYearOfRelease(long yearOfRelease) {
        this.yearOfRelease = yearOfRelease;
    }
}
