package com.nology.anime.models;

import jakarta.persistence.*;

import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name = "anime")
public class Anime {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private long id;
    private String title;
    private String author;
    private String image;
    private int episodes;
    private int year_of_release;

    @OneToOne
    @JoinColumn(name = "id")
    private Information information;

    @ManyToMany(cascade = {CascadeType.PERSIST, CascadeType.MERGE})
    @JoinTable(
            name = "anime_genres_link",
            joinColumns = @JoinColumn(name = "anime_id", insertable = false, updatable = false),
            inverseJoinColumns = @JoinColumn(name = "genres_id", insertable = false, updatable = false)
    )
    private Set<Genres> genres = new HashSet<>();

    public Anime(){
    }

    public Anime(String title, String author, String image, int episodes, int year_of_release) {
        this.title = title;
        this.author = author;
        this.image = image;
        this.episodes = episodes;
        this.year_of_release = year_of_release;
    }

    public Set<Genres> getGenres() {
        return genres;
    }

    public void setGenres(Set<Genres> animeGenres) {
        this.genres = animeGenres;
    }

    public int getYear_of_release() {
        return year_of_release;
    }

    public void setYear_of_release(int year_of_release) {
        this.year_of_release = year_of_release;
    }

    public Information getInformation() {
        return information;
    }

    public void setInformation(Information information) {
        this.information = information;
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


}
