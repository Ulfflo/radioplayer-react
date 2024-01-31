import { useEffect, useState } from "react";
import Channel from "./Channel";
import PlayerSkeleton from "./Skeleton";
import "./App.css";

function App() {
  const [channels, setChannels] = useState([]);
  const [search, setSearch] = useState("");

  async function getChannels() {
    const response = await fetch(
       "https://api.sr.se/api/v2/channels?format=json&size=100"
    );
    const data = await response.json();
    setChannels(data.channels);
  }

  useEffect(() => {
    getChannels();
  }, []);

  function handleSearch(event) {
    setSearch(event.target.value);
  };

  const filteredChannels = channels.filter((channel) =>
    channel.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Search channels..."
        onChange={handleSearch}
      />
      {filteredChannels.length === 0 && <PlayerSkeleton />}
      <Channel channels={filteredChannels} />
    </div>
  );
}

export default App;
