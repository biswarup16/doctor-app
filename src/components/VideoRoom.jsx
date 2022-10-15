import { useEffect, useState, useRef } from "react";
import AgoraRTC from "agora-rtc-sdk-ng";

const AGORA_CHANNEL = "patient_doctor";

const agoraClient = AgoraRTC.createClient({ mode: "rtc", codec: "vp8" });

function VideoPlayer({ className, track }) {
  const playerRef = useRef(null);
  useEffect(() => {
    track.play(playerRef.current);
  }, []);

  return (
    <div
      className={className ?? "h-10 w-10"}
      ref={playerRef}
    ></div>
  );
}

function RemotePlayer({ className, track }) {
  const playerRef = useRef(null);
  useEffect(() => {
    track.play(playerRef.current);
  }, []);

  return (
    <div
      className={className ?? "h-6 w-6"}
      ref={playerRef}
    ></div>
  );
}

export default function VideoRoom() {
  const [localVideoTrack, setLocalVideoTrack] = useState(null);
  const [remoteVideoTrack, setRemoteVideoTrack] = useState(null);

  async function handleUserJoined(user, mediaType) {
    await agoraClient.subscribe(user, mediaType);
    console.log(user, mediaType);
    if (mediaType === "video") {
      if (user.videoTrack) {
        setRemoteVideoTrack(user.videoTrack);
      }
    }
    if (mediaType === "audio") {
      if (user.audioTrack) {
        user.audioTrack.play();
      }
    }
  }

  function handleUserLeft(user) {
    setRemoteVideoTrack(null);
  }

  useEffect(() => {
    let localTracks;
    agoraClient.on("user-published", handleUserJoined);
    agoraClient.on("user-left", handleUserLeft);
    agoraClient
      .join(AGORA.appid, AGORA_CHANNEL, AGORA.token, null)
      .then((uid) => {
        return AgoraRTC.createMicrophoneAndCameraTracks();
      })
      .then((tracks) => {
        localTracks = tracks;
        const [audioTrack, videoTrack] = tracks;
        setLocalVideoTrack(videoTrack);
        agoraClient.publish(tracks);
      });
    return () => {
      agoraClient.off("user-published", handleUserJoined);
      agoraClient.off("user-left", handleUserLeft);
      agoraClient.unpublish(localTracks).then(() => agoraClient.leave());
    };
  }, []);

  return (
    <div className="flex h-full flex-col">
      <div className="flex-grow">
        <div className="relative">
          {remoteVideoTrack ? (
            <VideoPlayer
              className="h-[90vh] w-full"
              track={remoteVideoTrack}
            />
          ) : (
            <div className="grid h-[90vh] w-full place-content-center bg-gray-300 text-gray-600">
              Doctor will connect shortly. Please wait
            </div>
          )}
          {localVideoTrack && (
            <RemotePlayer
              className="absolute  bottom-0 right-0 z-20 h-64 w-64 bg-white p-2"
              track={localVideoTrack}
            />
          )}
        </div>
      </div>
      <div className="bg-sky-500 text-white">Buttons</div>
    </div>
  );
}
