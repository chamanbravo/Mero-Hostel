import React from 'react'

const Filter = ({handlePrice,handleStars}) => {
  return (
    <section className=" w-full text-center sm:w-1/6 border-r-0 md:border-r ">
            <div className="md:mt-20">
              <h1 className="font-bold text-2xl">Rating</h1>
              <div className="mt-2">
                <div>
                  <input
                    type="radio"
                    name="star"
                    value={5}
                    onChange={handleStars}
                  />
                  <label className="rating-label">5 Stars</label>
                </div>
                <div>
                  <input
                    type="radio"
                    name="star"
                    onChange={handleStars}
                    value={4}
                  />
                  <label className="rating-label">4 Stars</label>
                </div>
                <div>
                  <input
                    type="radio"
                    name="star"
                    onChange={handleStars}
                    value={3}
                  />
                  <label className="rating-label">3 Stars</label>
                </div>
                <div>
                  <input
                    type="radio"
                    name="star"
                    onChange={handleStars}
                    value={2}
                  />
                  <label className="rating-label">2 Stars</label>
                </div>
                <div>
                  <input
                    type="radio"
                    name="star"
                    onChange={handleStars}
                    value={1}
                  />
                  <label className="rating-label">1 Stars</label>
                </div>
              </div>
            </div>
            <hr className="my-10 "/>

            <div >
              <h1 className="font-bold text-2xl">Price</h1>
              <div className="mt-2">
                <div>
                  <input
                    type="radio"
                    name="price"
                    value={1}
                    onChange={handlePrice}
                  />
                  <label className="rating-label">
                    
                  1000</label>
                </div>
                <div>
                  <input
                    type="radio"
                    name="price"
                    onChange={handlePrice}
                    value={2}
                  />
                  <label className="rating-label">2000</label>
                </div>
                <div>
                  <input
                    type="radio"
                    name="price"
                    onChange={handlePrice}
                    value={3}
                  />
                  <label className="rating-label">3000</label>
                </div>
                <div>
                  <input
                    type="radio"
                    name="price"
                    onChange={handlePrice}
                    value={4}
                  />
                  <label className="rating-label">4000</label>
                </div>
                <div>
                  <input
                    type="radio"
                    name="price"
                    onChange={handlePrice}
                    value={5}
                  />
                  <label className="rating-label">5000 + </label>
                </div>
              </div>
            </div>
          </section>
  )
}

export default Filter