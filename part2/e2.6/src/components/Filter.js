import React from 'react'

const Filter = ({searchFilter, handleSearchChange}) => (
    <>
        Search by name: <input value={searchFilter} onChange={handleSearchChange} />
    </>
)

export default Filter
