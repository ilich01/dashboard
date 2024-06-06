import Header from 'components/Header'
import { ColorPickerComponent } from '@syncfusion/ej2-react-inputs'
import React from 'react'

const ColorPicker = () => {
  const colorChange = (arg) => {
    document.getElementById('preview').style.backgroundColor = arg.currentValue.hex
  }
  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header title="Color picker" category="App" />
      <div className="text-center">
        <div id="preview" />
        <div className="flex justify-center items-center gap-20 flex-wrap">
          <div>
            <p className="text-2xl fonte-semibold mt-2 mb-4">Inline pallete</p>
            <ColorPickerComponent
              id="inline-palette"
              mode="Palette"
              modeSwitcher={false}
              inline
              showButtons={false}
              change={colorChange}
            />
          </div>
          <div>
            <p className="text-2xl fonte-semibold mt-2 mb-4">Inline Picker</p>
            <ColorPickerComponent
              id="inline-palette"
              mode="Picker"
              modeSwitcher={false}
              inline
              showButtons={false}
              change={colorChange}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ColorPicker
