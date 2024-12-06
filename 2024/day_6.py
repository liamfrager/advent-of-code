from file_reader_util import get_puzzle
import itertools

puzzle = get_puzzle('6')
directions = itertools.cycle([(-1, 0), (0, 1), (1, 0), (0, -1)])


def get_start_position():
    for r in range(len(puzzle)):
        for c in range(len(puzzle[r])):
            if puzzle[r][c] == '^':
                return r, c


def is_in_area(row, col):
    return all([
        row >= 0,
        row < len(puzzle),
        col >= 0,
        col < len(puzzle[0])
    ])


def move(row, col, vector):
    x, y = vector
    new_row = row + x
    new_col = col + y
    if puzzle[new_row][new_col] != '#':
        return new_row, new_col, vector
    new_vector = next(directions)
    return row, col, new_vector


def part1():
    vector = (-1, 0)
    map = puzzle
    row, col = get_start_position()
    while is_in_area(row, col):
        map[row] = map[row][:col] + 'X' + map[row][col + 1:]
        row, col, vector = move(row, col, vector)
    return sum([sum([1 for col in row if col == 'X']) for row in map])


def part2():
    return


print(f'Part 1: {part1()}')
print(f'Part 2: {part2()}')
