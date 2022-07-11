import Header from './components/Header'
import TileDisplay from './components/TileDisplay'
import Buttons from './components/Buttons'
import YakuDisplay from './components/YakuDisplay'
import {useState} from 'react'

const App = () => {
    const [tiles, setTiles] = useState([])

    const addTile = (tile) => {
        if (tiles.length <= 14) setTiles([...tiles, tile])
    }

    const removeTile = (index) => {
        if (tiles.length > 0) setTiles(tiles.splice(index, 1))
    }

    const resetTiles = () => {
        setTiles([])
    }

    return (
        <div className="container">
            <Header/>
            <TileDisplay tiles={tiles}/>
            <Buttons onTileAdd={addTile} onTileRemove={removeTile} onTileReset={resetTiles}/>
            <YakuDisplay tiles={tiles}/>
        </div>
    )
}

export default App
