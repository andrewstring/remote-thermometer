import time
import threading
from reader import Reader

class Sender:

    def __init__(self):
        self.prev_length = 0

    def send_new_val(self, reader):
        if isinstance(reader, Reader):
            while True:
                if self.prev_length != len(reader.val_array):
                    print('new val: ' + str(reader.val_array[len(reader.val_array) - 1]))
                    self.prev_length = len(reader.val_array)
                time.sleep(3)
                
        else: raise TypeError('Reader object must be passed')

    def start_sender(self, reader):
        thread_send_new_val = threading.Thread(target=self.send_new_val, args=(reader,))
        thread_send_new_val.start()
