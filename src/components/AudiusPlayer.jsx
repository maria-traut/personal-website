import { useEffect, useState } from "react";
import "./AudiusPlayer.css";

const APP_NAME = "my-react-app";

export default function AudiusSearch() {
  const [host, setHost] = useState(null);
  const [query, setQuery] = useState("");
  const [tracks, setTracks] = useState([]);

  // Host holen
  useEffect(() => {
    async function fetchHost() {
      const res = await fetch("https://api.audius.co");
      const data = await res.json();

      // zufälligen Host nehmen (stabiler)
      const randomHost =
        data.data[Math.floor(Math.random() * data.data.length)];

      setHost(randomHost);
    }

    fetchHost();
  }, []);

  // Suche ausführen
  useEffect(() => {
    if (!host || query.length < 2) return;

    const timeout = setTimeout(async () => {
      const res = await fetch(
        `${host}/v1/tracks/search?query=${encodeURIComponent(
          query,
        )}&app_name=${APP_NAME}`,
      );

      const data = await res.json();
      setTracks(data.data);
    }, 300); // debounce

    return () => clearTimeout(timeout);
  }, [query, host]);

  function getStreamUrl(trackId) {
    return `${host}/v1/tracks/${trackId}/stream?app_name=${APP_NAME}`;
  }

  return (
    <div>
      <div className="track-search">
        <p className="new">newest: how to fetch song api</p>
        <label className="track-search__label" htmlFor="search-input">
          find a song
        </label>

        <input
          type="text"
          name="search-input"
          className="track-search__input"
          placeholder="f. e. Elton John, 70s, Lofi ..."
          value={query}
          onChange={(event) => setQuery(event.target.value)}
        />
      </div>

      <ul className="track-search__found-songs">
        {tracks.map((track) => (
          <li className="track-search__found-song" key={track.id}>
            <strong className="track-search__title">{track.title}</strong> –{" "}
            {track.user.name}
            <br />
            <audio
              className="track-search__audio"
              controls
              src={getStreamUrl(track.id)}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
