const filteredBorough = (data, boro) => {
  const filBoro = data.filter((item) => {
    if ( item.location.city == boro){
      return item;
    } else {
      return data;
    }
  })
  return filBoro;
}
export default filteredBorough;