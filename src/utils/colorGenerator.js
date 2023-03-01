const colors = ['#FF6961', '#6D9384', '#889ECE', '#FFB447'];

export function colorGenerator() {
    let index = Math.floor(Math.random() * colors.length);

    return colors[index];
}
