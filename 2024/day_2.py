from file_reader_util import get_puzzle

puzzle = get_puzzle('2')


def is_safe_report(report: list) -> bool:
    direction = 1 if report[len(report) - 1] > report[0] else -1
    for i in range(0, len(report) - 1):
        level = report[i]
        next = report[i + 1]
        if not 1 <= (next - level) * direction <= 3:
            return False
    return True


def part1():
    unsafe_reports = 0
    for report in puzzle:
        report = [int(num) for num in report.split(' ')]
        direction = 1 if report[len(report) - 1] > report[0] else -1
        for i in range(0, len(report) - 1):
            level = report[i]
            next = report[i + 1]
            if not 1 <= (next - level) * direction <= 3:
                unsafe_reports += 1
                break
    safe_reports = len(puzzle) - unsafe_reports
    return safe_reports


def part2():
    safe_reports = 0
    for report in puzzle:
        report = [int(num) for num in report.split(' ')]
        if not is_safe_report(report):
            for j in range(len(report)):
                fix_report = report[:]
                fix_report.pop(j)
                if is_safe_report(fix_report):
                    safe_reports += 1
                    break
        else:
            safe_reports += 1
    return safe_reports


print(f'Part 1: {part1()}')
print(f'Part 2: {part2()}')
