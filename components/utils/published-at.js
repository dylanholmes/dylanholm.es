import React from 'react'
import { parse, format } from 'date-fns'

function PublishedAt(props) {
  const { date } = props
  return (
    <>
      <p mcolor="#aaa" {...props}>
        <time className="dt-published">
          {format(parse(date), 'MMMM DD, YYYY')}
        </time>
      </p>
      <style jsx>{`
        p {
          color: #555;
          text-decoration: none;
        }
      `}</style>
    </>
  )
}

export default PublishedAt
