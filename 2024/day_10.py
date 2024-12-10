from file_reader_util import get_puzzle

puzzle = [[int(cell) for cell in row] for row in get_puzzle('10')]


def search_unique_trailends(i, j, val) -> list[tuple]:
    accessable_trailends = set()
    vectors = [(-1, 0), (0, 1), (1, 0), (0, -1)]
    for vector in vectors:
        x, y = vector
        nx, ny = i + x, j + y
        if is_on_map(nx, ny) and puzzle[nx][ny] == val + 1:
            if val == 8:
                accessable_trailends.add((nx, ny))
            else:
                accessable_trailends |= search_unique_trailends(
                    nx, ny, val + 1)
    return accessable_trailends


def is_on_map(row, col):
    return all([
        row >= 0,
        row < len(puzzle),
        col >= 0,
        col < len(puzzle[0])
    ])


def part1():
    trail_score = 0
    for i in range(len(puzzle)):
        for j in range(len(puzzle[i])):
            if puzzle[i][j] == 0:
                accessable_trailends = search_unique_trailends(i, j, 0)
                trail_score += len(accessable_trailends)
    return trail_score


def part2():
    return


print(f'Part 1: {part1()}')
print(f'Part 2: {part2()}')
