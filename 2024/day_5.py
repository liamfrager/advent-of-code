from file_reader_util import get_puzzle

rules = [[int(num) for num in rule.split('|')] for rule in get_puzzle('5A')]
updates = [[int(num) for num in update.split(',')]
           for update in get_puzzle('5B')]


def is_valid_update(update: list[int]) -> bool:
    for rule in rules:
        x, y = rule
        if x in update and y in update:
            if update.index(x) > update.index(y):
                return False
    return True


def part1():
    sum = 0
    for update in updates:
        if is_valid_update(update):
            middle = (len(update) - 1) // 2
            sum += update[middle]
    return sum


def part2():
    return


print(f'Part 1: {part1()}')
print(f'Part 2: {part2()}')
