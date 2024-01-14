import { useState } from 'react'

function List({ contacts }) {
  const [filterText, setFilterText] = useState("")
  const filtered = contacts.filter((item) => {
    return Object.keys(item).some((key) =>
      item[key].toString().toLowerCase().trim().includes(filterText.toLowerCase().trim())
    )
  })
  return (
    <div id='listKutu'>
      <div>
        <i id='ikon' class="bi bi-search"></i>
        <input id='search' placeholder='Filter' value={filterText} onChange={(e) => setFilterText(e.target.value)} />
      </div>
      <ul>
        {filtered.map((e, index) =>
          <li key={index}>
            <div>{e.name}</div>
            <div>{e.number}</div>
          </li>)
        }
      </ul>
    </div>
  )
}

export default List