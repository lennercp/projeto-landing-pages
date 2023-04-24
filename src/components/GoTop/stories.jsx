import { GoTop } from '.';

export default {
  title: 'GoTop',
  component: GoTop,
  args: {
    children: 'example',
  },
  argTypes: {
    children: { type: 'string' },
  },
};

export const Template = (args) => {
  return (
    <div style={{ height: '400vh' }}>
      <h1>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, quisquam
        est cum incidunt ut nulla reprehenderit. Itaque magni libero
        necessitatibus natus velit vero id, minus fugit aliquid ex placeat
        nostrum?
      </h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, quisquam
        est cum incidunt ut nulla reprehenderit. Itaque magni libero
        necessitatibus natus velit vero id, minus fugit aliquid ex placeat
        nostrum?
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, quisquam
        est cum incidunt ut nulla reprehenderit. Itaque magni libero
        necessitatibus natus velit vero id, minus fugit aliquid ex placeat
        nostrum?
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, quisquam
        est cum incidunt ut nulla reprehenderit. Itaque magni libero
        necessitatibus natus velit vero id, minus fugit aliquid ex placeat
        nostrum?
      </p>
      <GoTop {...args} />
    </div>
  );
};
