import React, { useState } from 'react'
import ReactMarkdown from 'react-markdown'

function App() {
	const [val, setVal] = useState('## markdown values')
	return (
		<main>
			<section className='markdown'>
				<textarea
					className='input'
					value={val}
					onChange={(e) => {
						setVal(e.target.value)
					}}
				></textarea>
				<article className='result'>
					<ReactMarkdown>{val}</ReactMarkdown>
				</article>
			</section>
		</main>
	)
}

export default App
