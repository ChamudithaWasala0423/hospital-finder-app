/* eslint-disable prettier/prettier */
import {
  View,
  TextInput,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Text,
  Linking,
} from 'react-native';
import React, {useCallback, useState} from 'react';
import {MicrophoneIcon} from 'react-native-heroicons/solid';
import {MagnifyingGlassIcon} from 'react-native-heroicons/outline';

const SearchBox = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  const fetchSuggestions = useCallback(async (query: any) => {
    try {
      const apiKey = 'AIzaSyBdxo_ZkkvAh8BlbI7W9AZBFoMvZY8Evp8';
      const apiUrl = `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${query}&key=${apiKey}`;

      const response = await fetch(apiUrl);
      const data = await response.json();

      if (data.predictions) {
        setSuggestions(data.predictions);
      }
    } catch (error) {
      console.error('Error fetching suggestions:', error);
    }
  }, []);

  const handleSearch = useCallback(() => {
    fetchSuggestions(searchQuery);
  }, [fetchSuggestions, searchQuery]);

  const handleSuggestionPress = (suggestion: never) => {
    console.log('Selected suggestion:', suggestion);
    if (suggestion.place_id) {
      const googleMapsUrl = `https://www.google.com/maps/place/?q=place_id:${suggestion.place_id}`;
      Linking.openURL(googleMapsUrl);
    }
  };

  return (
    <View style={styles.subHeaderContainer}>
      <View style={styles.searchBoxContainer}>
        <TouchableOpacity style={styles.searchBox}>
          <MagnifyingGlassIcon
            size={20}
            color="#747474"
            onPress={handleSearch}
          />
        </TouchableOpacity>
        <View style={styles.searchBoxTwo}>
          <TextInput
            placeholder="Search for Hospital"
            placeholderTextColor="#747474"
            style={styles.searchText}
            value={searchQuery}
            onChangeText={text => {
              setSearchQuery(text);
              fetchSuggestions(text); // Fetch suggestions as the user types
            }}
            onSubmitEditing={handleSearch}
          />
        </View>
        <View style={styles.searchBoxThree}>
          <MicrophoneIcon size={20} color="#0057e7" />
        </View>
      </View>
      <FlatList
        style={styles.suggestionsContainer}
        data={suggestions}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <TouchableOpacity onPress={() => handleSuggestionPress(item)}>
            <View style={styles.suggestionItem}>
              <Text>{item.description}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  subHeaderContainer: {
    width: '100%',
    height: 70,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  searchBoxContainer: {
    width: '100%',
    height: 50,
    backgroundColor: 'white',
    borderRadius: 10,
    flexDirection: 'row',
  },
  searchBox: {
    width: '20%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchBoxTwo: {
    width: '60%',
    height: 50,
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  searchBoxThree: {
    width: '20%',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  searchText: {
    fontSize: 15,
    color: 'black',
  },

  suggestionsContainer: {
    position: 'absolute',
    top: 70,
    left: 20,
    right: 20,
    zIndex: 1,
    backgroundColor: '#fff',
    borderRadius: 10,
    maxHeight: 500,
    elevation: 2,
  },

  suggestionItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});

export default SearchBox;
