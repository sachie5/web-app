package com.nology.anime;

import com.nology.anime.models.Anime;
import com.nology.anime.repositories.AnimeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class AnimeService {

    @Autowired
    AnimeRepository animeRepository;

    public void addAnime(Anime anime) {
        animeRepository.save(anime);
    }

    public Anime getAnimeById(long id) {
        Optional<Anime> anime = animeRepository.findById(id);
        if (anime.isEmpty()) {
            throw new AnimeNotFoundException();
        }
        System.out.println(anime.get());

        return anime.get();
    }


    public List<Anime> getAllAnime() {
        return animeRepository.findAll().stream().collect(Collectors.toList());
    }


    @Transactional
    public void deleteAnimeById(long id) {
        if (!animeRepository.existsById(id)) {
            throw new AnimeNotFoundException();
        }

        animeRepository.deleteAnimeById(id);
    }
}
