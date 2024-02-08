package com.nology.app;

import java.time.Year;
import java.util.Random;

public class App {

    private long id = new Random().nextLong();
    private String name;
    private String author;
    private String genre;
    private int episodes;
    private Year yearOfRelease;

    public App(long id, String name, String author, String genre, int episodes, Year yearOfRelease) {
        this.id = id;
        this.name = name;
        this.author = author;
        this.genre = genre;
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
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getAuthor() {
        return author;
    }

    public void setAuthor(String author) {
        this.author = author;
    }

    public String getGenre() {
        return genre;
    }

    public void setGenre(String genre) {
        this.genre = genre;
    }

    public int getEpisodes() {
        return episodes;
    }

    public void setEpisodes(int episodes) {
        this.episodes = episodes;
    }

    public Year getYearOfRelease() {
        return yearOfRelease;
    }

    public void setYearOfRelease(Year yearOfRelease) {
        this.yearOfRelease = yearOfRelease;
    }
}
