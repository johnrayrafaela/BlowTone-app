import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import { images, icons } from '.';

const MusicPlayer = ({ song, onClose }) => {
  return (
    <View style={styles.container}>
      <ScrollView vertical showsVerticalScrollIndicator={false}>
        <TouchableOpacity onPress={onClose} style={styles.closeButton}>
          <Text style={styles.closeText}>X</Text>
        </TouchableOpacity>
        
        <Image source={song.image} style={styles.songImage} />

        <View style={styles.songInfo}>
          <Text style={styles.songTitle}>{song.title}</Text>
          <Text style={styles.songArtist}>{song.artist}</Text>
        </View>

        <View style={styles.progressContainer}>
          <View style={styles.progressBar} />
          <View style={styles.timeContainer}>
            <Text style={styles.timeText}>0:00</Text>
            <Text style={styles.timeText}>3:56</Text>
          </View>
        </View>

        {/* Playback Controls */}
        <View style={styles.controlsContainer}>
          <TouchableOpacity style={styles.controlButton}>
            <Image source={icons.prev} tintColor='#737373' style={styles.controlIcon} />
          </TouchableOpacity>

          <TouchableOpacity>
            <View style={styles.playButton}>
              <Image source={icons.play} tintColor='#171717' style={styles.playIcon} />
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.controlButton}>
            <Image 
              source={icons.prev} 
              tintColor='#737373' 
              style={[styles.controlIcon, styles.mirrorIcon]} 
            />
          </TouchableOpacity>
        </View>

        <View style={styles.upNextContainer}>
          <Text style={styles.upNextText}>UP NEXT</Text>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1F1F1F', // neutral-900
    alignItems: 'center',
    justifyContent: 'center',
  },
  closeButton: {
    marginLeft: 'auto',
    padding: 5// or use padding
  },
  closeText: {
    justifyContent:"",
    color: 'white',
  },
  songImage: {
    height: 288, // h-72
    width: 288, // w-72
    borderRadius: 12, // rounded-lg
    marginBottom: 16,
    marginTop: 8,
  },
  songInfo: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  songTitle: {
    color: 'white',
    fontSize: 24, // text-2xl
    fontWeight: 'bold',
  },
  songArtist: {
    color: '#B0B0B0', // neutral-500
    fontSize: 16, // text-base
  },
  progressContainer: {
    width: 288, // w-72
  },
  progressBar: {
    borderBottomWidth: 2,
    borderBottomColor: '#B0B0B0', // neutral-500
    paddingVertical: 12,
  },
  timeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  timeText: {
    color: '#B0B0B0', // neutral-500
    fontSize: 12, // text-xs
  },
  controlsContainer: {
    flexDirection: 'row',
    marginTop: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  controlButton: {
    marginHorizontal: 16,
  },
  controlIcon: {
    height: 48, // h-12
    width: 48, // w-12
  },
  playButton: {
    backgroundColor: '#7B7B7B', // neutral-500
    borderRadius: 50,
    width: 96, // w-24
    height: 96, // h-24
    alignItems: 'center',
    justifyContent: 'center',
  },
  playIcon: {
    marginLeft: 12,
    height: 40, // h-10
    width: 40, // w-10
  },
  mirrorIcon: {
    transform: [{ scaleX: -1 }],
  },
  upNextContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  upNextText: {
    color: 'white',
    fontSize: 20, // text-1xl
    fontWeight: 'bold',
    padding: 20,
  },
});

export default MusicPlayer;
