package com.nology.anime;

import com.nology.anime.models.Anime;
import com.nology.anime.models.Genres;
import com.nology.anime.models.Information;
import com.nology.anime.repositories.AnimeRepository;
import com.nology.anime.repositories.GenreRepository;
import com.nology.anime.repositories.InformationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.crossstore.ChangeSetPersister;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.PathVariable;

import java.util.*;
import java.util.stream.Collectors;

@Service
public class AnimeService {

    @Autowired
    AnimeRepository animeRepository;

    @Autowired
    GenreRepository genreRepository;

    @Autowired
    InformationRepository informationRepository;

    // CREATE
    public Anime addAnime(Anime newAnime) {
        return animeRepository.save(newAnime);
    }

    //READ
    public Anime getAnimeById(long id) {
        Optional<Anime> anime = animeRepository.findById(id);
        if (anime.isEmpty()) {
            throw new AnimeNotFoundException();
        }
        System.out.println(anime.get());

        return anime.get();
    }


    public List<Anime> getAllAnime() {
        return new ArrayList<>(animeRepository.findAll());
    }

    public List<Genres> getAllGenres() {
        return genreRepository.findAll();
    }

    public List<String> getAllGenresName(){
        return genreRepository.findAll().stream().map(genre -> genre.getName()).collect(Collectors.toList());
    }

    // UPDATE
    @Modifying
    public Anime updateAnime(Anime newAnime, long id) {

        if (!animeRepository.existsById(id)) {
            throw new AnimeNotFoundException();
        }

        newAnime.setId(id);
        animeRepository.save(newAnime);

        return newAnime;
    }

    //DELETE
    @Transactional
    public void deleteAnimeById(long id) {
        if (!animeRepository.existsById(id)) {
            throw new AnimeNotFoundException();
        }

        animeRepository.deleteAnimeById(id);
    }


}
