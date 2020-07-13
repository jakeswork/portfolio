import React, { FC } from 'react';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import jsx from 'react-syntax-highlighter/dist/esm/languages/prism/jsx';
import { darcula } from 'react-syntax-highlighter/dist/esm/styles/prism'
import Typist from 'react-typist';

SyntaxHighlighter.registerLanguage('jsx', jsx);

interface LiveCodeBlockProps {
  onLineTyped: (line: string, lineIndex?: number) => void;
}

const LiveCodeBlock: FC<LiveCodeBlockProps> = ({ onLineTyped = () => {} }) => {
  const codeBlockOne =
`import React, { FC } from 'react'

import { Fullscreen } from './common/components'`

  const codeBlockTwo =
`import Intro from './components/Intro'
import Projects from '../Projects'`

  const codeBlockThree =
`
const Home: FC = () => (
  <Fullscreen>`
  
  const codeBlockFive =
`  </Fullscreen>
)
  
export default Home`

  return (
    <>
      <SyntaxHighlighter
        customStyle={{
          borderTopRightRadius: 8,
          borderTopLeftRadius: 8,
          paddingBottom: 0,
          margin: 0,
          marginTop: 32,
          width: 500
        }}
        language="jsx"
        style={darcula}
      >
        {codeBlockOne}
      </SyntaxHighlighter>
      <Typist cursor={{ show: false }} avgTypingDelay={50} stdTypingDelay={0}>
        <SyntaxHighlighter
          language="jsx"
          style={darcula}
          customStyle={{
            margin: 0,
            width: 500,
            padding: '0 1em'
          }}
        >
          {codeBlockTwo}
        </SyntaxHighlighter>
      </Typist>
      <SyntaxHighlighter
          language="jsx"
          style={darcula}
          customStyle={{
            margin: 0,
            width: 500,
            padding: '0 1em'
          }}
        >
          {codeBlockThree}
      </SyntaxHighlighter>
      <Typist
        cursor={{ show: false }}
        avgTypingDelay={50}
        onLineTyped={onLineTyped}
      >
        <Typist.Delay ms={4000} />
        <SyntaxHighlighter
          language="jsx"
          style={darcula}
          customStyle={{
            margin: 0,
            width: 500,
            padding: '0 1em'
          }}
        >
          {`    <Intro />`}
        </SyntaxHighlighter>
        <SyntaxHighlighter
          language="jsx"
          style={darcula}
          customStyle={{
            margin: 0,
            width: 500,
            padding: '0 1em'
          }}
        >
          {`    <Projects />`}
        </SyntaxHighlighter>
      </Typist>
      <SyntaxHighlighter
        customStyle={{
          borderBottomRightRadius: 8,
          borderBottomLeftRadius: 8,
          paddingTop: 0,
          margin: 0,
          width: 500
        }}
        language="jsx"
        style={darcula}
      >
        {codeBlockFive}
      </SyntaxHighlighter>
      
    </>
  )
};

export default LiveCodeBlock;
