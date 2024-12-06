from file_reader_util import get_puzzle

puzzle = get_puzzle('6')
loop_check_counter = 0


def inc_loop():
    global loop_check_counter
    loop_check_counter += 1


def turn_right(vector):
    vectors = [(-1, 0), (0, 1), (1, 0), (0, -1)]
    return vectors[(vectors.index(vector) + 1) % 4]


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


def can_move(row, col, vector, obstacle=None):
    x, y = vector
    new_row, new_col = row + x, col + y
    if is_in_area(new_row, new_col) and puzzle[new_row][new_col] != '#' and (new_row, new_col) != obstacle:
        return True
    return False


def move(row, col, vector):
    x, y = vector
    new_row, new_col = row + x, col + y
    if puzzle[new_row][new_col] != '#':
        return new_row, new_col, vector
    new_vector = turn_right(vector)
    return row, col, new_vector


def results_in_loop(r, c, v, o) -> bool:
    been_here = set()
    map = list(puzzle)
    while True:
        x, y = v
        nr, nc = r + x, c + y
        if can_move(r, c, v, o):
            r, c = nr, nc
            # map[r] = map[r][:c] + 'X' + map[r][c + 1:]
        elif not is_in_area(nr, nc):
            return False
        elif (r, c, v) in been_here:
            return True
        else:
            been_here.add((r, c, v))
            v = turn_right(v)
            # for i in map:
            #     print(i)


def part1():
    vector = (-1, 0)
    map = list(puzzle)
    row, col = get_start_position()
    while is_in_area(row, col):
        map[row] = map[row][:col] + 'X' + map[row][col + 1:]
        row, col, vector = move(row, col, vector)
    return sum([sum([1 for col in row if col == 'X']) for row in map])


def part2():
    infinite_loops = set()
    start_vector = (-1, 0)
    start_row, start_col = get_start_position()
    vector = tuple(start_vector)
    row, col = int(start_row), int(start_col)
    counter = 0
    while is_in_area(row, col):
        print(f'{counter}: {row},{col} + {vector}')
        x, y = vector
        new_row, new_col = row + x, col + y
        if can_move(row, col, vector):  # if can place obstacle in front
            obstacle = (new_row, new_col)
            if results_in_loop(start_row, start_col, start_vector, obstacle):
                infinite_loops.add((new_row, new_col))
                print(f'found loop: {len(infinite_loops)}')
            row, col = new_row, new_col
        elif is_in_area(new_row, new_col):  # if hit obstacle
            vector = turn_right(vector)
        else:  # if gone of the edge
            return len(infinite_loops)
        counter += 1


print(f'Part 1: {part1()}')
print(f'Part 2: {part2()}')
print(f'global loop counter: {loop_check_counter}')
