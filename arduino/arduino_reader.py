from time import sleep
import serial
ser = serial.Serial('/dev/ttyACM0')

while True:
    try:
        sleep(1)
        print(ser.readline())
    except: pass