import React from 'react'
import { ChartsHeader, LineChart } from '../../components'
const Line = () => {
  return (
    <div className="m-4 md:m-10 mt-24 p-2 md:p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl dark:bg-gray-">
      <ChartsHeader title="Inflation rate" category="Chart" />
      <div className="w-full">
        <LineChart />
      </div>
    </div>
  )
}

export default Line
