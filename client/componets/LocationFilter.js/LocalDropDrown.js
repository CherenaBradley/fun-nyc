import React from 'react'

const LocalDropDown = ({handleLocalSelection}) => (
  <select className="boroughs" onChange={handleLocalSelection}>
    <option value="All">All</option>
    <option value="Manhattan">Manhattan</option>
    <option value="Queens">Queens</option>
    <option value="Brooklyn">Brooklyn</option>
    <option value="Bronx">Bronx</option>
    <option value="Stanten Island">Staten Island</option>
  </select>
)

export default LocalDropDown;