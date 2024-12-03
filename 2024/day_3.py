from file_reader_util import get_puzzle

puzzle = get_puzzle('3')


def count_muls(input: str):
    sum = 0
    lines = input.split('mul(')
    for func in lines:
        if ')' in func:
            end = func.index(')')
            if ' ' not in func[:end]:
                nums = func[:end].split(',')
                if len(nums) == 2 and all([num.isnumeric() for num in nums]):
                    sum += int(nums[0]) * int(nums[1])
    return sum


def part1():
    return count_muls(''.join(puzzle))


def part2():
    sum = 0
    lines = ''.join(puzzle).split("don't()")
    sum += count_muls(lines[0])
    for funcs in lines[1:]:
        if "do()" in funcs:
            do_funcs = funcs[funcs.index("do()"):]
            sum += count_muls(do_funcs)
    return sum


print(f'Part 1: {part1()}')
print(f'Part 2: {part2()}')
