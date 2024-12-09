from file_reader_util import get_puzzle

puzzle = get_puzzle('9')[0]


def get_id_blocks():
    id_blocks = []
    is_file = True
    for i in range(len(puzzle)):
        char = puzzle[i]
        for j in range(int(char)):
            id_blocks.append(i // 2 if is_file else '.')
        is_file = not is_file
    return id_blocks


def part1():
    id_blocks = get_id_blocks()

    i = 0
    while i < len(id_blocks) - 1:
        if id_blocks[i] == '.':
            last_data = id_blocks.pop()
            while last_data == '.':
                if i < len(id_blocks):
                    last_data = id_blocks.pop()
                    continue
                break
            if i < len(id_blocks):
                id_blocks[i] = last_data
        i += 1

    checksum = 0
    for i in range(len(id_blocks)):
        checksum += i * id_blocks[i]
    return checksum


def part2():
    return


print(f'Part 1: {part1()}')
print(f'Part 2: {part2()}')
