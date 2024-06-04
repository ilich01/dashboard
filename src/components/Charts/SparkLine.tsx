import React from 'react'
import { SparklineComponent, Inject, SparklineTooltip } from '@syncfusion/ej2-react-charts'

type SparkLineProps = {
  currentColor: string
  id: string
  color: string
  type: string
  height: string
  width: string
  data: object
}

const SparkLine: React.FC<SparkLineProps> = ({ currentColor, id, color, type, height, width, data }) => {
  return <SparklineComponent id={id} height={height} width={width} lineWidth={1} valueType="Numeric"></SparklineComponent>
}

export default SparkLine
