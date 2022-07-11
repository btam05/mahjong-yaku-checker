const TileButton = ({name, addTile}) => {
    return <button onClick={() => addTile(name)}>{name}</button>
}

export default TileButton
