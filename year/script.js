for (year = 1900; year <= 2100; year++) {
  if (Number.isInteger(year / 4)) {
    if (!Number.isInteger(year / 100)) {
      console.log(`Високосный - ${year}`);
    } else {
      Number.isInteger(year / 400)
        ? console.log(`Високосный - ${year}`)
        : console.log(year);
    }
  } else {
    console.log(year);
  }
}
