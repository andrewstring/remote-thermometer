import time

from arduino.arduino_reader import ArduinoReader
from arduino.convert import Converter

port = input('Enter arduino port: ')
print('\n')
arduino_connection =  ArduinoReader('/dev/ttyACM0')

convert = Converter('arduino/calibration.txt')

while True:
    resistance_reading = arduino_connection.read()
    print(resistance_reading)
    print('Temp:', convert.get_temp(resistance_reading))
    print('\n')
    time.sleep(1)