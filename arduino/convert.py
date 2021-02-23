import collections

class Converter():

    def __init__(self, file_name):
        self.file_name = file_name
        self.data_dict = self.get_calibration(self.file_name)

    def get_calibration(self, file_name):
        calibration_dict = {}
        
        # open calibration file for reading
        with open(self.file_name, 'r') as reader:
            for line in reader.readlines():
                if line == '\n':
                    continue
                temp, resistance = line.split(' ')
                data = [int(temp), int(resistance)]
                calibration_dict[data[1]] = data[0]

        return calibration_dict

    def between(self, input_resistance):

        # if resistance is out of range
        if input_resistance < min(self.data_dict.keys()) or input_resistance > max(self.data_dict.keys()):
            return None

        # if resistance already in calibration file
        elif input_resistance in self.data_dict.keys():
            return self.data_dict[input_resistance]

        sorted_keys = sorted(self.data_dict.keys())
        print(sorted_keys)
        for index in range(len(sorted_keys)):
            if input_resistance < sorted_keys[index]:
                break
        return [self.data_dict[sorted_keys[index]], self.data_dict[sorted_keys[index - 1]]]

    def get_temp(self, input_resistance):
        keys = self.between(input_resistance)
        print(self.data_dict)
        print(keys)
        return ((input - self.data_dict[keys[0]]) / (self.data_dict[keys[1]] - self.data_dict[keys[0]]) \
            * (keys[1] - keys[0])) + keys[0]

converter = Converter('calibration.txt')
print(converter.get_temp(120000))