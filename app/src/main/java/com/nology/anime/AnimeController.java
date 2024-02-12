package com.nology.anime;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.time.Year;
import java.util.List;

@RestController
@CrossOrigin(origins = "*")
public class AnimeController {

    @Autowired
    AnimeRepositoryNonDB animeRepositoryNonDB;

    // CREATE
    @PostMapping("/anime/new")
    public Anime addAnime(Anime anime){
      animeRepositoryNonDB.addAnime(anime);
      return anime;
    }

    //READ
    @GetMapping("/anime")
    public List<Anime> getAnime(){
        System.out.println(String.valueOf(animeRepositoryNonDB.getAllAnime()));
        return animeRepositoryNonDB.getAllAnime();
    }

    @GetMapping("/anime/{id}")
    public Anime getAnimeById(@PathVariable long id){
        System.out.println(animeRepositoryNonDB.getAnimeById(id));
        return animeRepositoryNonDB.getAnimeById(id);
    }

    @GetMapping("/anime/genres")
    public List<String> getAllGenres(){
        return animeRepositoryNonDB.getAllGenres();
    }


    //UPDATE


    //DELETE
}
