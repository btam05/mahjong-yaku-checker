import Header from './components/Header'
import TileDisplay from './components/TileDisplay'
import TileButtons from './components/TileButtons'
import UtilityButtons from './components/UtilityButtons'
import YakuDisplay from './components/YakuDisplay'
import {useState} from 'react'

const App = () => {
    const [language, setLangauge] = useState('en')

    const [tiles, setTiles] = useState([])

    const [call, setCall] = useState('none')

    const [states, setStates] = useState({
        'riichi': 'no',
        'closed': true,
        'prevalentWind': 'east',
        'seatWind': 'east',
        'dora': 0
    })

    const addTile = (tile, type='normal', relatedTiles=[]) => {
        if (tiles.length < 14) {
            if (type != 'normal' && type != 'closedkan') {
                setStates({...states, 'closed': false})
            }
            setTiles([...tiles, {
                'type': type,
                'name': tile,
                'relatedTiles': relatedTiles
            }])
        }
    }

    const removeTile = (targetIndex) => {
        if (tiles.length > 0) setTiles(tiles.filter((_, index) => index != targetIndex))
        var closed = true
        tiles.forEach(tile => {
            if (tile.type == 'chii' || tile.type == 'pon' || tile.type == 'kan') {
                closed = false
            }
        })
        setStates({...states, 'closed': closed})
    }

    const resetTiles = () => {setTiles([])}

    const changeCall = (targetCall) => {targetCall == call ? setCall('none') : setCall(targetCall)}

    const changeState = (targetState, value) => {setStates({...states, targetState: value})}

    /*
    const changeRiichi = (state) => {setRiichi(state)}
    const changePrevalentWind = (wind) => {setPrevalentWind(wind)}
    const changeSeatWind = (wind) => {setSeatWind(wind)}
    */

    return (
        <div className="container">
            <h1>test</h1>
            <Header/>
            <TileDisplay tiles={tiles} onTileRemove={removeTile}/>
            <TileButtons tiles={tiles} onTileAdd={addTile} onTileReset={resetTiles} call={call}/>
            <UtilityButtons onCallChange={changeCall} onStateChange={changeState}/>
            <YakuDisplay tiles={tiles}/>
        </div>
    )
}

export default App
