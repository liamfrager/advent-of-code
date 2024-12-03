from file_reader_util import get_puzzle

puzzle = get_puzzle('3')


def part1():
    sum = 0
    for line in puzzle:
        lines = line.split('mul(')
        for func in lines:
            if ')' in func:
                end = func.index(')')
                if ' ' not in func[:end]:
                    nums = func[:end].split(',')
                    if len(nums) == 2:
                        try:
                            num1 = int(nums[0])
                            num2 = int(nums[1])
                            sum += num1 * num2
                        except Exception as e:
                            continue
    return sum


def part2():
    return


print(f'Part 1: {part1()}')
print(f'Part 2: {part2()}')
