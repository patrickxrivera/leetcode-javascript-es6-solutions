function findProfession(level, pos) {
  if (level == 1) {
    return 'Engineer';
  }

  var p = findProfession(level - 1, Math.floor((pos + 1) / 2));

  if (p == 'Engineer') {
    return pos % 2 == 1 ? 'Engineer' : 'Doctor';
  } else if (p == 'Doctor') {
    return pos % 2 == 1 ? 'Doctor' : 'Engineer';
  }
}
