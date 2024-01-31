import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import "./Channel.css"; 

export default function PlayerSkeleton() {
  return (
    <SkeletonTheme baseColor="#202020" highlightColor="#444">
      <div className="container">
        <div className="content" style={{ backgroundColor: "#202020" }}>
          <Skeleton width={510} height={510}/>
          <div className="channel">
            <div className="name">
              <Skeleton />
              <div className="audio">
                <audio controls>
                  <Skeleton />
                </audio>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SkeletonTheme>
  );
}
