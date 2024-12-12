from file_reader_util import get_puzzle

puzzle = [int(cell) for cell in get_puzzle('11')[0].split(' ')]

cached_stone_alterations = {0: [1]}


def alter_stone(stone: int):
    if len(str(stone)) % 2 == 0:
        string = str(stone)
        i = len(string) // 2
        return [int(string[:i]), int(string[i:])]
    return [stone * 2024]


def smrt_alter_stone(stone: int):
    if stone not in cached_stone_alterations.keys():
        cached_stone_alterations[stone] = alter_stone(stone)
    return cached_stone_alterations[stone]


def dict_count_if(dict: dict, key, increase_by: int) -> dict:
    if key in dict.keys():
        dict[key] += increase_by
    else:
        dict[key] = increase_by
    return dict


def part1():
    stones = list(puzzle)
    for _ in range(25):
        stones = [item for stone in stones for item in alter_stone(stone)]
    return len(stones)


def part2():
    stones = list(puzzle)
    stone_counts = {}
    for stone in stones:
        stone_counts = dict_count_if(stone_counts, stone, 1)
    for _ in range(75):
        new_counts = {}
        for stone, count in stone_counts.items():
            new_stones = [stone for stone in smrt_alter_stone(stone)]
            for new_stone in new_stones:
                new_counts = dict_count_if(new_counts, new_stone, count)
        stone_counts = new_counts
    return sum(stone_counts.values())


print(f'Part 1: {part1()}')
print(f'Part 2: {part2()}')
