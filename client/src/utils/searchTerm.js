const searchTerm = (data, query) => {
    const filTerm = data.filter((item) => {
      if(item.alias.toLowerCase().includes(query.toLowerCase())){
        return item;
      }
      if(item.location.address1.toLowerCase().includes(query.toLowerCase())){
        return item;
      }
      if(item.location.city.toLowerCase().includes(query.toLowerCase())){
        return item;
      }
      if(item.name.toLowerCase().includes(query.toLowerCase())){
        return item;
      }
    })
    return filTerm;
}
export default searchTerm;