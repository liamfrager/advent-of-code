from file_reader_util import get_puzzle
from itertools import product

puzzle = get_puzzle('7')


def part1():
    calibration_result = 0
    for equation in puzzle:
        answer, numbers = equation.split(': ')
        answer = int(answer)
        numbers = [int(num) for num in numbers.split(' ')]

        sequence = ['+', '*']
        n = len(numbers) - 1
        all_combinations = list(product(sequence, repeat=n))

        for operations in all_combinations:
            result = numbers[0]
            for i in range(1, len(numbers)):
                if operations[i - 1] == '+':
                    result += numbers[i]
                elif operations[i - 1] == '*':
                    result *= numbers[i]
            if result == answer:
                calibration_result += answer
                break
    return calibration_result


def part2():
    return


print(f'Part 1: {part1()}')
print(f'Part 2: {part2()}')
