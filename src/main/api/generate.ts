import { getComponentTemplate } from '../utils/component-templates';

export const generate = {
  component(name: string, withInterface: boolean) {
    console.log(getComponentTemplate(name, withInterface));
  },
};
