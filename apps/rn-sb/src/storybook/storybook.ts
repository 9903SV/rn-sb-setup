import { configure, getStorybookUI } from '@storybook/react-native';

import { loadStories } from '../../../../.storybook/story-loader.js';

configure(() => loadStories(), module);

const StorybookUIRoot = getStorybookUI({});

export default StorybookUIRoot;
