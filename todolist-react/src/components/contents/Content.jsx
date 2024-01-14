import React from 'react'
import ContentFooter from '../ContentFooter'
import List from './list/List'

function Content() {
  return (
    <>
      <section className="main">
        <List></List>
      </section>
      <ContentFooter></ContentFooter>
    </>
  )

}

export default Content