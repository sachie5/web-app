package com.nology.anime;

import jakarta.annotation.PostConstruct;
import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.io.Resource;
import org.springframework.stereotype.Component;

import java.io.FileReader;
import java.util.List;

@Component
public class AnimeInitialiser {
    private final AnimeRepositoryNonDB animeRepositoryNonDB;

    @Value("classpath:anime.json")
    private Resource resourceFile;

    @Autowired
    public AnimeInitialiser(AnimeRepositoryNonDB animeRepositoryNonDB) {
        this.animeRepositoryNonDB = animeRepositoryNonDB;
    }

    @PostConstruct
    public void init() {
        org.json.simple.parser.JSONParser jsonParser = new JSONParser();
        try (FileReader reader = new FileReader(resourceFile.getFile())) {
            Object obj = jsonParser.parse(reader);

            JSONArray jsonArray = (JSONArray) obj;

            for (Object anime : jsonArray) {
                JSONObject animeJSON = (JSONObject) anime;

                long id = (long) animeJSON.get("id");
                String title = (String) animeJSON.get("title");
                String author = (String) animeJSON.get("author");
                List<String> genres = (List<String>) animeJSON.get("genres");
                long episodes = (long) animeJSON.get("episodes");
                long yearOfRelease = (long) animeJSON.get("year");

                animeRepositoryNonDB.addAnime(new Anime(id, title, author, genres, episodes, yearOfRelease));
            }

        } catch (Exception e) {
            e.printStackTrace();
        }
    }

}
