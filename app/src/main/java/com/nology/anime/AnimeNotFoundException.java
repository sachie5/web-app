package com.nology.anime;

public class AnimeNotFoundException extends RuntimeException {
    public AnimeNotFoundException(){ super("Anime has not been found"); }
}
