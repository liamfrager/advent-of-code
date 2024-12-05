from file_reader_util import get_puzzle

puzzle = get_puzzle('4')


def xmas_count(i: int, j: int):
    if puzzle[i][j] == 'X':
        xmases = 0
        vectors = [(x, y) for x in (-1, 0, 1)
                   for y in (-1, 0, 1) if (x, y) != (0, 0)]
        vector_length = len('XMAS')
        for vector in vectors:
            if 0 <= i + (vector[0] * (vector_length - 1)) < len(puzzle) and 0 <= j + (vector[1] * (vector_length - 1)) < len(puzzle[0]):
                for k in range(1, vector_length):
                    if puzzle[i + (vector[0] * k)][j + (vector[1] * k)] != 'XMAS'[k]:
                        break
                    if k == vector_length - 1:
                        xmases += 1
        return xmases
    return 0


def is_x_mas(i: int, j: int):
    if puzzle[i][j] == 'A':
        vectors = [(x, y) for x in (-1, 1) for y in (-1, 1)]
        ul, ur, dl, dr = [puzzle[i + vector[0]][j + vector[1]]
                          for vector in vectors]
        if all([cell in 'MS' for cell in [ul, ur, dl, dr]]) and dl != ur and dr != ul:
            return True
    return False


def part1():
    xmases = 0
    for i in range(len(puzzle)):
        for j in range(len(puzzle[i])):
            xmases += xmas_count(i, j)
    return xmases


def part2():
    xmases = 0
    for i in range(1, len(puzzle) - 1):
        for j in range(1, len(puzzle[i]) - 1):
            if is_x_mas(i, j):
                xmases += 1
    return xmases


print(f'Part 1: {part1()}')
print(f'Part 2: {part2()}')
