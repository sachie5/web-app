package com.nology.anime.repositories;

import com.nology.anime.models.Genre;
import jakarta.persistence.Table;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Table(name = "genres")
@Repository
public interface GenreRepository extends JpaRepository<Genre, Integer> {
}
