import React from 'react'
import { AvailableTime } from 'wzx-design'
import { Form, Button } from 'antd';

const App: React.FC = () => {
  const [form] = Form.useForm();

  const onFinish = (value: any) => {
    console.log(value)
  }
  
  return (
    <Form 
      onFinish={onFinish} 
      form={form}
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
    >
      <AvailableTime />
      <Form.Item 
        wrapperCol={{ offset: 8, span: 16 }}
      >
        <Button type="primary" htmlType="submit">
          提交
        </Button>
      </Form.Item>
    </Form>
  )
}

export default App