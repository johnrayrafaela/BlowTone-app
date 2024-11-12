import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { images, icons } from '../../constants';
import MusicPlayer from '../../constants/musicplayer'; 

const Library = () => {
  const [showDownloads, setShowDownloads] = useState(false);
  const [showLikedSongs, setShowLikedSongs] = useState(false);
  const [showWavetoEarth, setShowWavetoEarth] = useState(false);
  const [showPlaylist, setshowPlaylist] = useState (false);
  const [currentSong, setCurrentSong] = useState(null);

  const handleDownloadsPress = () => {
    setShowDownloads(!showDownloads); // to show the downloads songs
    setShowLikedSongs(false); // Hide liked songs when showing downloads
    setShowWavetoEarth(false);//hide
  };

  const handleLikedSongsPress = () => {
    setShowLikedSongs(!showLikedSongs); // to show the Likesongs
    setShowDownloads(false); // Hide downloads when showing liked songs
    setShowWavetoEarth(false);// Hide wave to earth when showing liked songs
  };

  const handleWavetoEarthPress = () => {
    setShowWavetoEarth(!showWavetoEarth);// to show wave to earth
    setShowDownloads(false); // Hide downloads when showing liked songs
    setShowLikedSongs(false); // Hide liked songs when showing downloads
    
  }
  const handlePlaylistPress = () => {
    setshowPlaylist(!showPlaylist);//show playlist
    setShowDownloads(false); // Hide downloaded songs
    setShowLikedSongs(false); // Hide liked songs
    setShowWavetoEarth(false);// to hide the wave to earth
   
  };

  const handleBackPress = () => {
    setShowDownloads(false); // Hide downloaded songs
    setShowLikedSongs(false); // Hide liked songs
    setShowWavetoEarth(false);// to hide the wave to earth
    setshowPlaylist(false);//hide playlist
  };

  const handlePlaySong = (song) => {
    setCurrentSong(song);
  };

  const handleClosePlayer = () => {
    setCurrentSong(null);
  };
  if (currentSong) {
    // Render the MusicPlayer if a song is selected
    return (
      <MusicPlayer song={currentSong} onClose={handleClosePlayer} />
    );
  }

  const downloadedSongs = [
    { title: 'Annie', artist: 'Wave to Earth', image: images.annie },
    { title: 'Love', artist: 'Wave to Earth', image: images.love },
    { title: 'Bad', artist: 'Wave to Earth', image: images.wave_thum },
    { title: 'Seasons', artist: 'Wave to Earth', image: images.love },
    { title: 'Promise', artist: 'Laufey', image: images.promise },
    { title: 'TipToe', artist: 'HYBS', image: images.tiptoe },
    { title: 'Glue Song', artist: 'Beabadoobee', image: images.glue },
    { title: 'Loose', artist: 'Daniel Caesar', image: images.loose },
    { title: 'I Love You So', artist: 'The Walters', image: images.ilys },
  ];
  const Playlist = [
    { title: 'Tylerr', artist: 'Tyler the Creator', image: images.best },
    { title: 'NewJeans', artist: 'NewJeans', image: images.nwjns },
    { title: 'Wave to Earth', artist: 'Wave to Earth', image: images.annie },
    { title: 'Beabadoobee', artist: 'Beabadoobee', image: images.apple },
    { title: 'sadboyy', artist: ' TV Girl', image: images.lover_rock },
    
  ];

  const likedSongs = [
    { title: 'Earthquake', artist: 'Tyler the Creator', image: images.earthquake },
    { title: 'Annie', artist: 'Wave to Earth', image: images.annie },
    { title: 'Love', artist: 'Wave to Earth', image: images.love },
    { title: 'Bad', artist: 'Wave to Earth', image: images.wave_thum },
    { title: 'Seasons', artist: 'Wave to Earth', image: images.love },
    { title: 'Apple', artist: 'Beabadoobee', image: images.apple },
    { title: 'Promise', artist: 'Laufey', image: images.promise },
    { title: 'TipToe', artist: 'HYBS', image: images.ti },
    { title: 'Glue Song', artist: 'Beabadoobee', image: images.glue },
    { title: 'Loose', artist: 'Daniel Caesar', image: images.loose },
    { title: 'I Love You So', artist: 'The Walters', image: images.ilys },
    { title: 'Slowly Dancin in the Dark', artist: 'Joji', image: images.slowly },
    { title: 'See You Again', artist: 'Tyler the Creator', image: images.see_u_again },
    { title: 'Best Interest', artist: 'Tyler the Creator', image: images.best },
  ];

  const WavetoEarth = [
    { title: 'Daisy', artist: 'Wave to Earth', image: images.daisy },
    { title: 'Seasons', artist: 'Wave to Earth', image: images.wave_thum},
    { title: 'Annie', artist: 'Wave to Earth', image: images.annie },
    { title: 'Peach Eyes', artist: 'Wave to Earth', image: images.love },
    { title: 'Love', artist: 'Wave to Earth', image: images.love },
    { title: 'Homesick', artist: 'Wave to Earth', image: images.love },
    { title: 'Bad', artist: 'Wave to Earth', image: images.wave_thum },
    { title: 'Sunny Days', artist: 'Wave to Earth', image: images.love },
    { title: 'Homesick', artist: 'Wave to Earth', image: images.love },
    
  ];

  return (
    <View className="flex-1 bg-neutral-900">
      <View className="justify-between flex-row p-2">
        <View className="p-2 flex-row items-center">
          <Image className="h-10 w-10" source={icons.profile} tintColor="white" />
          <Text className="text-white font-pbold ml-5 text-2xl">Your Library</Text>
        </View>
        <View className="mr-2 flex-row items-center">
          <Image className="h-4 w-4" source={icons.searchIcon} tintColor="white" />
          <Text className="ml-2 mb-1 text-2xl text-white">+</Text>
        </View>
      </View>

      <View className="mb-2">
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
              <View className="flex-row h-10 border-b-2 border-black p-2">
                {[{ title: 'All', onPress: handleBackPress },  
                  { title: 'Downloads', onPress: handleDownloadsPress },
                  { title: 'Liked Songs', onPress: handleLikedSongsPress },
                  { title: 'Playlists' , onPress:handlePlaylistPress}, 
                  { title: 'Artists' },
                  { title: 'Songs' }, 
                  { title: 'Albums' },
                ].map((item, index) => (
                  <View key={index} className="ml-2 bg-neutral-900 border border-white rounded-full justify-center items-center">
                    <TouchableOpacity onPress={item.onPress}>
                      <Text className="text-white font-pregular ml-3 mr-3">{item.title}</Text>
                    </TouchableOpacity>
                  </View>
                ))}
              </View>
            </ScrollView>
          </View>

      {showDownloads ? (
        <View className="flex-1 p-3">
          <TouchableOpacity onPress={handleBackPress} className="mb-4">
            <Text className="text-white text-lg">← Back to Library</Text>
          </TouchableOpacity>
          <Text className="text-white font-pregular">Downloaded Songs</Text>
          <ScrollView showsVerticalScrollIndicator={false}>
            {downloadedSongs.map((song, index) => (
              <TouchableOpacity key={index} onPress={() => handlePlaySong(song)} className="mb-4">
              <View  className="flex-row mb-3">
                <View className="rounded-2xl overflow-hidden h-28 w-28">
                  <Image className="h-full w-full" source={song.image} />
                </View>
                <View className="ml-2 flex-col justify-center">
                  <Text className="text-white font-bold text-base">{song.title}</Text>
                  <Text className="text-neutral-500 font-pregular text-xs">{song.artist}</Text>
                </View>
              </View>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

      ) : showLikedSongs ? (
        <View className="flex-1 p-3">
          <TouchableOpacity onPress={handleBackPress} className="mb-4">
            <Text className="text-white text-lg">← Back to Library</Text>
          </TouchableOpacity>
          <Text className="text-white font-pregular">Liked Songs</Text>
          <ScrollView showsVerticalScrollIndicator={false}>
            {likedSongs.map((song, index) => (
              <TouchableOpacity key={index} onPress={() => handlePlaySong(song)} className="mb-4">
              <View key={index} className="flex-row mb-3">
                <View className="rounded-2xl overflow-hidden h-28 w-28">
                  <Image className="h-full w-full" source={song.image} />
                </View>
                <View className="ml-2 flex-col justify-center">
                  <Text className="text-white font-bold text-base">{song.title}</Text>
                  <Text className="text-neutral-500 font-pregular text-xs">{song.artist}</Text>
                </View>
              </View>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

      ) : showWavetoEarth ? (
        <View className="flex-1 p-3">
          <TouchableOpacity onPress={handleBackPress} className="mb-4">
            <Text className="text-white text-lg">← Back to Library</Text>
          </TouchableOpacity>
          <Text className="text-white font-pregular">Wave to Earth</Text>
          <ScrollView showsVerticalScrollIndicator={false}>
            {WavetoEarth.map((song, index) => (
              <TouchableOpacity key={index} onPress={() => handlePlaySong(song)} className="mb-4">
              <View key={index} className="flex-row mb-3">
                <View className="rounded-2xl overflow-hidden h-28 w-28">
                  <Image className="h-full w-full" source={song.image} />
                </View>
                <View className="ml-2 flex-col justify-center">
                  <Text className="text-white font-bold text-base">{song.title}</Text>
                  <Text className="text-neutral-500 font-pregular text-xs">{song.artist}</Text>
                </View>
              </View>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

      ) : showPlaylist ? (
        <View className="flex-1 p-3">
          <TouchableOpacity onPress={handleBackPress} className="mb-4">
            <Text className="text-white text-lg">← Back to Library</Text>
          </TouchableOpacity>
          <Text className="text-white font-pregular">R4F Playlist</Text>
          <ScrollView showsVerticalScrollIndicator={false}>
            {Playlist.map((song, index) => (
              <TouchableOpacity key={index} onPress={() => handlePlaySong(song)} className="mb-4">
              <View key={index} className="flex-row mb-3">
                <View className="rounded-2xl overflow-hidden h-28 w-28">
                  <Image className="h-full w-full" source={song.image} />
                </View>
                <View className="ml-2 flex-col justify-center">
                  <Text className="text-white font-bold text-base">{song.title}</Text>
                  <Text className="text-neutral-500 font-pregular text-xs">{song.artist}</Text>
                </View>
              </View>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      ) : (
        
        <>
          

          <Text className="text-white font-pregular ml-3 mt-3">↑↓ Recently Played</Text>

          <ScrollView className="flex-col p-3">
            {[ 
              { title: 'Liked Songs', subtitle: (likedSongs.length) +" Songs", image: images.playlist2, onPress: handleLikedSongsPress },
              { title: 'R4F Playlist', subtitle: 'Wave to Earth, Beaba..', image: images.playlist , onPress:handlePlaylistPress},
              { title: 'Wave to Earth', subtitle: 'Wave to Earth', image: images.wave , onPress: handleWavetoEarthPress},
              { title: 'Downloads', subtitle: (downloadedSongs.length) +" Songs", image: images.annie, onPress: handleDownloadsPress },
            ].map((playlist, index) => (
              <TouchableOpacity key={index} onPress={playlist.onPress}>
              <View className=" flex-row mb-3">
                  <View className="rounded-2xl overflow-hidden h-28 w-28">
                    <Image className="h-full w-full" source={playlist.image} />
                  </View>
                
                  <View className="ml-2 flex-col justify-center">
                    <Text className="text-white font-bold text-base">{playlist.title}</Text>
                    <Text className="text-neutral-500 font-pregular text-xs">{playlist.subtitle}</Text>
                  </View>
              </View>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </>
      )}
    </View>
  );
};

export default Library;
