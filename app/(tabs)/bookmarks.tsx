import { IconSymbol } from '@/components/ui/IconSymbol';
import React from 'react';
import {
    Image,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';

const BOOKMARKED_ARTICLES = [
  {
    id: '1',
    title: 'The Future of Artificial Intelligence in Healthcare',
    category: 'Technology',
    image: 'https://picsum.photos/400/300',
    readTime: '5 min read',
    date: '2 hours ago',
  },
  {
    id: '2',
    title: 'Sustainable Living: Small Changes, Big Impact',
    category: 'Environment',
    image: 'https://picsum.photos/400/301',
    readTime: '4 min read',
    date: '5 hours ago',
  },
  {
    id: '3',
    title: 'Global Economic Trends in 2024',
    category: 'Business',
    image: 'https://picsum.photos/400/302',
    readTime: '6 min read',
    date: '1 day ago',
  },
  {
    id: '4',
    title: 'Breakthrough in Quantum Computing Research',
    category: 'Science',
    image: 'https://picsum.photos/400/303',
    readTime: '7 min read',
    date: '3 hours ago',
  },
  {
    id: '5',
    title: 'New Study Reveals Benefits of Mediterranean Diet',
    category: 'Health',
    image: 'https://picsum.photos/400/304',
    readTime: '4 min read',
    date: '8 hours ago',
  },
  {
    id: '6',
    title: 'Revolutionary Space Mission Discovers Water on Mars',
    category: 'Science',
    image: 'https://picsum.photos/400/305',
    readTime: '5 min read',
    date: '12 hours ago',
  },
  {
    id: '7',
    title: 'Tech Giants Announce Revolutionary AI Partnership',
    category: 'Technology',
    image: 'https://picsum.photos/400/306',
    readTime: '6 min read',
    date: '1 day ago',
  },
  {
    id: '8',
    title: 'Sports: Underdog Team Makes Historic Championship Run',
    category: 'Sports',
    image: 'https://picsum.photos/400/307',
    readTime: '3 min read',
    date: '4 hours ago',
  },
  {
    id: '9',
    title: 'New Climate Agreement Reached at Global Summit',
    category: 'Environment',
    image: 'https://picsum.photos/400/308',
    readTime: '5 min read',
    date: '6 hours ago',
  },
  {
    id: '10',
    title: 'Blockchain Technology Transforming Financial Services',
    category: 'Technology',
    image: 'https://picsum.photos/400/309',
    readTime: '8 min read',
    date: '2 days ago',
  },
  {
    id: '11',
    title: 'Major Breakthrough in Renewable Energy Storage',
    category: 'Science',
    image: 'https://picsum.photos/400/310',
    readTime: '6 min read',
    date: '1 day ago',
  },
  {
    id: '12',
    title: 'Global Film Industry Adapts to Streaming Era',
    category: 'Entertainment',
    image: 'https://picsum.photos/400/311',
    readTime: '4 min read',
    date: '3 hours ago',
  }
];

export default function BookmarksScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Bookmarks</Text>
        <TouchableOpacity style={styles.searchButton}>
          <IconSymbol name="magnifyingglass" size={24} color="#333" />
        </TouchableOpacity>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {BOOKMARKED_ARTICLES.map((article) => (
          <TouchableOpacity key={article.id} style={styles.articleCard}>
            <Image source={{ uri: article.image }} style={styles.articleImage} />
            <View style={styles.articleContent}>
              <View style={styles.articleHeader}>
                <Text style={styles.category}>{article.category}</Text>
                <TouchableOpacity>
                  <IconSymbol name="bookmark.fill" size={20} color="#FF416C" />
                </TouchableOpacity>
              </View>
              <Text style={styles.articleTitle}>{article.title}</Text>
              <View style={styles.articleFooter}>
                <Text style={styles.readTime}>{article.readTime}</Text>
                <Text style={styles.date}>{article.date}</Text>
              </View>
            </View>
          </TouchableOpacity>
        ))}
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
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 50,
    paddingBottom: 10,
  },
  title: {
    fontFamily: 'Poppins-Bold',
    fontSize: 28,
    color: '#333',
  },
  searchButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#f5f5f5',
    justifyContent: 'center',
    alignItems: 'center',
  },
  articleCard: {
    flexDirection: 'row',
    marginHorizontal: 20,
    marginBottom: 20,
    backgroundColor: '#f8f8f8',
    borderRadius: 15,
    overflow: 'hidden',
  },
  articleImage: {
    width: 100,
    height: 100,
  },
  articleContent: {
    flex: 1,
    padding: 15,
  },
  articleHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 5,
  },
  category: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 12,
    color: '#FF416C',
  },
  articleTitle: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 16,
    color: '#333',
    marginBottom: 10,
  },
  articleFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  readTime: {
    fontFamily: 'Poppins-Regular',
    fontSize: 12,
    color: '#666',
  },
  date: {
    fontFamily: 'Poppins-Regular',
    fontSize: 12,
    color: '#666',
  },
}); 