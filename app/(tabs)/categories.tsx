import { IconSymbol, IconSymbolName } from '@/components/ui/IconSymbol';
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import {
  Dimensions,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const { width } = Dimensions.get('window');
const CARD_WIDTH = (width - 60) / 2;

const CATEGORIES = [
  {
    id: '1',
    name: 'Technology',
    icon: 'laptopcomputer.fill' as IconSymbolName,
    color: '#FF416C',
    image: 'https://picsum.photos/400/400',
  },
  {
    id: '2',
    name: 'Business',
    icon: 'chart.line.uptrend.xyaxis.circle.fill' as IconSymbolName,
    color: '#4B79A1',
    image: 'https://picsum.photos/400/401',
  },
  {
    id: '3',
    name: 'Sports',
    icon: 'sportscourt.fill' as IconSymbolName,
    color: '#2E8B57',
    image: 'https://picsum.photos/400/402',
  },
  {
    id: '4',
    name: 'Health',
    icon: 'heart.fill' as IconSymbolName,
    color: '#FF6B6B',
    image: 'https://picsum.photos/400/403',
  },
  {
    id: '5',
    name: 'Science',
    icon: 'atom.fill' as IconSymbolName,
    color: '#6A0572',
    image: 'https://picsum.photos/400/404',
  },
  {
    id: '6',
    name: 'Entertainment',
    icon: 'film.fill' as IconSymbolName,
    color: '#FF9A8B',
    image: 'https://picsum.photos/400/405',
  },
  {
    id: '7',
    name: 'Environment',
    icon: 'leaf.fill' as IconSymbolName,
    color: '#2E8B57',
    image: 'https://picsum.photos/400/406',
  },
  {
    id: '8',
    name: 'Politics',
    icon: 'building.columns.fill' as IconSymbolName,
    color: '#4B79A1',
    image: 'https://picsum.photos/400/407',
  },
  {
    id: '9',
    name: 'Education',
    icon: 'book.fill' as IconSymbolName,
    color: '#6A0572',
    image: 'https://picsum.photos/400/408',
  },
  {
    id: '10',
    name: 'Food',
    icon: 'fork.knife' as IconSymbolName,
    color: '#FF9A8B',
    image: 'https://picsum.photos/400/409',
  },
  {
    id: '11',
    name: 'Travel',
    icon: 'airplane' as IconSymbolName,
    color: '#4B79A1',
    image: 'https://picsum.photos/400/410',
  },
  {
    id: '12',
    name: 'Fashion',
    icon: 'tshirt.fill' as IconSymbolName,
    color: '#FF416C',
    image: 'https://picsum.photos/400/411',
  },
  {
    id: '13',
    name: 'Art',
    icon: 'paintpalette.fill' as IconSymbolName,
    color: '#6A0572',
    image: 'https://picsum.photos/400/412',
  },
  {
    id: '14',
    name: 'Music',
    icon: 'music.note' as IconSymbolName,
    color: '#FF9A8B',
    image: 'https://picsum.photos/400/413',
  },
  {
    id: '15',
    name: 'Gaming',
    icon: 'gamecontroller.fill' as IconSymbolName,
    color: '#2E8B57',
    image: 'https://picsum.photos/400/414',
  }
];

export default function CategoriesScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Categories</Text>
        <TouchableOpacity style={styles.searchButton}>
          <IconSymbol name="magnifyingglass" size={24} color="#333" />
        </TouchableOpacity>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.grid}>
          {CATEGORIES.map((category) => (
            <TouchableOpacity key={category.id} style={styles.card}>
              <Image source={{ uri: category.image }} style={styles.cardImage} />
              <LinearGradient
                colors={['transparent', 'rgba(0,0,0,0.8)']}
                style={styles.cardGradient}
              >
                <View style={styles.iconContainer}>
                  <IconSymbol name={category.icon} size={24} color="#fff" />
                </View>
                <Text style={styles.cardTitle}>{category.name}</Text>
              </LinearGradient>
            </TouchableOpacity>
          ))}
        </View>
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
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 15,
    justifyContent: 'space-between',
  },
  card: {
    width: CARD_WIDTH,
    height: CARD_WIDTH,
    marginBottom: 20,
    borderRadius: 20,
    overflow: 'hidden',
  },
  cardImage: {
    width: '100%',
    height: '100%',
  },
  cardGradient: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: '50%',
    padding: 15,
    justifyContent: 'flex-end',
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(255,255,255,0.2)',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  cardTitle: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 16,
    color: '#fff',
  },
}); 