import TileButton from './TileButton'

const Buttons = ({onTileAdd, onTileReset}) => {
    return (
        <div className="tile-buttons">
            <div>
                <TileButton name="1m" addTile={onTileAdd}/>
                <TileButton name="2m" addTile={onTileAdd}/>
                <TileButton name="3m" addTile={onTileAdd}/>
                <TileButton name="4m" addTile={onTileAdd}/>
                <TileButton name="5m" addTile={onTileAdd}/>
                <TileButton name="6m" addTile={onTileAdd}/>
                <TileButton name="7m" addTile={onTileAdd}/>
                <TileButton name="8m" addTile={onTileAdd}/>
                <TileButton name="9m" addTile={onTileAdd}/>
            </div>
            <div>
                <TileButton name="1p" addTile={onTileAdd}/>
                <TileButton name="2p" addTile={onTileAdd}/>
                <TileButton name="3p" addTile={onTileAdd}/>
                <TileButton name="4p" addTile={onTileAdd}/>
                <TileButton name="5p" addTile={onTileAdd}/>
                <TileButton name="6p" addTile={onTileAdd}/>
                <TileButton name="7p" addTile={onTileAdd}/>
                <TileButton name="8p" addTile={onTileAdd}/>
                <TileButton name="9p" addTile={onTileAdd}/>
            </div>
            <div>
                <TileButton name="1s" addTile={onTileAdd}/>
                <TileButton name="2s" addTile={onTileAdd}/>
                <TileButton name="3s" addTile={onTileAdd}/>
                <TileButton name="4s" addTile={onTileAdd}/>
                <TileButton name="5s" addTile={onTileAdd}/>
                <TileButton name="6s" addTile={onTileAdd}/>
                <TileButton name="7s" addTile={onTileAdd}/>
                <TileButton name="8s" addTile={onTileAdd}/>
                <TileButton name="9s" addTile={onTileAdd}/>
            </div>
            <div>
                <TileButton name="1z" addTile={onTileAdd}/>
                <TileButton name="2z" addTile={onTileAdd}/>
                <TileButton name="3z" addTile={onTileAdd}/>
                <TileButton name="4z" addTile={onTileAdd}/>
                <TileButton name="5z" addTile={onTileAdd}/>
                <TileButton name="6z" addTile={onTileAdd}/>
                <TileButton name="7z" addTile={onTileAdd}/>
            </div>
            <div>
                <button onClick={() => onTileReset()}>Reset</button>
            </div>
        </div>
    )
}

export default Buttons
