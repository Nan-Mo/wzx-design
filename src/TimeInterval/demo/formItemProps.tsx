import React from 'react'
import { TimeInterval } from 'wzx-design'
import { Form, Button } from 'antd';

const App: React.FC = () => {
  const [form] = Form.useForm();

  const onFinish = (value: any) => {
    console.log(`value is: ${value}`)
  }
  
  return (
    <Form onFinish={onFinish} form={form}>
      <TimeInterval
        formItemProps={{
          required: true,
          rules: [{ required: true, message: '请选择时段' }],
          name: 'times',
        }}
      />
      <Form.Item>
        <Button type="primary" htmlType="submit">
          提交
        </Button>
      </Form.Item>
    </Form>
  )
}

export default App