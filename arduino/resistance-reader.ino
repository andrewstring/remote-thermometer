// the setup routine runs once when you press reset:
void setup() {
  // initialize serial communication at 9600 bits per second:
  Serial.begin(9600);
}

// the loop routine runs over and over again forever:
void loop() {
  
  double sensorZero = analogRead(A0);
  double voltageZero = (sensorZero * 5) / 1023;
  
  double sensorOne = analogRead(A1);
  double voltageOne = (sensorOne * 5) / 1023;

  double resistance = (100000 * voltageZero) / (voltageOne - voltageZero);
  
  // print out voltage
  //Serial.println(voltageZero);
  //Serial.println(voltageOne);
  Serial.println(resistance);
  
  delay(1000); // delay in between reads for stability
}
