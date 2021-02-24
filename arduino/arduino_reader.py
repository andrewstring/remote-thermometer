from time import sleep
import serial

class ArduinoReader():

    def __init__(self, port):
        self.ser = serial.Serial(port)

    def read(self):

        try:
            byte_reading = self.ser.readline()
            string_number = str(byte_reading).split("b'")[1].split('\\r')[0]
            return int(float(string_number))
            #return byte_reading
        
        except ConnectionError as err:
            print('Arduino connection error:', err)