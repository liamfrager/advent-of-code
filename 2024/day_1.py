from file_reader_util import get_puzzle

puzzle = get_puzzle('1')
list1: list
list2: list
list1, list2 = list(zip(*[(item.split('   ')[0], item.split('   ')[1])
                          for item in puzzle]))


def part1():
    sorted1 = sorted(list1)
    sorted2 = sorted(list2)
    diff_sum = 0
    for i in range(len(sorted1)):
        item1 = int(sorted1[i])
        item2 = int(sorted2[i])
        diff = abs(item1 - item2)
        diff_sum += diff

    return diff_sum


def part2():
    sim_score = 0
    for num in list1:
        sim_score += int(num) * list2.count(num)
    return sim_score


if len(list1) == len(list2):
    print(f'Part 1: {part1()}')
    print(f'Part 2: {part2()}')
