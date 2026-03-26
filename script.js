function updateCalendar() {
    const now = new Date();
    const day = now.getDate();
    const month = now.toLocaleString('default', { month: 'long' });

    document.getElementById('day').textContent = day;
    document.getElementById('month').textContent = month;
}

updateCalendar();