import Header from './components/Header'
import TileDisplay from './components/TileDisplay'
import Buttons from './components/Buttons'
import YakuDisplay from './components/YakuDisplay'
import {useState} from 'react'

const App = () => {
    const [tiles, setTiles] = useState([])

    const addTile = (tile) => {
        if (tiles.length < 14) setTiles([...tiles, tile])
        console.log(tile)
    }

    const removeTile = (targetIndex) => {
        if (tiles.length > 0) setTiles(tiles.filter((_, index) => index != targetIndex))
    }

    const resetTiles = () => {
        setTiles([])
    }

    return (
        <div className="container">
            <Header/>
            <TileDisplay tiles={tiles} onTileRemove={removeTile}/>
            <Buttons onTileAdd={addTile} onTileReset={resetTiles}/>
            <YakuDisplay tiles={tiles}/>
        </div>
    )
}

export default App
