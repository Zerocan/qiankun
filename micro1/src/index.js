import './public-path';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Router from './router';
import MicroEntry from './MicroEntry';

console.log('1111');

export async function bootstrap() {
  console.log('react app bootstraped');
}

/**
 * 应用每次进入都会调用 mount 方法，通常我们在这里触发应用的渲染方法
 */
export async function mount(props) {
  console.log("🚀 ~ file: index.js ~ line 15 ~ mount ~ props", props)
  ReactDOM.render(<MicroEntry {...props} />, props.container ? props.container.querySelector('#root-slave') : document.getElementById('root-slave'));
}

/**
 * 应用每次 切出/卸载 会调用的方法，通常在这里我们会卸载微应用的应用实例
 */
export async function unmount(props) {
  console.log('unmount props', props);
  ReactDOM.unmountComponentAtNode(
    props.container ? props.container.querySelector('#root-slave') : document.getElementById('root-slave'),
  );
}

/**
 * 可选生命周期钩子，仅使用 loadMicroApp 方式加载微应用时生效
 */
export async function update(props) {
  console.log('update props', props);
}

ReactDOM.render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>,
  document.getElementById('root-slave')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

