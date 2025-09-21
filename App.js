import React from 'react';
import { Text, View, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>🚀 Selamat Datang di CHUENLAY</Text>
      <Image source={require('./assets/icon.png')} style={{width:120, height:120, margin:20}} />
      <Text style={styles.subtitle}>Belajar Futuristik dengan Hologram & Komik Interaktif</Text>
      
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Mulai Belajar</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Bank Soal</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Komik Edukasi</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Galeri Hologram</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#0D0D2B',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#00FFFF',
    marginVertical: 10,
    textAlign: 'center'
  },
  subtitle: {
    fontSize: 16,
    color: '#FFFFFF',
    marginBottom: 20,
    textAlign: 'center'
  },
  button: {
    backgroundColor: '#1E90FF',
    padding: 15,
    borderRadius: 10,
    marginVertical: 8,
    width: '80%',
    alignItems: 'center'
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600'
  }
});
