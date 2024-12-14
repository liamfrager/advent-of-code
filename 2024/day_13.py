from file_reader_util import get_puzzle

puzzle = get_puzzle('13')
notes = []
for i in range(0, len(puzzle), 4):
    row1: str = puzzle[i]
    row1 = row1.split(',')
    row2: str = puzzle[i+1]
    row2 = row2.split(',')
    row3: str = puzzle[i+2]
    row3 = row3.split(',')
    notes.append({
        "a": (int(row1[0].split('+')[1]), int(row1[1].split('+')[1])),
        "b": (int(row2[0].split('+')[1]), int(row2[1].split('+')[1])),
        "prize": (int(row3[0].split('=')[1]), int(row3[1].split('=')[1]))
    })


def part1():
    print(notes)
    return


def part2():
    return


print(f'Part 1: {part1()}')
print(f'Part 2: {part2()}')
