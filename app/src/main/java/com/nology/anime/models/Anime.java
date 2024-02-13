package com.nology.anime;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

import java.time.Year;
import java.util.List;
import java.util.Random;
import java.util.Set;

@Entity
public class Anime {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private String title;
    private String author;
    private String image;
    private int episodes;
    private int year_of_release;

    public Anime(){
    }

    public Anime(String title, String author, String image, int episodes, int year_of_release) {
        this.title = title;
        this.author = author;
        this.image = image;
        this.episodes = episodes;
        this.year_of_release = year_of_release;
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

    public int getEpisodes() {
        return episodes;
    }

    public void setEpisodes(int episodes) {
        this.episodes = episodes;
    }

    public int getYearOfRelease() {
        return year_of_release;
    }

    public void setYearOfRelease(int year_of_release) {
        this.year_of_release = year_of_release;
    }
}
