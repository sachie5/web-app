package com.nology.anime;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


public interface AnimeRepository extends JpaRepository<Anime, Long> {
}
