// eslint-disable
const chokidar = require('chokidar');
const fs = require('fs');

const templates = {
  index: (name) =>
    `import P from 'prop-types';
import * as Styled from './styles';

export const ${name} = ({ children }) => {
  return (
    <Styled.Container>
      <h1>{children}</h1>
    </Styled.Container>
  );
};

${name}.propTypes = {
  children: P.node.isRequired,
};
`,

  test: (name) =>
    `import { renderTheme } from '../../styles/render-theme';
import { screen } from '@testing-library/react';
import { theme } from '../../styles/theme';
import { ${name} } from '.';

describe('<${name} />', () => {
  it('should render', () => {
    renderTheme(<${name}>Children</${name}>);

    expect();
  });
});
`,
  styles: (name) =>
    "import styled, { css } from 'styled-components';" +
    '\nexport const Container = styled.div`' +
    '\n\t${({ theme }) => css``}' +
    '\n`;' +
    '',
  stories: (name) =>
    `import { ${name} } from '.';

export default {
  title: '${name}',
  component: ${name},
  args: {
    children: 'example',
  },
  argTypes: {
    children: { type: 'string' },
  },
};

export const Template = (args) => {
  return(
    < div >
      < ${name} { ...args } />
    </div >
  );
};

`,
};

const fileExists = (path) => (file) => fs.existsSync(`${path}/${file}`);

const writeToPath = (path) => (file, content) => {
  const filePath = `${path}/${file}`;

  fs.writeFile(filePath, content, (err) => {
    if (err) throw err;
    console.log('Created file: ', filePath);
    return true;
  });
};

function createFiles(path, name) {
  const files = {
    index: 'index.jsx',
    test: `${name}.test.jsx`,
    stories: `stories.jsx`,
    styles: `styles.js`,
  };

  if (name !== 'components') {
    console.log('name', name);
    const writeFile = writeToPath(path);
    const toFileMissingBool = (file) => !fileExists(path)(file);
    const checkAllMissing = (acc, cur) => acc && cur;
    const noneExist = Object.values(files)
      .map(toFileMissingBool)
      .reduce(checkAllMissing);

    if (noneExist) {
      console.log(`Detected new component: ${name}, ${path}`);
      Object.entries(files).forEach(([type, fileName]) => {
        writeFile(fileName, templates[type](name));
      });
    }
  }
}

const watcher = chokidar
  .watch('src/components/**', { ignored: /node_modules/ })
  .on('addDir', (path, event) => {
    const name = path.replace(/.*\/components\//, '');
    if (!name.includes('/')) createFiles(path, name);
  });
