import { AppError } from '../errors/AppError.js'

import {
  getAllPokemon,
  getPokemonById,
  getPokemonByName,
  getPokemonByType,
  getRandomPokemon,
  getPokemonTypes
} from '../repositories/pokemon.repository.js'

const ALLOWED_TYPES = [
  'normal',
  'fire',
  'water',
  'grass',
  'electric',
  'ice',
  'fighting',
  'poison',
  'ground',
  'flying',
  'psychic',
  'bug',
  'rock',
  'ghost',
  'dark',
  'dragon',
  'steel',
  'fairy'
]