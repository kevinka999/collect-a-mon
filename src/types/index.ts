export enum TypeEnum {
  fairy,
  ground,
  normal,
  fighting,
  flying,
  poison,
  steel,
  psychic,
  ghost,
  bug,
  rock,
  fire,
  ice,
  water,
  dragon,
  grass,
  dark,
  electric,
}

export interface PokemonMove {
  name: string
  pp: number
  types: TypeEnum[]
}

export interface Pokemon {
  name: string
  picture: string
  types: TypeEnum[]
  moves: PokemonMove[]
}
