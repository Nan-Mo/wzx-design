import React from 'react';
import { DateSelectFilter } from 'wzx-design';

const App = () => (
	<DateSelectFilter
		defaultDateType="DAY_7"
		picks={[
    'DAY_0',
    'DAY_1',
    'DAY_2',
		'DAY_7',
		'DAY_15',
		'DAY_30',
		'CURRENT_WEEK',
		'LAST_WEEK',
		'CURRENT_MONTH',
		'LAST_MONTH',
		'CUSTOM',
		]}
		onChange={(_d, [_startDate, _endDate]) => {}}
	/>
)

export default App;