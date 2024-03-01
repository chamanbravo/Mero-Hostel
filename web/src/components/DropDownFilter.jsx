import React from 'react'

const DropDownFilter = ({filterMain,handleMainFilterChange,filterSecondary,handleSecondaryFilterChange}) => {
  return (
    <>
    <div className="flex gap-5">
            <select
              name="FilterMain"
              className="p-2 outline-none"
              id="FilterMain"
              value={filterMain}
              onChange={handleMainFilterChange}
            >
              <option value="Default">Default</option>
              <option value="" disabled></option>
              <option value="Name">Name</option>
              <option value="" disabled></option>

              <option value="Price">Price</option>
              <option value="" disabled></option>
            </select>
            <select
              name="FilterSecondary"
              id="FilterSecondary"
              className="p-2 outline-none"
              value={filterSecondary}
              onChange={handleSecondaryFilterChange}
            >
              {filterMain === "Price" ? (
                <>
                  <option value="Default">Default</option>
                  <option value="" disabled></option>

                  <option value="Low-To-High">Low-To-High</option>
                  <option value="" disabled></option>

                  <option value="High-To-Low">High-To-Low</option>
                  <option value="" disabled></option>
                </>
              ) : (
                <>
                  <option value="Default">Default</option>
                  <option value="" disabled></option>

                  <option value="Ascending">Ascending </option>
                  <option value="" disabled></option>

                  <option value="Descending">Descending</option>
                  <option value="" disabled></option>
                </>
              )}
            </select>
          </div>




    </>
  )
}

export default DropDownFilter