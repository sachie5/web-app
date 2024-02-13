package com.nology.anime;

import com.nology.anime.models.Anime;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*")
public class AnimeController {

    @Autowired
    AnimeService animeService;

    @ExceptionHandler
    public String handleExceptions(AnimeNotFoundException exception) {
        return exception.getMessage();
    }

    // CREATE
    @PostMapping("/anime/new")
    public Anime addAnime(Anime anime){
      animeService.addAnime(anime);
      return anime;
    }

    //READ
    @GetMapping("/anime")
    public List<Anime> getAnime(){
        System.out.println(animeService.getAllAnime());
        return animeService.getAllAnime();
    }

    @GetMapping("/anime/{id}")
    public Anime getAnimeById(@PathVariable long id){
        System.out.println(animeService.getAnimeById(id));
        return animeService.getAnimeById(id);
    }


    //UPDATE


    //DELETE
    @DeleteMapping("/anime/{id}")
    public String deleteAnimeById(@PathVariable long id) {
        animeService.deleteAnimeById(id);
        return "Deleted Anime";
    }
}
