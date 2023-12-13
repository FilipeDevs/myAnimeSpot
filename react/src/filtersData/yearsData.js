const yearsArray = () => {
    const currentYear = new Date().getFullYear() + 1;
    const years = [];

    for (let year = currentYear; year >= 1950; year--) {
      years.push(year);
    }

    return years;
  }


export default yearsArray;
