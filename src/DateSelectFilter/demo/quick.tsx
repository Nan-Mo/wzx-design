import React from 'react';
import { DateSelectFilter } from 'wzx-design';

const App = () => (
	<DateSelectFilter
    type='quick'
		defaultDateType="DAY_7"
		picks={[
		'DAY_7',
		'DAY_15',
		'DAY_30',
		'CURRENT_WEEK',
    'WEEK',
    'MONTH',
    'CURRENT_MONTH',
    'LAST_MONTH',
		'CUSTOM',
    'DATE'
		]}
		onChange={(_d, [_startDate, _endDate]) => {}}
	/>
)

export default App;