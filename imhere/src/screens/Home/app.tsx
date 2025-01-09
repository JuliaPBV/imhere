import { Text, View, TextInput, TouchableOpacity, FlatList } from "react-native";

import { Participant } from "@/src/components/Participant";

import { styles } from "./styles";

export default function Home() {
  const participants = ['Julia', 'Anna', 'Luiza', 'Tati', 'Carlos', 'Anderson', 'João', 'Valter', 'Jana'];

  function handleParticipantAdd() {
    console.log("Você clicou no botão de Adicionar!");
  }

  function handleParticipantRemove(name: string) {
    console.log(`Você clicou em remover o participante ${name}`);
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
          onRemove={() => handleParticipantRemove("Anna")} 
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