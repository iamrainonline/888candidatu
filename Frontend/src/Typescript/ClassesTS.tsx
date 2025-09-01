interface Audio {
  name: string;
  duration: number;
}

interface Video {
  name: string;
  duration: number;
}

class Playlist<T> {
  public queueu: T[] = [];
  add(el: T) {
    this.queueu.push(el);
  }
}

const myPlaylist = new Playlist<Video>();

myPlaylist.add({ name: "Titanic", duration: 25 });
