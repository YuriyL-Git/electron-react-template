import { getComponentTemplate } from '../utils/component-templates';

export const generate = {
  component() {
    console.log(getComponentTemplate('Template', true));
  },
};
