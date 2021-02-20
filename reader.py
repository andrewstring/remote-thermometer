import time
import threading

class Reader:

    def __init__(self):
        self.val_array = []

    def get_last_line(self, file_name) -> int:
        while True:
            with open(file_name) as reader:
                i = 0
                for num in reader:
                    pass
                num = int(num.replace('\n', ''))
                if len(self.val_array) == 0 or num != self.val_array[len(self.val_array)-1]:
                    self.val_array.append(num)
                #print(self.val_array)
            time.sleep(3)

    def start_reader(self, file_name):
        thread_get_last_line = threading.Thread(target=self.get_last_line, args=(file_name,))
        thread_get_last_line.start()



if __name__ == '__main__':
    reader = Reader()
    reader.start_reader('test.txt')
    print(isinstance(reader, Reader))
