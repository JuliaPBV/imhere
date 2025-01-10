import React from "react";

import { Text, View, TextInput, TouchableOpacity, FlatList, Alert } from "react-native";

import { Participant } from "@/src/components/Participant";

import { styles } from "./styles";
import { useState } from "react";

export default function Home() {
  const [participants, setParticipants] = useState(["Vitória"]);

  function handleParticipantAdd() {
    if(participants.includes("Julia")){
      return Alert.alert("Participante existe", "Já existe um participante na lista com esse nome!")
    }
    setParticipants(prevState => [...prevState, "Bella"]);
  }

  function handleParticipantRemove(name: string) {
    Alert.alert("Remover", `Remover o participante ${name}?`, [
      {
        text: "Sim",
        onPress: () => Alert.alert("Deletado!")
      },
      {
        text: "Não",
        style: "cancel"
      }
    ])
  }

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>
        Nome do evento
        </Text>

        <Text style={styles.eventDate}>
          Terça, 8 de Janeiro de 2025.
        </Text>

      <View style={styles.form}>
        <TextInput 
        style={styles.input} 
        placeholder="Nome do participante"
        placeholderTextColor="#6B6B6B"
        />

        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
          <Text style={styles.buttonText}>
            +
          </Text>
        </TouchableOpacity>
      </View>

      <FlatList 
      data={participants}
      keyExtractor={item => item}
      renderItem={({ item }) => (
        <Participant 
          key={item}
          name={item} 
          onRemove={() => handleParticipantRemove(item)} 
          />
      )}
      showsVerticalScrollIndicator={false}
      ListEmptyComponent={() => (
        <Text style={styles.ListEmpytText}>
          Ninguém chegou no evento ainda? Adicione participantes a sua lista de presença.
        </Text>
      )}
      />

      </View>
  )
}