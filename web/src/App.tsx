import { useState } from 'react';

import { SketchPicker } from 'react-color';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from './components/ui/input';



function App() {
  const [text, setText] = useState('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec laoreet tellus a urna tempor, sit amet volutpat est volutpat. Praesent condimentum finibus massa, sit amet rhoncus lorem imperdiet id.')
  const [textColor, setTextColor] = useState('#fff')
  const [bgColor, setBgColor] = useState('#000')

  return (
    <div className='container mt-4  '>
      <div className='flex'>

        <div>
          <Card>
            <CardHeader>
              <CardTitle>Text Color</CardTitle>
              <CardDescription />
            </CardHeader>
            <CardContent>
              <SketchPicker
                color={textColor}
                onChangeComplete={(d) => setTextColor(d.hex)}
              />
            </CardContent>
            <CardFooter />
          </Card>
        </div>
        <div>
          <Card>
            <CardHeader>
              <CardTitle>Backgroud Color 1</CardTitle>
              <CardDescription />
            </CardHeader>
            <CardContent>
              <SketchPicker
                color={bgColor}
                onChangeComplete={(d) => setBgColor(d.hex)}
              />
            </CardContent>
            <CardFooter />
          </Card>
        </div>
      </div>
      <div>
        <Input value={text} onChange={(d) => setText(d.target.value)} />
      </div>
      <div>

        <Card>
          <CardHeader>
            <CardTitle>Result</CardTitle>
            <CardDescription />
          </CardHeader>
          <CardContent>

            <div style={{ backgroundColor: bgColor }}>
              <span style={{ color: textColor }}>{text}</span>
            </div>
          </CardContent>
          <CardFooter />
        </Card>
      </div>

    </div>
  )
}

export default App
