import React, { useState, useEffect } from "react";
import List from "./List";
import Playbar from "./PlayBar";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import PlayArrowSharpIcon from "@material-ui/icons/PlayArrowSharp";
import PauseSharpIcon from "@material-ui/icons/PauseSharp";
import "./App.css";
import "./StylePlaybar.css";

const App = () => {
  // Changed musicDatabase into a state so it is editable
  const [musicDatabase, changeDatabase] = useState([
    {
      artist: "Muse",
      title: "Plug In Baby",
      image: "https://images-na.ssl-images-amazon.com/images/I/31CYT67XSRL.jpg",
      duration: "3:38",
    },
    {
      artist: "Stardust",
      title: "Music Sounds Better With You",
      image: "https://images-na.ssl-images-amazon.com/images/I/41jcdb4o0nL._SX450_.jpg",
      duration: "4:23",
    },
    {
      artist: "Moloko",
      title: "Sing It Back",
      image: "https://lastfm.freetls.fastly.net/i/u/770x0/ad07dcd889b0410b8b1a609d67313e47.jpg",
      duration: "3:25",
    },
    {
      artist: "David Bowie",
      title: "Heroes",
      image: "https://classicalbumsundays.com/wp-content/uploads/2019/08/artrockstore-david-bowie-heroes-album_1024x1024-1.jpg",
      duration: "6:11",
    },
    {
      artist: "Depeche Mode",
      title: "Strangelove",
      image: " https://img.discogs.com/4aoax7y-uev3pxvmwLm0Qyd7kw0=/fit-in/600x604/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-24398-1241286029.jpeg.jpg",
      duration: "3:45",
    },
    {
      artist: "Culture Club",
      title: "Karma Chameleon",
      image: "https://m.media-amazon.com/images/M/MV5BODg3ZjA0NmItYWY1ZC00ZDU0LTg5YTMtZmZmODk3ZjY1OTZhXkEyXkFqcGdeQXVyNDE4OTY5NzI@._V1_.jpg",
      duration: "4:02",
    },
    {
      artist: "Blue Boy",
      title: "Remember Me",
      image: "https://img.discogs.com/b2chysrl23j0RH7bzh3UEAoHRmU=/fit-in/600x525/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-65410-1471732490-6399.jpeg.jpg",
      duration: "7:04",
    },
    {
      artist: "Miriam Makeba",
      title: "Pata Pata",
      image: "https://i3.cdn.hhv.de/catalog/shop_detail_zoom/00669/669863.jpg",
      duration: "2:59",
    },
    {
      artist: "Bowling For Soup",
      title: "1985",
      image: "https://images-na.ssl-images-amazon.com/images/I/B1osavSNHJS._SL1000_.png",
      duration: "3:13",
    },
    {
      artist: "The Implants",
      title: "Parallel",
      image: "https://img.discogs.com/oabC_GO2aftQztp2OEoHpF7Fdac=/fit-in/600x595/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-6391402-1418073514-2055.jpeg.jpg",
      duration: "3:59",
    },
    {
      artist: "Aphex Twin",
      title: "Rhubarb",
      image: "https://m.media-amazon.com/images/I/81lrYSLBjiL._SS500_.jpg",
      duration: "7:44",
    },
    {
      artist: "The Blaze",
      title: "Faces",
      image: "https://images-na.ssl-images-amazon.com/images/I/B190BJ%2B4wQS._SY355_.jpg",
      duration: "3:58",
    },
    {
      artist: "DJ Koze",
      title: "Club der Ewigkeiten",
      image: "https://images-na.ssl-images-amazon.com/images/I/81T5PuLfGcL._SL1200_.jpg",
      duration: "4:10",
    },
    {
      artist: "Su Lee",
      title: "I'll Just Dance",
      image: "https://images.genius.com/f91b4823604fb4056904ffeeeae4a649.1000x1000x1.jpg",
      duration: "2:52",
    },
    {
      artist: "Napkey",
      title: "Stellar Rock",
      image: "https://sidekick-music.com/wp-content/uploads/2018/09/artworks-000400226796-i46fkl-t500x500.jpg",
      duration: "2:08",
    },
  ]);
  const [nowPlaying, changeSong] = useState({});
  const [isPlaying, togglePlay] = useState(false);

  // useEffect Test case - change Document Title if State changes
  // If clause checks whether an empty Object is in the state
  useEffect(() => {
    if (Object.keys(nowPlaying).length === 0) {
      document.title = "Welcome to Spotify";
    } else {
      document.title = `\u25BA ${nowPlaying.title}`;
    }
  });

  // deleteItem function creates a copy of the database, then deletes one entry
  const deleteItem = (index) => {
    const databaseCopy = [...musicDatabase];
    databaseCopy.splice(index, 1);
    changeDatabase(databaseCopy);
  };

  const playSong = (song) => {
    changeSong(song);
    togglePlay(true);
  };

  return (
    <div className='App'>
      {/* Mapping the list from musicDatabase and generating a div for every object using map() */}
      {musicDatabase.map((element, index) => (
        <div key={index}>
          <Grid container spacing={1}>
            <Grid item xs={1}>
              <IconButton onClick={() => playSong(element)}>
                <PlayArrowSharpIcon />
              </IconButton>
            </Grid>
            <Grid item xs={10}>
              <List artist={element.artist} title={element.title} image={element.image} duration={element.duration} />
            </Grid>
            <Grid item xs={1}>
              <IconButton onClick={() => deleteItem(index)}>
                <DeleteIcon />
              </IconButton>
            </Grid>
          </Grid>
        </div>
      ))}
      {/* End of Mapping */}
      {/* Playbar Component, when the play is clicked, will show the artist and the title of that song */}
      <Grid container direction='row' className='playBar-container' maxWidth='sm'>
        <Grid item xs={2}>
          <div className='imageBottomContainer'>
            <img src={nowPlaying.image} />
          </div>
        </Grid>
        <Grid item xs={6}>
          <div className='popUp'>
            {/*  =============== TO BE DISCUSSED =============== */}
            {/* {isPlaying && (
              <>
                <span>
                  <h3></h3>
                </span>
              </>
            )} */}
            {/*  =============== TO BE DISCUSSED =============== */}
            <>
              <span>
                <h3></h3>
              </span>
            </>
            {/* Duplicate of <span> above, this way the huge gap has been filled, leaving the playbar enough space */}
            <>
              <span>
                <h3>
                  {nowPlaying.title}
                  {nowPlaying.artist}
                </h3>
              </span>
            </>
          </div>
          <Playbar songPlaying={nowPlaying} isPlaying={isPlaying} />
        </Grid>
      </Grid>{" "}
      {/* End of Playbar Component */}
    </div>
  );
};

export default App;
