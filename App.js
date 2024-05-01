import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity} from 'react-native';
import {useState} from 'react'

export default function App() {
  const [numero1, setNumero1] = useState(0);
  const [numero2, setNumero2] = useState(0);
  const [resultado, setResultado] = useState(0);

  const sumar = () => {
    let suma = parseFloat(numero1) + parseFloat(numero2);
    setResultado(suma);
  }

  const restar = () => {
    let resta = parseFloat(numero1) - parseFloat(numero2);
    setResultado(resta);
  }

  const multiplicar = () => {
    let multiplicacion = parseFloat(numero1) * parseFloat(numero2);
    setResultado(multiplicacion);
  }

  const dividir = () => {
    if (parseFloat(numero2) === 0) {
      alert("No se puede dividir por cero.");
      return;
    }
    let division = parseFloat(numero1) / parseFloat(numero2);
    setResultado(division);
  }

  const clean = () => {
    setNumero1(0);
    setNumero2(0);
    setResultado(0);
  }

  return (
    <View style={styles.container}>
      <Text>Operaciones con números</Text>
      <Text>Número 1:</Text>
      <TextInput
        style={styles.input}
        placeholder='Número 1'
        value={numero1.toString()}
        onChangeText={text => setNumero1(text)}
        keyboardType='numeric'
      />
      <Text>Número 2:</Text>
      <TextInput
        style={styles.input}
        placeholder='Número 2'
        value={numero2.toString()}
        onChangeText={text => setNumero2(text)}
        keyboardType='numeric'
      />

      <TouchableOpacity
        style={styles.botonAgregar}
        onPress={sumar}
      >
        <Text style={styles.textoBoton}>Sumar</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.botonAgregar}
        onPress={restar}
      >
        <Text style={styles.textoBoton}>Restar</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.botonAgregar}
        onPress={multiplicar}
      >
        <Text style={styles.textoBoton}>Multiplicar</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.botonAgregar}
        onPress={dividir}
      >
        <Text style={styles.textoBoton}>Dividir</Text>
      </TouchableOpacity>

      <Text style={{color:'red', fontSize:30, marginTop: 20}}>Resultado: {resultado}</Text>

      <TouchableOpacity
        style={styles.botonEliminar}
        onPress={clean}
      >
        <Text style={styles.textoEliminar}>Limpiar</Text>
      </TouchableOpacity>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  botonAgregar: {
    backgroundColor: '#777799',
    padding: 15,
    borderRadius: 10,
    margin: 5,
  },
  textoBoton: {
    color: "white",
    fontWeight: 'bold',
  },
  input: {
    fontSize: 16,
    color: "black",
  }, 
  botonEliminar: {
    backgroundColor: 'teal',
    padding: 5,
    borderRadius: 5,
  },
  textoEliminar: {
    color: "white",
    fontWeight: 'bold',
  },
});
