import { useState } from 'react'
import { Grid, GridItem, Show } from '@chakra-ui/react'
import NavBar from './components/NavBar'
import GameGrid from './components/GameGrid'
import GenreList from './components/GenreList'
import { Genre } from './hooks/useGenres'
import PlatformSelector from './components/PlatformSelector'

function App() {
  const [genre, setGenre] = useState<Genre | null>(null)

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: '1fr',
        lg: '200px 1fr',
      }}
    >
      <GridItem area='nav'>
        <NavBar />
      </GridItem>
      <Show above='lg'>
        <GridItem area='aside' paddingX={5}>
          <GenreList
            onSelectGenre={(selectedGenre) => setGenre(selectedGenre)}
            selectedGenre={genre}
          />
        </GridItem>
      </Show>
      <GridItem area='main'>
        <PlatformSelector />
        <GameGrid genre={genre} />
      </GridItem>
    </Grid>
  )
}

export default App
