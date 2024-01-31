import "./Channel.css";

export default function Channel({ channels }) {
  
  return (
    <>
      {channels.map((channel) => {
        return (
          <div className="container" key={channel.id}>
            <div
              className="content"
              style={{ backgroundColor: `#${channel.color}` }}
            >
              <img src={channel.image} alt={channel.name} />
              <div className="channel">
                <div className="name">
                  {channel.name}
                  <div className="audio">
                    <audio controls>
                      <source src={channel.liveaudio.url} type="audio/mpeg" />
                    </audio>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}
