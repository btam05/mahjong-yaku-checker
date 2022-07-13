import TileButton from './TileButton'

const TileButtons = ({tiles, onTileAdd, onTileReset, call}) => {
    return (
        <div className="tile-buttons">
            <div>
                <TileButton name="1m" addTile={onTileAdd} call={call}/>
                <TileButton name="2m" addTile={onTileAdd} call={call}/>
                <TileButton name="3m" addTile={onTileAdd} call={call}/>
                <TileButton name="4m" addTile={onTileAdd} call={call}/>
                <TileButton name="5m" addTile={onTileAdd} call={call}/>
                <TileButton name="6m" addTile={onTileAdd} call={call}/>
                <TileButton name="7m" addTile={onTileAdd} call={call}/>
                <TileButton name="8m" addTile={onTileAdd} call={call}/>
                <TileButton name="9m" addTile={onTileAdd} call={call}/>
            </div>
            <div>
                <TileButton name="1p" addTile={onTileAdd} call={call}/>
                <TileButton name="2p" addTile={onTileAdd} call={call}/>
                <TileButton name="3p" addTile={onTileAdd} call={call}/>
                <TileButton name="4p" addTile={onTileAdd} call={call}/>
                <TileButton name="5p" addTile={onTileAdd} call={call}/>
                <TileButton name="6p" addTile={onTileAdd} call={call}/>
                <TileButton name="7p" addTile={onTileAdd} call={call}/>
                <TileButton name="8p" addTile={onTileAdd} call={call}/>
                <TileButton name="9p" addTile={onTileAdd} call={call}/>
            </div>
            <div>
                <TileButton name="1s" addTile={onTileAdd} call={call}/>
                <TileButton name="2s" addTile={onTileAdd} call={call}/>
                <TileButton name="3s" addTile={onTileAdd} call={call}/>
                <TileButton name="4s" addTile={onTileAdd} call={call}/>
                <TileButton name="5s" addTile={onTileAdd} call={call}/>
                <TileButton name="6s" addTile={onTileAdd} call={call}/>
                <TileButton name="7s" addTile={onTileAdd} call={call}/>
                <TileButton name="8s" addTile={onTileAdd} call={call}/>
                <TileButton name="9s" addTile={onTileAdd} call={call}/>
            </div>
            <div>
                <TileButton name="1z" addTile={onTileAdd} call={call}/>
                <TileButton name="2z" addTile={onTileAdd} call={call}/>
                <TileButton name="3z" addTile={onTileAdd} call={call}/>
                <TileButton name="4z" addTile={onTileAdd} call={call}/>
                <TileButton name="5z" addTile={onTileAdd} call={call}/>
                <TileButton name="6z" addTile={onTileAdd} call={call}/>
                <TileButton name="7z" addTile={onTileAdd} call={call}/>
            </div>
            <div>
                <button onClick={() => onTileReset()}>Reset</button>
            </div>
        </div>
    )
}

export default TileButtons
