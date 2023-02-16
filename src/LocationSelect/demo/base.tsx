import React from 'react'
import { LocationSelect } from 'wzx-design'
import { Form } from 'antd';

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
      <LocationSelect form={form} />
    </Form>
  )
}

export default App