import { darkTheme, lightTheme } from '@/app/constants/theme';
import { useTheme } from '@/app/context/ThemeContext';
import { IconSymbol } from '@/components/ui/IconSymbol';
import { useFonts } from 'expo-font';
import { LinearGradient } from 'expo-linear-gradient';
import React, { useState } from 'react';
import {
  Dimensions,
  Image,
  RefreshControl,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Animated, { FadeInDown, FadeInRight } from 'react-native-reanimated';

const { width } = Dimensions.get('window');

const CATEGORIES = ['All', 'Politics', 'Technology', 'Business', 'Health', 'Sports', 'Entertainment'];

const FEATURED_ARTICLES = [
  {
    id: '1',
    title: 'Global Climate Summit Reaches Historic Agreement',
    category: 'Environment',
    image: 'https://picsum.photos/800/400',
    readTime: '5 min read',
    author: 'Emma Johnson',
    authorAvatar: 'https://randomuser.me/api/portraits/women/44.jpg',
  },
  {
    id: '2',
    title: 'Tech Giants Announce Revolutionary AI Partnership',
    category: 'Technology',
    image: 'https://picsum.photos/800/401',
    readTime: '4 min read',
    author: 'Michael Chen',
    authorAvatar: 'https://randomuser.me/api/portraits/men/32.jpg',
  },
];

const TRENDING_NEWS = [
  {
    id: '3',
    title: 'New Study Reveals Benefits of Mediterranean Diet',
    category: 'Health',
    image: 'https://picsum.photos/400/300',
    readTime: '3 min read',
    bookmarked: true,
  },
  {
    id: '4',
    title: 'Sports: Underdog Team Makes Historic Championship Run',
    category: 'Sports',
    image: 'https://picsum.photos/400/301',
    readTime: '4 min read',
    bookmarked: false,
  },
  {
    id: '5',
    title: 'Economy Shows Strong Recovery Signs',
    category: 'Business',
    image: 'https://picsum.photos/400/302',
    readTime: '3 min read',
    bookmarked: true,
  },
];

const BREAKING_NEWS = {
  id: '6',
  title: 'Breaking: Major Breakthrough in Renewable Energy Storage',
  category: 'Science',
  image: 'https://picsum.photos/800/402',
  readTime: '2 min read',
};

export default function HomeScreen() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [refreshing, setRefreshing] = useState(false);
  const { isDark } = useTheme();
  const theme = isDark ? darkTheme : lightTheme;

  const [fontsLoaded] = useFonts({
    'Poppins-Regular': require('../../assets/fonts/Poppins-Regular.ttf'),
    'Poppins-Bold': require('../../assets/fonts/Poppins-Bold.ttf'),
    'Poppins-SemiBold': require('../../assets/fonts/Poppins-SemiBold.ttf'),
    'Poppins-Medium': require('../../assets/fonts/Poppins-Medium.ttf'),
  });

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: theme.background }]}>
      <StatusBar barStyle={isDark ? 'light-content' : 'dark-content'} />
      <ScrollView 
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        <Animated.View entering={FadeInDown.delay(100).duration(500)} style={styles.header}>
          <View>
            <Text style={[styles.greeting, { color: theme.text }]}>
              {new Date().getHours() < 12 
                ? 'Good Morning' 
                : new Date().getHours() < 18 
                  ? 'Good Afternoon' 
                  : 'Good Evening'}
            </Text>
            <Text style={[styles.name, { color: theme.text }]}>Roxy</Text>
          </View>
          <View style={styles.headerButtons}>
            <TouchableOpacity style={[styles.iconButton, { backgroundColor: theme.card }]}>
              <IconSymbol name="bell.fill" size={20} color={theme.text} />
              <View style={[styles.notificationBadge, { backgroundColor: theme.primary }]} />
            </TouchableOpacity>
            <TouchableOpacity style={[styles.iconButton, { backgroundColor: theme.card }]}>
              <IconSymbol name="magnifyingglass" size={20} color={theme.text} />
            </TouchableOpacity>
          </View>
        </Animated.View>

        <Animated.View entering={FadeInDown.delay(200).duration(500)} style={styles.categoryContainer}>
          <ScrollView 
            horizontal 
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.categoryScroll}
          >
            {CATEGORIES.map((category, index) => (
              <TouchableOpacity
                key={category}
                style={[
                  styles.categoryButton,
                  selectedCategory === category && styles.categoryButtonActive,
                  { backgroundColor: theme.card }
                ]}
                onPress={() => setSelectedCategory(category)}
              >
                <Text 
                  style={[
                    styles.categoryText,
                    selectedCategory === category && styles.categoryTextActive,
                    { color: theme.text }
                  ]}
                >
                  {category}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </Animated.View>

        <Animated.View entering={FadeInDown.delay(300).duration(500)} style={styles.breakingNewsSection}>
          <TouchableOpacity style={styles.breakingNewsCard}>
            <Image source={{ uri: BREAKING_NEWS.image }} style={styles.breakingNewsImage} />
            <LinearGradient
              colors={['transparent', 'rgba(0,0,0,0.8)']}
              style={styles.breakingNewsGradient}
            >
              <View style={styles.breakingNewsTag}>
                <Text style={styles.breakingNewsTagText}>BREAKING</Text>
              </View>
              <Text style={styles.breakingNewsTitle}>{BREAKING_NEWS.title}</Text>
              <View style={styles.breakingNewsFooter}>
                <Text style={styles.breakingNewsCategory}>{BREAKING_NEWS.category}</Text>
                <Text style={styles.breakingNewsReadTime}>{BREAKING_NEWS.readTime}</Text>
              </View>
            </LinearGradient>
          </TouchableOpacity>
        </Animated.View>

        <View style={styles.sectionHeader}>
          <Animated.Text 
            entering={FadeInDown.delay(400).duration(500)} 
            style={[styles.sectionTitle, { color: theme.text }]}
          >
            Today&apos;s Picks
          </Animated.Text>
          <Animated.View entering={FadeInDown.delay(400).duration(500)}>
            <TouchableOpacity>
              <Text style={[styles.seeAllText, { color: theme.primary }]}>See All</Text>
            </TouchableOpacity>
          </Animated.View>
        </View>

        <Animated.View entering={FadeInDown.delay(500).duration(500)}>
          <ScrollView 
            horizontal 
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.featuredScrollContent}
          >
            {FEATURED_ARTICLES.map((article, index) => (
              <TouchableOpacity 
                key={article.id} 
                style={[styles.featuredCard, { backgroundColor: theme.card }]}
              >
                <Image source={{ uri: article.image }} style={styles.featuredImage} />
                <View style={styles.featuredContent}>
                  <View style={styles.featuredCategoryRow}>
                    <Text style={[styles.category, { color: theme.primary }]}>{article.category}</Text>
                    <TouchableOpacity style={styles.bookmarkButton}>
                      <IconSymbol name="bookmark" size={16} color={theme.primary} />
                    </TouchableOpacity>
                  </View>
                  <Text style={[styles.featuredTitle, { color: theme.text }]}>{article.title}</Text>
                  <View style={styles.authorRow}>
                    <Image source={{ uri: article.authorAvatar }} style={styles.authorAvatar} />
                    <View style={styles.authorInfo}>
                      <Text style={[styles.authorName, { color: theme.text }]}>{article.author}</Text>
                      <Text style={[styles.readTime, { color: theme.text }]}>{article.readTime}</Text>
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </Animated.View>

        <View style={styles.sectionHeader}>
          <Animated.Text 
            entering={FadeInDown.delay(600).duration(500)} 
            style={[styles.sectionTitle, { color: theme.text }]}
          >
            Trending Now
          </Animated.Text>
          <Animated.View entering={FadeInDown.delay(600).duration(500)}>
            <TouchableOpacity>
              <Text style={[styles.seeAllText, { color: theme.primary }]}>See All</Text>
            </TouchableOpacity>
          </Animated.View>
        </View>

        <View style={styles.trendingSection}>
          {TRENDING_NEWS.map((article, index) => (
            <Animated.View 
              key={article.id} 
              entering={FadeInRight.delay(700 + index * 100).duration(500)}
            >
              <TouchableOpacity style={[styles.trendingCard, { backgroundColor: theme.card }]}>
                <Image source={{ uri: article.image }} style={styles.trendingImage} />
                <View style={styles.trendingContent}>
                  <View style={styles.trendingCategoryRow}>
                    <Text style={[styles.trendingCategory, { color: theme.primary }]}>{article.category}</Text>
                    <TouchableOpacity>
                      <IconSymbol 
                        name={article.bookmarked ? "bookmark.fill" : "bookmark"} 
                        size={16} 
                        color={theme.primary} 
                      />
                    </TouchableOpacity>
                  </View>
                  <Text style={[styles.trendingTitle, { color: theme.text }]}>{article.title}</Text>
                  <Text style={[styles.trendingReadTime, { color: theme.text }]}>{article.readTime}</Text>
                </View>
              </TouchableOpacity>
            </Animated.View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 50,
  },
  greeting: {
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
  },
  name: {
    fontSize: 24,
    fontFamily: 'Poppins-Bold',
  },
  headerButtons: {
    flexDirection: 'row',
    gap: 10,
  },
  iconButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  notificationBadge: {
    position: 'absolute',
    top: 8,
    right: 8,
    width: 8,
    height: 8,
    borderRadius: 4,
  },
  categoryContainer: {
    marginTop: 20,
  },
  categoryScroll: {
    paddingHorizontal: 20,
  },
  categoryButton: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    marginRight: 8,
  },
  categoryButtonActive: {
    backgroundColor: '#007AFF',
  },
  categoryText: {
    fontSize: 14,
    fontFamily: 'Poppins-Medium',
  },
  categoryTextActive: {
    color: '#FFFFFF',
  },
  breakingNewsSection: {
    marginTop: 20,
    paddingHorizontal: 20,
  },
  breakingNewsCard: {
    height: 200,
    borderRadius: 16,
    overflow: 'hidden',
  },
  breakingNewsImage: {
    width: '100%',
    height: '100%',
  },
  breakingNewsGradient: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: '50%',
    padding: 16,
  },
  breakingNewsTag: {
    backgroundColor: '#FF3B30',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
    alignSelf: 'flex-start',
    marginBottom: 8,
  },
  breakingNewsTagText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontFamily: 'Poppins-Bold',
  },
  breakingNewsTitle: {
    color: '#FFFFFF',
    fontSize: 18,
    fontFamily: 'Poppins-Bold',
    marginBottom: 8,
  },
  breakingNewsFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  breakingNewsCategory: {
    color: '#FFFFFF',
    fontSize: 12,
    fontFamily: 'Poppins-Medium',
  },
  breakingNewsReadTime: {
    color: '#FFFFFF',
    fontSize: 12,
    fontFamily: 'Poppins-Regular',
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginTop: 24,
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 20,
    fontFamily: 'Poppins-Bold',
  },
  seeAllText: {
    fontSize: 14,
    fontFamily: 'Poppins-Medium',
  },
  featuredScrollContent: {
    paddingHorizontal: 20,
  },
  featuredCard: {
    width: width * 0.8,
    borderRadius: 16,
    marginRight: 16,
    overflow: 'hidden',
  },
  featuredImage: {
    width: '100%',
    height: 200,
  },
  featuredContent: {
    padding: 16,
  },
  featuredCategoryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  category: {
    fontSize: 12,
    fontFamily: 'Poppins-Medium',
  },
  bookmarkButton: {
    padding: 4,
  },
  featuredTitle: {
    fontSize: 16,
    fontFamily: 'Poppins-Bold',
    marginBottom: 12,
  },
  authorRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  authorAvatar: {
    width: 24,
    height: 24,
    borderRadius: 12,
    marginRight: 8,
  },
  authorInfo: {
    flex: 1,
  },
  authorName: {
    fontSize: 12,
    fontFamily: 'Poppins-Medium',
  },
  readTime: {
    fontSize: 12,
    fontFamily: 'Poppins-Regular',
  },
  trendingSection: {
    paddingHorizontal: 20,
  },
  trendingCard: {
    flexDirection: 'row',
    backgroundColor: '#F2F2F7',
    borderRadius: 16,
    marginBottom: 16,
    overflow: 'hidden',
  },
  trendingImage: {
    width: 100,
    height: 100,
  },
  trendingContent: {
    flex: 1,
    padding: 12,
  },
  trendingCategoryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  trendingTitle: {
    fontSize: 14,
    fontFamily: 'Poppins-Bold',
    marginBottom: 8,
  },
  trendingCategory: {
    fontSize: 12,
    fontFamily: 'Poppins-Medium',
    marginBottom: 4,
  },
  trendingReadTime: {
    fontSize: 12,
    fontFamily: 'Poppins-Regular',
  },
  cardDark: {
    backgroundColor: '#1e1e1e',
  },
  textLight: {
    color: '#FFFFFF',
  },
});
