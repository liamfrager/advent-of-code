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


def get_checksum(id_blocks: list[int]):
    checksum = 0
    for i in range(len(id_blocks)):
        if id_blocks[i] != '.':
            checksum += i * id_blocks[i]
    return checksum


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

    return get_checksum(id_blocks)


def part2():
    id_blocks = get_id_blocks()

    compressed_file_ids = set()

    i = 0
    while i < len(id_blocks):
        ith_item = id_blocks[-i - 1]
        if ith_item not in ['.', 0] and ith_item not in compressed_file_ids:
            compressed_file_ids.add(ith_item)
            file_start_index = id_blocks.index(ith_item)
            file_end_index = len(id_blocks) - i
            last_file = id_blocks[file_start_index:file_end_index]
            j = id_blocks.index('.')
            while j < file_start_index:
                length = 1
                while id_blocks[j] == '.' and length < len(last_file):
                    j += 1
                    length += 1

                if id_blocks[j] == '.' and length >= len(last_file):
                    gap_start_index = j - (length - 1)
                    gap_end_index = gap_start_index + length
                    gap = id_blocks[gap_start_index:gap_end_index]
                    old_length = len(id_blocks)
                    id_blocks = id_blocks[:gap_start_index] + \
                        last_file + \
                        id_blocks[gap_end_index:file_start_index] + \
                        gap + \
                        id_blocks[file_end_index:]
                    if len(id_blocks) == old_length:
                        break
                    else:
                        print('Something went wrong!')
                        print('!!!!!')
                else:
                    while j < len(id_blocks) and id_blocks[j] != '.':
                        j += 1
                    if j >= len(id_blocks):
                        break
        i += 1

    return get_checksum(id_blocks)


print(f'Part 1: {part1()}')
print(f'Part 2: {part2()}')
