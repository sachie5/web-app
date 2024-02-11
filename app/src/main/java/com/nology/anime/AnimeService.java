package com.nology.anime;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AnimeService {

    @Autowired
    AnimeRepositoryNonDB animeRepositoryNonDB;

    public void addAnime(Anime anime) {
        animeRepositoryNonDB.addAnime(anime);
    }

    public Anime getAnimeById(long id) {
        return animeRepositoryNonDB.getAnimeById(id);
    }

}
