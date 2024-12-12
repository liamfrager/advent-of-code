from file_reader_util import get_puzzle

puzzle = [int(cell) for cell in get_puzzle('11')[0].split(' ')]


def alter_stone(stone: int):
    if stone == 0:
        return [1]
    if len(str(stone)) % 2 == 0:
        string = str(stone)
        i = len(string) // 2
        return [int(string[:i]), int(string[i:])]
    return [stone * 2024]


def part1():
    stones = list(puzzle)
    for _ in range(25):
        stones = [item for stone in stones for item in alter_stone(stone)]
    return len(stones)


def part2():
    return


print(f'Part 1: {part1()}')
print(f'Part 2: {part2()}')
