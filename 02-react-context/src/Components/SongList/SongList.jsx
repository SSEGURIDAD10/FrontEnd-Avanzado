import './songList.css'
import { useSongContext } from '../../Hook/useSongContext'

const SongList = () => {
  const { list, loading, setSelectedSong } = useSongContext()

  const filteredSongList = list.filter((song) => {
    return song.title.toLowerCase()
  })

  return (
    <section className='row-container'>
      {
        loading
          ? <h2>Cargando . . .</h2>
          : filteredSongList.map((song) => (
            <article
              key={song.id}
              className='row-song'
              onClick={() => {
                setSelectedSong(song)
              }}
            >
              <h3>{song.title}</h3>
              {/* <img src={song.img_url}/> */}
              <h3>{song.artist}</h3>
            </article>
          ))
        }
    </section>
  )
}

export default SongList