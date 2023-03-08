const colors = ['#primary', 'secondary', 'error', 'warning', 'info', 'success'];

export function colorGenerator() {
    let index = Math.floor(Math.random() * colors.length);

    return colors[index];
}
