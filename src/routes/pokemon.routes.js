import { Router } from 'express'

import {
  getPokemon,
  getPokemonById,
  getRandomPokemon
} from '../controllers/pokemon.controller.js'

const router = Router()
