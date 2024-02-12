package com.nology.anime;


import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Repository
public class AnimeRepositoryNonDB {

    private final List<Anime> animeList = new ArrayList<>();

    public void addAnime(Anime anime) {
        animeList.add(anime);
    }

    public List<Anime> getAllAnime() {
        return animeList;
    }

    public Anime getAnimeById(long id) {
        for(Anime anime: animeList){
            if(anime.getId() == id){
                return anime;
            }
        }
        return null;
    }

    public List<String> getAllGenres() {
       return animeList.stream().map(anime -> anime.getGenres().toString()).toList();
    }

}
