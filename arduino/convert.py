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
            print('out of calibration range')
            return None

        # if resistance already in calibration file
        elif input_resistance in self.data_dict.keys():
            return input_resistance

        sorted_keys = sorted(self.data_dict.keys())
        for index in range(len(sorted_keys)):
            if input_resistance < sorted_keys[index]:
                break
        return (sorted_keys[index], sorted_keys[index - 1])

    def get_temp(self, input_resistance):
        bounded_by = self.between(input_resistance)
        if bounded_by is None:
            return
        elif isinstance(bounded_by, int):
            return self.data_dict[bounded_by]
        resistance_one = bounded_by[0]
        resistance_two = bounded_by[1]
        temp_one = self.data_dict[resistance_one]
        temp_two = self.data_dict[resistance_two]
        return ((input_resistance - resistance_one) / (resistance_two - resistance_one) * (temp_two - temp_one)) + temp_one


if __name__ == '__main__':

    converter = Converter('calibration.txt')
    print(converter.get_temp(170000.1))