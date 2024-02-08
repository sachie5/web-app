package com.nology.app;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class AppController {

    // CREATE

    //READ
    @GetMapping("/anime")
    public String getAnime(){
        return "Anime List";
    }

    @GetMapping("/anime/{id}")
    public void getAnimeById(@RequestParam long id){
        return anime.
    }


    //UPDATE


    //DELETE
}
