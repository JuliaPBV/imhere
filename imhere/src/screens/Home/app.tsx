import { Text, View, TextInput, TouchableOpacity } from "react-native";

import { Participant } from "@/src/components/Participant";

import { styles } from "./styles";

export default function Home() {

  function handleParticipantAdd() {
    console.log("Você clicou no botão de Adicionar!");
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

      <Participant />
      <Participant />
      <Participant />
      </View>
  )
}