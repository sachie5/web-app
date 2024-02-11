package com.nology.anime;

import java.time.Year;
import java.util.List;
import java.util.Random;

public class Anime {

    private long id = new Random().nextLong();
    private String title;
    private String author;
    private List<String> genres;
    private long episodes;
    private long yearOfRelease;

    public Anime(){
    }

    public Anime(long id, String title, String author, List<String> genres, long episodes, long yearOfRelease) {
        this.id = id;
        this.title = title;
        this.author = author;
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

    public String getName() {
        return title;
    }

    public void setName(String title) {
        this.title = title;
    }

    public String getAuthor() {
        return author;
    }

    public void setAuthor(String author) {
        this.author = author;
    }

    public List<String> getGenres() {
        return genres;
    }

    public void setGenre(List<String> genres) {
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
