import {
    FlatList,
    Image,
    Text,
    TouchableOpacity,
    View,
    StyleSheet,
    Modal,
    Pressable,
  } from "react-native";
import React, {useState} from "react";
  // Dummmy Data (Array of Object)
  const datas = [
    {
      id: 1,
      title:
        "Dorong Pengembangan UMKM, IT Telkom Surabaya Gandeng UD Rozi dalam Pembuatan Website",
      image:
        "https://ittelkom-sby.ac.id/wp-content/uploads/2022/10/Salinan-IMG_0823-768x512.jpg",
    },
    {
      id: 2,
      title: "Mahasiswa ITTelkom Surabaya Menang Kompetisi di New Delhi",
      image:
        "https://ittelkom-sby.ac.id/wp-content/uploads/2022/10/asdfghjk-768x492.jpg",
    },
    {
      id: 3,
      title:
        "Benarkah Generasi Baru Generasi Strawberi? Ayo Belajar Growth Mindset dari Kampus ITTelkom Surabaya",
      image:
        "https://ittelkom-sby.ac.id/wp-content/uploads/2022/10/asdfghkl-768x472.jpg",
    },
    {
      id: 4,
      title: "4 Industri Tahan Resesi! Pastikan Kemampuanmu Termasuk Di Dalamnya",
      image:
        "https://ittelkom-sby.ac.id/wp-content/uploads/2022/10/mbacay-768x512.jpg",
    },
    {
      id: 5,
      title:
        "Selamat Datang Mahasiswa Baru, PKKMB ITTelkom Surabaya Berlangsung Secara Luring",
      image:
        "https://ittelkom-sby.ac.id/wp-content/uploads/2022/09/DSC_1931-768x512.jpg",
    },
    {
      id: 6,
      title:
        "Dorong Pengembangan UMKM, IT Telkom Surabaya Gandeng UD Rozi dalam Pembuatan Website",
      image:
        "https://ittelkom-sby.ac.id/wp-content/uploads/2022/10/Salinan-IMG_0823-768x512.jpg",
    },
    {
      id: 7,
      title: "Mahasiswa ITTelkom Surabaya Menang Kompetisi di New Delhi",
      image:
        "https://ittelkom-sby.ac.id/wp-content/uploads/2022/10/asdfghjk-768x492.jpg",
    },
    {
      id: 8,
      title:
        "Benarkah Generasi Baru Generasi Strawberi? Ayo Belajar Growth Mindset dari Kampus ITTelkom Surabaya",
      image:
        "https://ittelkom-sby.ac.id/wp-content/uploads/2022/10/asdfghkl-768x472.jpg",
    },
    {
      id: 9,
      title: "4 Industri Tahan Resesi! Pastikan Kemampuanmu Termasuk Di Dalamnya",
      image:
        "https://ittelkom-sby.ac.id/wp-content/uploads/2022/10/mbacay-768x512.jpg",
    },
    {
      id: 10,
      title:
        "Selamat Datang Mahasiswa Baru, PKKMB ITTelkom Surabaya Berlangsung Secara Luring",
      image:
        "https://ittelkom-sby.ac.id/wp-content/uploads/2022/09/DSC_1931-768x512.jpg",
    },
  ];
  
  // Functional Component
  const List = () => {
    const [itemSelect, setItemSelect] = useState(0);
    const [modalVisible, setModalVisible] = useState(false);

    // Arrow Function with destructured argument
    const renderItem = ({ item }) => {
      return (
        <TouchableOpacity style={styles.view} onPress={() => {setItemSelect(item); setModalVisible(true);}}>
          <View>
            <Modal 
            animationType="fade"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {setModalVisible(!modalVisible);}}>
            <View style={styles.modalView}>
            <Text>{itemSelect ? itemSelect.title : 'error'}</Text>
              <View style={{alignItems: 'center'}}>
                <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={()=> setModalVisible(!modalVisible)}>
                <Text style={{padding: 5, color:'white'}}>Close</Text>

                </Pressable>
              </View>
            </View>
            </Modal>
            <Image source={{ uri: item.image }} style={styles.image} />
            <Text style={styles.text}>{item.title}</Text>
          </View>
        </TouchableOpacity>
      );
    };
  
    return (
      <FlatList
        data={datas}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    );
  };
  
  // Styles
  const styles = StyleSheet.create({
    view: {
      padding: 15,
      borderBottomColor: "#dddddd",
      borderBottomWidth: 1,
    },
    image: {
      height: 200,
      width: null,
    },
    text: {
      fontSize: 18,
      paddingTop: 10,
    },
    modalView:{
      margin: 20,
      backgroundColor: 'white',
      borderRadius: 20,
      justifyContent:'center',
      padding: 35,
      marginTop: 300,
      alignItems:'center',
    },
    button:{
      borderRadius:20,
      padding:10,
    },
    buttonClose:{
      backgroundColor: '#AA0002',
      borderRadius:20,
      marginTop:10,
      color: 'white',
    }
  });
  
  export default List;
  