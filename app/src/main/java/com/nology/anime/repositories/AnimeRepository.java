package com.nology.anime.repositories;

import com.nology.anime.models.Anime;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface AnimeRepository extends JpaRepository<Anime, Long> {

    void deleteAnimeById(long id);

    @Query(value = "SELECT * FROM anime_genre", nativeQuery = true)
    List<Anime> getAllAnimesAndGenres(long anime_id);

}
