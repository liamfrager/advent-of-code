def get_puzzle(file_name: str):
    with open(f'2024/puzzle-inputs/{file_name}.txt', 'r') as file:
        lines = file.readlines()
    return [line.strip() for line in lines]
