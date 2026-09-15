import { AppError } from '../errors/AppError.js'

import {
  findPokemon,
  findPokemonById,
  findRandomPokemon
} from '../services/pokemon.service.js'

export const getPokemon = async (req, res) => {
  const { name, type, limit, offset } = req.query

  const result = await findPokemon({
    name,
    type,
    limit,
    offset
  })

  res.status(200).json(result)
}