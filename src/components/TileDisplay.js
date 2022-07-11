import Tile from './Tile'

const TileDisplay = ({tiles, onTileRemove}) => {
    const listTiles = tiles.map((tile, index) => <Tile name={tile} removeTile={() => onTileRemove(index)} key={index}/>)

    return (
        <div>
            {listTiles}
        </div>
    )
}

export default TileDisplay
