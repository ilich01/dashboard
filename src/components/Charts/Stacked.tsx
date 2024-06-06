import React from 'react'
import {
  ChartComponent,
  SeriesDirective,
  Inject,
  Legend,
  Category,
  StackingColumnSeries,
  Tooltip,
  AxisModel,
  SeriesCollectionDirective,
} from '@syncfusion/ej2-react-charts'
import { barPrimaryXAxis, stackedCustomSeries, stackedPrimaryXAxis, stackedPrimaryYAxis } from 'data/dummy'
type StackedProps = {
  width: string
  height: string
  currentMode?: string
}

const Stacked: React.FC<StackedProps> = ({ width, height, currentMode }) => {
  return (
    <div>
      <ChartComponent
        width={width}
        height={height}
        id="charts"
        primaryYAxis={stackedPrimaryYAxis}
        primaryXAxis={stackedPrimaryXAxis as AxisModel}
        chartArea={{ border: { width: 0 } }}
        tooltip={{ enable: true }}
        background={currentMode === 'Dark' ? '#33373E' : '#fff'}
        legendSettings={{ background: 'white' }}
      >
        <Inject services={[Legend, Category, StackingColumnSeries, Tooltip]} />
        <SeriesCollectionDirective>
          {stackedCustomSeries.map((item, index) => (
            <SeriesDirective key={index} {...item} />
          ))}
        </SeriesCollectionDirective>
      </ChartComponent>
    </div>
  )
}

export default Stacked
