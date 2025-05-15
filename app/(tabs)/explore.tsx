import { IconSymbol } from '@/components/ui/IconSymbol';
import { LinearGradient } from 'expo-linear-gradient';
import React, { useState } from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

const TRENDING_TOPICS = [
  {
    id: '1',
    title: 'Climate Change',
    articles: 156,
    image: 'https://picsum.photos/400/200',
  },
  {
    id: '2',
    title: 'AI Technology',
    articles: 243,
    image: 'https://picsum.photos/400/201',
  },
  {
    id: '3',
    title: 'Global Economy',
    articles: 189,
    image: 'https://picsum.photos/400/202',
  },
];

const RECENT_SEARCHES = [
  'Technology trends',
  'Climate summit',
  'Stock market',
  'Sports news',
  'Health updates',
];

export default function ExploreScreen() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Explore</Text>
      </View>

      <View style={styles.searchContainer}>
        <View style={styles.searchBar}>
          <IconSymbol name="magnifyingglass" size={20} color="#666" />
          <TextInput
            style={styles.searchInput}
            placeholder="Search for news, topics, or articles"
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
          {searchQuery.length > 0 && (
            <TouchableOpacity onPress={() => setSearchQuery('')}>
              <IconSymbol name="xmark.circle.fill" size={20} color="#666" />
            </TouchableOpacity>
          )}
        </View>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {searchQuery.length === 0 && (
          <>
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Recent Searches</Text>
              {RECENT_SEARCHES.map((search, index) => (
                <TouchableOpacity key={index} style={styles.recentSearch}>
                  <IconSymbol name="clock.fill" size={20} color="#666" />
                  <Text style={styles.recentSearchText}>{search}</Text>
                </TouchableOpacity>
              ))}
            </View>

            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Trending Topics</Text>
              {TRENDING_TOPICS.map((topic) => (
                <TouchableOpacity key={topic.id} style={styles.topicCard}>
                  <Image source={{ uri: topic.image }} style={styles.topicImage} />
                  <LinearGradient
                    colors={['transparent', 'rgba(0,0,0,0.8)']}
                    style={styles.topicGradient}
                  >
                    <Text style={styles.topicTitle}>{topic.title}</Text>
                    <Text style={styles.topicArticles}>{topic.articles} articles</Text>
                  </LinearGradient>
                </TouchableOpacity>
              ))}
            </View>
          </>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    paddingHorizontal: 20,
    paddingTop: 50,
    paddingBottom: 10,
  },
  title: {
    fontFamily: 'Poppins-Bold',
    fontSize: 28,
    color: '#333',
  },
  searchContainer: {
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    borderRadius: 15,
    paddingHorizontal: 15,
    height: 50,
  },
  searchInput: {
    flex: 1,
    marginLeft: 10,
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
    color: '#333',
  },
  section: {
    marginBottom: 30,
  },
  sectionTitle: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 20,
    color: '#333',
    marginLeft: 20,
    marginBottom: 15,
  },
  recentSearch: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  recentSearchText: {
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
    color: '#333',
    marginLeft: 10,
  },
  topicCard: {
    height: 150,
    marginHorizontal: 20,
    marginBottom: 15,
    borderRadius: 15,
    overflow: 'hidden',
  },
  topicImage: {
    width: '100%',
    height: '100%',
  },
  topicGradient: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: '50%',
    padding: 15,
    justifyContent: 'flex-end',
  },
  topicTitle: {
    fontFamily: 'Poppins-Bold',
    fontSize: 18,
    color: '#fff',
    marginBottom: 5,
  },
  topicArticles: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    color: '#fff',
    opacity: 0.8,
  },
});
