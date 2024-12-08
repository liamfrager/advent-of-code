from file_reader_util import get_puzzle

puzzle = get_puzzle('8')


def get_all_antennae() -> dict[str, list[tuple[int]]]:
    antennae: dict[str, list[tuple[int]]] = {}

    for i in range(len(puzzle)):
        for j in range(len(puzzle[0])):
            char = puzzle[i][j]
            if char != '.':
                if char in antennae.keys():
                    antennae[char].append((i, j))
                else:
                    antennae[char] = [(i, j)]
    return antennae


def is_in_area(coords: tuple[int]) -> bool:
    row, col = coords
    return all([
        row >= 0,
        row < len(puzzle),
        col >= 0,
        col < len(puzzle[0])
    ])


def get_antinode(node1, node2) -> tuple[int]:
    y1, x1 = node1
    y2, x2 = node2

    y = y2 + (y2 - y1)
    x = x2 + (x2 - x1)

    return (y, x)


def part1():
    antennae: dict[str, list[tuple[int]]] = get_all_antennae()
    antinodes = set()

    for key in antennae.keys():
        coords = antennae[key]
        for i in range(len(coords)):
            for j in range(len(coords)):
                if i != j:
                    antinode = get_antinode(coords[i], coords[j])
                    if is_in_area(antinode):
                        antinodes.add(antinode)

    return len(antinodes)


def part2():
    antennae: dict[str, list[tuple[int]]] = get_all_antennae()
    antinodes = set()

    for key in antennae.keys():
        coords = antennae[key]
        for i in range(len(coords)):
            if len(coords) > 1:
                antinodes.add(coords[i])
            for j in range(len(coords)):
                if i != j:
                    antinode = get_antinode(coords[i], coords[j])
                    prev_node = coords[j]
                    while is_in_area(antinode):
                        antinodes.add(antinode)
                        new_node = get_antinode(prev_node, antinode)
                        prev_node = antinode
                        antinode = new_node

    return len(antinodes)


print(f'Part 1: {part1()}')
print(f'Part 2: {part2()}')
