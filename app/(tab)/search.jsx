import { View, Text, TextInput, Image, TouchableOpacity, ScrollView } from 'react-native';
import React, { useState } from 'react';
import { images } from '../../constants';
import MusicPlayer from '../../constants/musicplayer'; // Import the new MusicPlayer component

const songsData = [
  { title: 'Peach Eyes', artist: 'Wave to Earth', image: images.love },
  { title: 'Daisy', artist: 'Wave to Earth', image: images.daisy },
  { title: 'Earthquake', artist: 'Tyler the Creator', image: images.earthquake },
  { title: 'Seasons', artist: 'Wave to Earth', image: images.wave_thum },
  { title: 'Annie', artist: 'Wave to Earth', image: images.annie },
  { title: 'Love', artist: 'Wave to Earth', image: images.love },
  { title: 'See you Again', artist: 'Tyler the Creator', image: images.see_u_again },
  { title: 'Bad', artist: 'Wave to Earth', image: images.love },
  { title: 'Apple', artist: 'Beabadoobee', image: images.apple },
  { title: 'I Love You So', artist: 'The Walters', image: images.ilys },
  { title: 'Sunny Days', artist: 'Wave to Earth', image: images.love },
  { title: 'Homesick', artist: 'Wave to Earth', image: images.love },
  { title: 'Loose', artist: 'Daniel Caesar', image: images.loose },
  { title: 'Glue Song', artist: 'Beabadoobee', image: images.glue },
  { title: 'Slowly Dancin in the Dark', artist: 'Joji', image: images.slowly },
  { title: 'TipToe', artist: 'HYBS', image: images.tiptoe },
  { title: 'Best Interest', artist: 'Tyler the Creator', image: images.best },
];

const Search = () => {
  const [searchText, setSearchText] = useState('');
  const [currentSong, setCurrentSong] = useState(null);

  const clearText = () => {
    setSearchText('');
  };

  const filteredSongs = songsData.filter(song =>
    song.title.toLowerCase().includes(searchText.toLowerCase()) ||
    song.artist.toLowerCase().includes(searchText.toLowerCase())
  );

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

  return (
    <View className="bg-neutral-900 flex-1">
      <ScrollView vertical showsVerticalScrollIndicator={false}>
        <View className="flex-row">
          <View className="p-2 w-full flex-row items-center">
            <TextInput
              value={searchText}
              onChangeText={setSearchText}
              placeholderTextColor="gray"
              className="font-pmedium h-10 rounded-3xl pl-2 m-1 bg-white placeholder:text-neutral-900"
              placeholder="Browse Songs:"
              autoCorrect={false}
              returnKeyType="search"
              keyboardType="default"
              selectionColor="gray"
              style={{ flex: 1 }}
            />
            {searchText.length > 0 && (
              <TouchableOpacity onPress={clearText} className="p-2">
                <Text className="text-white">X</Text>
              </TouchableOpacity>
            )}
          </View>
        </View>

        <View className="p-2 flex-col justify-center">
          {filteredSongs.map((song, index) => (
            <TouchableOpacity key={index} onPress={() => handlePlaySong(song)}>
              <View className="mb-2 h-16 w-full rounded-2xl bg-neutral-800 flex-row">
                <Image className="h-16 w-14 rounded-tl-2xl rounded-bl-2xl" source={song.image} />
                <View className="flex-col justify-center items-start ml-2">
                  <Text className="text-white font-pmedium">{song.title}</Text>
                  <Text className="text-neutral-500 font-pregular text-xs -mt-1">{song.artist}</Text>
                </View>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default Search;
