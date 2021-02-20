from reader import Reader
from sender import Sender

reader = Reader()
sender = Sender()

reader.start_reader('log.txt')
sender.start_sender(reader)
