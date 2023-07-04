const poke_container = document.getElementById('poke-container');
const pokemon_count = 150;
const colors = {
      normal: '#A8A77A',
        fire: '#EE8130',
        water: '#6390F0',
        electric: '#F7D02C',
        grass: '#7AC74C',
        ice: '#96D9D6',
        fighting: '#C22E28',
        poison: '#A33EA1',
        ground: '#E2BF65',
        flying: '#A98FF3',
        psychic: '#F95587',
        bug: '#A6B91A',
        rock: '#B6A136',
        ghost: '#735797',
        dragon: '#6F35FC',
        dark: '#705746',
        steel: '#B7B7CE',
        fairy: '#D685AD',
        //https://stackoverflow.com/questions/70786719/cycling-through-an-array-and-finding-the-key-that-a-pokemon-type
    };

    const fetchPokemons = async() => {
        for(let i = 1; i <=pokemon_count; i++) {
            await getPokemon(i);
        }
    }

    const getPokemon = async(id) => {
        const url = `https://pokeapi.co/api/v2/pokemon/${id}`
        const res = await fetch(url);
        const data = await res.json();
        console.log(data)
    }

    fetchPokemons();