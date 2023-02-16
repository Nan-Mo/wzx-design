import React from 'react'
import { TimeInterval } from 'wzx-design'
import { Form, Button } from 'antd';

const App: React.FC = () => {
  const [form] = Form.useForm();

  const onFinish = (value: any) => {
    console.log(value)
  }
  
  return (
    <Form onFinish={onFinish} form={form}>
      <TimeInterval disabled />
      <Form.Item>
        <Button type="primary" htmlType="submit">
          提交
        </Button>
      </Form.Item>
    </Form>
  )
}

export default App