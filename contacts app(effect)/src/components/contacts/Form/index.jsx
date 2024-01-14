import { useState } from 'react'

function Form({ addContact, contacts }) {
  const [form, setForm] = useState({ name: "", number: "" })
  const onChangeInput = (e) => setForm({ ...form, [e.target.name]: e.target.value })
  return (
    <div id='formKutu'>
      <div>
        <i class="bi bi-person"></i>
        <input id='name' value={form.name} name='name' onChange={onChangeInput} placeholder='Full Name' />
        <i class="bi bi-telephone"></i>
        <input id='number' value={form.number} name='number' onChange={onChangeInput} placeholder='Number' />
      </div>
      <button id='add' onClick={() => {
        if (form.name !== "" || form.number !== "") {
          addContact([...contacts, form])
          setForm({ name: "", number: "" })
        }
      }}>add</button>
    </div>
  )
}
export default Form