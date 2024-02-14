package com.nology.anime;

import com.nology.anime.models.Anime;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*")
public class AnimeController {

    @Autowired
    AnimeService animeService;

    @ExceptionHandler
    public ResponseEntity<String> handleExceptions(AnimeNotFoundException exception) {

        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(exception.getMessage());
    }

    // CREATE
    @PostMapping("/anime/new")
    public ResponseEntity<Anime> addAnime(@RequestBody Anime anime){
      animeService.addAnime(anime);
      return ResponseEntity.status(HttpStatus.CREATED).body(anime);
    }

    //READ
    @GetMapping("/anime")
    public ResponseEntity<List<Anime>> getAnime(){
        System.out.println(animeService.getAllAnime());
        return ResponseEntity.status(HttpStatus.OK).body(animeService.getAllAnime());
    }

    @GetMapping("/anime/{id}")
    public ResponseEntity<Anime> getAnimeById(@PathVariable long id){
        System.out.println(animeService.getAnimeById(id));
        return ResponseEntity.status(HttpStatus.OK).body(animeService.getAnimeById(id));
    }

//    @GetMapping("/anime/{id}/genres")
//    public List<Anime> getAllAnimesAndGenres(@PathVariable long id){
//        return animeService.getAnimesAndGenres(id);
//    }
    //UPDATE


    //DELETE
    @DeleteMapping("/anime/{id}")
    public ResponseEntity<String> deleteAnimeById(@PathVariable long anime_id) {
        animeService.deleteAnimeById(anime_id);
        return ResponseEntity.status(HttpStatus.NO_CONTENT).body("Deleted Anime");
    }
}
