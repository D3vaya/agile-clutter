import './ui-core.module.css';

/* eslint-disable-next-line */
export interface UiCoreProps {}

export function UiCore(props: UiCoreProps) {
  return (
    <div className="bg-red bg-red-500">
      <h1 className="font-bold">Welcome to UiCore!</h1>
    </div>
  );
}

export default UiCore;
