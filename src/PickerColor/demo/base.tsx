import React from 'react'
import { Button, Form } from 'antd'
import { ColorPickerValue, PickerColor } from 'wzx-design'

const App = () => {
  const initialValues = { color: { r: 26, g: 14, b: 85, a: 1 } }
  const handleOnFinish = (values: { color: ColorPickerValue }) => {
    console.log(values)
  }

  return (
    <Form 
      onFinish={handleOnFinish} 
      initialValues={initialValues}
    >
      <Form.Item label="Colorpicker" name="color">
        <PickerColor />
      </Form.Item>
      <Form.Item>
        <Button type='primary' htmlType='submit'>
          提交
        </Button>
      </Form.Item>
    </Form>
  )
}

export default App