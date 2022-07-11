const Tile = ({name, removeTile}) => {
    return <button onClick={removeTile}>{name}</button>
}

export default Tile
