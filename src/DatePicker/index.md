---
nav:
  path: /components/h5
title: DatePicker 日期选择
group:
  title: H5
  order: 5
---

# DatePicker 日期选择

## 基本用法

```tsx
import React from 'react';
import { DatePicker } from 'wzx-design';

const App = () => (
  <DatePicker
    onChange={(value) => console.log(value)}
    onType={(value) => console.log(value)}
  />
);

export default App;
```

## 开启营业、自然日切换

```tsx
import React from 'react';
import { DatePicker } from 'wzx-design';

const App = () => (
  <DatePicker
    subTitle="支持营业、自然日切换"
    businessDaySwitch
    searchBusinessDay
    onChange={(value) => console.log(value)}
    onType={(value) => console.log(value)}
  />
);

export default App;
```

## 动态配置可选日期类型

```tsx
import React from 'react';
import { DatePicker } from 'wzx-design';

const App = () => (
  <DatePicker
    pickDateType={['date', 'week']}
    onChange={(value) => console.log(value)}
    onType={(value) => console.log(value)}
  />
);

export default App;
```

## API

| 参数              | 说明                                         | 类型                     | 默认值                 |
| ----------------- | -------------------------------------------- | ------------------------ | ---------------------- |
| style             | 自定义 style                                 | -                        | -                      |
| onChange          | 改变值后的回调                               | boolean                  | false                  |
| onType            | 改变日期类后的回调                           | (type: DateType) => void |                        |
| businessDaySwitch | 是否开启营业、自然日切换                     | boolean                  | -                      |
| searchBusinessDay | 如果开启开启营业、自然日切换，是否支持营业日 | boolean                  | true                   |
| rightIcon         | 右侧 Icon                                    | ReactNode                | `<CalendarOutlined />` |
| subTitle          | 日、周、月的副标题                           | -                        | -                      |
