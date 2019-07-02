import React from 'react'

const Filter = ({searchFilter, handleSearchChange}) => (
    <div>
        Search by name: <input value={searchFilter} onChange={handleSearchChange} />
    </div>
)

export default Filter
