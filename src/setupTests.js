import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import {createSerializer} from 'enzyme-to-json';
import testUtils from 'react-dom/test-utils';
 
expect.addSnapshotSerializer(createSerializer({mode: 'deep'}));
Enzyme.configure({ adapter: new Adapter() });

const noScroll = () => {};

Object.defineProperty( window, 'scrollTo', {value: noScroll, writable: true})