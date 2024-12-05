from file_reader_util import get_puzzle

rules = [[int(num) for num in rule.split('|')] for rule in get_puzzle('5A')]
updates = [[int(num) for num in update.split(',')]
           for update in get_puzzle('5B')]


def part1():
    return


def part2():
    return


print(f'Part 1: {part1()}')
print(f'Part 2: {part2()}')
