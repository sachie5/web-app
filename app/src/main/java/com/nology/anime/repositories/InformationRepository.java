package com.nology.anime.repositories;

import com.nology.anime.models.Information;
import jakarta.persistence.Table;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Table(name = "information")
@Repository
public interface InformationRepository extends JpaRepository<Information, Long> {
}
