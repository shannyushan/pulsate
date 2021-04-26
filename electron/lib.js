const fs = require("fs");
const os = require("os");
const path = require("path");

const homeDIR = os.homedir();
const MusicPath = path.join(homeDIR, "Music");

function getMusic() {
  var MusicDict = {};
  var Albums = {};
  var folders = fs.readdirSync(MusicPath);

  folders.forEach((files) => {
    const Dir = MusicPath + "\\" + files;

    if (fs.statSync(Dir).isDirectory()) {
      Albums[files] = Dir;
      var musics = fs.readdirSync(Dir);
      musics.forEach((music) => {
        const res = isMusicFile(music);

        if (res) {
          MusicDict[music] = Dir + "\\" + music;
        }
      });
    }
    const res = isMusicFile(files);
    if (res) {
      MusicDict[files] = Dir;
    }
  });
  return [MusicDict, Albums];
}

function isMusicFile(file) {
  ext = file.split(".")[1];
  if (
    ext === "mp3" ||
    ext === "m4a" ||
    ext === "flac" ||
    ext === "aac" ||
    ext === "ogg" ||
    ext === "opus" ||
    ext === "wav"
  ) {
    return true;
  }
  return false;
}

module.exports = getMusic;
