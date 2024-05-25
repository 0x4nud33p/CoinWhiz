import React from 'react'

const people = [
  {
    name: 'bitcoin',
    price: 'Front-end Developer',
    role: 'Developer',
    image:
      'https://images.unsplash.com/photo-1628157588553-5eeea00af15c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80',
  },
  {
    name: 'Etherium',
    price: 'Back-end Developer',
    role: 'CTO',
    image:
      'https://images.unsplash.com/photo-1639149888905-fb39731f2e6c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80',
  },
]

function Watchlist() {
  return (
    <>
      <div className='min-h-[69vh] bg-[#080c0e]'>
      <section className="mx-auto w-full max-w-7xl px-4 py-4 bg-[#080c0e]">
        <div className="flex flex-col space-y-4 md:flex-row md:items-center md:justify-between md:space-y-0">
          <div>
            <h2 className="text-lg font-semibold text-[#68007a]">Watchlist</h2>
            <p className="mt-1 text-sm text-[#68007a]">
              This is a list of all coins. You can add new coins delete existing
              ones.
            </p>
          </div>
          <div>
            <button
              type="button"
              className="rounded-md bg-[#68007a] leading-7 hover:bg-[#68007a]/80 active:border-[#68007a] px-3 py-2 text-sm font-semibold text-white shadow-sm"
            >
              Add new Coin
            </button>
          </div>
        </div>
        <div className="mt-6 flex flex-col ">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
              <div className="overflow-hidden border border-[#68007a] md:rounded-lg">
                <table className="min-w-full divide-y divide-[#68007a]">
                  <thead className="bg-[#080c0e]">
                    <tr>
                      <th
                        scope="col"
                        className="px-4 py-3.5 text-left text-sm font-normal text-[#68007a]"
                      >
                        <span>Coin</span>
                      </th>
                      <th
                        scope="col"
                        className="px-12 py-3.5 text-left text-sm font-normal text-[#68007a]"
                      >
                        Current Price
                      </th>

                      <th
                        scope="col"
                        className="px-4 py-3.5 text-left text-sm font-normal text-[#68007a]"
                      >
                        Chart
                      </th>

                      <th
                        scope="col"
                        className="px-4 py-3.5 text-left text-sm font-normal text-[#68007a]"
                      >
                        24hr Change
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#68007a] bg-[#080c0e]">
                    {people.map((person) => (
                      <tr key={person.name}>
                        <td className="whitespace-nowrap px-4 py-4">
                          <div className="flex items-center">
                            <div className="h-10 w-10 flex-shrink-0">
                              <img
                                className="h-10 w-10 rounded-full object-cover"
                                src={person.image}
                                alt=""
                              />
                            </div>
                            <div className="ml-4">
                              <div className="text-sm font-medium text-[#68007a]">{person.name}</div>
                              <div className="text-sm text-[#68007a]">{person.email}</div>
                            </div>
                          </div>
                        </td>
                        <td className="whitespace-nowrap px-12 py-4">
                          <div className="text-sm text-[#68007a]">{person.price}</div>
                        </td>
                        <td className="whitespace-nowrap px-4 py-4">
                          <span className="inline-flex rounded-full text-[#68007a] px-2 text-xs font-semibold leading-5">
                            chart data
                          </span>
                        </td>
                        <td className="whitespace-nowrap px-4 py-4 text-sm text-[#68007a]">
                          {person.role}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
      </div>
    </>
  )
}

export default Watchlist
