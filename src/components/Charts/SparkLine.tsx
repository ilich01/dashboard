import React from 'react'
import { SparklineComponent, Inject, SparklineTooltip, SparklineType } from '@syncfusion/ej2-react-charts'
import { DataManager } from '@syncfusion/ej2/data'

type SparkLineProps = {
  currentColor: string
  id: string
  color: string
  type: SparklineType
  height: string
  width: string
  data: Object[] | DataManager
}

const SparkLine: React.FC<SparkLineProps> = ({ currentColor, id, color, type, height, width, data }) => {
  return (
    <SparklineComponent
      id={id}
      height={height}
      width={width}
      lineWidth={1}
      valueType="Numeric"
      fill={color}
      border={{ color: currentColor, width: 2 }}
      dataSource={data}
      xName="x"
      yName="yval"
      type={type}
      // eslint-disable-next-line no-template-curly-in-string
      tooltipSettings={{ visible: true, format: '${x} : data ${yval}', trackLineSettings: { visible: true } }}
    >
      <Inject services={[SparklineTooltip]} />
    </SparklineComponent>
  )
}

export default SparkLine
