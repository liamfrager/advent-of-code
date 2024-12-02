from file_reader_util import get_puzzle

puzzle = get_puzzle('1')
list1: list
list2: list
list1, list2 = list(zip(*[(item.split('   ')[0], item.split('   ')[1])
                          for item in puzzle]))


def part1():
    return


def part2():
    return


if len(list1) == len(list2):
    print(f'Part 1: {part1()}')
    print(f'Part 2: {part2()}')
