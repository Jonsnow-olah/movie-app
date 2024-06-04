import { useState, useEffect } from "react";

const KEY = "8e8f219f";

export function useMovies(query, callback) {
    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");

    useEffect(
        function() {
            // callback?.();

        const controller = new AbortController();   //Cleaning up our data from the networks tab
        async function fetchMovies() {
    
        try {
    
        setIsLoading(true);
        setError("");
    
        const res = await fetch(`http://www.omdbapi.com/?apikey=${KEY}&s=${query}`, {signal: controller.signal});
    
        if(!res.ok) throw new Error("Something went wrong");
        const data = await res.json();
    
        if(data.Response === "False") throw new Error("Movie not found");
        setMovies(data.Search);
        setError("");
          } catch (err) {
            console.error(err.message);
            if(err.name !== "AbortError") {
            setError(err.message);
            }
          } finally {
            setIsLoading(false);
          }
        }
    
        if(query.length < 2) {
          setMovies([]);
          setError("");
          return;
        }
    
        fetchMovies();
    
        return function() {
          controller.abort();
        };
    
      }, [query]
    
    );

    return {movies, isLoading, error};
}