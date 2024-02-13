package com.nology.anime.repositories;

import com.nology.anime.models.Anime;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AnimeRepository extends JpaRepository<Anime, Long> {

    void deleteAnimeById(long id);
}
